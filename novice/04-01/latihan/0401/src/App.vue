<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

  body {
       font-family:Arial, Helvetica, sans-serif;
  }
  html, body {
    height: calc(100% - 50px);
  }

  #app {
    background: #fff;
    width: 90%;
    padding: 0px;
    border-radius: 10px;
    margin: 50px auto 0 auto;
    height: calc(60% - 50px);
  }

  .page {
    position: fixed;
    width: inherit;
  }

</style>
