import './TableCrud.css'

interface TableCrudProps {
    children: any
}

export default (props:TableCrudProps) => {
    return (
        <table className="TableCrud">
            {props.children}
        </table>
    )
}