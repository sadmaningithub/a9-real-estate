import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";


const Login = () => {

    const { signIn, googleSignIn, setUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const [showPass, setShowPass] = useState(false)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                setUser(loggedUser)
            })
            .catch(error => {
                console.error(error)
            })

    }

    const handleLogIn = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col w-2/3">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Please login to see the properties.</p>
                </div>
                <div className="card shrink-0 lg:w-full max-w-md shadow-2xl pb-5 bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input type={showPass? "text": "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                                <span onClick={() => setShowPass(!showPass)} className="absolute h-full top-3 right-2">
                                    {
                                        showPass ? <IoEyeOutline className="text-xl" /> : <IoEyeOffOutline className="text-xl" />
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <hr className="py-5 mx-8" />
                    <div className="flex justify-center">
                        <button className="btn " onClick={handleGoogleSignIn}>Google </button>
                    </div>
                    <p className="pl-8 pt-5">Don&apos;t have an account? <Link className="text-blue-500" to='/signup'> Sign up </Link> </p>
                </div>

            </div>
        </div>
    );
};

export default Login;