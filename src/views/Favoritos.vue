<template>
  <div class="fav container">

  <Navbar /><!--llama al componente-->
<b-alert class="pt-3 mx-auto" show>Estás en: Favoritos</b-alert>


   <div class="container">
      <h2>Table</h2>
      <p>The .table-responsive class creates a responsive table which will scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, there is no difference:</p>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anna</td>
              <td>Pitt</td>
              <td>35</td>
              <td>New York</td>
              <td>USA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

 

    
    <b-table class="table">
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
    </b-table>



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
        "https://us-central1-pacientes-4d4bb.cloudfunctions.net/posters/poster/"
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
