<template>
  <v-main>
    <v-container fluid>
      <logo />
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12" shaped>
            <v-card-title class="login-title">
              <h1>Entrar</h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  outlined
                  v-bind="login"
                  name="rga"
                  label="RGA"
                ></v-text-field>
                <v-text-field
                  outlined
                  v-model="password"
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
                <v-btn large class="primary" to="home">
                  Entrar
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
import Logo from "../components/Logo.vue";
export default {
  components: { Logo },
  data: () => ({
    show1: false,
    login: "",
    password: "",
    rules: {
      required: value => !!value || "Não pode ser vazio.",
      min: v => v.length >= 8 || "Minimo de 8 Caracteres"
    }
  })
};
</script>

<style>
.login-title {
  padding: 20px;
  display: flex;
  justify-content: center;
}
.login-title > h1 {
  color: #0088b7;
}
</style>
