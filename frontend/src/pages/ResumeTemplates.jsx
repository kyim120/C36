import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { ArrowLeft, ArrowRight, User, GraduationCap, Briefcase, Award, Settings, FileText, Globe, Palette } from "lucide-react";
import PersonalInfoForm from "../components/resume-builder/PersonalInfoForm";
import EducationForm from "../components/resume-builder/EducationForm";
import ExperienceForm from "../components/resume-builder/ExperienceForm";
import SkillsForm from "../components/resume-builder/SkillsForm";
import ProjectsForm from "../components/resume-builder/ProjectsForm";
import CertificationsForm from "../components/resume-builder/CertificationsForm";
import CustomSectionsForm from "../components/resume-builder/CustomSectionsForm";

const ResumeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const steps = [
    { id: 0, title: "Personal Info", icon: User, component: PersonalInfoForm },
    { id: 1, title: "Education", icon: GraduationCap, component: EducationForm },
    { id: 2, title: "Experience", icon: Briefcase, component: ExperienceForm },
    { id: 3, title: "Skills", icon: Award, component: SkillsForm },
    { id: 4, title: "Projects", icon: Settings, component: ProjectsForm },
    { id: 5, title: "Certifications", icon: Award, component: CertificationsForm },
    { id: 6, title: "Customization", icon: Settings, component: CustomSectionsForm },
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;
  const CurrentStepComponent = steps[currentStep].component;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const handleCompleteBuilder = () => {
    // Navigate to template selection page
    window.location.href = '/resume-templates';
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Dark Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920')`,
          transform: 'scale(1.05)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-blue-900/80 to-purple-900/90"></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>

      {/* Floating animation elements */}
      <div className="fixed inset-0 z-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse floating"
            style={{
              top: `${15 + (i * 15)}%`,
              left: `${10 + (i * 15)}%`,
              animationDelay: `${i * 800}ms`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 animate-fade-in">
            <div className="flex items-center">
              <Link to="/">
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 mr-4">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Home
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                  AI Resume Builder
                </h1>
                <p className="text-xl text-gray-300">Create your professional resume in minutes</p>
              </div>
            </div>
            
            {/* Template Selection Buttons */}
            <div className="flex gap-4">
              <Link to="/resume-templates">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover-scale transition-all duration-300">
                  <FileText className="w-5 h-5 mr-2" />
                  Resume Templates
                </Button>
              </Link>
              <Link to="/portfolio-templates">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover-scale transition-all duration-300">
                  <Globe className="w-5 h-5 mr-2" />
                  Portfolio Templates
                </Button>
              </Link>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 animate-fade-in animation-delay-300">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-semibold text-lg">Step {currentStep + 1} of {steps.length}</span>
              <span className="text-white font-semibold text-lg">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-3 bg-white/10 rounded-full overflow-hidden" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Step Navigation Sidebar */}
            <div className="lg:w-80 animate-fade-in animation-delay-500">
              <Card className="bg-white/5 backdrop-blur-xl border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white text-xl font-bold flex items-center">
                    <Palette className="w-6 h-6 mr-2 text-blue-400" />
                    Build Your Resume
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = index === currentStep;
                    const isCompleted = index < currentStep;
                    
                    return (
                      <button
                        key={step.id}
                        onClick={() => handleStepClick(index)}
                        className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 hover-scale ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                            : isCompleted
                            ? "bg-green-500/20 text-green-300 border border-green-400/30"
                            : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                        }`}
                      >
                        <Icon className={`w-6 h-6 mr-4 ${isActive ? "animate-pulse" : ""}`} />
                        <span className="font-semibold text-lg">{step.title}</span>
                        {isCompleted && (
                          <div className="ml-auto w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Main Form Area */}
            <div className="flex-1 animate-fade-in animation-delay-700">
              <Card className="bg-white/5 backdrop-blur-xl border-white/20 shadow-2xl min-h-[600px]">
                <CardHeader>
                  <CardTitle className="text-white text-2xl font-bold flex items-center">
                    {React.createElement(steps[currentStep].icon, { className: "w-8 h-8 mr-3 text-blue-400 animate-pulse" })}
                    {steps[currentStep].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CurrentStepComponent 
                    data={formData} 
                    onUpdate={(data) => setFormData({...formData, ...data})}
                  />
                  
                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-12 pt-8 border-t border-white/20">
                    <Button
                      onClick={handlePrev}
                      disabled={currentStep === 0}
                      variant="outline"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 text-lg font-semibold rounded-xl"
                    >
                      {/* <ArrowLeft className="w-5 h-5 mr-2" /> */}
                      Previous
                    </Button>
                    
                    {currentStep === steps.length - 1 ? (
                      <Button 
                        onClick={handleCompleteBuilder}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-3 text-lg rounded-xl shadow-lg hover-scale transition-all duration-300"
                      >
                        Generate Resume & Portfolio
                      </Button>
                    ) : (
                      <Button
                        onClick={handleNext}
                        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold px-8 py-3 text-lg rounded-xl shadow-lg hover-scale transition-all duration-300"
                      >
                        Next Step
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;