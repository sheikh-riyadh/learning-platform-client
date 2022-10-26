import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { logInWithEmailPassword, ToastContainer, toast } = useContext(AuthContext)
    const handleOnSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password)

        logInWithEmailPassword(email, password)
            .then(response => {
                toast("Login succesfull", { position: "top-center" })
                form.reset()
            }).catch(error => {
                if (error.message === "Firebase: Error (auth/wrong-password).") {
                    toast("Wrong password", { position: "top-center" })
                    form.reset()
                }
                console.error(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
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
                                    <a href="/" className="link link-hover ml-2">Register</a>
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