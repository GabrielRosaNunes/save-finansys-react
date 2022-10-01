import CrudAddForm from "../../components/Crud/CrudAddForm/CrudAddForm"
import columnsDividas from "../../Core/data/dividas"

export default () => {
    return (
        <div className="DividasAdd">
            <CrudAddForm table="dividas" fields={columnsDividas} linkTo="/dividas" />
        </div>
    )
}