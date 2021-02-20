<template>
  <v-container>
    <novo-paciente></novo-paciente>
    <tabela-paciente></tabela-paciente>
  </v-container>
</template>

<script>
import NovoPaciente from "../components/NovoPaciente.vue";
import TabelaPaciente from "../components/TabelaPaciente.vue";
export default {
  components: { NovoPaciente, TabelaPaciente }
};
</script>

<style></style>
