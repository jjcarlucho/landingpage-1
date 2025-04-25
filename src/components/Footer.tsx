import React from 'react';
import { Book, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Book className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold">TheGameChanger</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your life with proven strategies and systems that have helped thousands of people worldwide achieve extraordinary results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#author" className="text-gray-400 hover:text-white transition-colors">About Author</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>support@thegamechanger.ink</li>
              <li>1-800-555-GAME</li>
              <li>123 Transformation Ave,<br/>Success City, CA 90210</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} The Game Changer. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Refund Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Shipping Information</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;