import React, { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProviders/AuthProviders';

const Profile = () => {

    const { logOut, user } = useContext(AuthContext);
    console.log(user);


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <img
                    className='w-1/2 h-3/4'
                    src={user?.photoURL || 'No Image Found'}
                    alt="Profile Image" />
                <div className="card-body">
                    <h2 className="card-title text-6xl">{user?.displayName}</h2>
                    <p className='text-4xl'>{user?.email}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
