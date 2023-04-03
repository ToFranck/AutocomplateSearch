import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


export default function Nav() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/" className='link'>Home</Link>
            </li>
            <li>
                <Link to="/motivation" className='link'>Motivation</Link>
            </li>
        </ul>
    </nav>

  )
}
