import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../../contexts/StoreContext"
import Field from "../../../Core/Field"
import Firebase from "../../../Core/Firebase"
import Button from "../../Button/Button"
import FieldForm from "../../FieldForm/FieldForm"
import './CrudAddForm.css'

interface CrudAddFormProps {
    table: string,
    fields: Array<Field>,
    linkTo: string
}

export default (props:CrudAddFormProps) => {
    const navigate = useNavigate();
    const {state} = useContext(StoreContext);
    const firebase = new Firebase(props.table,state.userEmail)
    let data: any = {}

    props.fields.forEach((field:Field) => {
        data[field.nome] = undefined
    })

    function defineFields () {
        return props.fields.map((field:Field,index) => {
            return <FieldForm key={index}  fieldConfig={field} onChange={(valor) => changeValue(field.nome,valor)}></FieldForm>
        })
    }

    function changeValue(fieldName:string,value:any) {
        data[fieldName] = value
    }

    function cancelOperation() {
        navigate(props.linkTo,{'replace':true})
    }

    function save() {
        firebase.insertData(data).then((docRef) => {
            console.log('inseriu ->',docRef)
            navigate(props.linkTo,{'replace':true})
        })
    }

    return (
        <div className="CrudAddForm">
            {defineFields()}
            <div className="CrudAddFormButtons">
                <Button texto="Salvar" color="green" onClick={() => save()} />
                <Button texto="Cancelar" onClick={() => cancelOperation()} />
            </div>
        </div>
    )
}