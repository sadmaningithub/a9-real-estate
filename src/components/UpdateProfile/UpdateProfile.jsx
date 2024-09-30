import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {

    const { updateUserProfile } = useContext(AuthContext)

    const handleUpdateName = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo_url')
        console.log(name, photo)
        updateUserProfile(name, photo)
            .then(() => {
                console.log('profile updated')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleUpdateEmail = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        console.log(email)
        
    }

    const handleUpdatePass = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const password = form.get('password')
        console.log(password)
        
    }

    return (
        <div className="flex justify-center my-24">
            <div className="card bg-base-100 w-full lg:max-w-3xl shrink-0 shadow-2xl">
                <form onSubmit={handleUpdateName} className="card-body">

                    <div className="form-control space-y-5">
                        <label className="text-center">
                            <span className="label-text  text-lg">Update Name and Profile Picture</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        <input type="url" placeholder="photo url" name="photo_url" className="input input-bordered" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>

                </form>

                <form onSubmit={handleUpdateEmail} className="card-body">

                    <div className="form-control">
                        <label className="text-center">
                            <span className="label-text">Update Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Update email feature coming soon..." className="input input-bordered" required disabled/>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>

                </form>

                <form onSubmit={handleUpdatePass} className="card-body">

                    <div className="form-control">
                        <label className="text-center">
                            <span className="label-text">Update Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Update password feature coming... " className="input input-bordered"  required disabled />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>

                </form>


            </div>
        </div>
    );
};

export default UpdateProfile;