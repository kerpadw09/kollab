<template>
  <header id="header">
    <div class="container-fluid">
      <nav class="navbar navbar-light">
        <div class="row">
          <div class="col-2 col-md-4">
            <button
              class="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample01"
              aria-controls="navbarsExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="col-10 col-md-4 text-center">
            <img src="~img/logo.png" id="logo" alt="Logo" />
          </div>
          <div class="col-md-4 d-flex flex-wrap justify-content-end align-items-center">
            <div class="dropdown show">
              <a
                class="text-dark text-decoration-none"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i
                  class="fa fa-user text-white border rounded-circle bg-whisper p-2 mr-2"
                  aria-hidden="true"
                ></i>
                <span class="font-weight-bold">Katrina</span>
                <i class="fa fa-chevron-down text-muted ml-2" aria-hidden="true"></i>
                <span class="divider"></span>
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Settings</a>
                <a class="dropdown-item" href="#">Log Out</a>
              </div>
            </div>
            <button type="button" class="btn btn-link text-decoration-none px-0 ml-2">
              <i class="far fa-bell fa-1-5 text-muted" aria-hidden="true"></i>
              <span class="badge badge-warning text-white">3</span>
            </button>
            <span class="divider"></span>
            <img src="~img/question-dialog.jpeg" id="question-dialog" alt="Icon" />
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import "scss/globals/header/base.scss";
</style>
