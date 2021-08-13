<template>
  <div class="home">
    <b-button @click="tapConnect">Connect</b-button>
  </div>
</template>

<script>
// import Web3 from "web3";
// import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      address: ''
    }
  },
  methods: {
    tapItem() {
      this.$router.push('/drawerPage');
    },
    async tapConnect() {
      const provider = new WalletConnectProvider({
        rpc: {
          137: "https://rpc-mumbai.matic.today",
        },
      });
      const account = await provider.enable();
      console.log(account);
      // Subscribe to accounts change
      provider.on("accountsChanged", (accounts) => {
        console.log(accounts);
      });

// Subscribe to chainId change
      provider.on("chainChanged", (chainId) => {
        console.log(chainId);
        console.log('chainchange');
      });

// Subscribe to session disconnection
      provider.on("disconnect", (code, reason) => {
        console.log('disconnect');
        console.log(code, reason);
      });

      // const providerOptions = {
      //   walletconnect: {
      //     package: WalletConnectProvider,
      //     options: {
      //       rpc: {
      //         80001: 'https://rpc-mumbai.maticvigil.com/'
      //       },
      //     },
      //   }
      // };

      // const web3Modal = new Web3Modal({
      //   providerOptions // required
      // });
      // // console.log(web3Modal.cachedProvider, 'cachedProvider');
      // // web3Modal.clearCachedProvider();
      // const provider = await web3Modal.toggleModal();
      // console.log(provider);
      // const web3 = new Web3(provider);
      // console.log(web3);
      // const accounts = await web3.eth.getAccounts();
      // console.log(accounts);
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  padding: 100px;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 100;
  overflow: auto;
  &.noovaerflow {
    overflow: hidden;
  }
  .demo-list {
    width: 100%;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 30px;
    div {
      cursor: pointer;
    }
  }
  .router-view1 {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    z-index: 1000;
    opacity: 1;
    background-color: yellow;
    top: 0;
    background-color: rgba(0,0,0,0.5);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}

.fade-enter, .fade-leave-to {
  background-color: rgba(0,0,0,0) !important;
}

.fade-enter-to, .fade-leave {
  background-color: rgba(0,0,0,0.5) !important;
}


</style>
