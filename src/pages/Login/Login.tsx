import { useContext, useState } from 'react'
import GoogleIcon from '../../assets/icons/GoogleIcon'
import LoginIcon from '../../assets/icons/LoginIcon'
import LogoIcon from '../../assets/icons/LogoIcon'
import Button from '../../components/Button/Button'
import FieldForm from '../../components/FieldForm/FieldForm'
import { StoreContext } from '../../contexts/StoreContext'
import Field from '../../Core/Field'
import { signInWithEmail, signInWithGmail } from '../../Core/FirebaseLoggerControl'
import './Login.css'

export default () => {
    const {state,dispatch} = useContext(StoreContext);
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    
    const emailField: Field = {
        nome:'email',
        descricao:'E-mail',
        tipo:'email',
        tamanho:100
    }

    const passwordField: Field = {
        nome:'password',
        descricao: 'Senha',
        tipo: 'password',
        tamanho:100
    }

    function login() {

        signInWithEmail(email,password).then(
            (data) => {
                dispatch({ 
                    type:'LOGIN',
                    user: { 
                        userEmail: data.user.email ?? '', 
                        userFoto:''
                    }
                })
                console.log('logou');
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    function loginGmail() {
        signInWithGmail().then(
            (data) => {
                dispatch({
                    type:"LOGIN",
                    user: {
                        userEmail: data.user.email ?? '',
                        userFoto: data.user.photoURL ?? ''
                    }
                })
                console.log(data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }
    

    return (
        <div className="Login">
            <div className="LoginLogo">
                <LogoIcon />
            </div>
            <div className="LoginForm">
                <div className="LoginFields">
                    <FieldForm fieldConfig={emailField} onChange={(value) => setEmail(value) } />
                    <FieldForm fieldConfig={passwordField} onChange={(value) => setPassword(value) } />
                </div>
                <div className="LoginButtons">
                    <Button texto="Login" icon={<LoginIcon />} color='login' onClick={login} />
                    <Button texto="" icon={<GoogleIcon />} color="white" onClick={loginGmail} />
                </div>
            </div>
        </div>
    )
}