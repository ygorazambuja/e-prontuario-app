<template>
  <div v-if="!isLogin">
    <v-app-bar app clipped-right flat height="72" color="primary" dark>
      <v-btn icon @click="toogleDrawer" app>
        <v-icon>
          mdi-menu
        </v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <auto-complete-input></auto-complete-input>
      <switch-theme />
    </v-app-bar>

    <v-navigation-drawer app width="300" v-model="drawer">
      <v-card height="128" width="100%">
        <v-card-title>{{ usuario && usuario.nome }} </v-card-title>
        <v-card-subtitle>RGA: {{ usuario && usuario.nome }}</v-card-subtitle>
      </v-card>

      <v-list shaped>
        <v-list-item-group v-model="selectedItem">
          <v-list-item>
            <v-list-item-title>
              Home
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              Documento
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Paciente</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Configurações </v-list-item-title>
          </v-list-item>
          <v-list-item @click="doLogout">
            <v-list-item-title> Sair </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import SwitchTheme from "./SwitchTheme.vue";
import AutoCompleteInput from "./AutoCompleteInput";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    SwitchTheme,
    AutoCompleteInput
  },
  data: () => ({
    drawer: true,
    isLogin: true,
    selectedItem: 0
  }),
  computed: {
    ...mapState("login", ["usuario"])
  },
  methods: {
    ...mapActions("login", ["ActionDeleteGlobalUser"]),
    ...mapActions("documento", ["ActionSetDocumento"]),
    doLogout() {
      this.ActionDeleteGlobalUser();
      this.ActionSetDocumento({});
      this.$router.push("/");
    },
    toogleDrawer() {
      this.drawer = !this.drawer;
    },
    toogleLogin() {
      if (this.$router.currentRoute.fullPath === "/") {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    }
  },
  watch: {
    $route() {
      this.toogleLogin();
    },
    selectedItem(val) {
      switch (val) {
        case 0:
          this.$router.push("/home");
          break;
        case 1:
          this.$router.push("/home/documento");
          break;
        case 2:
          this.$router.push("/paciente");
          break;
        case 3:
          this.$router.push("/configuracoes");
          break;
        case 4:
          this.doLogout();
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    this.toogleLogin();
  }
};
</script>

<style></style>
