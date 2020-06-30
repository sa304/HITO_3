<template>
  <div class="home" id="home">
    <div class="container">
      <Navbar />
      <!--llama al componente-->
      <b-alert class="pt-3 mx-auto" show>Estás en: Peliculas Recomendadas</b-alert>

      <div class="row mx-auto">
        <!--ordenado para firestore-->
        <Show
          class="fondo"
          v-for="(show, index) in shows"
          :key="index"
          :id="show.id"
          :img="show.image"
          :name="show.name"
          :description="show.summary"
          :like="show.like"
          @makeLike="makeLike"
        />
      </div>
    </div>

    <Footer />
    <!--llama al componente-->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Show from "@/components/Show.vue";
import Footer from "@/components/Footer.vue"; /*no borrar*/
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home" /*se debe llamar igual*/,
  computed: {
    ...mapState(["shows"])
  },
  methods: {
    ...mapActions(["setShows", "makeLike", "setFavs"])
  },
  created() {
    if (this.shows.length === 0) {
      axios.get("http://api.tvmaze.com/shows").then(data => {
        data.data.length = 20;
        let shows = [];
        data.data.forEach(s => {
          shows.push({
            id: s.id,
            name: s.name,
            image: s.image.medium,
            summary: s.summary,
            like: false
          });
        });

        axios
          .get(
            "https://us-central1-pacientes-4d4bb.cloudfunctions.net/posters/posters/" // path: posters/posters
          )
          .then(data => {
            let favs = data.data;
            this.setFavs(favs);
            shows.forEach((s, i) => {
              let fav = favs.find(f => f.data.id == s.id);
              fav ? (shows[i] = fav.data) : false;
            });

            console.log("Shows => ", shows);

            this.setShows(shows);
          });
      });
    }
  },
  components: {
    Show,
    Navbar,
    Footer
  }
};
</script>

<style lang="scss" scope>
#home {
  background-image: url('../assets/fondo.webp');
  text-align: justify;
}
#nav {
  padding: 30px;
  #a {
    font-weight: bold;
    color: #fff;
    #router-link {
      color: #000;
    }
  }
}

.fondo {
  background: red;
}
</style>