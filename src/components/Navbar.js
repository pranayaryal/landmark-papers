import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="lg:hidden">
      <div className="px-4 py-3">
        <div className="lg:hidden text-right">
          <div className="text-gray-700 flex items-center focus:text-white focus:outline-none">
            <a href="/">
              <img className="w-8 h-8 ml-2" src={require('../img/writing.svg')} alt="suburbs" />
            </a>
            <svg onClick={() => setIsOpen(!isOpen)} className="h-6 w-6 fill-current ml-64" viewBox="0 0 24 24">
              {isOpen &&
                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              }
              {!isOpen &&
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              }
            </svg>

          </div>
        </div>
      </div>

      {/* <div className={isOpen ? 'block text-white px-2 pt-2 pb-4 sm:block': 'hidden sm:block sm:text-white sm:px-2 sm:pt-2 sm:pb-4'}> */}
      <div className={`text-gray-600 pt-2 pb-4 pl-6 lg:hidden  ${isOpen ? 'block' : 'hidden'}`}>
        <div className="block py-1 ml-4 text-lg text-gray-900 no-underline">Neurology</div>
        <NavLink onClick={() => setIsOpen(!isOpen)} to="/movement" className="block py-1 ml-10 text-lg text-gray-900 no-underline">Movement Disorders</NavLink>
        <NavLink onClick={() => setIsOpen(!isOpen)} to="/neuromuscular" className="block py-1 ml-10 text-lg text-gray-900 no-underline">Neuromuscular Disorders</NavLink>
      </div>
    </header>

  )
};

export default Navbar;