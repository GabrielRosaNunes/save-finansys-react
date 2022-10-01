import Crud from "../../components/Crud/CrudList"
import columnsDividas from "../../Core/data/dividas"

export default () => {
    return (
        <div className="Dividas">
            <Crud table="dividas" columns={columnsDividas} />
        </div>
    )
}