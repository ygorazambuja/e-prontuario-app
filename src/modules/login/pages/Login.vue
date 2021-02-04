<template>
  <v-main>
    <v-container fluid>
      <switch-theme></switch-theme>
      <logo />
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
          <v-alert
            :value="alert"
            color="pink"
            dark
            border="top"
            icon="mdi-home"
            transition="scale-transition"
          >
            {{ error }}
          </v-alert>
          <v-card class="login-title elevation-12 pa-5 flex-column" shaped>
            <v-card-title class="pa-5 mx-auto">
              <h1 class="pt-5 pb-5">E-Prontuario</h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  outlined
                  v-model="passaporte"
                  name="passaporte"
                  label="Passaporte UFMS"
                ></v-text-field>
                <v-text-field
                  outlined
                  v-model="senha"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Senha"
                  hint="Minimo de 8 Caracteres"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-layout align-center justify-center>
                <v-btn large class="primary" @click="doLogin">
                  Entrar
                  <v-progress-circular
                    class="ml-5"
                    indeterminate
                    v-if="loading"
                  ></v-progress-circular>
                </v-btn>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
import Logo from "@/components/Logo.vue";
import { mapActions } from "vuex";
import SwitchTheme from "../../../components/SwitchTheme.vue";
export default {
  components: { Logo, SwitchTheme },
  data: () => ({
    show1: false,
    passaporte: "",
    senha: "",
    alert: false,
    error: "",
    loading: false,
    rules: {
      required: value => !!value || "Não pode ser vazio.",
      min: v => v.length >= 8 || "Minimo de 8 Caracteres"
    }
  }),

  methods: {
    ...mapActions("login", ["ActionSetGlobalUser"]),
    async doLogin() {
      this.loading = true;
      const payload = {
        passaporte: this.passaporte,
        senha: this.senha
      };
      this.ActionSetGlobalUser(payload)
        .then(() => {
          this.loading = false;
          this.$router.push("/home");
        })
        .catch(err => {
          this.alert = true;
          this.error = err;
          this.loading = false;
          setTimeout(() => {
            this.alert = false;
            this.error = "";
          }, 10000);
        });
    }
  }
};
</script>

<style>
.login-title {
  display: flex;
  justify-content: center;
  align-content: center;
}
.login-title h1 {
  color: #0088b7;
}
</style>
