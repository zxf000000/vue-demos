<template>
  <v-app>
<!--    <v-app-bar-->
<!--      app-->
<!--      color="primary"-->
<!--      dark-->
<!--    >-->
<!--      <div class="d-flex align-center">-->
<!--        <v-img-->
<!--          alt="Vuetify Logo"-->
<!--          class="shrink mr-2"-->
<!--          contain-->
<!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
<!--          transition="scale-transition"-->
<!--          width="40"-->
<!--        />-->
<!--        <v-img-->
<!--          alt="Vuetify Name"-->
<!--          class="shrink mt-1 hidden-sm-and-down"-->
<!--          contain-->
<!--          min-width="100"-->
<!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
<!--          width="100"-->
<!--        />-->
<!--      </div>-->

<!--      <v-spacer></v-spacer>-->

<!--      <v-btn-->
<!--        href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
<!--        target="_blank"-->
<!--        text-->
<!--      >-->
<!--        <span class="mr-2">Latest Release</span>-->
<!--        <v-icon>mdi-open-in-new</v-icon>-->
<!--      </v-btn>-->
<!--    </v-app-bar>-->
    <v-card>
      <v-navigation-drawer app>
        <v-list
            nav
            dense
        >
          <v-list-group
              :value="false"
          >
            <template v-slot:activator>
              <v-list-item-title>GSAP</v-list-item-title>
            </template>
            <v-list-item to="/gsap/scroll-trigger">
              <v-list-item-content>SCROLL TRIGGER (PARALLAX)</v-list-item-content>
            </v-list-item>
            <v-list-item to="/gsap/flip">
              <v-list-item-content>FLIP</v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item link to="/drawer-view">
            <v-list-item-title>DRAWER PAGE</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/scrollspy">
            <v-list-item-title>SCROLL SPY</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/gl_demo">
            <v-list-item-title>GL DEMO</v-list-item-title>
          </v-list-item>
          <v-list-item to="/router-transition">
            <v-list-item-title>ROUTER TRANSITION</v-list-item-title>
          </v-list-item>
          <v-list-item to="/scroll">
            <v-list-item-title>SCROLL</v-list-item-title>
          </v-list-item>
          <v-list-item to="/svgs">
            <v-list-item-title>SVGS</v-list-item-title>
          </v-list-item>
          <v-list-item to="/components">
            <v-list-item-title>COMPONENTS</v-list-item-title>
          </v-list-item>
          <v-list-item to="/test-page">
            <v-list-item-title>TEST PAGE</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-title>ABOUT</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
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
  }
};
</script>
