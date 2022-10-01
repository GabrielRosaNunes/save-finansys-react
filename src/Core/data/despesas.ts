import Field from "../Field"

const columnsDespesas: Array<Field> = [{
    nome: 'descricao',
    descricao: 'Tipo de Despesa',
    tipo: 'text',
    tamanho: 50
}, {
    nome:'valor',
    descricao: 'Valor',
    tipo: 'number',
    tamanho: 10
},{
    nome:'data',
    descricao: 'Data do Pagamento',
    tipo:'date'
}]

export default  columnsDespesas