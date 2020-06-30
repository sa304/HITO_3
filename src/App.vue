<template>
  <div id="app">
    <div id="nav" class="my-auto pb-2">

      <h1 class="letras">LABERINTO TV</h1>

       <router-link class="btn-sm btn-outline-success mr-5" to="/">Login</router-link> 
  <router-link class="btn-sm btn-outline-success mr-5" to="/home">Home</router-link> 
   <router-link class="btn-sm btn-outline-success mr-5" to="/favoritos">Favoritos</router-link> 
      <router-link class="btn-sm btn-outline-success" to="/fuente">Fuente</router-link>
    </div>
    <router-view/>
        <!--lo mas importante-->
  </div>
</template>

<style lang="scss">
#app {
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.letras{
  font-family: 'Creepster', cursive;
  color: rgba(113, 240, 9, 0.932)
}
</style>

<!--listo-->