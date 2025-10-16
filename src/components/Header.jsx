import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex flex-col leading-none">
          <span className="text-2xl font-bold text-navy">Foreleads</span>
          <span className="text-xs text-slate-600">Leadership Consulting LLC</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Services</NavLink>
          <NavLink to="/programs" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Programs</NavLink>
          <NavLink to="/resources" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Resources</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Contact</NavLink>
          <a href="https://www.youtube.com/@ForeleadsLeadershipConsulting" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-navy"><FaYoutube className="text-red-600"/> YouTube</a>
          <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-navy"><FaLinkedin/> LinkedIn</a>
        </nav>
      </div>
    </header>
  );
}
