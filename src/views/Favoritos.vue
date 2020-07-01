<template>
  <div class="fav container">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">img</th>
          <th scope="col">description</th>
          <th scope="col">like</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th v-for="show in Shows" :key="show.id">
          <td>{{ show.data.name }}</td>
         <td>{{ show.data.img }}</td>
         <td>{{ show.data.description }}</td>
         <td>{{ show.data.like }}</td>         
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>{{ show.data.name }}</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>

    <Footer />
    <!--llama al componente-->
  </div>
</template>

<script>
import Firebase from 'firebase'
import Header from "@/components/Header.vue";
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
    Header,
    Footer
  }
};
</script>
