<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

html, body {
  height: 100vh;
  overflow-y: scroll;
  background-color: #ffc !important;
  display: flex;
  justify-content: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffc;
  display: flex;
  justify-content: center;
  height: 100vh;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
