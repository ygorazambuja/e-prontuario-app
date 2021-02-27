<template>
  <v-container>
    <h1>Novo Paciente</h1>
    <v-form lazy-validation v-model="valid" ref="form" @submit.prevent="salvar">
      <v-text-field label="Nome" v-model="nome" required :rules="rules.nome" />
      <v-text-field label="CPF" v-model="cpf" required :rules="rules.cpf" />
      <v-select
        :items="sexoConstantes"
        label="Sexo"
        v-model="genero"
        required
        :rules="rules.genero"
      />

      <v-btn class="mt-5" elevation="2" block color="success" @click="salvar">
        Salvar
      </v-btn>
    </v-form>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    sexoConstantes: ["MASCULINO", "FEMININO"],
    nome: "",
    cpf: "",
    genero: null,
    valid: true,
    loading: false,
    rules: {
      nome: [val => (val || "").length > 0 || "Nome não pode ser vazio"],
      cpf: [val => (val || "").length > 0 || "CPF não pode ser vazio"],
      genero: [v => !!v || "Genero Precisa ser Especificado"]
    }
  }),
  methods: {
    salvar() {
      this.valid = this.$refs.form.validate();
      if (this.valid) {
        this.$refs.form.validate();
        const paciente = {
          genero: this.genero,
          nome: this.nome,
          cpf: this.cpf
        };
        this.ActionAddPaciente(paciente);
        this.$refs.form.reset();
      }
    },
    ...mapActions("paciente", ["ActionAddPaciente"])
  }
};
</script>

<style></style>
