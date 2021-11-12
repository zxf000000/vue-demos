<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  mounted() {


    const man = [];
    const head = ['  ', ' O', '  '];
    const body = [' ⋋', ' |', '⋌ '];
    const foot = [' ∕', '  ', '∖ '];
    man.push(head);
    man.push(body);
    man.push(foot);

    console.log(man);

    const manPosition = [5, 5];

    let text = '';
    for (let i = 0; i < 30; i += 1 ) {
      text += '\n'
      for (let j = 0; j < 30; j += 1) {
        const position = [manPosition[1] * 3 , manPosition[0] * 3];
        if (i === position[0] - 1) {
          if (j === position[1] - 1) {
            text += man[0][0];
          } else if (j === position[1]) {
            text += man[0][1];
          } else if (j === position[1] + 1) {
            text += man[0][2];
          } else {
            text += '* ';
          }
        } else if (i === position[0]) {
          if (j === position[1] - 1) {
            text += man[1][0];
          } else if (j === position[1]) {
            text += man[1][1];
          } else if (j === position[1] + 1) {
            text += man[1][2];
          } else {
            text += '* ';
          }
        } else if (i === position[0] + 1) {
          if (j === position[1] - 1) {
            text += man[2][0];
          } else if (j === position[1]) {
            text += man[2][1];
          } else if (j === position[1] + 1) {
            text += man[2][2];
          } else {
            text += '* ';
          }
        } else {
          text += '* '
        }
      }
    }
    console.log(text);



  }
};
</script>
