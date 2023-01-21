import { useParams } from "react-router-dom"
import CrudEditForm from "../../components/Crud/CrudEditForm/CrudEditForm"
import columnsGanhos from "../../Core/data/ganhos"
import { Ganhos } from "../../Core/Types/ganhos";

export default () => {
    const params = useParams();
    return (
        <div className="GanhosEdit">
            <CrudEditForm<Ganhos> table="ganhos" fields={columnsGanhos} linkTo="/ganhos" id={params.id} />
        </div>
    )
}