<template>
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
    <v-list rounded nav dense>
      <v-list-group :value="false" rounded>
        <template v-slot:activator>
          <v-list-item-title>
            Procedimentos
          </v-list-item-title>
        </template>
        <v-list-item-group v-model="group">
          <v-list-item v-for="documento in documentos" :key="documento">
            <v-list-item-title>{{ documento }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list-group>
      <v-list-item to="/">
        <v-list-item-title>Configurações</v-list-item-title>
      </v-list-item>
      <v-list-item to="/">
        <v-list-item-title>Sair</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { documentos } from "../constants/documentos";
export default {
  props: ["drawer"],
  data: () => ({
    group: null,
    documentos
  })
};
</script>

<style></style>
