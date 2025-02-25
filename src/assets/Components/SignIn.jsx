/* eslint-disable react/no-unescaped-entities */

import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignIn = () => {
  
  const Navigate=useNavigate()
  const location=useLocation()
  const [errMsg,setErrMsg]=useState(' ');
  const {signInUser,}=useContext(AuthContext);
  useEffect(() => {
    // Scroll to the section on page load
    const element = document.getElementById("signInSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const handleSingIn=e=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    const user={email,password};
    console.log(user)
    signInUser(email,password)
    .then(res=>{
      console.log(res)
      console.log(location)
      Navigate(location?.state?`${location.state}`:'/')
    })
    .catch(err=>{
      console.log(err)
      setErrMsg('password or email are invalid. Please try Again')
    })
  }

    return (
        <div id="signInSection" className="hero bg-base-200 min-h-screen">
        <div className="mx-4">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Let’s join Your Account</h1>
            <p className="py-6 text-center">
            SignIN with your Email and password to join
            </p>
          </div>
          <div className="card bg-base-100  mx-auto max-w-md shrink-0 shadow-2xl">
            <div className="card-body ">
            <form onSubmit={handleSingIn}>
            <fieldset className="fieldset">
               
               <label className="fieldset-label font-bold">Email</label>
               <input type="email" required name="email" className="bg-slate-100 px-10 py-3 border-0 rounded-lg " placeholder="example@gmail.com" />
               
               <label className="fieldset-label">Password</label>
               <input type="password" name="password" className="bg-slate-100 px-10 py-3 border-0 rounded-lg " placeholder="Your Password" />
               <p className="text-red-500">{errMsg}</p>
              
               <input type="submit" value="Sign In" className="btn btn-neutral mt-4 bg-[#D2B48C] text-white border-0 hover:bg-[#A9825E]"></input>
               <div className="mt-3">Don't Have an account? please .. <Link to="/signUp" className="text-blue-500">Sign Up </Link></div>
             </fieldset>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignIn;