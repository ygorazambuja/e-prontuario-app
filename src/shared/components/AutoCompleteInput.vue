<template>
  <v-responsive max-width="300">
    <v-autocomplete
      v-model="select"
      :items="titulos"
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
    ...mapState("documento", ["titulos"])
  },
  watch: {
    select(val) {
      this.search = "";
      if (this.$route.path !== `/home/documento/${val}`) {
        this.$router.push(`/home/documento/${val}`);
      }
    }
  }
};
</script>

<style></style>
