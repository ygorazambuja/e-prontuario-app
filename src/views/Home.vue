<template>
  <v-main>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Pagina inicial</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-icon>
        mdi-plus
      </v-icon>
    </v-app-bar>
    <navigation-bar :drawer="drawer" />
    <h1>Home</h1>
  </v-main>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
export default {
  components: { NavigationBar },
  data: () => ({
    drawer: false,
  }),
};
</script>

<style></style>
