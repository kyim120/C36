
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute top-20 right-0 w-60 h-60 bg-white rounded-full translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-white rounded-full translate-y-20"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-300">
          Join thousands of professionals who have successfully landed their dream jobs with our AI-powered platform
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-500">
          {/* <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-scale">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold hover-scale">
            Schedule Demo
          </Button> */}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in animation-delay-700">
            <div className="text-3xl font-bold text-white">50K+</div>
            <div className="text-blue-100">Resumes Created</div>
          </div>
          <div className="animate-fade-in animation-delay-800">
            <div className="text-3xl font-bold text-white">95%</div>
            <div className="text-blue-100">Success Rate</div>
          </div>
          <div className="animate-fade-in animation-delay-900">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-blue-100">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
