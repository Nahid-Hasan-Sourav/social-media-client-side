import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { getImageUrl } from '../../Api/ImageUpload/ImageUpload';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PostStutus = ({refetch}) => {
  const {user,postImg,setPostImg}=useContext(AuthContext)
  console.log("This is from share post card",user)
  var moment = require('moment')
  moment().format();  
  // const [imag,setImag]=useState({})

  const {register,handleSubmit,reset}=useForm()

  const statusPost=(data)=>{
    const url="https://api.imgbb.com/1/upload?&key=4de667ac270f1c0267e74cf024279615" 
    const formData= new FormData();
    formData.append('image',data.image[0])
    console.log("Image Checking",data.image.length);
    if(data.image.length>0){
      fetch(url, {
        method:'POST',
        body:formData
  
      })
      .then(res=>res.json())
      .then(imgData=>{
        console.log("This is image for check the url : ",imgData)
      const postDetail={
      email:user.email,
      postImage:imgData.data.url,
      userImage:user.photoURL,
      statusText:data.textArea,
      PostTime:moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      // time:moment().startOf('hour').fromNow()
    }

    fetch(`http://localhost:5000/userPost`,{
      method:'POST',
      headers:{
        "content-type" : "application/json",
        
      },
      body:JSON.stringify(postDetail)
    })
    .then(result=>{
      console.log("POST THE STATUS :",result)
      // form.reset()
      reset()
      toast.success("data post succesfully")
      refetch()
      
    })
    .catch(err=>{
      console.log(err)
    })
  

        
      })
    }
    else{

      const postDetail={
        email:user.email,
        postImage:'',
        userImage:user.photoURL,
        statusText:data.textArea,
        // time:moment().startOf('hour').fromNow()
        PostTime:moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
        // timeA:moment("1:19:56 am").fromNow()
      }
  
      fetch(`http://localhost:5000/userPost`,{
        method:'POST',
        headers:{
          "content-type" : "application/json",
          
        },
        body:JSON.stringify(postDetail)
      })
      .then(result=>{
        console.log("POST THE STATUS :",result)
        // form.reset()
        reset()
        toast.success("data post succesfully")
        refetch()
        
      })
      .catch(err=>{
        console.log(err)
      })

    }
    

    
    

  
   

   
  }
    return (
      <div className='mt-8'>
        <form  onSubmit={handleSubmit(statusPost)} className="card max-w-md md:max-w-2xl mx-auto bg-base-100 shadow-lg"
       
        >
          <div className="card-body w-4/5 mx-auto">
            <div className="flex flex-row p-3  ">
              <div className="mr-2">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <img src={user?.photoURL} alt='lkn' />
                  </div>
                </div>
              </div>
              <div className="w-full h-full">
                {/* <input
                  type="text"
                  name='textarea'
                  placeholder="share your feelings"
                  className="input w-full h-20 input-bordered input-secondary"
                /> */}
                <textarea className="textarea w-full h-20 textarea-primary" placeholder="share your feelings"
                // name='textArea'
                {...register("textArea")}
                ></textarea>
              </div>
            </div>

                <div className="flex w-4/5 mx-auto items-center justify-center bg-grey-lighter">
                <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-500">
                    <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">Select a file</span>
                    <input 
                    type="file"
                    
                    // name="image"
                    {...register("image")}
                    // accept="image/*"
                    className=''
                    
                    />
                </label>
                {/* <input type="file" className="file-input file-input-bordered w-full max-w-xs"
                name="image"
                {...register("image")}
                accept="image/*"
                /> */}
            </div>
            
          </div>
          <button type='submit' className='btn w-[60%] mx-auto mb-8'>Post</button>
        </form>
      </div>
    );
};

export default PostStutus;