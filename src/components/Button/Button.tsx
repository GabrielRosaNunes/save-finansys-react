import Firebase from '../../Core/Firebase'
import './Button.css'
interface ButtonProps {
    texto:string,
    color?:'red'|'green'|'blue'|'orange'|'login'|'white',
    onClick?: () => void,
    icon?:any,
    float?:Boolean
}

export default (props:ButtonProps) => {
    let buttonStyle = {
        backgroundColor:props.color ? 'var(--button--'+props.color+')': 'var(--dark--50)'
    }

    return (
        <button className={"Button"+(props.float ? ' ButtonFloat': '')} style={buttonStyle} onClick={() => props.onClick?.()}>
            {
                props.icon ? (
                    <div className="ButtonIcon">
                        {props.icon}
                    </div>
                ) : ''
            }
            {props.texto}
        </button>
    )
}