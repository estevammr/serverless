const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    apiVersion: '6.4',
    host: 'https://vpc-elasticsearch-cluster-5nywz4ejrfdumivodp6ibhw6hu.us-east-1.es.amazonaws.com',
});

const index = async documento => {
    return await (client.index({
        index: 'imagens',
        type: 'object',
        body: documento
    }))
}

module.exports = {
    index: index
}