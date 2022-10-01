import './ValueCard.css'
interface ValueCardProps {
    icon: any,
    title: string,
    value: string,
    color?: 'red'|'green'|'blue'|'orange'
}

export default (props:ValueCardProps) => {
    return (
        <div className="ValueCard">
            <div className="CardIcon" style={{backgroundColor: 'var(--button--'+(props.color ?? 'green')+')',opacity:'0.8'}}>
                {props.icon ?? ''}
            </div>
            <div className="CardContent">
                <div className="CardContentTitle">
                    <strong>{props.title}</strong>
                </div>
                <div className="CardContentValue">
                    <span>R$</span>
                    <span>{props.value}</span>
                </div>
            </div>
        </div>
    )
}