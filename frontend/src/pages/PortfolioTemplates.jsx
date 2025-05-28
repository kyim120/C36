
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Star, Eye, Download, Zap } from "lucide-react";

const PortfolioTemplates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", "Modern", "Professional", "Creative", "Executive", "Minimalist"];

  const resumeTemplates = [
    // Modern Templates
    { id: 1, name: "Tech Pro", category: "Modern", preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400", rating: 4.9, downloads: "12.5k" },
    { id: 2, name: "Digital Edge", category: "Modern", preview: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400", rating: 4.8, downloads: "8.3k" },
    { id: 3, name: "Future Focus", category: "Modern", preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", rating: 4.7, downloads: "6.2k" },
    { id: 4, name: "Code Master", category: "Modern", preview: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", rating: 4.9, downloads: "9.1k" },
    { id: 5, name: "Startup Spirit", category: "Modern", preview: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", rating: 4.6, downloads: "5.8k" },
    
    // Professional Templates
    { id: 6, name: "Corporate Elite", category: "Professional", preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", rating: 4.8, downloads: "15.2k" },
    { id: 7, name: "Business Classic", category: "Professional", preview: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", rating: 4.7, downloads: "11.3k" },
    { id: 8, name: "Executive Pro", category: "Professional", preview: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", rating: 4.9, downloads: "13.7k" },
    { id: 9, name: "Finance Focus", category: "Professional", preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400", rating: 4.6, downloads: "7.9k" },
    { id: 10, name: "Legal Leader", category: "Professional", preview: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400", rating: 4.8, downloads: "9.4k" },
    
    // Creative Templates
    { id: 11, name: "Artist Vision", category: "Creative", preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", rating: 4.7, downloads: "6.8k" },
    { id: 12, name: "Designer Dream", category: "Creative", preview: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", rating: 4.9, downloads: "8.5k" },
    { id: 13, name: "Creative Spark", category: "Creative", preview: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", rating: 4.6, downloads: "5.2k" },
    { id: 14, name: "Media Maven", category: "Creative", preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400", rating: 4.8, downloads: "7.1k" },
    { id: 15, name: "Brand Builder", category: "Creative", preview: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400", rating: 4.7, downloads: "6.3k" },
    
    // Executive Templates
    { id: 16, name: "CEO Vision", category: "Executive", preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", rating: 4.9, downloads: "4.2k" },
    { id: 17, name: "Leadership Pro", category: "Executive", preview: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", rating: 4.8, downloads: "3.8k" },
    { id: 18, name: "Strategic Mind", category: "Executive", preview: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", rating: 4.7, downloads: "3.5k" },
    { id: 19, name: "Director's Choice", category: "Executive", preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400", rating: 4.9, downloads: "4.1k" },
    { id: 20, name: "VP Elite", category: "Executive", preview: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400", rating: 4.6, downloads: "3.2k" },
    
    // Minimalist Templates
    { id: 21, name: "Clean Simple", category: "Minimalist", preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", rating: 4.8, downloads: "10.2k" },
    { id: 22, name: "Pure White", category: "Minimalist", preview: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", rating: 4.7, downloads: "8.7k" },
    { id: 23, name: "Essential", category: "Minimalist", preview: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", rating: 4.9, downloads: "9.3k" },
    { id: 24, name: "Sleek Style", category: "Minimalist", preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400", rating: 4.6, downloads: "7.4k" },
    { id: 25, name: "Basic Pro", category: "Minimalist", preview: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400", rating: 4.8, downloads: "8.9k" }
  ];

  const filteredTemplates = selectedCategory === "All" 
    ? resumeTemplates 
    : resumeTemplates.filter(template => template.category === selectedCategory);

  const handleTemplateSelect = (templateId) => {
    // Store selected template and navigate to resume builder
    localStorage.setItem('selectedResumeTemplate', templateId.toString());
    navigate('/resume-builder');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dark animated background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1920')`,
          transform: 'scale(1.05)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/80 to-blue-900/90"></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 z-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-${2 + (i % 3)} h-${2 + (i % 3)} bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse floating`}
            style={{
              top: `${10 + (i * 12)}%`,
              left: `${5 + (i * 11)}%`,
              animationDelay: `${i * 500}ms`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen py-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8 animate-fade-in">
            <Link to="/resume-builder">
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 mr-4">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Builder
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                Resume Templates
              </h1>
              <p className="text-xl text-gray-300">Choose from 25+ professional designs</p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-in animation-delay-300">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`transition-all duration-300 hover-scale ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white/10 border-white/30 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in animation-delay-500">
            {filteredTemplates.map((template, index) => (
              <Card
                key={template.id}
                className="group bg-white/5 backdrop-blur-xl border-white/20 hover:border-blue-400/50 transition-all duration-500 hover-scale cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => handleTemplateSelect(template.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                      <Zap className="w-4 h-4 mr-1" />
                      Use Template
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {template.name}
                    </CardTitle>
                    <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30">
                      {template.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>{template.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      <span>{template.downloads}</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTemplates;
