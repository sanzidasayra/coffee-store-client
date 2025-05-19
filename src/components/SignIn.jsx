import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {

    const {signInUser} = use(AuthContext)

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // firebase sign in send
        signInUser(email, password)
        .then(result => {
            console.log(result.user)
            const signInInfo = {
                email,
                lastSignInTime: result.user?.metadata?.lastSignInTime 

            }

            // update last signin to the database
            fetch('http://localhost:3000/users', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(signInInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('after update patch', data)
            })


        })
        .catch(error => {
            console.log(error)
        })

    }

    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl ">
      <div className="card-body">
        <h1 className="text-4xl font-bold">SignIn now!</h1>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Enter your email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Enter your password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">SignIn</button>
        </form>
      </div>
    </div>
    );
};

export default SignIn;