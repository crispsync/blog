import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Links */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Connect with Us</h4>
          <div className="flex space-x-4">
            <a href="https://twitter.com/crispsync" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg className="w-6 h-6 fill-current text-white hover:text-accent" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/crispsync" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-6 h-6 fill-current text-white hover:text-accent" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://github.com/crispsync" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg className="w-6 h-6 fill-current text-white hover:text-accent" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.57v-2.21c-3.34.73-4.04-1.44-4.04-1.44a3.2 3.2 0 00-1.33-1.76c-1.09-.75.08-.74.08-.74a2.53 2.53 0 011.85 1.25 2.56 2.56 0 003.49 1 2.56 2.56 0 01.76-1.62c-2.67-.3-5.48-1.34-5.48-5.95A4.68 4.68 0 015.9 7.67 4.35 4.35 0 015.9 5.64s1-.33 3.3 1.26a11.5 11.5 0 016 0c2.28-1.59 3.3-1.26 3.3-1.26a4.35 4.35 0 010 2.03 4.68 4.68 0 011.27 3.24c0 4.62-2.81 5.65-5.48 5.95a2.86 2.86 0 01.81 2.22v3.29c0 .31.22.68.83.57A12 12 0 0012 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Details */}
        <div className="text-center md:text-left">
  <p className="text-sm">&copy; 2024 CrispSync. All rights reserved.</p>
  <p className="text-sm">
    <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-and-conditions">Terms of Service</Link>
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
