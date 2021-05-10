import React ,{useEffect} from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import { Chart } from 'react-charts'


import "./styles.css";

function Dashboard() {
  
  useEffect(() => {

     

  }, [])

  const data = React.useMemo(
    () => [
      {
        label: 'Segunda-feira',
        data: [[0, 1], [0, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Terça-feira',
        data: [[0, 3], [0, 2], [2, 5], [3, 6], [4, 4]]
      },
      {
        label: 'Quarta-feira',
        data: [[0, 3], [0, 2], [2, 5], [3, 6], [4, 4]]
      },
      {
        label: 'Quinta-feira',
        data: [[0, 3], [0, 2], [2, 5], [3, 6], [4, 4]]
      },
      {
        label: 'Sexta-feira',
        data: [[0, 3], [0, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )

  const series = React.useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )
 
  const axes = React.useMemo(
    () => [
      // { primary: true, type: 'linear', position: 'bottom' },
      // { type: 'linear', position: 'left' }
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: false }
    ],
    []
  )
  
  
  return (
    <>
      <Navbar />
      <div className="dash-content">
      
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2">
                <button className="btn btn-sm btn-outline-secondary">Compartilhar</button>
                <button className="btn btn-sm btn-outline-secondary">Exportar</button>
              </div>
              <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                Esta semana
              </button>
            </div>
          </div>
      </div>

      <div className="container mb-3 mt-3">
        <div style={{
        width: '100%',
        height: '300px'
      }} >
            <Chart data={data} series={series} axes={axes} tooltip/>
        </div>
        
      </div>

      {/* <div className="dash-content">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3 ajust-welcome">Bem-Vindo</h1>
            <p className="welcome-description">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley
            </p>
            <p>
              <a className="btn btn-primary btn-lg btn-ajust" href="#" role="button">
                Saiba mais &raquo;
              </a>
            </p>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="row p-3">
          <table class="table">
            <thead class="thead-custom">
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
                    <button type="button" class="btn btn-primary aj-button "><i class="fas fa-user-edit"></i></button>

                    <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto@email.com</td>
                <td>
                    <button type="button" class="btn btn-primary aj-button "><i class="fas fa-user-edit"></i></button>

                    <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                
                </td>
                
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Mark</td>
                <td>Otto@email.com</td>
                <td>
                    <button type="button" class="btn btn-primary aj-button "><i class="fas fa-user-edit"></i></button>

                    <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                
                </td>
              </tr>
            </tbody>
          </table>

          
        </div>
      </div>
      </div>
      
    </>
  );
}

export default Dashboard;
