import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
function Footer() {
    const{theme}=useTheme();
    const themeClasses = theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white';

  return (
<footer className={`${themeClasses} bg-white dark:bg-gray-900`}>
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <Link to="/" className="flex items-center">
                    <img src="/logo.png" className="h-8 me-3" alt="Project Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-learning </span>
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <Link to="/docs" className="hover:underline">Documentation</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:underline">Blog</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <Link to="https://twitter.com/myproject" className="hover:underline">Twitter</Link>
                        </li>
                        <li>
                            <Link to="https://github.com/myproject" className="hover:underline">GitHub</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 E-learning ™. All Rights Reserved.</span>
        </div>
    </div>
</footer>
  )
}

export default Footer