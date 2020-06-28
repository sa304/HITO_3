<template>
  <div>
    <div class="container mx-auto">
      <b-navbar type="light" variant="primary">
        <b-nav-form>
          <b-form-input class="text-center form-control-sm w-75" placeholder="Nombre, Categoria"></b-form-input>
          <b-button variant="success" class="btn btn-sm w-25" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>