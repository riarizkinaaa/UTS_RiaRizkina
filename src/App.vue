<template>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark gradient-custom">
  <!-- Container wrapper -->
  <div class="container">

    <!-- Toggle button -->
    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <i class="fas fa-bars text-light"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Left links -->
      <ul class="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
            <router-link to="/"  class="nav-link active" >Home</router-link>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
            <router-link to="/jadwal/pertandingan" class="nav-link active" >for excample</router-link>
        </li>
        
        <li class="nav-item text-center mx-2 mx-lg-1">
            <router-link to="/pertandingan" class="nav-link active" >Pertandingan</router-link>
        </li>
        
      </ul>
      <!-- Left links -->

      <!-- Search form -->
      
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn {
  padding: .45rem 1.5rem .35rem;
}

.gradient-custom {
  /* fallback for old browsers */
  background: #c471f5;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(196, 113, 245, 1), rgba(250, 113, 205, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgb(50, 112, 109), rgb(21, 138, 206))
}
a {
  color: #dfd9d9;
  text-decoration: none;
  position: relative;
}
</style>
