import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import axios from '../utils/axiosInstance';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      // Make actual API call to backend
      const response = await axios.post('/auth/login', {
        email,
        password
      });

      // Store token in localStorage
      localStorage.setItem('token', response.data.token);
      
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
      
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ 
        general: error.response?.data?.message || 'Invalid email or password. Please try again.' 
      });
      setIsLoading(false);
    }
  };

  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white opacity-10 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Enhanced Particle Background */}
      <ParticleBackground />
      
      {/* Animated geometric shapes - reduced size */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full animate-pulse-slow transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-white opacity-10 rounded-full animate-ping-slow"></div>
        <div className="absolute top-2/3 left-2/3 w-24 h-24 bg-white opacity-5 rounded-full animate-bounce-slow"></div>
        
        {/* Gradient orbs - reduced size */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-white to-transparent opacity-20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-transparent to-white opacity-10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className={`relative z-10 w-full max-w-sm transform transition-all duration-1000 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Compact Logo section */}
        <div className="text-center mb-6 transform transition-all duration-700 ease-out">
          <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 rounded-full animate-spin-slow opacity-20"></div>
            <div className="relative bg-white rounded-full p-3 shadow-2xl">
              <Shield className="w-6 h-6 text-black" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-1 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm">Sign in to continue</p>
        </div>

        {/* Compact login form */}
        <div className="relative bg-black bg-opacity-60 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-800 border-opacity-50 transform transition-all duration-700 hover:shadow-3xl hover:border-opacity-100">
          
          {/* Success overlay */}
          {isSuccess && (
            <div className="absolute inset-0 bg-green-500 bg-opacity-20 rounded-2xl flex items-center justify-center animate-fade-in">
              <CheckCircle className="w-12 h-12 text-green-400 animate-bounce" />
            </div>
          )}

          <div className="space-y-4">
            {/* Compact Email field */}
            <div className="relative group">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 group-focus-within:text-white group-focus-within:scale-110">
                <Mail className="text-gray-400 w-4 h-4" />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 bg-opacity-50 border-2 border-gray-700 rounded-xl px-3 py-3 pl-10 text-white placeholder-gray-400 text-sm transition-all duration-300 ease-in-out focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 focus:bg-opacity-70 hover:border-gray-500 hover:bg-opacity-70"
                required
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500 group-focus-within:w-full"></div>
            </div>

            {/* Compact Password field */}
            <div className="relative group">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 group-focus-within:text-white group-focus-within:scale-110">
                <Lock className="text-gray-400 w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800 bg-opacity-50 border-2 border-gray-700 rounded-xl px-3 py-3 pl-10 pr-10 text-white placeholder-gray-400 text-sm transition-all duration-300 ease-in-out focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 focus:bg-opacity-70 hover:border-gray-500 hover:bg-opacity-70"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500 group-focus-within:w-full"></div>
            </div>

            {/* Compact Error message */}
            {errors.general && (
              <div className="text-red-400 text-xs text-center p-2 bg-red-900 bg-opacity-20 rounded-lg border border-red-800 border-opacity-30 animate-shake-enhanced">
                {errors.general}
              </div>
            )}

            {/* Compact Login button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading || isSuccess}
              className="group relative w-full bg-gradient-to-r from-white to-gray-200 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex items-center justify-center">
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    <span className="text-sm">Authenticating...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-sm">Success!</span>
                  </>
                ) : (
                  <>
                    <span className="text-sm">Sign In</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </div>
            </button>

            {/* Compact Forgot password link */}
            <div className="text-center">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 text-xs hover:underline decoration-white decoration-2 underline-offset-4"
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </div>

        {/* Compact Demo credentials hint */}
        <div className="mt-4 p-3 bg-gray-800 bg-opacity-30 rounded-xl border border-gray-700 border-opacity-50 text-center">
          <p className="text-gray-400 text-xs mb-1">Demo Credentials:</p>
          <p className="text-white text-xs">Email: test@example.com</p>
          <p className="text-white text-xs">Password: 123456</p>
        </div>
      </div>
    </div>
  );
};

export default Login;