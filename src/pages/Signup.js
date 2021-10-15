import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { signup, signInWithGoogle, signInWithGitHub } from '../helpers/auth';

export default class SignUp extends Component {

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
			await signup(this.state.email, this.state.password);
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
				autoComplete= "off"
				onSubmit={this.handleSubmit}>
                    <h1>Registrarse <Link className="title ml-2" to="/">Chatty</Link></h1>
                    <p>Complete el siguiente formulario para crear una cuenta.</p>
                    <div className="form-group form-register">
                        <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                    </div>
                    <div>
                        <input className="form-control"placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
                    </div>
                    <div className="form-group">
                        {this.state.error ? <p>{this.state.error}</p> : null}
                        <button className="btn btn-dark px-5" type="submit">Registrarse</button>
						<hr></hr>
						<p>O si desea registrarse con otras opciones.</p>
						<button className="btn mr-3 text-white btn-signin" onClick={this.googleSignIn} type="button">
							Registrarse con Google
						</button>
						<button className="btn mr-3 text-white btn-signin" onClick={this.githubSignIn} type="button">
							Registrarse con Github
						</button>
                        <hr></hr>
                        <p>Ya tienes una cuenta? <Link to="/login">Inciar sesion</Link></p>
                    </div>
                </form>
				<Footer/>
			</div>
		)
	}
}