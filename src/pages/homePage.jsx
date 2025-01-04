import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold text-amber-900 sm:text-5xl md:text-6xl">
            Welcome to Our Website!
          </h1>
          
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Explore a world of possibilities with our services. We are here to make your life easier and more enjoyable.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
            <button 
              onClick={() => alert('Button Clicked!')}
              className="px-8 py-3 bg-amber-500 text-white rounded-lg font-semibold 
                       shadow-lg hover:bg-amber-600 transition duration-300 
                       transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
            
            <Link 
              to="/login"
              className="px-8 py-3 border-2 border-amber-500 text-amber-600 
                       rounded-lg font-semibold hover:bg-amber-50 
                       transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
