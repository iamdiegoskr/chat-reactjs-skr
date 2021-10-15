import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
          <section>
            <div>
              <Header/>
              <section className="container text-center py-5">
                <div >
                  <h1 className="display-4">Bienvenido a  Chatty</h1>
                  <p className="lead">Un gran lugar para compartir tus pensamientos con amigos.</p>
                </div>
                <div className="mt-4 ">
                  <Link className="btn btn-primary px-5 mr-3 btn-account" to = "/signup">Crear nueva cuenta</Link>
                  <Link className="btn btn-primary px-5 text-white btn-account" to = "/login">Iniciar sesion</Link>
                </div>
              </section>
            </div>
          </section>
          <Footer></Footer>
      </div>
    )
  }
}