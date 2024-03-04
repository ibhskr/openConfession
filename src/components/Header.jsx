import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
function Header() {
  const [toggle, setToggle] = useState(false);

  function navClicked(){
    setToggle(false)
  }

  return (
    <div>
      <div className=" fixed w-full h-10 bg-indigo-500 flex items-center justify-between px-10 sm:h-16  ">
        <div>
          <h1>Open Confession</h1>
        </div>
        <div>
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? <TfiClose /> : <TfiAlignJustify />}
          </button>
        </div>
      </div>
      <div className={toggle ? "block" : "hidden"}>
        <div className=" bg-indigo-200 h-screen p-4 mt-10 sm:mt-16 fixed right-0 z-50">
          <nav>
            <li className="p-4 list-none" onClick={navClicked}>
              <Link to="/login">Login/Singup</Link>
            </li>
            <li className="p-4 list-none" onClick={navClicked}>
              <Link to="/new-post">Create Post</Link>
            </li>
            <li className="p-4 list-none" onClick={navClicked}>
              <Link to="/liked-posts">Liked</Link>
            </li>
            <li className="p-4 list-none" onClick={navClicked}>
              <Link to="/comments">Comments</Link>
            </li>
            <li className="p-4 list-none" onClick={navClicked}>
              <Link to="/saved-posts">Saved Post</Link>
            </li>

            <li className="p-4 list-none" onClick={navClicked}>
              <Link to="/post-report">Post Report</Link>
            </li>
            <li className="p-4 list-none" onClick={navClicked}>
              <Link to="/bug-report">Bug Report</Link>
            </li>
            <li className="p-4 list-none" onClick={navClicked}>
              <Link to="/about-us">About us</Link>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
