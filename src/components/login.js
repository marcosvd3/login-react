
import '../hojas-de-estilo/login.css'
import React, { useState, Component } from 'react'
import { useForm } from 'react-hook-form'

/*export default class LoginPage extends Component {
  render() {
    return (
        <div className="container-login">
            <div className="Login Page">
                <h1 className="login-Page-title">Postulate con MiptoTech</h1>
                <form>
                    <input type="text" name="username" placeholder="Usuario"/>
                    <input type="password" name="password" placeholder="Contraseña"/>
                    <button type="submit" variant="primary">Login</button>
            </form>

            </div>
        </div>
    );
  }
}*/

function Login() {
  const {register,handleSubmit,reset} = useForm();

  const onSubmit = handleSubmit((data) =>{
    console.log(data);
    reset();
  })

  return (
    <div className="container-login">
            <div className="Login Page">
                <h1 className="login-Page-title">Ingresa a MiptoTech</h1>
                <form onSubmit={onSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Usuario"
                      {...register("name")}
                    />


                    <input
                    type="password" 
                    name="password"
                    placeholder="Contraseña"
                    {...register("password")}
                     />

                    <button type="submit" className='login-button'>Ingresar</button>
            </form>

            </div>
        </div>
)
}

export default Login;


