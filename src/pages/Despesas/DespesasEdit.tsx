import { useParams } from "react-router-dom"
import CrudEditForm from "../../components/Crud/CrudEditForm/CrudEditForm"
import columnsDespesas from "../../Core/data/Despesas";

export default () => {
    const params = useParams();
    return (
        <div className="DespesasEdit">
            <CrudEditForm table="despesas" fields={columnsDespesas} linkTo="/despesas" id={params.id} />
        </div>
    )
}