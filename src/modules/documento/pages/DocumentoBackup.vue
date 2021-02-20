<template>
  <v-container>
    <v-container v-if="documentoSelecionado.titulo">
      <div class="d-flex pr-5 pl-5 justify-space-between">
        <v-btn icon @click="goBack">
          <v-icon>
            mdi-arrow-left
          </v-icon>
        </v-btn>
        <h2>
          {{ documentoSelecionado.titulo }}
          <v-spacer> </v-spacer>
        </h2>
      </div>
      <v-form v-model="valid" class="pa-4">
        <v-jsf v-model="model" :schema="schema"></v-jsf>
        <v-btn class="pa-5 mt-10">
          salvar
        </v-btn>
      </v-form>
    </v-container>
  </v-container>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import contencaoLeito from "../../../constants/documentos/contencaoLeito";
import { mapActions, mapState } from "vuex";

export default {
  components: { VJsf },
  data: () => ({
    model: {},
    valid: false,
    schema: {
      ...contencaoLeito
    },
    teste: {}
  }),
  methods: {
    ...mapActions("documento", ["ActionSetDocumento"]),
    goBack() {
      this.ActionSetDocumento({});
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapState("documento", ["documentoSelecionado"])
  }
};
</script>

<style></style>
