import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { signin,signInWithGoogle,signInWithGitHub } from "../helpers/auth";

export default class Login extends Component {
	constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: '',
        };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.googleSignIn = this.googleSignIn.bind(this);
		this.githubSignIn = this.githubSignIn.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

	async handleSubmit(event) {
		event.preventDefault();
		this.setState({ error: ''});
		try {
			await signin(this.state.email, this.state.password);
		} catch (error) {
			this.setState({ error: error.message });
		}
	}

	async googleSignIn() {
		try {
			await signInWithGoogle();
		} catch (error) {
			this.setState({ error: error.message });
		}
	}

	async githubSignIn() {
    	try {
      		await signInWithGitHub();
    	} catch (error) {
      		this.setState({ error: error.message });
    	}
  	}


	render() {
		return (
			<div className="container">
				<form
				className="mt-5 py-5 px-5"
				autoComplete="off"
				onSubmit={this.handleSubmit}>
					<h1>Login to <Link className="title ml-2" to = "/">Chatty</Link> </h1>
					<p className="lead">Complete el siguiente formulario para iniciar sesión en su cuenta.</p>
					<div className="form-group form-signin">
						<input
						className="form-control"
						placeholder="Email"
						name="email"
						type="email"
						onChange={this.handleChange}
						value={this.state.email}></input>
					</div>
					<div className="form-group">
					<input
						className="form-control"
						placeholder="Password"
						name="password"
						type="password"
						onChange={this.handleChange}
						value={this.state.password}></input>
					</div>
                    <div className="form-group">
                        {this.state.error ? <p>{this.state.error}</p> : null}
                        <button className="btn btn-dark px-5" type="submit">Iniciar</button>
                    </div>
					<p>También puede iniciar sesión con cualquiera de estos servicios</p>
					<div className="buttons-container-siging">
						<button className="btn mr-3 text-white btn-signin" onClick={this.googleSignIn}>
							Iniciar con Google
						</button>
						<button className="btn mr-3 text-white btn-signin" type="button" onClick={this.githubSignIn}>
							Iniciar con Github
						</button>
					</div>
					<hr />
          			<p>
						No tienes una cuenta ? <Link to="/signup">Registrate</Link>
					</p>
				</form>
				<Footer></Footer>
			</div>
		);
	}
}