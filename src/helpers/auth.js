import { auth } from "../services/firebase";

//Creara un nuevo usuario con correo y contraseña
export function signup(email, password) {
	return auth().createUserWithEmailAndPassword(email, password);
}

//Iniciar sesion con un usuario existente con correo y contraseña
export function signin(email, password) {
	return auth().signInWithEmailAndPassword(email, password);
}

//autenticacion con google
export function signInWithGoogle() {
	const provider = new auth.GoogleAuthProvider();
	return auth().signInWithPopup(provider);
}

//autenticacion con github
export function signInWithGitHub() {
	const provider = new auth.GithubAuthProvider();
	return auth().signInWithPopup(provider);
}

//salir de la sesion
export function logout() {
  return auth().signOut();
}

