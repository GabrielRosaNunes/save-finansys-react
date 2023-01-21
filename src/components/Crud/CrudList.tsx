import Button from "../Button/Button"
import TableCrud from "./TableCrud/TableCrud"
import './CrudList.css'
import { useContext, useEffect, useState } from "react"
import Firebase from "../../Core/Firebase"
import Field from "../../Core/Field"
import { useNavigate } from "react-router-dom"
import PencilIcon from "../../assets/icons/PencilIcon"
import TrashIcon from "../../assets/icons/TrashIcon"
import PlusIcon from "../../assets/icons/PlusIcon"
import { useFirebaseQuery } from "../../Hooks/useFirebaseQuery"

interface CrudProps {
    table:string
    columns: Array<Field>
}

export default function CrudList<T extends object>(props:CrudProps) {
    const [data, setData] = useState<T[]>([] as T[])
    const navigate = useNavigate()
    const {getAll,deleteData} = useFirebaseQuery<T>(props.table)
    useEffect(() => {
        getAll().then((firebaseData) => {
            setData(firebaseData)
        })
    },[]) 

    function defineBodyTable() {
        return  data.map((lineData:any,index:any) => {
            return (
                <tr key={index}>
                    {props.columns.map((column) => {
                        return <td>{lineData[column.nome] ?? ''}</td>
                    })}
                    <td style={{"display":'flex','justifyContent':'center'}}>
                        <Button texto="" icon={<PencilIcon />} color="orange" onClick={() => navigate('/'+props.table+'/edit/'+lineData['id'],{'replace':true})} />
                        <Button texto="" icon={<TrashIcon />} color="red" 
                            onClick={() => {
                                deleteData().then(() => navigate(0))
                            }} />
                    </td>
                </tr>
            )
            
        })
    }

    return (
        <div className="Crud">
            <div className="CrudHead">
                <Button texto="" float icon={<PlusIcon />} color="green" onClick={() => navigate('/'+props.table+'/add',{'replace':true})}/>
            </div>
            <div className="CrudTable">
                <TableCrud>
                    <thead>
                        <tr>
                            {props.columns.map( (column) => {
                                return <th>{ column.descricao }</th>;
                            } )}
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {defineBodyTable()}
                    </tbody>
                </TableCrud>
            </div>
        </div>
    )
}