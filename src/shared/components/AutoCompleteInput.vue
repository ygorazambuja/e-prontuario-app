<template>
  <v-responsive max-width="300">
    <v-autocomplete
      v-model="select"
      :items="documentos"
      item-text="titulo"
      item-value="symbol"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      hide-no-data
      hide-details
      rounded
      dense
      flat
      label="Procedimentos"
      solo-inverted
    ></v-autocomplete>
  </v-responsive>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    search: "",
    select: null
  }),
  methods: {
    ...mapActions("documento", ["ActionSetDocumento"])
  },
  computed: {
    ...mapState("documento", ["documentos"])
  },
  watch: {
    select(val) {
      const [documento] = this.documentos.filter(
        documento => documento.titulo === val
      );
      this.ActionSetDocumento(documento);
      this.search = "";
      if (this.$route.path !== "/home/documento") {
        this.$router.push("/home/documento");
      }
    }
  }
};
</script>

<style></style>
