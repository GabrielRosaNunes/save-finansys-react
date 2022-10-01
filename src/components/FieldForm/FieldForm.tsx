import Field from "../../Core/Field"
import './FieldForm.css'

interface FieldFormProps {
    fieldConfig: Field,
    onChange?: (value:any) => void,
    initialValue?:any
}

export default (props:FieldFormProps) => {
    return (
        <div className="FieldForm">
            <label className="label">
                {props.fieldConfig.descricao}
            </label>
            <div className="input">
                <input type={props.fieldConfig.tipo} value={props.initialValue} onChange={(e) => props.onChange?.(e.target.value) }/>
            </div>
        </div>
    )
}