import Crud from "../../components/Crud/CrudList";
import columnsDespesas from "../../Core/data/Despesas";

export default () => {
    return (
        <div className="Despesas">
            <Crud table="despesas" columns={columnsDespesas}/>
        </div>
    );
}