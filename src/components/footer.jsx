import React from "react";

function Footer() {
  return (
    <footer className="bg-orange-400 text-white py-8 mt-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
       
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} Organic Store. All rights reserved.
        </div>

     
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/" className="hover:text-orange-400 transition">Home</a>
          <a href="/" className="hover:text-orange-400 transition">Desserts</a>
          <a href="/" className="hover:text-orange-400 transition">Snacks</a>
          <a href="/" className="hover:text-orange-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
