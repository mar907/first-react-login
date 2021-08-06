import React, { useState } from "react";

import Card from "../Login/Card";
import classes from './AgregarUsuarios.module.css';
import Button from '../Login/Button';
import ErrorModal from "../Usuarios/ErrorModal";


const AgregarUsuarios = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredEmail.trim().length === 0) {
            setError({
                title: 'Email invalido',
                message: 'Por favor ingrese un email y contraseña validos. (no empty values)'
            });
            return;
        }

        if (enteredPassword.trim().length === 0) {
            setError({
                title: 'Contraseña invalida',
                message: 'Por favor ingrese una contraseña valida. (no empty values)'
            });
            return;
        }

        if (enteredEmail.trim().length !== 0 || enteredPassword.trim().length !==
            0) {
            setError({
                title: 'Ambos datos son correctos',
                message: `Hola ${enteredEmail} bienvenido`

            });
            return;
        }

        props.onAddUser(enteredEmail, enteredPassword);
        setEnteredEmail('');
        setEnteredPassword('');
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };
    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='email'>Email</label>
                    <input id='email'
                        type='email'
                        value={enteredEmail}
                        onChange={emailChangeHandler} />
                    <label htmlFor='password'>Contraseña</label>
                    <input id='contraseña'
                        type='password'
                        value={enteredPassword}
                        onChange={passwordChangeHandler} />
                    <Button type='submit'> Agregar Usuario</Button>
                </form>
            </Card>
        </div>
    );
};
export default AgregarUsuarios;