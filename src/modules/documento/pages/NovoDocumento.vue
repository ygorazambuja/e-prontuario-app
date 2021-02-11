<template>
  <v-container>
    <v-row justify="center" class="pt-3">
      <h1>Novo Documento</h1>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            fab
            color="primary"
            small
            class="mx-2"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <v-form
          ref="form"
          lazy-validation
          v-model="valid"
          @submit.prevent="onSave"
        >
          <v-card>
            <v-card-title>
              <span class="display-1">Novo Campo</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-col>
                  <v-text-field
                    label="Nome do Campo*"
                    type="text"
                    outlined
                    v-model="placeholder"
                    required
                    :rules="rules.placeholder"
                  />
                  <small>Tipo do Item Documento*</small>
                  <v-radio-group v-model="radioModel">
                    <v-radio label="Texto" value="text"></v-radio>
                    <v-radio label="Data" value="data"></v-radio>
                    <v-radio label="Númerico" value="number"></v-radio>
                    <v-radio label="Data e Hora" value="date-time"></v-radio>
                  </v-radio-group>
                  <v-switch v-model="isRequired" label="É Obrigatório * " dense>
                  </v-switch>
                </v-col>
              </v-container>
              <small>* indica que o item é obrigatório</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Fechar
              </v-btn>
              <v-btn color="blue darken-1" text @click="onSave">
                Adicionar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </v-row>
    <div v-for="field in fields" :key="field.id">
      <item-documento :field="field"></item-documento>
    </div>
  </v-container>
</template>

<script>
import ItemDocumento from "./components/ItemDocumento.vue";
export default {
  components: { ItemDocumento },
  data: () => ({
    dialog: false,
    radioModel: 1,
    placeholder: "",
    isRequired: false,
    fields: [],
    valid: false,
    rules: [
      {
        placeholder: [
          val => (val || "").length > 0 || "Nome não pode ser vazio"
        ]
      }
    ]
  }),
  methods: {
    onSave() {
      this.valid = this.$refs.form.validate();
      console.log(this.valid);
      if (this.valid) {
        this.fields.push({
          id: Math.random() * 10,
          placeholder: this.placeholder,
          type: this.radioModel,
          isRequired: this.isRequired
        });
        this.placeholder = "";
        this.isReqired = false;
        this.dialog = false;
      }
    }
  }
};
</script>

<style></style>
