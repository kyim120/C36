
import { useState, useEffect } from "react";
import { Button } from './ui/button';
// import { ArrowUp } from "lucide-react";

const FeatureSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      id: 1,
      title: "AI-Powered Content Generation",
      description: "Let our advanced AI write compelling content for your resume, tailored to your industry and experience level.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      benefits: ["Smart keyword optimization", "Industry-specific content", "ATS-friendly formatting"]
    },
    {
      id: 2,
      title: "Professional Templates",
      description: "Choose from hundreds of professionally designed templates that adapt to your content and industry.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      benefits: ["Modern designs", "Customizable layouts", "Print-ready formats"]
    },
    {
      id: 3,
      title: "Portfolio Integration",
      description: "Seamlessly integrate your work samples, projects, and achievements into a cohesive portfolio.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
      benefits: ["Project showcases", "Media integration", "Interactive elements"]
    },
    {
      id: 4,
      title: "Real-time Collaboration",
      description: "Get feedback from mentors, colleagues, and career coaches with real-time collaboration tools.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      benefits: ["Live editing", "Comment system", "Version control"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create professional resumes and portfolios that stand out
          </p>
        </div>

        <div className="relative">
          {/* Slide Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                {features[currentSlide].title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {features[currentSlide].description}
              </p>
              <ul className="space-y-3">
                {features[currentSlide].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover-scale">
                Learn More
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={features[currentSlide].image}
                  alt={features[currentSlide].title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover-scale"
          >
            {/* <ArrowUp className="w-6 h-6 text-gray-600 transform -rotate-90" /> */}
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % features.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover-scale"
          >
            {/* <ArrowUp className="w-6 h-6 text-gray-600 transform rotate-90" /> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSlideshow;