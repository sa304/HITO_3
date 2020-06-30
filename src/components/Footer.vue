<template>
  <div>

    <!--div class="list-group">
      <a href="#" class="list-group-item">First item</a>
      <a href="#" class="list-group-item">Second item</a>
      <a href="#" class="list-group-item">Third item</a>
    </div-->

    <!--div class="container">
      <div class="jumbotron">
        <h1>Bootstrap Tutorial</h1>
        <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
      </div>
      <p>This is some text.</p>
      <p>This is another text.</p>
    </div-->

    <footer class="pie page-footer stylish-color-dark pt-5 bg-success">
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
            <p
              class="text-justify"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam repudiandae et modi perferendis. Ipsa, quaerat voluptates. Dignissimos nostrum earum fuga eaque ea nulla atque aut, possimus nesciunt? Velit, ullam iste.</p>

            <label for="rating-inline">Califica las Series:</label>
            <b-form-rating id="rating-inline" inline value="1"></b-form-rating>
          </div>
        </div>
      </div>
      <hr />
        <h1 class="letras">LABERINTO TV</h1>
      <div class="footer-copyright text-center py-3">
        2020 | Laberinto TV |
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

.letras{
  font-family: 'Creepster', cursive;
  color: rgba(113, 240, 9, 0.932);
  text-align: center;
}

.body{
  background-image: url('../assets/fondo.webp');
}


</style>