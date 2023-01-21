import { useParams } from "react-router-dom"
import CrudEditForm from "../../components/Crud/CrudEditForm/CrudEditForm"
import columnsDespesas from "../../Core/data/despesas";
import { Despesas } from "../../Core/Types/Despesas";

export default () => {
    const params = useParams();
    return (
        <div className="DespesasEdit">
            <CrudEditForm<Despesas> table="despesas" fields={columnsDespesas} linkTo="/despesas" id={params.id} />
        </div>
    )
}