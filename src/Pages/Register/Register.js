import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { getImageUrl } from '../../Api/ImageUpload/ImageUpload';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { setAuthToken } from '../../Api/Auth/Auth';
import { fromJSON } from 'postcss';

const Register = () => {
   const {providerLogin,createUser,updateUserProfile}=useContext(AuthContext)
   const googleProvider=new GoogleAuthProvider()
   const navigate=useNavigate()
    
   const handlesubmit=(e)=>{
    e.preventDefault();
    const form=e.target
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    let image=form.image.files[0];
    let universityName=form.universityName.value;
    let adress=form.adress.value;

   
    getImageUrl(image)
    .then(imgData=>{
      const userRegistrationinfo={
        name,
        email,
        image:imgData.data.url,
        universityName,
        adress
    }
        // console.log(imgData.data.url)
        // console.log("user registration info : ",userRegistrationinfo)

        createUser(email,password)
        .then(result=>{

          const user=result.user;

          setAuthToken(userRegistrationinfo);
          updateUserProfile(name,imgData.data.url)
        .then(() => {})
        .catch((error) => console.error(error));
        form.reset()
        navigate('/')

        })
        .catch(err=>{
          console.log(err)
        });
    })
    console.log("IMages",image)
    }

    const handleGoogle =()=>{
      providerLogin(googleProvider)
      .then((result)=>{
        const user=result.user;
        console.log("User",user)
      })
      .catch(err=>{
        console.log("This is an error",err);
      })
    }

    return (
      <div className='my-10'>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <form onSubmit={handlesubmit} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <p className='text-center mb-3'>
              Please sign up in to your account
              </p>
            
              <div class="flex flex-row justify-center items-center space-x-3 mb-3"
              onClick={handleGoogle}
              >
			<span class="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300"
      
      >
            <FcGoogle />
            </span>
			<span class="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-gray-400 hover:shadow-lg cursor-pointer transition ease-in duration-300">
            <FcGoogle />
            </span>

			<span class="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-blue-500 hover:shadow-lg cursor-pointer transition ease-in duration-300">
            <FcGoogle />
            </span>
		</div>

        <div className="divider my-5 ">OR</div>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                placeholder="Name"
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="universityName"
                placeholder="University Name"
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="adress"
                placeholder="Adress"
              />
             
             <div className="form-control mb-3">
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  required
                />
              </div>

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              

              <button
                type="submit"
                className="btn w-full text-center py-3 rounded "
              >
                Create Account
              </button>

              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <Link
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </Link>{" "}
                and
                <Link
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </div>
            </form>

            <div className=" mt-6">
              Already have an account?
              <Link
                className="no-underline border-b border-blue text-blue"
                to="/login"
              >
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;