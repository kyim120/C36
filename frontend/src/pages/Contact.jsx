import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Contact = () => {
  return (
    <div className="min-h-screen relative">
      {/* Full Page Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1920')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Get in
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Touch
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-300">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
                  <p className="text-lg text-gray-200 mb-8">
                    Whether you have questions about our features, need technical support, or want to explore partnership opportunities, we're here to help.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                      <p className="text-gray-200">support@resumeai.com</p>
                      <p className="text-gray-200">partnerships@resumeai.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                      <p className="text-gray-200">+1 (555) 123-4567</p>
                      <p className="text-gray-200">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                      <p className="text-gray-200">123 Innovation Drive</p>
                      <p className="text-gray-200">San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        className="w-full bg-white/20 border-white/30 text-white placeholder-gray-300"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        className="w-full bg-white/20 border-white/30 text-white placeholder-gray-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="w-full bg-white/20 border-white/30 text-white placeholder-gray-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company (Optional)
                    </label>
                    <Input
                      id="company"
                      type="text"
                      className="w-full bg-white/20 border-white/30 text-white placeholder-gray-300"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      className="w-full bg-white/20 border-white/30 text-white placeholder-gray-300"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      className="w-full bg-white/20 border-white/30 text-white placeholder-gray-300"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;