import CrudAddForm from "../../components/Crud/CrudAddForm/CrudAddForm"
import columnsDividas from "../../Core/data/dividas"
import { Dividas } from "../../Core/Types/Dividas"

export default () => {
    return (
        <div className="DividasAdd">
            <CrudAddForm<Dividas> table="dividas" fields={columnsDividas} linkTo="/dividas" initialData={{
                descricao:"",
                valor:"0"
            }}/>
        </div>
    )
}