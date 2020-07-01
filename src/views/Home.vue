<template>
  <div class="home" id="home">
    <div>
    <Navbar /><!--llama al componente-->
   
    </div>

  <h5 class="mt-3 auto ml-2">Recomendadas</h5>

    <div class="container">

    <div class="row mx-auto">
      <!--ordenado para firestore-->
      <Show
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

 <Footer /><!--llama al componente-->

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Show from "@/components/Show.vue";
import Footer from "@/components/Footer.vue"; /*no borrar*/
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
 name: "Home", /*se debe llamar igual*/
  computed: {
    ...mapState(["shows"])
  },
  methods: {
    ...mapActions(["setShows", "makeLike","setFavs"])
  },
  created() {
    if (this.shows.length === 0) {
      axios.get("http://api.tvmaze.com/shows")
      .then(data => {
        data.data.length = 12;
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
            shows.forEach( (s,i) => {
               let fav = favs.find( f => f.data.id == s.id)
               fav? shows[i] = fav.data : false
            })

            console.log('Shows => ', shows);

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
  background: #d18a07;
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
</style>