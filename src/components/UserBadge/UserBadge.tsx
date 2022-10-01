import { useContext } from 'react';
import { StoreContext } from '../../contexts/StoreContext';
import './UserBadge.css'

export default () => {
    const {state} = useContext(StoreContext);

    return (
        <div className="UserBadge">
            <div className="UserBadgeContent">
                <div className="UserBadgePhoto">
                    <img src={state.userFoto} />
                </div>
                <div className="UserBadgeEmail">
                    { state.userEmail }
                </div>
            </div>
        </div>
    );
}