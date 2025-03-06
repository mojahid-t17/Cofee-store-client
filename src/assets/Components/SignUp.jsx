import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../Provider/AuthProvider";
const SignUp = () => {
  const {createUser}=useContext(AuthContext);
  const [regerror,setRegError]=useState('');
    // eslint-disable-next-line no-unused-vars
    const [succes,setSuccess]=useState('');
  const handleSignIn=e=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const user={name,email,password};
    // console.log(name,email,password)
    

    if(password.length<6){
      setRegError('Password should be at least 6 characters ');
      return;
  }
  // check upper letter in password
  else if(!/[A-Z]/.test(password)){
      setRegError('Use AT least one upper case in your password')
      return;
  }
  // reset error message if success
  setRegError('')
  //reset succes message
  setSuccess('');



    createUser(email,password)
    .then(res=>{
      console.log(res)
    
      fetch('https://cofee-store-server-jcjtyuiek-mojahidt17s-projects.vercel.app/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
      //  alert to show sucess 
            Swal.fire({
            title: "Good job!",
            text:"The User Created!!",
            icon: "success"
          });
        }
        form.reset();
        console.log(data)
      })
    })
    .catch(err=>{
      setRegError('email-already-in-use')
      console.log(err)})
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="max-w-md">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Let’s Get Started</h1>
        <p className="py-6 ">
        Create an account and get the Deals & Promotions news
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignIn}>
          <fieldset className="fieldset">
            <label className="fieldset-label font-bold">Name</label>
            <input type="text" required name="name" className="bg-slate-100 px-10 py-3 border-0 rounded-lg " placeholder="Your Name" />
            <label className="fieldset-label font-bold">Email</label>
            <input type="email" required name="email" className="bg-slate-100 px-10 py-3 border-0 rounded-lg " placeholder="example@gmail.com" />
            <label className="fieldset-label">Password</label>
            
            <input type="password" required name="password" className="bg-slate-100 px-10 py-3 border-0 rounded-lg " placeholder="Your Password" />
            <p className="text-red-500">{regerror}</p>
          
            <input type="Submit" value="Submit" className="btn btn-neutral mt-4 bg-[#D2B48C] text-white border-0 hover:bg-[#A9825E]"></input>
            <div className="mt-3">Already Have an account? please .. <Link to="/signIn" className=" text-blue-500"> Sign In </Link></div>
          </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignUp;
