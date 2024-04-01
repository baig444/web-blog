/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AdminNavbar = ({onCreatePostClick,onAllPostsClick}) => {
    return (
      <div>
        <nav className="flex items-center justify-between h-[10vh] p-3 px-20 bg-blue-500 text-white box-shadow">
          <h1 className="text-[1.1rem] font-semibold">Twix.</h1>
          <div className="flex gap-10">
          <button onClick={onCreatePostClick}>Create Post</button>
          <button onClick={onAllPostsClick}>All Post</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </nav>
        
        {/* Other content of the admin page */}
        <div id="write">
          {/* Content for the "Write" section */}
        </div>
      </div>
    );
  }
  
  export default AdminNavbar;