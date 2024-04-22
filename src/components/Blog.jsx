import React from 'react'
import logo from  '../images/logoipsum.png'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
// import img1 from '../images/download.png'
// import img5 from '../images/img5.jpeg'
const Blog = () => {
  return (
    
        <>
        <div>
        
            
            <div className='flex flex-row  ml-1'><img className='h-16' src={logo} alt="img1" />
           {/* <b> <ul className='sm:flex flex-row  mt-12 ml-48  space-x-8 text-lg sm:text-xl'> */}
              
                {/* <li className=''>About</li>
                <li className=''>Our Services</li>
                <li className=''>Portfolio</li>
                <li className=' text-red-600'><u>Blog</u></li>
                <li>Contact</li> */}
                
               {/* <li> <button className=' text-base text-gray-100 h-7 w-28 border-none rounded-md border-2  border-transparent  bg-red-600'>Get in Touch</button></li> */}
               
                {/* </ul></b> */}
                </div>
                <div className='h-36 bg-blue-900 text-center'>
                 <b> <h1 className='text-red-600 text-3xl pt-8'>Blogs</h1>
                  <h4 className=' text-white '>Home/Blogs</h4></b>
                </div>

                {/* <div> */}
                  <div className=' text-center'><b><h3 className='text-red-600 pt-12'>\ Our Blog \</h3>
                  <h1 className='text-3xl'>Latest Post</h1></b>
                  </div>
                  <div className='sm:flex sm:flex-row sm:space-x-10 sm:justify-center mt-10'>
                    <div className='  h-50 w-96 ml-4 shadow-xl'>
                      <img className=' h-[30vh] w-auto p-2 rounded-2xl' src={img2} alt="img2" />
                      <p className=' text-gray-400 mr-64'>May 4th 2022</p>
                     <b><h1 className=' text-red-600 mr-16 mt-1'>The most Popular Business Of the Year</h1></b>
                     <div className=' flex flex-row mt-2 ml-4'>
                      <img className=' rounded-full w-10 h-10' src={img2} alt="" />
                      <h3 className='ml-4 mt-2' >Ranold Jeff</h3>
                      <h4 className=' ml-36 mt-2 text-gray-400'>2 min Read</h4> </div>
                       </div>


                       <div className=' h-50  w-96 sm:w-[62vh] ml-4 flex flex-col mt-2'> 
                    <div className='flex flex-row  shadow-xl '>
                      <img className=' sm:h-[20vh] h-[20vh] sm:w-[20vh] w-[20vh] p-2 rounded-2xl' src={img3} alt="img3" />
                    <div className='flex flex-col  '>
                    <p className=' text-gray-400  sm:mr-48 mr-24 mt-2'>May 4th 2022</p>
                    <b><p className=' text-red-600 mt-8  '>The most Popular Business Of the Year</p></b>
                    <div className=' flex flex-row sm:mt-6 mt-8'>
                      <img className=' rounded-full w-6 h-6' src={img2} alt="" />
                      <h3 className=' ' >Ranold Jeff</h3>
                      <h4 className='   text-gray-400 sm:ml-28 ml-4'>2 min Read</h4> </div>
                    </div>

                    </div>
                   <div className='flex flex-row shadow-xl mt-2 '> 
                   <img className='  sm:h-[20vh] h-[20vh] sm:w-[20vh] w-[20vh] p-2 rounded-2xl ' src={img4} alt="img4" />
                   <div className='flex flex-col'>
                   <p className=' text-gray-400 sm:mr-48 mr-24 mt-2'>May 4th 2022</p>
                   <b><h1 className=' text-red-600  mt-8'>The most Popular Business Of the Year</h1></b>
                    <div className=' flex flex-row sm:mt-6 mt-8'>
                      <img className=' rounded-full w-6 h-6' src={img2} alt="" />
                      <h3 className=' ' >Ranold Jeff</h3>
                      <h4 className='   text-gray-400 sm:ml-28 ml-4'>2 min Read</h4> </div>
                   </div>
                   </div>
                   </div>
                  </div>
                {/* </div> */}


                 <div className=' bg-slate-100'>
                <div className='mt-10 text-center'><b><h3 className='text-red-600 pt-12'>\ Our Blog \</h3>
                  <h1 className='text-3xl'>Latest Post</h1></b>
                     </div>

                     <div className=' sm:grid sm:grid-cols-3 sm:mt-10 sm:mx-24 sm:my-24'>

                     <div className='  h-50 w-96 ml-4 shadow-xl'>
                      <img className=' h-[30vh] w-auto p-2 rounded-2xl' src={img2} alt="img2" />
                      <p className=' text-gray-400 mr-64'>May 4th 2022</p>
                     <b><h1 className=' text-red-600 mr-16 mt-1'>The most Popular Business Of the Year</h1></b>
                     <div className=' flex flex-row mt-2 ml-4'>
                      <img className=' rounded-full w-10 h-10' src={img2} alt="" />
                      <h3 className='ml-4 mt-2' >Ranold Jeff</h3>
                      <h4 className=' ml-36 mt-2 text-gray-400'>2 min Read</h4> </div>
                       </div>

                       <div className='  h-50 w-96 ml-4 shadow-xl'>
                      <img className=' h-[30vh] w-auto p-2 rounded-2xl' src={img3} alt="img3" />
                      <p className=' text-gray-400 mr-64'>May 4th 2022</p>
                     <b><h1 className=' text-red-600 mr-16 mt-1'>The most Popular Business Of the Year</h1></b>
                     <div className=' flex flex-row mt-2 ml-4'>
                      <img className=' rounded-full w-10 h-10' src={img2} alt="" />
                      <h3 className='ml-4 mt-2' >Ranold Jeff</h3>
                      <h4 className=' ml-36 mt-2 text-gray-400'>2 min Read</h4> </div>
                       </div>

                       <div className='  h-50 w-96 ml-4 shadow-xl'>
                      <img className=' h-[30vh] w-auto p-2 rounded-2xl' src={img4} alt="img4" />
                      <p className=' text-gray-400 mr-64'>May 4th 2022</p>
                     <b><h1 className=' text-red-600 mr-16 mt-1'>The most Popular Business Of the Year</h1></b>
                     <div className=' flex flex-row mt-2 ml-4'>
                      <img className=' rounded-full w-10 h-10' src={img2} alt="" />
                      <h3 className='ml-4 mt-2' >Ranold Jeff</h3>
                      <h4 className=' ml-36 mt-2 text-gray-400'>2 min Read</h4> </div>
                       </div>


                       <div className='  h-50 w-96 ml-4 mt-12 shadow-xl'>
                      <img className=' h-[30vh] w-auto p-2 rounded-2xl' src={img2} alt="img2" />
                      <p className=' text-gray-400 mr-64'>May 4th 2022</p>
                     <b><h1 className=' text-red-600 mr-16 mt-1'>The most Popular Business Of the Year</h1></b>
                     <div className=' flex flex-row mt-2 ml-4'>
                      <img className=' rounded-full w-10 h-10' src={img2} alt="" />
                      <h3 className='ml-4 mt-2' >Ranold Jeff</h3>
                      <h4 className=' ml-36 mt-2 text-gray-400'>2 min Read</h4> </div>
                       </div>

                       <div className='  h-50 w-96 ml-4 mt-12 shadow-xl'>
                      <img className=' h-[30vh] w-auto p-2 rounded-2xl' src={img3} alt="img3" />
                      <p className=' text-gray-400 mr-64'>May 4th 2022</p>
                     <b><h1 className=' text-red-600 mr-16 mt-1'>The most Popular Business Of the Year</h1></b>
                     <div className=' flex flex-row mt-2 ml-4'>
                      <img className=' rounded-full w-10 h-10' src={img2} alt="" />
                      <h3 className='ml-4 mt-2' >Ranold Jeff</h3>
                      <h4 className=' ml-36 mt-2 text-gray-400'>2 min Read</h4> </div>
                       </div>

                       <div className='  h-50 w-96 ml-4 mt-12 shadow-xl'>
                      <img className=' h-[30vh] w-auto p-2 rounded-2xl' src={img4} alt="img4" />
                      <p className=' text-gray-400 mr-64'>May 4th 2022</p>
                     <b><h1 className=' text-red-600 mr-16 mt-1'>The most Popular Business Of the Year</h1></b>
                     <div className=' flex flex-row mt-2 ml-4'>
                      <img className=' rounded-full w-10 h-10' src={img2} alt="" />
                      <h3 className='ml-4 mt-2' >Ranold Jeff</h3>
                      <h4 className=' ml-36 mt-2 text-gray-400'>2 min Read</h4> </div>
                       </div>

                       <div className='  h-50 w-96 ml-4 mt-12 shadow-xl'>
                      <img className=' h-[30vh] w-auto p-2 rounded-2xl' src={img2} alt="img2" />
                      <p className=' text-gray-400 mr-64'>May 4th 2022</p>
                     <b><h1 className=' text-red-600 mr-16 mt-1'>The most Popular Business Of the Year</h1></b>
                     <div className=' flex flex-row mt-2 ml-4'>
                      <img className=' rounded-full w-10 h-10' src={img2} alt="" />
                      <h3 className='ml-4 mt-2' >Ranold Jeff</h3>
                      <h4 className=' ml-36 mt-2 text-gray-400'>2 min Read</h4> </div>
                       </div>

                       <div className='  h-50 w-96 ml-4 mt-12 shadow-xl'>
                      <img className=' h-[30vh] w-auto p-2 rounded-2xl' src={img3} alt="img3" />
                      <p className=' text-gray-400 mr-64'>May 4th 2022</p>
                     <b><h1 className=' text-red-600 mr-16 mt-1'>The most Popular Business Of the Year</h1></b>
                     <div className=' flex flex-row mt-2 ml-4'>
                      <img className=' rounded-full w-10 h-10' src={img2} alt="" />
                      <h3 className='ml-4 mt-2' >Ranold Jeff</h3>
                      <h4 className=' ml-36 mt-2 text-gray-400'>2 min Read</h4> </div>
                       </div>

                       <div className='  h-50 w-96 ml-4 mt-12 shadow-xl'>
                      <img className=' h-[30vh] w-auto p-2 rounded-2xl' src={img4} alt="img4" />
                      <p className=' text-gray-400 mr-64'>May 4th 2022</p>
                     <b><h1 className=' text-red-600 mr-16 mt-1'>The most Popular Business Of the Year</h1></b>
                     <div className=' flex flex-row mt-2 ml-4'>
                      <img className=' rounded-full w-10 h-10' src={img2} alt="" />
                      <h3 className='ml-4 mt-2' >Ranold Jeff</h3>
                      <h4 className=' ml-36 mt-2 text-gray-400'>2 min Read</h4> </div>
                       </div>
  
                    </div>
               </div>

                   <div>
                    <div className='text-center'>
                      <h1>"Some of the History of Our Company is that we are Catching up through Video"</h1>
                      <button className=' text-base text-gray-100 h-7 w-28 border-none rounded-md border-2  border-transparent  bg-red-600'>Get in Touch</button>
                  </div>
                   </div>
 
        </div>
        </>
      
  
  )
}

export default Blog
