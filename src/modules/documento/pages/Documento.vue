<template>
  <v-container>
    <v-row class="d-flex justify-center pl-6 pr-6 pt-6" fluid dense>
      <v-col
        ><v-text-field
          dense
          label="Pesquise"
          outlined
          append-icon="mdi-magnify"
        >
        </v-text-field>
      </v-col>
      <v-col cols="3">
        <v-select outlined dense label="Select"> </v-select>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-end pl-6 pr-6  ma-0" fluid dense>
      <v-btn color="success" to="novoDocumento">
        <v-icon>
          mdi-plus
        </v-icon>
        Adicionar novo
      </v-btn>
    </v-row>
    <v-row class="d-flex  pl-6 pr-6 pt-6" fuid dense>
      <v-col class="justify-center">
        <h2>Documentos Cadastrados</h2>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
          no-results-text="Vazio"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    desserts: [{}],
    headers: [
      {
        text: "Nome"
      }
    ]
  })
};
</script>

<style></style>
