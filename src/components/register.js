
import '../hojas-de-estilo/register.css'
import React, { useState, Component} from 'react'
import {useForm} from 'react-hook-form'



/*export default class RegisterPage extends Component {
  render() {
    return (
   const [userInfo, setUserInfo]=useState({
    name:'',
    password:''
  }) 
  const handleChange =(event)=>{
    const {name,value} = event.target;
    setUserInfo({...userInfo, [name]: value});
  }
        <div className="container-register">
        <div className="register-age">
            <h1 className="register-page-title">Registrate en MiptoTech</h1>
            <form>
                <input
                  type="text"
                  name="username" 
                  placeholder="Usuario"
                  value={userInfo.name}
                  onChange={handleChange} />

                <input 
                  type="email"
                  name="mail"
                  placeholder="Correo"
                  value={userInfo.mail}
                  onChange={handleChange}/>

                <input
                 type="password"
                  name="password" 
                  placeholder="Contraseña"
                  value={userInfo.password}
                  onChange={handleChange}/>

                <button type="submit">Login</button>
            </form>

        </div>
        </div>
    );
}*/

function Register() {

  const {register, handleSubmit, reset} = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    alert('Registrado con éxito');
    reset();
  })

return(
  <div className="container-register">
  <div className="register-age">
      <h1 className="register-page-title">Registrate en MiptoTech</h1>
      <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name" 
            placeholder="Usuario"
            {...register("name")}/>

          <input 
            type="email"
            name="mail"
            placeholder="Correo"
            {...register("mail")}
            />

          <input
           type="password"
            name="password" 
            placeholder="Contraseña"
            {...register("password")}
            />

          <button className='boton-register' type="submit">Registrar</button>
      </form>

  </div>
  </div>
)
};
export default Register;



/*function Register () {

  const messages ={
    required:'Este campo es Obligatorio',
    name:'El formato no válido',
    mail:'Correo no válido',
    password:'Contraseña no válida'
  };

  const patterns ={
    name: /^[A-aZ-z]+$/i,
    mail: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    password: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9-]+)*$/
  }


  const {
    register,
    handleSubmit,
    useFormAction:{errors}
}= useFormAction();

  const onSubmit=(userInfo) => console.log(userInfo);
  console.log(errors);
 

  return (
    <div className="container-register">
        <div className="Login Page">
            <h1 className="login-Page-title">Registrate en MiptoTech</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  name="name" 
                  placeholder="Usuario"
                  className={errors.name && "error"}
                  {...register("name",{
                    required: messages.required,
                    pattern:{
                      value: patterns.name,
                      message: messages.name
                    }
                  })} />
                  {errors.name && <p>{errors.name.message}</p>}

                <input 
                  type="email"
                  name="mail"
                  placeholder="Correo"
                  className={errors.mail && "error"}
                  {...register("mail",{
                    required: messages.required,
                    pattern:{
                      value: patterns.mail,
                      message: messages.mail
                    }
                  })}
                  />
                {errors.mail && <p>{errors.mail.message}</p>}

                <input
                 type="password"
                  name="password" 
                  placeholder="Contraseña"
                  className={errors.password && "error"}
                  {...register("password",{
                    required: messages.required,
                    pattern:{
                      value: patterns.password,
                      message: messages.password
                    }
                  })}
                  />
                   {errors.password && <p>{errors.password.message}</p>}

                <button type="submit">Login</button>
            </form>

        </div>
        </div>
  )
}

export default Register;*/
    


