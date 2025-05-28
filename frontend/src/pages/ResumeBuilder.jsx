import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Star, Eye, Globe, Zap } from "lucide-react";

const PortfolioTemplates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", "Developer", "Designer", "Photographer", "Writer", "Business"];

  const portfolioTemplates = [
    // Developer Templates
    { id: 1, name: "Code Portfolio", category: "Developer", preview: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400", rating: 4.9, views: "25.3k" },
    { id: 2, name: "Tech Showcase", category: "Developer", preview: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400", rating: 4.8, views: "18.7k" },
    { id: 3, name: "Full Stack", category: "Developer", preview: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=400", rating: 4.7, views: "22.1k" },
    { id: 4, name: "Frontend Focus", category: "Developer", preview: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400", rating: 4.9, views: "19.8k" },
    { id: 5, name: "Backend Builder", category: "Developer", preview: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400", rating: 4.6, views: "16.4k" },
    
    // Designer Templates
    { id: 6, name: "Creative Studio", category: "Designer", preview: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=400", rating: 4.8, views: "31.2k" },
    { id: 7, name: "Design Master", category: "Designer", preview: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400", rating: 4.7, views: "28.5k" },
    { id: 8, name: "Visual Artist", category: "Designer", preview: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400", rating: 4.9, views: "33.7k" },
    { id: 9, name: "Brand Designer", category: "Designer", preview: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&q=80&w=400", rating: 4.6, views: "24.3k" },
    { id: 10, name: "UX Portfolio", category: "Designer", preview: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&q=80&w=400", rating: 4.8, views: "27.9k" },
    
    // Photographer Templates
    { id: 11, name: "Photo Gallery", category: "Photographer", preview: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=400", rating: 4.7, views: "35.8k" },
    { id: 12, name: "Visual Stories", category: "Photographer", preview: "https://images.unsplash.com/photo-1554048612-b6a482b224fc?auto=format&fit=crop&q=80&w=400", rating: 4.9, views: "42.1k" },
    { id: 13, name: "Portrait Pro", category: "Photographer", preview: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&q=80&w=400", rating: 4.6, views: "29.2k" },
    { id: 14, name: "Nature Focus", category: "Photographer", preview: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=400", rating: 4.8, views: "38.5k" },
    { id: 15, name: "Wedding Shots", category: "Photographer", preview: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=400", rating: 4.7, views: "31.7k" },
    
    // Writer Templates
    { id: 16, name: "Author's Page", category: "Writer", preview: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400", rating: 4.9, views: "18.2k" },
    { id: 17, name: "Blog Master", category: "Writer", preview: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400", rating: 4.8, views: "22.8k" },
    { id: 18, name: "Content Creator", category: "Writer", preview: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=400", rating: 4.7, views: "16.4k" },
    { id: 19, name: "Journalist Pro", category: "Writer", preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", rating: 4.9, views: "19.1k" },
    { id: 20, name: "Creative Writer", category: "Writer", preview: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&q=80&w=400", rating: 4.6, views: "15.7k" },
    
    // Business Templates
    { id: 21, name: "Corporate Pro", category: "Business", preview: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400", rating: 4.8, views: "26.3k" },
    { id: 22, name: "Consultant", category: "Business", preview: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=400", rating: 4.7, views: "21.7k" },
    { id: 23, name: "Executive", category: "Business", preview: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400", rating: 4.9, views: "28.3k" },
    { id: 24, name: "Entrepreneur", category: "Business", preview: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400", rating: 4.6, views: "19.4k" },
    { id: 25, name: "Business Owner", category: "Business", preview: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400", rating: 4.8, views: "23.9k" }
  ];

  const filteredTemplates = selectedCategory === "All" 
    ? portfolioTemplates 
    : portfolioTemplates.filter(template => template.category === selectedCategory);

  const handleTemplateSelect = (templateId) => {
    // Store selected template and navigate to resume builder
    localStorage.setItem('selectedPortfolioTemplate', templateId.toString());
    navigate('/resume-builder');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dark animated background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=1920')`,
          transform: 'scale(1.05)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-indigo-900/80 to-purple-900/90"></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 z-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-${1 + (i % 4)} h-${1 + (i % 4)} bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-pulse floating`}
            style={{
              top: `${5 + (i * 10)}%`,
              left: `${3 + (i * 9)}%`,
              animationDelay: `${i * 600}ms`
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
                Portfolio Templates
              </h1>
              <p className="text-xl text-gray-300">Choose from 25+ stunning portfolio designs</p>
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
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
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
                className="group bg-white/5 backdrop-blur-xl border-white/20 hover:border-purple-400/50 transition-all duration-500 hover-scale cursor-pointer overflow-hidden"
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
                    <Button size="sm" className="bg-purple-600 text-white hover:bg-purple-700">
                      <Zap className="w-4 h-4 mr-1" />
                      Use Template
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {template.name}
                    </CardTitle>
                    <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-400/30">
                      {template.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>{template.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-1" />
                      <span>{template.views}</span>
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