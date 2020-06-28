<template>
  <div class="fav">
      <Navbar /><!--llama al componente-->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Poster</th>
          <th scope="col">Name</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(show,i) in favs" :key="i">
          <th scope="row">{{i + 1}}</th>
          <td>
            <img :src="show.data.image" width="100" alt />
          </td>
          <td>{{show.data.name}}</td>
          <td>
            <button class="btn btn-danger">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>

 <Footer /><!--llama al componente-->

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue"; /*no borrar*/
import { mapGetters, mapActions, mapState } from "vuex";
import axios from "axios";
export default {
  name: "Favoritos",
  computed: {
    ...mapState(["favs"])
  },
  methods: {
    ...mapActions(["setFavs"])
  },
  created() {
    axios
      .get(
        "https://us-central1-apirest-808ed.cloudfunctions.net/posters/posters"
      )
      .then(data => {
        this.setFavs(data.data);
      });
  },
   components: {
    Navbar,
    Footer
  }
};
</script>
