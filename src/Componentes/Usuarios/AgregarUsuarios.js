import React, { useState } from "react";

import Card from "../UI/Card";
import classes from './AgregarUsuario.module.css';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";


const AgregarUsuarios = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [error, setError] =useState ('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredEmail.trim().length === 0 || setEnteredPassword.trim().length === 0) {
            setError ({
                title:'Email invalido',
                message:'Por favor ingrese un email y contraseña validos. (no empty values)'
            });
            return;
        }

        if (enteredAge < 1) {
            setError ({
                title:'Edad invalida',
                message:'Por favor ingrese una edad valida. (no empty values)'
            });
            return;
        }
        props.onAddUser(enteredEmail, enteredPassword);
        setEnteredEmail ('');
        setEnteredPassword ('');
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };
    const errorHandler= () =>{
        setError (null);
    };

    return (
        <div>
        {error && (
        <ErrorModal 
        title= {error.title} 
        message= {error.message} 
        onConfirm ={errorHandler}
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