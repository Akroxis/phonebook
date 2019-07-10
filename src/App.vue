<template>
  <div id="app">
    <HomePage :title="pageTitle"></HomePage>
  </div>
</template>

<script>
import HomePage from "./views/HomePage.vue";

export default {
  name: "app",
  data() {
    return {
      pageTitle: "Phonebook"
    };
  },
  components: {
    HomePage
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: Roboto-Regular;
  src: url("./fonts/Roboto-Regular.ttf");
}

@font-face {
  font-family: Roboto-Medium;
  src: url("./fonts/Roboto-Medium.ttf");
}

@font-face {
  font-family: Roboto-Bold;
  src: url("./fonts/Roboto-Bold.ttf");
}
#app {
  font-family: "Roboto-Regular", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
