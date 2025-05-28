
import { useState, useEffect } from "react";
import { Button } from './ui/button';
// import { ArrowDown, Play, Star } from "lucide-react";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "AI-Powered Resume Builder",
    "Professional Portfolio Creator", 
    "Smart Career Assistant",
    "Interview Success Coach"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Content - no background here, using parent page background */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-2 mb-6 animate-fade-in">
          {/* <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div> */}
          <span className="text-white/80 text-sm">Trusted by 50,000+ professionals</span>
        </div>

        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 animate-fade-in tracking-tight">
            Create Your
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Perfect Career
            </span>
          </h1>
          
          <div className="h-24 md:h-32 flex items-center justify-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in gradient-text">
              {texts[currentText]}
            </h2>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-16 animate-fade-in animation-delay-300 max-w-3xl mx-auto leading-relaxed">
          Transform your career with AI-powered tools that create stunning resumes and portfolios. 
          <span className="text-blue-300 font-semibold"> Get hired faster.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animation-delay-500 mb-16">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-bold hover-scale shadow-2xl border-0 rounded-2xl">
            Start Building Now
            {/* <ArrowDown className="ml-2 w-5 h-5 rotate-[-90deg]" /> */}
          </Button>
          
          <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 text-xl font-semibold hover-scale rounded-2xl">
            {/* <Play className="mr-2 w-5 h-5" /> */}
            Watch Demo
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in animation-delay-700">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover-scale">
            <div className="text-3xl font-bold text-white mb-2">2 min</div>
            <div className="text-blue-200">Average creation time</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover-scale">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-purple-200">Interview success rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover-scale">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-pink-200">Professional templates</div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          {/* <ArrowDown className="text-white w-8 h-8 opacity-70" /> */}
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-1/4 left-16 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-60 floating"></div>
      <div className="absolute top-1/3 right-24 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse opacity-60 floating animation-delay-1000"></div>
      <div className="absolute bottom-1/3 left-32 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-pulse opacity-60 floating animation-delay-2000"></div>
      <div className="absolute top-1/2 right-16 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse opacity-60 floating animation-delay-500"></div>
    </section>
  );
};

export default HeroSection;