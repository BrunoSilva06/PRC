var Atores = module.exports
const axios = require('axios')

var prefixes = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX : <http://www.di.uminho.pt/prc2020/2020/2/cinema#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX noInferences: <http://www.ontotext.com/explicit>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
`

var getLink = "http://localhost:7200/repositories/cinema?query=" 


Atores.getLista = async () => {
    var query = `select distinct ?nome where {
        ?id rdf:type :Ator .
        ?id :nome ?nome . 
    }
    `
    var encoded = encodeURIComponent(prefixes + query)

    try{
        var response = await axios.get(getLink + encoded)
        return response.data.results.bindings
    }
    catch(e){
        throw(e)
    }

}


Atores.getAtor = async (id) => {
    var query = `select ?Ator ?Sexo where {
        :${id} rdf:type :Ator.
        :${id} :nome ?Ator.
        :${id} :sexo ?Sexo.
    }`

    var encoded = encodeURIComponent(prefixes + query)

    try{
        var response = await axios.get(getLink + encoded)
        return response.data.results.bindings
    }
    catch(e){
        throw(e)
    }
}