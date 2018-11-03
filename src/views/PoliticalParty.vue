<template>
  <div class="political-party container">
    <h1 class="text-center mb-5 mt-5"> Cadastro Partido Politico</h1>
    <b-form>
        <b-form-group id="name-group-input"
          class="container ml-5 mb-4"
          label="Nome do Partido: "
          label-for="name-input">
        <b-form-input id="name-input" 
            class="w-50 p-3" 
            v-model="politicalParty.name"
            placeholder="Digite o nome do Partido">
        </b-form-input>
      </b-form-group>
      <b-form-group id="abbreviation-group-input"
          class="container ml-5 mb-4"
          label="Sigla :"
          label-for="abbreviation-input">
            <b-form-input id="abbreviation-input"
              class="w-25"
              v-model="politicalParty.abbreviation"
              placeholder="Digite a sigla">
            </b-form-input>
        </b-form-group>
        <b-form-group id="legend-group-input"
          class="container ml-5 mb-4"
          label="Número da Legenda :"
          label-for="legend-input">
            <b-form-input id="abbreviation-input"
              class="w-25"
              v-model="politicalParty.legend"
              placeholder="Digite o número da legenda">
            </b-form-input>
        </b-form-group>
        <b-form-group id="description-group-input"
          class="container ml-5 mb-4"
          label="Descrição"
          label-for="description-input">
          <b-form-textarea id="description-textarea"
            class="w-50 p-3"
            placeholder="Digite a descrição do partido"
            v-model="politicalParty.description"
            :rows="3"
            :max-rows="10">
          </b-form-textarea>
        </b-form-group>
        <div class="container">
          <b-button type="submit" class="ml-5 mr-2" variant="primary" @click="addPoliticalParty"> Cadastrar </b-button>
          <b-button type="reset" variang="danger"> Cancelar </b-button>
        </div>
    </b-form>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'political-party',
  data() {
    return {
      politicalParty : {
        name: '',
        abbreviation: '',
        legend: '',
        description: ''
      }
    };
  },
  methods : {
      addPoliticalParty(){
         axios.post(`http://localhost:8080/api/politicalParty`, 
          JSON.stringify(this.politicalParty)
        )
        .then(response =>{
            this.politicalParty.name = '';
            this.politicalParty.abbreviation = '';
            this.politicalParty.legend = '';
            this.politicalParty.description = '';
        })
        .catch(e => {
          console.log(e);
          alert("Erro ao chamar api de cadastro");
        })
      }
  }
}
</script>
