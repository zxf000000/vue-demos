<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test-page">Test</router-link> |
      <router-link to="/components">Components</router-link>
    </div>
    <router-view class="router-view"/>
  </div>
</template>

<script>

// import Web3 from 'web3';

export default {
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

html, body {
  height: 100%;
  width: 100%;
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

.router-view {
  height: 100%;
  margin-top: 100px;
}

#nav {
  padding: 30px;
  position: fixed;
  top: 0;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
