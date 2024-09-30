import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [regError, setRegError] = useState('');
    const [regSuccess, setRegSuccess] = useState('')
    const [showPass, setShowPass] = useState(false)


    const handleSignUp = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        console.log(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const photo_Url = form.get('photo_url')
        const password = form.get('password')
        console.log(email, password, name, photo_Url)


        setRegError('')
        setRegSuccess('')

        if (password.length < 6) {
            setRegError('Your password should have at least 6 characters.')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setRegError('Your password should have at least one uppercase letter.')
            return
        }
        else if (!/[a-z]/.test(password)) {
            setRegError('Your password should have at least one lowercase letter.')
            return
        }

        //create user 
        createUser(email, password)
            .then(result => {

                console.log(result.user)
                toast.success('Registration successful', {
                    position: 'top-center'
                })
                setRegSuccess("Great! Registration Successful.")
                updateUserProfile(name, photo_Url)
                    .then(() => {
                        console.log('profile updated')


                    }
                    )
                    .catch(error => {
                        console.log(error)

                    }
                    )
            })
            .catch(error => {
                console.error(error.message)
                setRegError(error.message)
                // console.log(regError)
            })
    }


    return (

        <div className="hero min-h-screen">

            <div className="hero-content flex-col w-2/3">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6">Please register to login and see all the exciting properties.</p>
                </div>
                <div className="card shrink-0 lg:w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="url" placeholder="photo url" name="photo_url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative ">
                            <input type={showPass? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-full" required />

                            <span onClick={() => setShowPass(!showPass)} className="absolute h-full top-3 right-2">
                                {
                                    showPass? <IoEyeOutline className="text-xl" /> : <IoEyeOffOutline className="text-xl" />
                                }
                            </span>
                            </div>
                            <label className="label">
                                {
                                    regError && <p className="text-red-500">{regError}</p>
                                }
                                {
                                    regSuccess && <p className="text-green-500">{regSuccess}</p>
                                }
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                            <ToastContainer />
                        </div>
                        <p>Already have an account? <Link to='/login' className="text-blue-500">Log in</Link> </p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SignUp;