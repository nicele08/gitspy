import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-8 w-full">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">
            Follow us on social media
          </p>
          <div className="flex mt-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-6"
            >
              <FaTwitter
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300"
                size={24}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300"
                size={24}
              />
            </a>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Contact us</p>
          <a
            href="mailto:nicelestin08@gmail.com"
            className="mt-2 block hover:underline"
          >
            nicelestin08@gmail.com
          </a>
        </div>
        <div className="md:flex items-center">
          <p className="text-lg font-semibold mr-4">
            © {new Date().getFullYear()} GitSpy Inc.
          </p>
          <p className="text-sm text-gray-600">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
