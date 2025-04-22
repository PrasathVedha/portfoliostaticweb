import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-display font-semibold text-primary">
          Portfolio<span className="text-data-blue">.Prasath</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-700 hover:text-data-blue transition-colors">
              {item}
            </a>)}
          <a href="https://drive.google.com/drive/folders/1dkadzBuXbYReuZ9YvPCmofJCiHFMilPt?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-data-blue hover:text-data-blue/80 transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            CV
          </a>
        </div>

        <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {isMenuOpen && <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} transition={{
      duration: 0.2
    }} className="md:hidden bg-white absolute top-16 left-0 right-0 p-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>)}
            <a href="https://drive.google.com/drive/folders/1dkadzBuXbYReuZ9YvPCmofJCiHFMilPt?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-data-blue py-2 px-4 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </div>
        </motion.div>}
    </nav>;
};
export default Navbar;