<template>
  <v-main>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-autocomplete
        v-model="select"
        :items="documentos"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        hide-no-data
        hide-details
        label="Procedimentos"
        solo-inverted
      ></v-autocomplete>
    </v-app-bar>
    <navigation-bar :drawer="drawer" />
    <v-container>
      <h1>{{ select }}</h1>
    </v-container>
  </v-main>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import { documentos } from "@/constants/documentos.js";
export default {
  components: { NavigationBar },
  data: () => ({
    drawer: false,
    select: "",
    seach: "",
    documentos
  })
};
</script>

<style></style>
