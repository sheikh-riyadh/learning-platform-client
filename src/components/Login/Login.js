import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const Login = () => {

    const { logInWithEmailPassword, ToastContainer, toast, FaGithub, FaGoogle, signInWithGoogle, loginWithGithub } = useContext(AuthContext)


    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";



    const handleOnSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value;
        logInWithEmailPassword(email, password)
            .then(response => {
                toast("Login succesfull", { position: "top-center" })
                navigate(from, { replace: true });
                form.reset()
            }).catch(error => {
                if (error.message === "Firebase: Error (auth/wrong-password).") {
                    toast("Wrong password", { position: "top-center" })
                    form.reset()
                } else if (error.message === "Firebase: Error (auth/user-not-found).") {
                    toast("User not found", { position: "top-center" })
                    form.reset()
                }
                console.error(error)
            })
    }
    const handleSignInWithGoole = () => {
        signInWithGoogle(googleProvider)
            .then(response => {
                navigate(from, { replace: true });
            }).catch(error => {
                console.error(error);
            })
    }

    const handleSignInWithGithub = () => {
        loginWithGithub(githubProvider)
            .then(response => {
                navigate(from, { replace: true });
            }).catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className='flex gap-2 flex-col lg:flex-row items-center'>
                    <FaGoogle /><span onClick={handleSignInWithGoole} className='cursor-pointer'>continue with google</span>
                    <FaGithub /><span onClick={handleSignInWithGithub} className='cursor-pointer'>continue with github</span>
                </div>
                <form onSubmit={handleOnSubmit} className="card flex-shrink-0 lg:w-[630px] max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <span>New here?
                                    <Link to="/register" className="link link-hover ml-2">Register</Link>
                                </span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;