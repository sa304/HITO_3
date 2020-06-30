<template>
  <div class="col-12 col-sm-4 col-md-3 p-3"><!--agregar mas pantallas-->

    <div class="card" style="width: 100%;">
      <h5 class="card-title text-center pt-3">{{name}}</h5>
      <img :src="img" class="card-img-top px-4" alt="..." />
      <div class="card-body">
        
        <p class="card-text px-3 py-3" :id="id"></p>
     
     <div class="text-center">

        <b-button @click="makeLike" class="btn-sm btn-outline-success">like</b-button>
     </div>

         
                
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Show",
  props: ["id", "name", "img", "description", "like"],
  methods: {
    makeLike(){
      this.$emit('makeLike', this.id)
    }
  },
  mounted() {
    document.getElementById(this.id).innerHTML = this.description;
  }
};
</script>

<style lang="scss" scoped>
.card-title {
  color: rgb(247, 10, 10);
}

.card-text {
  height: 200px;
  overflow-y: scroll;
  text-align: justify;
}
</style>
