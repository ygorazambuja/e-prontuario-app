<template>
  <v-container>
    <h1 class="display-1 mt-5 mb-5">Novo Documento</h1>

    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1" editable>
        Nome para Novo Documento
        <small>Obrigatório</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card style="background-color: transparent" class="pa-2">
          <v-text-field
            label="Titulo"
            placeholder="digite aqui"
            v-model="documento.titulo"
            outlined
            @keypress.enter="e6 = 2"
          ></v-text-field>
        </v-card>
        <v-btn color="primary" @click="e6 = 2">
          Proximo
        </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2" editable>
        Adicione novos campos para o documento
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card>
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
                    <v-switch
                      v-model="isRequired"
                      label="É Obrigatório * "
                      dense
                    >
                    </v-switch>
                  </v-col>
                </v-container>
                <small>* indica que o item é obrigatório</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="onSave">
                  Adicionar
                </v-btn>
                <v-snackbar v-model="snackbar" :timeout="timeout">
                  Item {{ snackbarText }} adicionado
                  <template v-slot:action="{ attrs }">
                    <v-btn
                      color="pink"
                      text
                      v-bind="attrs"
                      @click="snackbar = false"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </template>
                </v-snackbar>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-card>
        <v-btn color="primary" @click="e6 = 3">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3" editable>
        Confirmar se os dados correspondem
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card>
          <v-card-title>
            {{ documento.titulo }}
          </v-card-title>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Nome
                  </th>
                  <th class="text-left">
                    Tipo
                  </th>
                  <th class="text-left">
                    Obrigatório ?
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="field in fields" :key="field.id">
                  <td>{{ field.placeholder }}</td>
                  <td>{{ field.type }}</td>
                  <td>
                    {{ field.isRequired ? "Sim" : "Não" }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
        <v-btn color="primary" @click="e6 = 4">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-step step="4">
        Visualizar JSON
      </v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
          {{ documento }}
        </v-card>
        <v-btn color="primary" @click="e6 = 1">
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    e6: 1,
    tituloDocumento: "",
    documento: {},
    timeout: 2000,
    snackbar: false,
    snackbarText: "",
    nomeDocumento: "",
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
      this.snackbar = true;
      this.snackbarText = this.placeholder;
      this.valid = this.$refs.form.validate();
      if (this.valid) {
        this.fields.push({
          id: Math.random() * 10,
          placeholder: this.placeholder,
          type: this.radioModel,
          isRequired: this.isRequired
        });
        this.documento.fields = this.fields;
        this.placeholder = "";
        this.isRequired = false;
        this.dialog = false;
      }
    }
  }
};
</script>

<style></style>
