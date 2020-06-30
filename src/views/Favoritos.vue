<template>
  <div class="fav container">




      
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
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


 <Footer /><!--llama al componente-->

  </div>
</template>

<script>
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
