import CrudAddForm from "../../components/Crud/CrudAddForm/CrudAddForm"
import columnsGanhos from "../../Core/data/ganhos"
import { Ganhos } from "../../Core/Types/ganhos"
export default () => {
    return (
        <div className="GanhosAdd">
            <CrudAddForm<Ganhos> table="ganhos" fields={columnsGanhos} linkTo="/ganhos" initialData={{
                data:"",
                descricao:"",
                valor:"0"
            }} />
        </div>
    )
}