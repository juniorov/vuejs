<template>
  <div id="app">
    <b-navbar toggleable="sm" type="dark" variant="danger">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
            <b-nav-item :to="{name: 'about'}">About</b-nav-item>
            <b-nav-item :to="{name: 'grid'}">Grid</b-nav-item>
            <b-nav-item :to="{name: 'cards'}">Cards</b-nav-item>
            <b-nav-item :to="{name: 'forms'}">Forms</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </b-container>


    </b-navbar>

    <b-container>

      <router-view/>
    </b-container>

  </div>
</template>