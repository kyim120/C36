
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const Features = () => {
  const features = [
    {
      title: "AI Content Generation",
      description: "Advanced AI algorithms analyze your experience and generate compelling, keyword-optimized content that gets noticed by hiring managers and ATS systems.",
      benefits: ["Smart keyword optimization", "Industry-specific language", "ATS compatibility", "Multiple writing styles"]
    },
    {
      title: "Professional Templates",
      description: "Access to hundreds of professionally designed templates created by industry experts and career coaches.",
      benefits: ["Modern designs", "Industry-specific layouts", "Customizable sections", "Print-ready formats"]
    },
    {
      title: "Portfolio Integration",
      description: "Seamlessly showcase your work samples, projects, and achievements in an integrated portfolio format.",
      benefits: ["Project galleries", "Media support", "Interactive elements", "Social sharing"]
    },
    {
      title: "Real-time Collaboration",
      description: "Get feedback and collaborate with mentors, colleagues, and career coaches in real-time.",
      benefits: ["Live editing", "Comment system", "Version history", "Team workspaces"]
    },
    {
      title: "Analytics & Insights",
      description: "Track how your resume performs with detailed analytics and actionable insights.",
      benefits: ["View tracking", "Download analytics", "Performance metrics", "Optimization tips"]
    },
    {
      title: "Multi-format Export",
      description: "Export your resume and portfolio in multiple formats for different use cases.",
      benefits: ["PDF export", "Word compatibility", "Web portfolios", "Print optimization"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1920')`
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Professional Success
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-300">
            Discover the tools and capabilities that make ResumeAI the most advanced resume and portfolio builder available.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today and discover how our features can transform your career.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-scale">
            Start Free Trial
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;