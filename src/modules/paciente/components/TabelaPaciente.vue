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
      :items="pacientesResponse.content"
      class="elevation-1"
      :page.sync="page"
      :items-per-page.sync="pacientesPerPage"
    ></v-data-table>

    <v-pagination
      v-model="page"
      :length="pacientesResponse.totalPages"
    ></v-pagination>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    page: 0,
    pacientesPerPage: 10,
    alert: false,
    loading: false,
    pacientesResponse: {},
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
