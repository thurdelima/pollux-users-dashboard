import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';


function CreateUser() {

    return (
        <div className="main-content">
              <div className="content text-center d-flex align-items-center">
                <form className="form-signin">
                
                <i class="fas fa-user-plus text-black icon-ajust fa-3x"></i>
                
                <label for="inputName" className="sr-only">Nome</label>
                <input type="email" id="inputEmail" className="form-control " placeholder="Seu nome" required autofocus />
                <label for="inputEmail" className="sr-only">Endereço de email</label>
                <input type="email" id="inputEmail" className="form-control input-align-top" placeholder="Seu email" required autofocus />
                <label for="inputPassword" className="sr-only">Senha</label>
                <input type="password" id="inputPassword" className="form-control input-ajust" placeholder="Senha" required />
                <label for="inputRetypePassword" className="sr-only">Repita a Senha</label>
                <input type="password" id="inputRetypePassword" className="form-control input-align" placeholder="Repita a senha" required />
                
                <button className="btn btn-lg btn-primary btn-block ajust-button btn-ajust" type="submit">Cadastrar</button>

                <div className="opcoes-login text-center mt-5">
                    
                    <Link to="/" className="mx-2 ajust-link" >Login</Link>
                </div>
                
                </form>
            </div>
        </div>
     
     
    );

} 


export default CreateUser;