import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const Register = () => {
    const { createUserWithEmailPassword, toast, ToastContainer, FaGoogle, FaGithub, loginWithGithub, signInWithGoogle } = useContext(AuthContext)

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, password, name)

        createUserWithEmailPassword(email, password)
            .then(response => {
                const user = response.user;
                console.log(user)
                toast("user created succesfully", { position: "top-center" })
                form.reset()
            }).catch(error => {

                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    toast("User already exisit", { position: "top-center" });
                    form.reset()
                }
                console.log(error)
            })
    }

    const handleSignInWithGoole = () => {
        signInWithGoogle(googleProvider)
            .then(response => {
                const user = response.user;
                console.log(user);
            }).catch(error => {
                console.error(error);
            })
    }

    const handleSignInWithGithub = () => {
        loginWithGithub(githubProvider)
            .then(response => {
                const user = response.user;
                console.log(user);
            }).catch(error => {
                console.error(error)
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now</h1>
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
                            <input type="name" name='name' placeholder="name" className="input input-bordered" />
                        </div>
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
                                <span>Already have an account?
                                    <a href="/" className="link link-hover ml-2">Login</a>
                                </span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;