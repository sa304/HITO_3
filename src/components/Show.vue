<template>
  <div class="col-12 col-sm-4 col-md-3 p-3"><!--agregar mas pantallas-->

    <div class="card bg-dark" style="width: 100%;">
      <h5 class="card-title text-center pt-3">{{name}}</h5>
      <img :src="img" class="card-img-top px-4" alt="..." />
      <div class="card-body">
        
        <p class="card-text bg-light px-3 py-3" :id="id"></p>

        <b-button class="btn btn-sm btn-outline-danger">
          <svg @click="makeLike" style="width:30px;height:30px" viewBox="0 0 24 24">
          <path
            :fill="like? 'black' : 'white'" stroke="black"
            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
          />
        </svg>
          </b-button>
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
  color: red;
}

.card-text {
  height: 200px;
  overflow-y: scroll;
  text-align: justify;
}
</style>
