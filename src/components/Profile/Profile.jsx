import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Profile = () => {

    const { user } = useContext(AuthContext)

    console.log(user)
    return (
        <div className="space-y-8 mb-24">
            <div className="flex justify-center py-8 ">
                <img className=" rounded-full" src={user&&user.photoURL}  />
            </div>
            <h1 className="text-xl text-center">USER INFORMATION</h1>
            <div className="lg:px-10 py-8  space-y-5 text-xl border-2 rounded-xl">
                <h1>Name: {user&& user.displayName}</h1>
                <h1>Email: {user&&user.email}</h1>
                <h1>Status: Active Now</h1>
            </div>
        </div>
    );
};

export default Profile;