var Filmes = module.exports
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


Filmes.getLista = async () => {
    var query = `select ?titulo ?duracao ?data ?lingua ?pais ?realizador where{
        ?f a :Filme .
        ?f :título ?titulo .
        ?f :duração ?duracao .
        ?f :dataLançamento ?data .
        ?f :temLíngua ?l .
        bind(strafter(str(?l),"cinema#") AS ?lingua) .
        filter(?lingua = 'English') .
        ?f :temPaísOrigem ?p .
        bind(replace(strafter(str(?p),"cinema#"), "_", " ") AS ?pais) .
        ?f :temRealizador ?realizador .
        ?realizador :nome ?rnome .
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


Filmes.getFilme = async (id) => {
    var query = `select ?nome ?duracao ?data ?pais where {
        :${id} rdf:type :Filme .
        :${id} :nome ?nome .
        :${id} :duração ?duracao .
        :${id} :dataLançamento ?data .
        optional {
            :${id} :temPaísOrigem ?p .
            bind(replace(strafter(str(?p), "cinema#"), "_", " ") as ?pais) .
        }
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




