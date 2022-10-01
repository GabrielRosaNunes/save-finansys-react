import Field from "../Field"

const columnsGanhos: Array<Field> = [{
    nome: 'descricao',
    descricao: 'Tipo de Recebimento',
    tipo: 'text',
    tamanho: 50
}, {
    nome:'valor',
    descricao: 'Valor',
    tipo: 'number',
    tamanho: 10
},{
    nome:'data',
    descricao: 'Data do Recebimento',
    tipo:'date'
}]

export default  columnsGanhos