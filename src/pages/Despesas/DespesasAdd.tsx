import CrudAddForm from "../../components/Crud/CrudAddForm/CrudAddForm"
import columnsDespesas from "../../Core/data/despesas"
import { Despesas } from "../../Core/Types/Despesas";

export default () => {
    return (
        <div className="DespesasAdd">
            <CrudAddForm<Despesas> table="despesas" fields={columnsDespesas} linkTo="/despesas" initialData={{
                data:"",
                descricao:"",
                valor:""
            }} />
        </div>
    )
}