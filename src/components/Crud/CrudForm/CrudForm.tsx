import Field from "../../../Core/Field"

interface CrudFormProps {
    fields: Array<Field>,
    data: Object,
    type: 'add' | 'update',
    id?: string
}


export default (props:CrudFormProps) => {
    let formData:any = {}
    
    props.fields.forEach( (field:Field) => {
        formData[field.nome] = ''
    })

    formData = { ...formData, ...props.data }

    console.log(formData)

    return (
        <div className="CrudForm">

        </div>
    );
}