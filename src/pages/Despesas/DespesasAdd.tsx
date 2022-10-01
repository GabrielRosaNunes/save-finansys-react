import CrudAddForm from "../../components/Crud/CrudAddForm/CrudAddForm"
import columnsDespesas from "../../Core/data/Despesas"

export default () => {
    return (
        <div className="DespesasAdd">
            <CrudAddForm table="despesas" fields={columnsDespesas} linkTo="/despesas" />
        </div>
    )
}