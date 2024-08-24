import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className='bg-blue-500 p-4'>
        <ul className='flex space-x-7 justify-center'>
          <li>
            <Link to="/" className='text-white hover:text-gray-300'>Home</Link>
          </li>
          <li>
            <Link to="/contact" className='text-white hover:text-gray-300'>Contact</Link>
          </li>
          <li>
            <Link to='/user' className='text-white hover:text-gray-300'>User</Link>
          </li>
          <li>
            <Link to='/github' className='text-white hover:text-gray-300'>GitHub</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
