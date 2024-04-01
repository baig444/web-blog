/* eslint-disable no-unused-vars */
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./pages/Post";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLogin from "./pages/Admin/components/AdminLogin";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import PostContext from "./context/PostContext";
function App() {
  const [isAuth,setisAuth] = useState(false)
  return (
    <div>
      <PostContext.Provider value={{isAuth,setisAuth}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route
            exact
            path="/admin"
            element={
                <AdminDashboard />
            }
          />
          <Route path="/login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
      </PostContext.Provider>
    </div>
  );

  function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
      const getPost = async () => {
        try {
          const res = await axios.get(
            `http://localhost:5000/api/getpost/${id}`
          );
          console.log("Response Data:", res.data); // Log the response data
          // Check if the response data is an object
          setPost(res.data);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      };
      console.log("ID:", id); // Log the ID
      getPost();
    }, [id]);

    return <Post post={post} />;
  }
}

export default App;
