<template>

     <div class="container">
      <div class="jumbotron">
        <h3>Consideraciones</h3>
           <p class="text-justify mx-5 my-5">
      <strong>
        Eres libre de:
        </strong> 
     <ul>
 <li>Compartir : copie y redistribuya el material en cualquier medio o formato</li>
<li>
       Adaptar : mezclar, transformar y construir sobre el material
      para cualquier propósito, incluso comercialmente.
     </li>
     </ul>
        <strong>
        Importante saber:
        </strong> 
         <ul>
El licenciante no puede revocar estas libertades mientras siga los términos de la licencia.
     </ul>
    </p>
      </div>
  <Footer />  <!--importa componente-->

    </div>

</template>
<script>

import Footer from "@/components/Footer.vue"; /*no borrar*/
export default {
  name: "Fuente" /*se debe llamar igual*/,
  components: {
    Footer
  }
};
</script>
<style lang="scss">
.jumbotron {
margin-bottom: 0px;
color: black;
text-shadow: black 0.3em 0.3em 0.3em;
background: white;
}
</style>