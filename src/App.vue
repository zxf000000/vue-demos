<template>
  <div id="app">
      <b-nav pills v-model="currentIndex">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/test-page">Test</b-nav-item>
        <b-nav-item to="/components">Components</b-nav-item>
        <b-nav-item to="/gl_demo">GLDemo</b-nav-item>
        <b-nav-item to="/scrollspy">ScrollSpy</b-nav-item>
        <b-nav-item to="/svgs">svg</b-nav-item>
        <b-nav-item to="/scroll">scroll</b-nav-item>
        <b-nav-item to="/router-transition">RouterTransition</b-nav-item>
      </b-nav>
    <router-view class="router-view"/>
  </div>
</template>

<script>

// import Web3 from 'web3';

export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  mounted() {
    // let web3 = new Web3(Web3.givenProvider);
    // let arr = [];
    // // eslint-disable-next-line no-unused-vars
    // for (let i = 0; i < 2000; i++) {
    //   const account = web3.eth.accounts.create();
    //   arr.push(account);
    // }
    // console.log(JSON.stringify(arr));
  }
}
</script>

<style lang="scss">

html {
  height: 100vh;
  width: 100vw;
}

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: 100%;
}
#nav {
  padding: 30px;
  position: fixed;
  top: 0;
  width: 100%;
  background: cornflowerblue;
  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
