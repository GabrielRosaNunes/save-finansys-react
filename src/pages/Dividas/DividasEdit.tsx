import { useParams } from "react-router-dom"
import CrudEditForm from "../../components/Crud/CrudEditForm/CrudEditForm"
import columnsDividas from "../../Core/data/dividas";

export default () => {
    const params = useParams();
    return (
        <div className="DividasEdit">
            <CrudEditForm table="dividas" fields={columnsDividas} linkTo="/Dividas" id={params.id} />
        </div>
    )
}