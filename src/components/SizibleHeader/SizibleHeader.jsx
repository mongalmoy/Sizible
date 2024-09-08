import React from 'react'
import "./SizibleHeader.css";
import { AiFillHome } from "react-icons/ai";

const SizibleHeader = () => {
  return (
    <div className='sizible_header'>
      <nav>
        <a href='#home'>
          <AiFillHome />
        </a>
        <a href="#sizer">Sizer</a>
        <a href="#get-the-look">Get the look</a>
        <a href="#settings">Settings</a>
      </nav>
    </div>
  )
}

export default SizibleHeader