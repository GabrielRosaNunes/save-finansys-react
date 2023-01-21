import Crud from "../../components/Crud/CrudList"
import columnsDividas from "../../Core/data/dividas"
import { Dividas } from "../../Core/Types/Dividas"

export default () => {
    return (
        <div className="Dividas">
            <Crud<Dividas> table="dividas" columns={columnsDividas} />
        </div>
    )
}