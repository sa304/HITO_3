<template>
  <div class="home" id="home">
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

    <Footer />
    <!--llama al componente-->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
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
        data.data.length = 16;
        let shows = [];
        data.data.forEach(s => {
          shows.push({
            id: s.id,
            name: s.name,
            image: s.image.medium,
            summary: s.summary,
            like: false
          });
        this.setShows(shows)
        });

      });
    }
  },
  components: {
    Show,
    Header,
    Footer
  }
};
</script>

<style lang="scss" scope>
#home {
  background-image: url('../assets/fondo.webp');
  text-align: justify;
  background-repeat: no-repeat;
}



</style>