import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    const {createUser} = use(AuthContext);
    console.log(createUser)


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const {email, password, ...restFormData} = Object.fromEntries(formData.entries());


        // create user in the firebase
        createUser(email, password)
        .then(result => {
            console.log(result.user)

           const userProfile = {
                 email,
                ...restFormData,
                creationTime: result.user?.metadata?.creationTime,
                lastSignInTime: result.user?.metadata?.lastSignInTime
            }



            // save profile info in the databse
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userProfile)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your account is created.",
                    showConfirmButton: false,
                    timer: 1500
});
                }
            })



        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
         <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl ">
      <div className="card-body">
        <h1 className="text-4xl font-bold">SignUp now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" name='name' placeholder="Enter your name" />
          <label className="label">Address</label>
          <input type="text" className="input" name='address' placeholder="Enter your address" />
          <label className="label">Phone</label>
          <input type="text" className="input" name='phone' placeholder="Phone number" />
          <label className="label">Photo</label>
          <input type="text" className="input" name='photo ' placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Enter your email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Enter your password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
    );
};

export default SignUp;