import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charity-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe1924878cede46d7bcef650c923a1cb1%2F37c22b8b58fc48e7a2936a8117e2e504?format=webp&width=800"
              alt="Cheptugeniot Initiative"
              className="h-32 md:h-40 w-auto object-contain"
            />
            <p className="text-charity-neutral-300 text-sm leading-relaxed">
              Cheptugeniot Initiative – touching lives through sustainable
              development and empowerment.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/viviankuruicheptugeniot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-charity-orange-600 rounded-full hover:bg-charity-orange-700 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@viviankurui9890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-charity-neutral-300 hover:text-charity-purple-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-charity-neutral-300 hover:text-charity-purple-400 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-charity-neutral-300 hover:text-charity-purple-400 transition-colors duration-200"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  className="text-charity-neutral-300 hover:text-charity-purple-400 transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-charity-neutral-300 hover:text-charity-purple-400 transition-colors duration-200"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-charity-neutral-300 hover:text-charity-purple-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-charity-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-charity-neutral-300 text-sm">
                  <p className="font-semibold">Head Office:</p>
                  <p>Nairobi, Embakasi East</p>
                  <p className="mt-2 font-semibold">Branches:</p>
                  <p>Bomet, Mulot, Eldoret</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-charity-orange-400 mt-0.5 flex-shrink-0" />
                <p className="text-charity-neutral-300 text-sm">
                  +254 704 268 226
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-charity-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-charity-neutral-300 text-sm">
                  <p>notify@cheptugeniotinitiative.co.ke</p>
                  <p>vivian@cheptugeniotinitiative.co.ke</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <h4 className="text-sm font-semibold text-charity-neutral-200 mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/viviankuruicheptugeniot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-charity-orange-600 rounded-full hover:bg-charity-orange-700 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.youtube.com/@viviankurui9890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-charity-neutral-700 text-center">
          <p className="text-charity-neutral-400 text-sm">
            Copyright © Cheptugeniot Initiative 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
