const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    apiVersion: '6.4',
    host: 'https://vpc-elasticsearch-cluster-5nywz4ejrfdumivodp6ibhw6hu.us-east-1.es.amazonaws.com',
});

const search = async query => {
    return await client.search({
        index: 'imagens',
        q: 'tags:' + query
    })
}

module.exports = {
    search: search
}