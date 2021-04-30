import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';



function Login() {

    return (
       <div className="main-content">
            <div className="content text-center d-flex align-items-center">
                <form className="form-signin">
                {/* <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" /> */}
                <i class="fas fa-user text-black fa-4x"></i>
                <h1 className="h3 mb-3 mt-3 font-weight-normal">Login</h1>
                <label for="inputEmail" className="sr-only">Endereço de email</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Seu email" required autofocus />
                <label for="inputPassword" className="sr-only">Senha</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required />
                
              
                <Link to="dashboard" className="btn btn-lg btn-primary btn-block" >Login</Link>

                <div className="opcoes-login text-center mt-5">
                    
                        <Link to="create-user" className="mx-2" >Quero cadastrar</Link>
                    </div>
                
                </form>
            </div>
       </div>
     
    );

} 


export default Login;