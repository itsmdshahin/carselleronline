import { useEffect, useState } from "react";
import { Footer } from "../../components/headerPage/footer"
import Header from "../../components/headerPage/header"
import "./Blog.css";
import axios from "axios";
import Post from "./Post";
import CarBlogData from '../../Data/CarBlog.json';


function Blog() {
  const [blogs, setBlogs] = useState([])
  const [records, setRecords] = useState([])

  useEffect(() => {
    setBlogs(CarBlogData.products); // Use the imported JSON data
    setRecords(CarBlogData.products);
  }, []);

  const getInputData = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setBlogs(records.filter(blog => blog.title.toLowerCase().includes(inputValue)));
  }
  
  // useEffect(() => {
  //   axios.get('../../Data/CarBlog.json')
  //     .then(res => {
  //       setBlogs(res.data.products)
  //       setRecords(res.data.products);
  //     })
  //     .catch(err => console.log(err))



  // }, [])
  // const getInputData = (event) => {
  //   setBlogs(records.filter(r => r.title.tolowerCase().includes(event.target.value.tolowerCase())))
  // }

return (

  <>
    <Header />

    <div className='post'>
      <div className='searchbar'>

        <input type="text" placeholder='Search' onChange={getInputData} className="searchinput"></input>
      </div>
      <div className='blog-icon'>
        <h3>Blogs</h3>

      </div>


      <div className="post-container">
        {blogs.map((blog, index) => (
          <Post blog={blog} key={index} />

        ))}
      </div>

    </div>
    <Footer />
  </>
)
}

export default Blog
