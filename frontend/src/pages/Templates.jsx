import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const Templates = () => {
  const templateCategories = [
    {
      name: "Modern",
      description: "Clean, contemporary designs perfect for tech and creative industries",
      count: 25,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      description: "Traditional layouts ideal for corporate and business roles",
      count: 30,
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Creative",
      description: "Bold, artistic designs for creative professionals and portfolios",
      count: 20,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Executive",
      description: "Sophisticated templates for senior-level positions",
      count: 15,
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const featuredTemplates = [
    { id: 1, name: "Tech Pro", category: "Modern", preview: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Corporate Elite", category: "Professional", preview: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Creative Vision", category: "Creative", preview: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Executive Summary", category: "Executive", preview: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=400" },
    { id: 5, name: "Minimal Pro", category: "Modern", preview: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "Business Classic", category: "Professional", preview: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Full Page Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1920')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Professional Templates
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                For Every Industry
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-300">
              Choose from our extensive collection of professionally designed templates, crafted by industry experts.
            </p>
          </div>
        </section>

        {/* Template Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Template Categories</h2>
              <p className="text-xl text-gray-200">Find the perfect style for your industry and role</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {templateCategories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-blue-300/50 hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}></div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{category.count} templates</span>
                    <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      Browse
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Templates */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Templates</h2>
              <p className="text-xl text-gray-200">Our most popular and effective designs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTemplates.map((template, index) => (
                <div
                  key={template.id}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-blue-300/50 hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={template.preview}
                      alt={template.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        Preview
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-white">{template.name}</h3>
                      <span className="text-sm px-3 py-1 bg-blue-100/20 text-blue-300 rounded-full border border-blue-300/30">
                        {template.category}
                      </span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Use Template
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Templates;
