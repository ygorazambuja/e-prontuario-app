<template>
  <v-container>
    <v-row align="center" class="pt-8 pb-8">
      <v-btn icon class="mr-10" @click="goBack">
        <v-icon>
          mdi-arrow-left
        </v-icon>
      </v-btn>
      <h1>Preencher documento</h1></v-row
    >
    <v-card>
      <v-card-title>
        {{ titulo }}
      </v-card-title>
      <v-form v-model="valid" class="pa-4">
        <v-jsf v-model="model" :schema="schema"></v-jsf>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import getDocumentoFromApi from "../services/getDocumentoFromApi";
import { constroiFormSchema } from "../utils/constroiFormSchema";
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
export default {
  components: { VJsf },
  data: () => ({
    titulo: "",
    model: {},
    schema: {},
    itemsDocumento: [],
    valid: false
  }),
  methods: {
    async loadData() {
      this.itemsDocumento = await getDocumentoFromApi(this.titulo);
      this.schema = constroiFormSchema(this.itemsDocumento);
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.titulo = this.$router.history.current.params.titulo;
    this.loadData();
  },
  watch: {
    $route() {
      this.titulo = this.$route.params.titulo;
      this.loadData();
    }
  }
};
</script>

<style></style>
