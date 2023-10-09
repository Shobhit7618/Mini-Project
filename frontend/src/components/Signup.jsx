import { useFormik } from 'formik';
import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required')
  .matches('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).+$', 'Password is invalid'),
  confirm: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
});


const Signup = () => {

  const navigate = useNavigate();

  //initialize formik

  const signupForm=useFormik({
    initialValues: {
      name: '',
      email: '',
      password:'',
      confirm:''
    },
    onSubmit: async (values,{resetForm})=>{
      console.log(values);
      resetForm();

      const res = await fetch('http://localhost:5000/user/add',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
          'Content-Type':'application/json'
        }
      });

      console.log(res.status);
      if(res.status ===200){
        Swal.fire({
          icon:'success',
          title:'Registered Successfully',
          text:'Login to Continue'
        })
        navigate('/login');
      }else{
        Swal.fire({
          icon:'error',
          title:'Error',
          text:'Something went wrong!!'
        })
      }

      //send values to backend
    },

    // validationSchema:SignupSchema
  });

  return (
    <div className='py-5 vh-100 bg-body-secondary'>
        <div className='col-md-4 mx-auto'>
          <div className='card'>
            <div className="card-body">
              <h2 className='my-3'>SignUp Form</h2>
              <form onSubmit={signupForm.handleSubmit}>
              <label>Name</label>
              <span style={{fontSize:10,marginLeft:10,color:'red'}}>{signupForm.errors.name}</span>
              <input id='name' onChange={signupForm.handleChange} value={signupForm.values.name} type="text" className='form-control mb-3' />
              
              <label>Email</label>
              <span style={{fontSize:10,marginLeft:10,color:'red'}}>{signupForm.errors.email}</span>
              <input id='email' onChange={signupForm.handleChange} value={signupForm.values.email} type="text" className='form-control mb-3' />
              
              <label>Password</label>
              <span style={{fontSize:10,marginLeft:10,color:'red'}}>{signupForm.errors.password}</span>
              <input id='password' onChange={signupForm.handleChange} value={signupForm.values.password} type="password" className='form-control mb-3' />
              
              <label>Confirm Password</label>
              <span style={{fontSize:10,marginLeft:10,color:'red'}}>{signupForm.errors.confirm}</span>
              <input id='confirm' onChange={signupForm.handleChange} value={signupForm.values.confirm} type="password" className='form-control mb-3' />

              <button type='submit' className='btn btn-primary w-100 mt-4'>Submit</button>
              
              </form>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup;