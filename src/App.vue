<template>
  <div id="app">
    <b-navbar toggleable type="dark" variant="info">
      <b-navbar-brand> Eleições </b-navbar-brand>
        <b-collapse is-nav="" id="nav-itens">
          <b-navbar-nav>
            <b-nav-item href="#/"> Cadastro de Partidos </b-nav-item>
            <b-nav-item href="#/affiliate"> Cadastro de Filiados </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar> 
    <router-view/>
  </div>
</template>

