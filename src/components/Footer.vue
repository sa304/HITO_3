<template>
  <div>
    <footer class="jumbotron page-footer stylish-color-dark pt-5 bg-success">
      <div class="container text-center text-md-left">
        <div class="row">
          <div class="col-4 mx-auto text-center">
            <h5 class="mt-1">Sobre el Proyecto</h5>
            <p
              class="text-justify"
            >El uso de la API de TVmaze está licenciado por CC BY-SA . Esto significa que los datos se pueden usar libremente para cualquier propósito, siempre que TVmaze se acredite correctamente como fuente y su aplicación cumpla con la disposición de ShareAlike. Puede satisfacer el requisito de atribución al volver a vincular a TVmaze desde su aplicación o sitio web, por ejemplo, utilizando las URL disponibles en la API.</p>
          </div>
          <div class="col-4 mx-auto text-center">
            <h5 class="mt-1">Agradecimientos</h5>

            <pre>
Text in a pre element
is displayed in a fixed-width
font, and it preserves
both      spaces and
line breaks.
</pre>

            <label for="rating-inline">Califica las Series:</label>
            <b-form-rating id="rating-inline" inline value="1"></b-form-rating>
          </div>
        </div>
      </div>
      <hr />
      <h1 class="subtitulo">LABERINTO TV</h1>


<div class="box">
<img src="../assets/facebook.png" alt="facebook">
<img src="../assets/instagram.png" alt="instagram">
<img src="../assets/youtube.png" alt="youtube">
</div>



      <div class="footer-copyright text-center py-3">
        2020 | hecho con dedicación |
        <a href="#">Proximamente</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
.subtitulo {
  font-family: "Creepster", cursive;
  color: rgb(15, 132, 179);
  text-align: center;
 
}

.body {
  background-image: url("../assets/fondo.webp");
}

.jumbotron {
margin-bottom: 0px;

color: white;
text-shadow: black 0.3em 0.3em 0.3em;
background: black;
}

.box {
  display: inline-flex;
  flex-wrap: no-wrap;
  align-content: center;
  align-items: center;
  height: 10%;
  width: 10%;
}

</style>