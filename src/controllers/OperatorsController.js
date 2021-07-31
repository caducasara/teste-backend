const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');


module.exports = {
    async getOperators(request, response) {
        var filePath = path.join(__dirname, '../database/report.csv');
        let items = [];
        fs.createReadStream(filePath)
            .pipe(csv.parse({ headers: headerList, renameHeaders: true, delimiter: ';' }))
            .on('error', error => console.error(error))
            .on('data', row => {
                items.push(row)
            })
            .on('end', () => {
                items.splice(0, 1);
                return response.json(items)
            });
    },

    atualizar: (operators) => {
        return items.put('opretaors', operators)
    }
};

const headerList = [
    'registroANS',
    'cnpj',
    'razaoSocial',
    'nomeFantasia',
    'modalidade',
    'logradouro',
    'numero',
    'complemento',
    'bairro',
    'cidade',
    'uf',
    'cep',
    'ddd',
    'telefone',
    'fax',
    'enderecoEletronico',
    'representante',
    'cargoRepresentante',
    'dataRegistroANS',
]