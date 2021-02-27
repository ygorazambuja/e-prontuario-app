<template>
  <v-container>
    <v-row class=" d-flex justify-center align-center pa-4">
      <v-col>
        <v-btn icon to="itemDocumento">
          <v-icon>
            mdi-arrow-left
          </v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h1>Novo Modelo</h1>
      </v-col> </v-row
    ><v-text-field
      label="Nome do Modelo"
      outlined
      shaped
      required
      :rules="rules.nome"
      v-model="controleItemDocumento.nomeDoModelo"
    ></v-text-field>
    <v-col>
      <v-data-table
        :headers="headers"
        :items="documentos"
        hide-default-footer
        v-if="documentos.length != 0"
        dense
      >
      </v-data-table>
      <v-btn @click="teste">
        Salvar
        <v-icon color="primary">mdi-zip-disk</v-icon>
      </v-btn>
    </v-col>

    <v-form lazy-validation v-model="valid" ref="form" @submit.prevent="salvar">
      <v-card class="pa-6">
        <v-text-field
          label="Nome do Campo"
          outlined
          shaped
          required
          :rules="rules.nome"
          v-model="itemDocumento.nomeCampo"
        ></v-text-field>
        <v-row>
          <v-col class="pa-2">
            <v-col class="justify-center">
              <span>Tipo do Campo</span>
              <v-radio-group
                v-model="itemDocumento.tipoCampo"
                required
                :rules="rules.tipoCampo"
              >
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
              <v-switch v-model="itemDocumento.isObrigatorio"></v-switch>
            </v-row>
            <v-row>
              Quantidade maxima: {{ itemDocumento.quantidadeMaxima }}
            </v-row>
            <v-row
              ><v-slider
                v-model="itemDocumento.quantidadeMaxima"
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
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    itemDocumento: {},
    controleItemDocumento: {
      nomeDoModelo: "",
      itemDocumentos: []
    },
    documentos: [],
    valid: false,
    rules: {
      nome: [val => (val || "").length > 0 || "Nome não pode ser vazio"],
      tipoCampo: [val => !!val || "Precisa escolher ao menos um tipo"]
    },
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
      }
    ]
  }),
  methods: {
    onSave() {
      if (this.$refs.form.validate()) {
        this.documentos.push(this.itemDocumento);
        this.$refs.form.reset();
      }
    },
    teste() {
      this.controleItemDocumento.itemDocumentos = this.documentos.slice();
    }
  }
};
</script>

<style></style>
