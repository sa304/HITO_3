<template>
  <div class="container pt-5 pb-5">
    <div class="mb-2">
    <b-avatar class="avatar" src="https://placekitten.com/150/150"></b-avatar>
    </div>
        <h1 class="text-center text-white pt-5">Sing in</h1>
        <b-input class="mt-5 text-center " type="text" v-model="email" placeholder="usuario@gmail.com o user@mail.cl"></b-input>
    <b-input class="mt-3 text-center" type="text" v-model="password" placeholder="123456"></b-input>
<b-button @click="login" block variant="primary" class="mt-3">Sign in</b-button>
<b-button @click="quienSoy" block variant="primary" class="mt-3 mb-5">quienSoy</b-button>
<br>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  name:'Login',
  data() {
    return {
      email:'',
      password:''

    }
  },
  methods: {
    login(){
      Firebase.auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(
        accept =>{
          alert('fuiste logeado, revisa la consola');
          this.quienSoy;
          this.$router.push({name:'Home'});
        },
        reject=>{
          alert('no estas registrado')
          console.log(reject.message);
        }
      )
    }, 

    quienSoy(){
      let currentUser = Firebase.auth().currentUser
      console.log(currentUser) 
    }
  }

}
</script>

<style lang="scss" scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url('../assets/fondo.webp');
}
​ #nav {
  padding: 30px;
}
​ #nav a {
  font-weight: bold;
  color: #fff;
}
​ #nav a.router-link-exact-active {
  color: #fff;
}


</style>





