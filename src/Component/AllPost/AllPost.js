// // import { useQuery } from '@tanstack/react-query';
// // import React, { useState } from 'react';

// // const AllPost = () => {
//     const[post,setAllPost]=useState(null)

//     const{data:allPost,refetch}=useQuery({
//         queryKey:["allPosts"],
//         queryFn: ()=>fetch('http://localhost:5000/allPost')
//         .then(res=>res.json())
//         .then( data=> { 
//             setAllPost(data)
//              refetch()        
        
//         }
//         )
//     })

   
    
// //     return (
// //         <div>
// //             {post?.length}
// //             {/* {allPost.length} */}
// //         </div>
// //     );
// // };

// // export default AllPost;