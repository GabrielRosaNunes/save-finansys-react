import { useContext } from 'react'
import LogoutIcon from '../../assets/icons/LogoutIcon'
import MenuIcon from '../../assets/icons/MenuIcon'
import { StoreContext } from '../../contexts/StoreContext'
import Firebase from '../../Core/Firebase'
import Button from '../Button/Button'
import UserBadge from '../UserBadge/UserBadge'
import './Navbar.css'

interface NavbarProps {
    toggleMenu:() => void
}

export default (props:NavbarProps) => {
    const {state,dispatch} = useContext(StoreContext);

    function logOut() {
        const firebase = new Firebase('');
        firebase.signOut().then(
            () => {
                dispatch({type:'LOGOUT'})
            }
        )
    }
    return (
        <div className="Navbar">
            <div className="NavbarIcon" onClick={() => props.toggleMenu()}>
                <MenuIcon />
            </div>
            <div className="NavbarUser">
                <UserBadge />
            </div>
            <div className="NavbarButtons">
                <div className="NavbarLogout" onClick={logOut}>
                    <LogoutIcon />
                    Deslogar
                </div>
            </div>
        </div>
    )
}