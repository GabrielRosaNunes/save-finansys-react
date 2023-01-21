import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../../contexts/StoreContext"
import Field from "../../../Core/Field"
import Firebase from "../../../Core/Firebase"
import { useFirebaseQuery } from "../../../Hooks/useFirebaseQuery"
import Button from "../../Button/Button"
import FieldForm from "../../FieldForm/FieldForm"
import './CrudAddForm.css'

interface CrudAddFormProps<T> {
    table: string,
    fields: Array<Field>,
    linkTo: string,
    initialData:T
}

export default function CrudAddForm<T extends object>(props:CrudAddFormProps<T>){
    const navigate = useNavigate();
    const {insertData} = useFirebaseQuery<T>(props.table)
    const [data,setData] = useState<T>(props.initialData)

    function defineFields () {
        return props.fields.map((field:Field,index) => {
            type keyData = keyof Partial<T>
            const keyName = field.nome as keyData
            const partialData = {} as Partial<T>
            return <FieldForm key={index}  fieldConfig={field} onChange={(valor) => {
                partialData[keyName] = valor
                changeValue(partialData)
            }}></FieldForm>
        })
    }

    function changeValue(updateData:Partial<T>) {
        setData({...data,...updateData})
    }

    function cancelOperation() {
        navigate(props.linkTo,{'replace':true})
    }

    function save() {
        insertData(data).then(() => navigate(props.linkTo,{replace:true}))
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