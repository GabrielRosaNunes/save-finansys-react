import Crud from "../../components/Crud/CrudList";
import columnsDespesas from "../../Core/data/despesas";
import { Despesas } from "../../Core/Types/Despesas";

export default () => {
    return (
        <div className="Despesas">
            <Crud<Despesas> table="despesas" columns={columnsDespesas}/>
        </div>
    );
}