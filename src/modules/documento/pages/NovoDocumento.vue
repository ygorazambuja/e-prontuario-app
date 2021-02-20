<template>
  <v-container>
    <v-row class=" d-flex justify-center align-center pa-4">
      <v-col>
        <v-btn icon to="documento">
          <v-icon>
            mdi-arrow-left
          </v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h1>Novo Modelo</h1>
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="documentos"
      hide-default-footer
      v-if="documentos.length != 0"
    >
    </v-data-table>
    <v-card class="pa-6">
      <v-text-field
        label="Nome do Campo"
        outlined
        shaped
        v-model="documento.nomeCampo"
      ></v-text-field>
      <v-row>
        <v-col class="pa-2">
          <v-col class="justify-center">
            <span>Tipo do Campo</span>
            <v-radio-group v-model="documento.tipoCampo">
              <v-radio label="Texto" value="text"></v-radio>
              <v-radio label="Data" value="data"></v-radio>
              <v-radio label="Númerico" value="number"></v-radio>
              <v-radio
                label="Data e Hora"
                value="date-time"
              ></v-radio> </v-radio-group
          ></v-col>
        </v-col>
        <v-divider vertical class="ma-2"></v-divider>
        <v-col class="pa-2">
          <v-row class="align-center justify-start">
            <span> Obrigatório</span>
            <v-switch v-model="documento.isObrigatorio"></v-switch>
          </v-row>
          <v-row>
            Quantidade maxima
          </v-row>
          <v-row
            ><v-slider
              v-model="documento.quantidadeMaxima"
              max="20"
              step="1"
              :thumb-size="24"
              thumb-label
              append-icon="mdi-plus"
              prepend-icon="mdi-minus"
            ></v-slider
          ></v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-btn block color="success" @click="onSave">
          <v-icon>mdi-content-save</v-icon>
          Adicionar campo
        </v-btn></v-row
      >
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    documento: {},
    documentos: [],
    headers: [
      {
        text: "Nome do campo",
        value: "nomeCampo"
      },
      {
        text: "Tipo",
        value: "tipoCampo"
      },
      {
        text: "Obrigatório",
        value: "isObrigatorio"
      },
      {
        text: "Quantidade Maxima",
        value: "quantidadeMaxima"
      },
      {
        text: "actions"
      }
    ]
  }),
  methods: {
    onSave() {
      this.documentos.push(this.documento);
      this.documento = {};
    }
  }
};
</script>

<style></style>
