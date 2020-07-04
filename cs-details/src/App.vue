<template>
  <span>{{object}}</span>
</template>

<script>
export default {
  name: "App",
  props: {
    object: {
      type: String
    }
  },
  created (){
    const channel = new BroadcastChannel("comsystrom");
    this.object = "Showing no details currently"
    channel.onmessage = (msg) => {

      if (msg.data.type === "CS_SEARCH_CLICK_ITEM") {
         this.object =  "Showing details of " + msg.data.payload
      }
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
