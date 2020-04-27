<template>
  <div>Loading...</div>
</template>

<script>
import axios from 'axios'
const lhost = require("@/config/global").host;


export default {
  name: 'ListaFilmes',

  data: () => ({
    footer_props: {
      "items-per-page-text": "Mostrar",
      "items-per-page-options": [10, 20, 50, 100, -1],
      "items-per-page-all-text": "Todos"
    }
  }),

  created: async function(){
    try {
      let response = await axios.get(lhost + "/filmes");
      this.filmes = response.data
    } 
    catch (e) {
      return e;
    }
  },

  methods: {
    mostraFilme: function(item){
      alert('Cliquei no filme: ' + JSON.stringify(item))
    }
  }
  
}
</script>