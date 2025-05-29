import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-6 mt-10 shadow-inner">
      <p className="text-sm">&copy; {new Date().getFullYear()} Sushan  All rights reserved.</p>
    </footer>
  );
}

export default Footer;
