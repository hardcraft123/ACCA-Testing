import React from "react";
import linkedin from "../../assets/image/linkedin.png";
import twitter from "../../assets/image/twitter.png";
import youtube from "../../assets/image/youtube.png";
import tiktok from "../../assets/image/tiktok.png";
import facebook from "../../assets/image/facebook.png";

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-700">
              <img src={linkedin} alt="LinkedIn" className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-700">
              <img src={twitter} alt="X" className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-700">
              <img src={youtube} alt="YouTube" className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-700">
              <img src={tiktok} alt="TikTok" className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-700">
              <img src={facebook} alt="Facebook" className="w-4 h-4" />
            </a>
          </div>
          <div className="font-bold" style={{color:'#7F7F7F'}}>
            THINK AHEAD
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
