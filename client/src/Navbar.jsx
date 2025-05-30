import React from 'react';
import {useRef,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
 const [open,setIsOpen] = useState(false);


 const handleDropdown = () => {
   setIsOpen(!open);
 }
  return (
    <header className="relative top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-black/10 transition-all">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          <Link to="/"> FinanceHub CRM</Link>
        </div>
        <ul className="hidden md:flex gap-8 text-slate-500 font-medium">
          <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
          <li><a  className="hover:text-indigo-600"  onClick={handleDropdown} onMouseEnter={handleDropdown}>User Roles</a></li>
          <li><a href="#demo" className="hover:text-indigo-600">Demo</a></li>
          <li><a href="#pricing" className="hover:text-indigo-600">Pricing</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>
        <a href="#demo" className="hidden md:inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
          Get Demo
        </a>
      </nav>
      {open && (
        <div className="absolute top-16 left-[433px] bg-white shadow-lg rounded-lg p-4 w-48">
          <ul className="space-y-2">
            <li><Link to="/top-management" className="block hover:text-indigo-600">TopManagement</Link></li>
            <li><Link to="/business-head" className="block hover:text-indigo-600">BusinessHead</Link></li>
            <li><Link to="/rm" className="block hover:text-indigo-600">RMDashboard</Link></li>
            <li><Link to="/rmh" className="block hover:text-indigo-600">RMHeadDashboard</Link></li>
            
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
