export default interface Field {
    nome: string,
    descricao: string,
    tipo: 'text'|'number'|'date'|'password'|'email',
    tamanho?: number,
    validacao?: (value:string) => boolean
}