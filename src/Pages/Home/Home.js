import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AllPost from '../../Component/AllPost/AllPost';
import PostCard from '../../Component/PostCard/PostCard';
import PostStutus from '../../Component/PostStutus/PostStutus';

const Home = () => {
  //  const { data: allPost = [], refetch} = useQuery({
  //       queryKey: ["allPost"],
  //       queryFn: async () => {
  //         const res = await fetch('http://localhost:5000/allPost');
  //         const data=await res.json();
  //         return data;  
  //       },
        
        
  //   })

    const[post,setAllPost]=useState(null)

    const{data:posts,refetch}=useQuery({
        queryKey:["allPosts"],
        queryFn: ()=>fetch('http://localhost:5000/allPost')
        .then(res=>res.json())
        .then( data=> { 
            setAllPost(data)
             refetch()        
        
        }
        )
    })

    // console.log("get all post",allPost)

    return (
      <div >
        <section>
            <PostStutus
            refetch={refetch}
            ></PostStutus>
        </section>
        <section>
          
            <h1 className='text-red-500'>
            {post?.length}
            </h1>
        </section>
      </div>
    );
};

export default Home;