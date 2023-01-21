import { useParams } from "react-router-dom"
import CrudEditForm from "../../components/Crud/CrudEditForm/CrudEditForm"
import columnsDividas from "../../Core/data/dividas";
import { Dividas } from "../../Core/Types/Dividas";

export default () => {
    const params = useParams();
    return (
        <div className="DividasEdit">
            <CrudEditForm<Dividas> table="dividas" fields={columnsDividas} linkTo="/Dividas" id={params.id} />
        </div>
    )
}