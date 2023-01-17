
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoIcon from '../../assets/icons/LogoIcon'
import Button from '../../components/Button/Button'
import FieldForm from '../../components/FieldForm/FieldForm'
import { StoreContext } from '../../contexts/StoreContext'
import Field from '../../Core/Field'
import Firebase from '../../Core/Firebase'
import { createUserEmail } from '../../Core/FirebaseLoggerControl'
import './Registration.css'

export default () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const emailField: Field = {
        nome: "email",
        descricao:"Email",
        tipo: "email",
        tamanho:100
    }

    const passwordField: Field = {
        nome: "password",
        descricao: "Senha",
        tipo:"password",
        tamanho:100
    }

    const passwordConfirmationField: Field = {
        nome: "passwordConfirmation",
        descricao: "Confirme sua Senha",
        tipo:"password",
        tamanho:100
    }

    function createUser() {
        createUserEmail(email,password).then(
            (data) => {
                console.log(data);
                navigate('/',{replace:true});
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    function cancelRegistration() {
        navigate('/',{ replace:true })
    }

    return (
        <div className="Registration">
            <div className="RegistrationLogo">
                <LogoIcon />
            </div>
            <div className="RegistrationForm">
                <div className="RegistrationFields">
                    <FieldForm fieldConfig={emailField} onChange={(value) => setEmail(value)}/>
                    <FieldForm fieldConfig={passwordField} onChange={(value) => setPassword(value)} />
                    <FieldForm fieldConfig={passwordConfirmationField} onChange={(value) => setConfirmPassword(value)} />
                </div>
                <div className="RegistrationButtons">
                    <Button texto="Cadastrar"  color='login' onClick={createUser}  />
                    <Button texto="Cancelar"  onClick={cancelRegistration}  />
                </div>
            </div>
        </div>
    )
}