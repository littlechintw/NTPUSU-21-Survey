<template>
  <v-app>
    <div class="inapp">
      <v-app-bar app dark>
        <h2>NTPUSU Survey</h2>
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-main>
        <div id="router">
          <router-view />
        </div>
      </v-main>
    </div>

    <v-footer padless class="font-weight-medium">
      <v-col class="text-center" cols="12" style="font-size: 14px">
        &copy; 2021 Copyright NTPU SU 21th. All rights reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.inapp {
  width: 80%;
  margin-left: 10%;
}
</style>