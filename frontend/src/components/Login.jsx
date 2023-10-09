import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';

const Login = () => {

  
  const loginForm=useFormik({
    initialValues: {
      email: '',
      password:''
    },
    onSubmit:async(values)=>{
      console.log(values);

      const res=await fetch('http://localhost:5000/user/authenticate',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
          'Content-type':'application/json'
        }
      });

      console.log(res.status);
      if(res.status===200){
        Swal.fire({
          icon:'success',
          title:'Login Success'
        })
      

        const data = await res.json();
        console.log(data);

        sessionStorage.setItem('user',JSON.stringify(data));
        
      }else if(res.status===400){
        Swal.fire({
          icon:'success',
          title:'Login Failed',
          text:'Email or Password is invalid!!'
        })
      }else{
        Swal.fire({
          icon:'error',
          title:'Error',
          text:'Something went wrong'
        })
      }

      //send values to backend
    }
  });

  return (
<div className='py-5 vh-100 bg-body-secondary'>
        <div className='col-md-4 mx-auto'>
          <div className='card'>
            <div className="card-body">
              <h2 className='my-3'>Login Form</h2>
              <form onSubmit={loginForm.handleSubmit}>
              <label>Email</label>
              <input id='email' onChange={loginForm.handleChange} value={loginForm.values.email} type="text" className='form-control mb-3' />
              
              
              <label>Password</label>
              <input id='password' onChange={loginForm.handleChange} value={loginForm.values.password} type="password" className='form-control mb-3' />

              <button type='submit' className='btn btn-primary w-100 mt-4'>Submit</button>
              
              </form>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Login