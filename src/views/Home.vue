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
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              Aluno Aleatorio
            </v-list-item-title>
            <v-list-item-subtitle>alunoaleatorio@ufms.br</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list>
        <v-list-item-group v-model="group">
          <v-list-item v-for="documento in documentos" :key="documento">
            <v-list-item-title>{{ documento }}</v-list-item-title>
          </v-list-item>
          <v-list-item to="/" class="primary">
            Sair
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <h1>Home</h1>
  </v-main>
</template>

<script>
import { documentos } from "../constants/documentos";
export default {
  data: () => ({
    drawer: false,
    group: null,
    documentos
  }),
  methods: {},
  mounted() {
    console.log(documentos);
  }
};
</script>

<style></style>
