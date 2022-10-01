import CalculatorIcon from '../../assets/icons/CalculatorIcon';
import ClipboardIcon from '../../assets/icons/ClipboardIcon';
import HomeIcon from '../../assets/icons/HomeIcon';
import LogoIcon from '../../assets/icons/LogoIcon';
import MoneyIcon from '../../assets/icons/MoneyIcon';
import './Menu.css';
import MenuItem from './MenuItem';

interface MenuProps {
    open?:boolean
}

export default (props:MenuProps) => {

    return (
        <div className={"Menu "+(!props.open ? 'MenuClosed' : '') }>
            <MenuItem texto='Home' linkTo='/' icon={<HomeIcon />} />
            <MenuItem texto='Ganhos' linkTo='/ganhos' icon={<MoneyIcon />} />
            <MenuItem texto='Despesas' linkTo='/despesas' icon={<CalculatorIcon />}/>
            <MenuItem texto='Dívidas' linkTo='/dividas' icon={<ClipboardIcon />} />
        </div>
    )
}