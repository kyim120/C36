
import { useState } from "react";
import { ResumeData, PersonalInfo, Education, Experience, Project, Achievement } from "../../types/resume";
import StepIndicator from "../StepIndicator";
import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import SkillsForm from "./SkillsForm";
import ProjectsForm from "./ProjectsForm";
import AchievementsForm from "./AchievementsForm";
import Summary from "../Summary";

const Build = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      website: "",
      summary: ""
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
    achievements: []
  });

  const steps = [
    "Personal Info",
    "Education",
    "Experience", 
    "Skills",
    "Projects",
    "Achievements",
    "Summary"
  ];

  const updatePersonalInfo = (data) => {
    setResumeData(prev => ({ ...prev, personalInfo: data }));
  };

  const updateEducation = (data) => {
    setResumeData(prev => ({ ...prev, education: data }));
  };

  const updateExperience = (data) => {
    setResumeData(prev => ({ ...prev, experience: data }));
  };

  const updateSkills = (data) => {
    setResumeData(prev => ({ ...prev, skills: data }));
  };

  const updateProjects = (data) => {
    setResumeData(prev => ({ ...prev, projects: data }));
  };

  const updateAchievements = (data) => {
    setResumeData(prev => ({ ...prev, achievements: data }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length));
  };

  const previousStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoForm
            data={resumeData.personalInfo}
            onUpdate={updatePersonalInfo}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <EducationForm
            data={resumeData.education}
            onUpdate={updateEducation}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        );
      case 3:
        return (
          <ExperienceForm
            data={resumeData.experience}
            onUpdate={updateExperience}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        );
      case 4:
        return (
          <SkillsForm
            data={resumeData.skills}
            onUpdate={updateSkills}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        );
      case 5:
        return (
          <ProjectsForm
            data={resumeData.projects}
            onUpdate={updateProjects}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        );
      case 6:
        return (
          <AchievementsForm
            data={resumeData.achievements}
            onUpdate={updateAchievements}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        );
      case 7:
        return (
          <Summary
            data={resumeData}
            onPrevious={previousStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            AI Resume Builder
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Create a stunning professional resume and portfolio with the power of AI. 
            Our intelligent system enhances your content for maximum impact.
          </p>
        </div>

        {/* Step Indicator */}
        <StepIndicator 
          currentStep={currentStep} 
          totalSteps={steps.length} 
          steps={steps}
        />

        {/* Current Step Content */}
        <div className="mt-8">
          {renderCurrentStep()}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          <p>Step {currentStep} of {steps.length} • All data is processed securely</p>
        </div>
      </div>
    </div>
  );
};

export default Build;