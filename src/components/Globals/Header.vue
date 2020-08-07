<template>
  <header id="header">
    <div class="container-fluid">
      <nav class="navbar navbar-light px-0">
        <div class="row px-lg-3">
          <div class="col-4">
            <button
              class="navbar-toggler"
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
          <div class="col-4 text-center">
            <img src="~img/logo.png" id="logo" alt="Logo" />
          </div>
          <div class="col-lg-4 d-flex flex-wrap justify-content-around justify-content-lg-end align-items-center my-4 mt-lg-0">
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
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Profile</a>
                <a class="dropdown-item" href="#">Log Out</a>
              </div>
            </div>
            <span class="divider"></span>
            <button type="button" class="btn btn-link text-decoration-none px-0 ml-2">
              <i class="far fa-bell fa-1-5 text-muted" aria-hidden="true"></i>
              <span class="badge badge-ecstasy text-white">3</span>
            </button>
            <span class="divider"></span>
            <img src="~img/question-dialog.jpeg" id="question-dialog" alt="Icon" />
          </div>
        </div>
        <div class="collapse navbar-collapse mt-3" id="navbarsExample01">
          <ul class="navbar-nav text-center">
            <li class="nav-item lead">
              <a class="nav-link" href="#">Dashboard</a>
            </li>
            <li class="nav-item lead active">
              <a class="nav-link" href="#">Analytics</a>
            </li>
            <li class="nav-item lead">
              <a class="nav-link" href="#">Settings</a>
            </li>
          </ul>
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
