import { Link } from 'react-router-dom'
import './MenuItem.css'

interface MenuItemProps {
    texto:string,
    linkTo:string,
    icon?:any
}

export default (props:MenuItemProps) => {
    return (
        <Link className='MenuItemLink' to={props.linkTo} >
            <div className="MenuItem">
                { props.icon ? (
                    <div className="MenuIcon">
                        {props.icon}
                    </div>
                ): ''}
                {props.texto}
            </div>
        </Link>
    )
}