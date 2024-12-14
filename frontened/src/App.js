import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './components/Home';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import { useTheme } from './context/ThemeContext';
import Dashboard from './dashboard/Dashboard';
// import AdminDashboard from './pages/AdminDashboard';
import PostCourse from './dashboard/PostCourse';
// import ProtectedRoute from './ProtectedRoutes/LoginVerify';
import PaymentCheckout from './payment/PaymentCheckout';
// import Course from './pages/course/Course';
// import CourseDetails from './pages/course/CourseDetails';
// import MyCourse from './pages/course/MyCourse';
import About from './pages/About';
import Contact from './pages/Contact';
import CourseHome from './pages/course/CourseHome';

function App() {
  const location = useLocation();

  // Define the paths where Navbar and Footer should NOT appear
  const noHeaderFooterRoutes = ['/signup', '/login','/dashboard'];

  // theme changed 
  const{theme}=useTheme();
  const themeClasses = theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white';


  return (
    <div className={`${themeClasses}`}>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<CourseHome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post-course" element={<PostCourse />} />
        
        <Route path="/payment" element={<PaymentCheckout />} />
        
      </Routes>

      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
