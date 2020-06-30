<template>
  <div id="app">
    <div id="nav">

      <h1 class="letras">LABERINTO TV</h1>

       <router-link class="btn-sm btn-success" to="/">Login</router-link> |
  <router-link class="btn-sm btn-success" to="/home">Home</router-link> |
   <router-link class="btn-sm btn-success" to="/favoritos">Favoritos</router-link> | 
      <router-link class="btn-sm btn-success" to="/fuente">Fuente</router-link>
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
#nav {
  padding: 30px;
  background: #280cc7;
  #a {
    font-weight: bold;
    color: #fff;   
    #router-link {
      color: #fff;
    }
  }
}

.letras{
  font-family: 'Creepster', cursive;
  color: rgba(113, 240, 9, 0.932)
}
</style>