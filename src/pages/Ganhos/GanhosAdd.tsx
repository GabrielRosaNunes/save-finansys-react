import CrudAddForm from "../../components/Crud/CrudAddForm/CrudAddForm"
import columnsGanhos from "../../Core/data/ganhos"
export default () => {
    return (
        <div className="GanhosAdd">
            <CrudAddForm table="ganhos" fields={columnsGanhos} linkTo="/ganhos" />
        </div>
    )
}