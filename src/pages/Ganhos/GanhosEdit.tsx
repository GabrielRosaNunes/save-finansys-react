import { useParams } from "react-router-dom"
import CrudEditForm from "../../components/Crud/CrudEditForm/CrudEditForm"
import columnsGanhos from "../../Core/data/ganhos"

export default () => {
    const params = useParams();
    return (
        <div className="GanhosEdit">
            <CrudEditForm table="ganhos" fields={columnsGanhos} linkTo="/ganhos" id={params.id} />
        </div>
    )
}