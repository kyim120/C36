import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../components/ui/button';
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Sparkles, Eye, EyeOff, ArrowRight, Shield, Zap } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log("Login attempt:", { email, password });
      setIsLoading(false);
      navigate("/pricing");
    }, 1000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920')`,
          transform: "scale(1.05)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/70 to-blue-900/80"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Particles */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-purple-400/30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400/30 rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8 animate-fade-in">
            <Link to="/" className="inline-flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                  <div className="absolute inset-0 bg-white/20 rounded-3xl blur-sm" />
                </div>
                <Zap className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white" />
              </div>
              <span className="text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                ResumeAI
              </span>
            </Link>
          </div>

          <Card className="shadow-2xl border-0 bg-white/5 backdrop-blur-2xl border border-white/20 animate-scale-in hover:scale-[1.02] transition-all duration-500">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-black text-white mb-4 flex items-center justify-center gap-3">
                <Shield className="w-8 h-8 text-blue-400 animate-pulse" />
                Welcome Back
              </CardTitle>
              <CardDescription className="text-gray-200 text-xl font-medium">
                Sign in to unlock premium features and templates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-white text-xl font-semibold">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder-gray-300 h-14 text-lg focus:bg-white/20 focus:border-blue-400/70 transition-all duration-300 rounded-xl"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="password" className="text-white text-xl font-semibold">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder-gray-300 h-14 text-lg focus:bg-white/20 focus:border-blue-400/70 transition-all duration-300 pr-14 rounded-xl"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <Label htmlFor="remember" className="text-white font-semibold text-lg">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-blue-400 hover:text-blue-300 font-semibold text-lg"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 h-14 text-xl font-black hover:scale-105 transition-all duration-300 shadow-2xl rounded-2xl"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : (
                    <>
                      Access Premium Features
                      <ArrowRight className="ml-3 w-6 h-6" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/30" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-6 bg-transparent text-gray-300 font-semibold text-lg">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex items-center justify-center gap-3 bg-white/10 border-white/30 text-white hover:bg-white/25 h-14 transition-all duration-300 rounded-xl font-semibold">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center gap-3 bg-white/10 border-white/30 text-white hover:bg-white/25 h-14 transition-all duration-300 rounded-xl font-semibold">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.856c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </div>

              <p className="mt-8 text-center text-white text-lg">
                New to ResumeAI?{" "}
                <Link to="/register" className="font-black text-blue-400 hover:text-blue-300 text-xl">
                  Create Account
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
