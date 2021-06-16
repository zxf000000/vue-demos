<template>
  <div class="home">
    <div>
      <p>
        address: {{address}}
      </p>
    </div>
    <b-button @click="tapConnect">connect</b-button>
  </div>
</template>

<script>
// import Web3 from "web3";
import Web3Modal from "web3modal";
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
    async tapConnect() {
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
              80001: 'https://rpc-mumbai.maticvigil.com/'
            },
          },
        }
      };

      const web3Modal = new Web3Modal({
        providerOptions // required
      });
      // console.log(web3Modal.cachedProvider, 'cachedProvider');
      // web3Modal.clearCachedProvider();
      const provider = await web3Modal.toggleModal();
      console.log(provider);
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
}
</style>
