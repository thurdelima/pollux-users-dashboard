import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';


function CreateUser() {

    return (
        <div className="main-content">
              <div className="content text-center d-flex align-items-center">
                <form className="form-signin">
                {/* <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" /> */}
                {/* <i class="fas fa-user text-black fa-4x"></i> */}
                <h1 className="h3 mb-3 mt-3 font-weight-normal">Cadastro</h1>
                <label for="inputName" className="sr-only">Nome</label>
                <input type="email" id="inputEmail" className="form-control " placeholder="Seu nome" required autofocus />
                <label for="inputEmail" className="sr-only">Endereço de email</label>
                <input type="email" id="inputEmail" className="form-control input-align-top" placeholder="Seu email" required autofocus />
                <label for="inputPassword" className="sr-only">Senha</label>
                <input type="password" id="inputPassword" className="form-control input-ajust" placeholder="Senha" required />
                <label for="inputRetypePassword" className="sr-only">Repita a Senha</label>
                <input type="password" id="inputRetypePassword" className="form-control input-align" placeholder="Repita a senha" required />
                
                <button className="btn btn-lg btn-primary btn-block ajust-button" type="submit">Cadastrar</button>

                <div className="opcoes-login text-center mt-5">
                    
                    <Link to="/" className="mx-2" >Login</Link>
                </div>
                
                </form>
            </div>
        </div>
     
     
    );

} 


export default CreateUser;