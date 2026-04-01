import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Movia Physical Therapy</h3>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Dr. Ramji Pasricha
                </Link>
              </li>
              <li>
                <Link to="/services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services & Conditions
                </Link>
              </li>
              <li>
                <Link to="/booking" className="opacity-90 hover:opacity-100 transition-opacity">
                  Booking & Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:dptramji@gmail.com"
                className="flex items-center space-x-2 opacity-90 hover:opacity-100 transition-opacity text-sm"
              >
                <Mail size={16} />
                <span>dptramji@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/doctor.ramji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 opacity-90 hover:opacity-100 transition-opacity text-sm"
              >
                <Instagram size={16} />
                <span>@doctor.ramji</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} <p>&copy; {new Date().getFullYear()} Movia Physical Therapy. All rights reserved.</p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
