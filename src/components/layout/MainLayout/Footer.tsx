import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-5 bg-background-navbar">
      <div className="container">
        <div className="flex items-center justify-center">
          <span className="text-text-color">
            © 2025 Lexa - Crafted with <Heart className="inline fill-red-500 text-red-500" /> by Hasmik.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

