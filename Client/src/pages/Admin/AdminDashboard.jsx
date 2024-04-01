import { useState } from 'react';
import Write from './components/Write';
import AdminNavbar from './AdminNavbar';
import Allposts from './components/Allposts';
function Admin() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showAllPosts, setShowAllPosts] = useState(false);

  const handleCreatePostClick = () => {
    setShowCreatePost(true);
    setShowAllPosts(false);
  };
   const handleAllPostsClick = () => {
    setShowAllPosts(true);
    setShowCreatePost(false);
   }

  return (
    <div className='bg-gray-500 min-h-screen'>
      <AdminNavbar onCreatePostClick={handleCreatePostClick} onAllPostsClick={handleAllPostsClick} />
      {showCreatePost && <Write />}
      {showAllPosts && <Allposts />}
    </div>
  );
}

export default Admin;