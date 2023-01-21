import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Field from "../../../Core/Field"
import { useFirebaseQuery } from "../../../Hooks/useFirebaseQuery"
import Button from "../../Button/Button"
import FieldForm from "../../FieldForm/FieldForm"
import './CrudEditForm.css'

interface CrudEditFormProps {
    table: string,
    fields: Array<Field>,
    linkTo: string,
    id?: string,
}

export default function CrudEditForm<T extends object>(props:CrudEditFormProps){
    const navigate = useNavigate();
    const [data,setData] = useState<T>({} as T)
    const [loading,setLoading] = useState(true)
    const {getData,updateData} = useFirebaseQuery<T>(props.table)

    useEffect(
        () => {
            if (loading) {
                getData(props.id).then(
                    (firebaseData) =>{
                        setData(firebaseData ?? {} as T)
                        setLoading(false)
                    }
                )
            }
        },[])

    function defineFields () {
        return props.fields.map((field:Field,index) => {
            type keyData = keyof T
            const keyName = field.nome as keyData
            return <FieldForm key={index} initialValue={data[keyName] ?? ''}  fieldConfig={field} onChange={(valor) => changeValue(field.nome,valor)}></FieldForm>
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
        updateData(data,props.id).then(() => navigate(props.linkTo,{replace:true}))
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