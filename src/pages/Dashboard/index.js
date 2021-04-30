import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";

import "./styles.css";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dash-content">
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-3">Bem-Vindo</h1>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley
            </p>
            <p>
              <a class="btn btn-primary btn-lg" href="#" role="button">
                Saiba mais &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row p-3">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">id</th>
                <th scope="col">nome</th>
                <th scope="col">email</th>
                <th scope="col">acao</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto@email.com</td>
                <td>
                    <button type="button" class="btn btn-primary aj-button"><i class="fas fa-user-edit"></i></button>

                    <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto@email.com</td>
                <td>
                    <button type="button" class="btn btn-primary aj-button"><i class="fas fa-user-edit"></i></button>

                    <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                
                </td>
                
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto@email.com</td>
                <td>
                    <button type="button" class="btn btn-primary aj-button"><i class="fas fa-user-edit"></i></button>

                    <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                
                </td>
              </tr>
            </tbody>
          </table>

          
        </div>
      </div>
    </>
  );
}

export default Dashboard;
