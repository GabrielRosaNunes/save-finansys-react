import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../../contexts/StoreContext"
import Field from "../../../Core/Field"
import Firebase from "../../../Core/Firebase"
import Button from "../../Button/Button"
import FieldForm from "../../FieldForm/FieldForm"
import './CrudEditForm.css'

interface CrudEditFormProps {
    table: string,
    fields: Array<Field>,
    linkTo: string,
    id?: string,
}

export default (props:CrudEditFormProps) => {
    const navigate = useNavigate();
    const {state} = useContext(StoreContext);
    const firebase = new Firebase(props.table,state.userEmail)
    const [data,setData] = useState<any>({})
    const [loading,setLoading] = useState(true)

    useEffect(
        () => {
            if (loading) {
                firebase.getData(props.id).then(
                    (firebaseData) => {
                        console.log(firebaseData);
                        setData(firebaseData)
                        setLoading(false)
                    }
                )
            }
        },[])

    function defineFields () {
        return props.fields.map((field:Field,index) => {
            return <FieldForm key={index} initialValue={data[field.nome] ?? ''}  fieldConfig={field} onChange={(valor) => changeValue(field.nome,valor)}></FieldForm>
        })
    }

    function changeValue(fieldName:string,value:any) {
        setData((data:any) => {
            return {
                ...data,
                [fieldName]:value
            }
        })
        console.log('teste')
    }

    function cancelOperation() {
        navigate(props.linkTo,{'replace':true})
    }

    function editar() {
        /* firebase.insertData(data).then((docRef) => {
            console.log('inseriu ->',docRef)
            navigate(props.linkTo,{'replace':true})
        }) */
        firebase.updateData(data,props.id).then(
            () => {
                navigate(props.linkTo,{'replace':true})
            }
        )
    }

    return (
        <div className="CrudEditForm">
            {defineFields()}
            <div className="CrudEditFormButtons">
                <Button texto="Editar" color="orange" onClick={() => editar()} />
                <Button texto="Cancelar" onClick={() => cancelOperation()} />
            </div>
        </div>
    )
}