<template>
  <v-container>
    <h1>Pacientes</h1>
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
    <v-data-table
      no-data-text="Nada para mostrar"
      :headers="headers"
      :options.sync="options"
      :items="pacientesResponse.content"
      class="elevation-1"
      :items-per-page="options.itemsPerPage"
      :server-items-length="pacientesResponse.totalElements"
      :page.sync="page"
    ></v-data-table>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    page: 0,
    alert: false,
    loading: false,
    pacientesResponse: {},
    options: {},
    error: "",
    headers: [
      {
        text: "Nome",
        value: "nome"
      },
      { text: "CPF", value: "cpf" },
      {
        text: "Genero",
        value: "genero"
      }
    ]
  }),
  computed: {
    ...mapState("paciente", ["paciente"])
  },
  methods: {
    loadData(page, size) {
      this.loading = true;
      this.$http
        .get(
          `http://localhost:8080/eprontuario-api/paciente?page=${page}&size=${size}`
        )
        .then(({ data }) => {
          this.pacientesResponse = data;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          this.error = err;
        });
    }
  },
  watch: {
    page(val) {
      this.loadData(val - 1, this.pacientesPerPage);
    },
    size(val) {
      this.loadData(this.page, val);
    }
  },
  mounted() {
    this.loadData(0, 10);
  }
};
</script>

<style></style>
