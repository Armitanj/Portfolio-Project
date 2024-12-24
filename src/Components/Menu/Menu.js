import React from 'react'
import { IoIosHome, IoMdPerson, IoMdMailOpen } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { IoDocument } from "react-icons/io5";

import './Menu.css'
import { Link } from 'react-router-dom';

export default function Menu() {


  return (
    <div>
      <ul className='MenuComponent'>
       <Link to='/' className='navIcon'><li><IoIosHome /></li></Link>
       <Link to='/about' className='navIcon'><li><IoMdPerson /></li></Link>
        <Link to='/education' className='navIcon'><li><MdBusinessCenter /></li></Link>
        <Link to='/portfolio' className='navIcon'><li><IoDocument /></li></Link>
        <Link to='/contact' className='navIcon'><li><IoMdMailOpen /></li></Link>
      </ul>

    </div>
  )
}
