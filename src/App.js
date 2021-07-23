import React ,{useState} from 'react';
import './App.css';

const App = (props) => {
        const [enteredEmail, setEnteredEmail]= useState ('');
        const [enteredPassword, setEnteredPassword]= useState ('');
        const [isValid, setIsValid]= useState('');

        const emailChangeHandler =(event) =>{
            setEnteredEmail (event.target.value);
        };
    
        const passwordChangeHandler =(event) =>{
            setEnteredPassword (event.target.value);
        };
    
        const submitHandler = (event) =>{
            event.preventDefault();
            if (enteredEmail.trim.length ===0) {
              setIsValid(false)
              return <h2 className= 'login_form__control'>El correo es requerido</h2>
             } else {(enteredPassword.trim.length ===0)
              setIsValid(false)
              return <h2 className= 'login_form__control-1'>La contraseña es requerida</h2>
            };
        
        
        const formData ={
            email: enteredEmail,
            password: enteredPassword,
        };
    
        props.onSaveFormData(formData);
        setEnteredEmail ('');
        setEnteredPassword ('');
    };
    
    return (
      <div> <h2>Formulario</h2></div>>
        <form onSubmit={submitHandler}>
            <ul className='login_form__controls'>
                <div className='login_form__control'>
                    <label style ={{ color: !isValid ? 'red' :'black' }}>Email</label>
                    <input 
                    style = {{ borderColor: !isValid ? 'red': 'black',
                    background: !isValid ? 'salmon' : 'transparent'
                   }}
                    type='email' 
                    placeholder="Ej: correo@correo.com" 
                    id="email" 
                    value= {enteredEmail}
                    onChange= {emailChangeHandler}/>
                </div>
                <div className='login_form__control-1'>
                    <label style ={{ color: !isValid ? 'red' :'black' }}>Contraseña</label>
                    <input 
                     style = {{ borderColor: !isValid ? 'red': 'black',
                     background: !isValid ? 'salmon' : 'transparent'
                    }}
                    type='password'
                    placeholder= "******"
                     id="contraseña"
                     value={enteredPassword}
                     onChange= {passwordChangeHandler}/>
                </div>
             </ul> 
               <div className= 'login_form__actions'>
                   <button type= 'submit'id="btn-enviar"><p>Ingresar</p></button>
               </div>
        </form>
        );
    };
    
            export default App;



