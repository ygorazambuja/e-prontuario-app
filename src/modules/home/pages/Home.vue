<template>
  <v-app>
    <v-app-bar app clipped-right flat height="72" color="primary" dark>
      <v-btn icon @click="toogleDrawer" app>
        <v-icon>
          mdi-menu
        </v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-responsive max-width="300">
        <v-autocomplete
          v-model="select"
          :items="documentos"
          item-text="titulo"
          item-value="symbol"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          hide-no-data
          hide-details
          rounded
          dense
          flat
          label="Procedimentos"
          solo-inverted
        ></v-autocomplete>
      </v-responsive>
      <switch-theme />
    </v-app-bar>

    <v-navigation-drawer app width="300" v-model="drawer">
      <v-card height="128" width="100%">
        <v-card-title>{{ usuario.nome }} </v-card-title>
        <v-card-subtitle>RGA: {{ usuario.rga }}</v-card-subtitle>
      </v-card>

      <v-list shaped>
        <v-list-item link>
          <v-list-item-title> Configurações </v-list-item-title>
        </v-list-item>
        <v-list-item @click="doLogout">
          <v-list-item-title> Sair </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <documento :titulo="select" />
    </v-main>
    <v-footer app>
      <h5>© Copyright E-Prontuario</h5>
    </v-footer>
  </v-app>
</template>

<script>
import { documentos } from "@/constants/documentos.js";
import { mapActions, mapState } from "vuex";
import Documento from "../../documento/pages/Documento.vue";
import SwitchTheme from "../../../components/SwitchTheme.vue";

export default {
  components: { Documento, SwitchTheme },
  data: () => ({
    documentos,
    drawer: true,
    select: {},
    search: ""
  }),
  methods: {
    ...mapActions("login", ["ActionDeleteGlobalUser"]),
    doLogout() {
      this.ActionDeleteGlobalUser();
      this.$router.push("/");
    },
    toogleDrawer() {
      this.drawer = !this.drawer;
    }
  },
  computed: {
    ...mapState("login", ["usuario"])
  },
  watch: {
    select(val) {
      console.log(typeof this.select);
      console.log(val);
    }
  }
};
</script>

<style></style>
