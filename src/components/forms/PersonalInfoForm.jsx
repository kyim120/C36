
import { useState } from "react";
import { PersonalInfo } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onUpdate: (data: PersonalInfo) => void;
  onNext: () => void;
}

const PersonalInfoForm = ({ data, onUpdate, onNext }: PersonalInfoFormProps) => {
  const [formData, setFormData] = useState<PersonalInfo>(data);

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <div className="glass-effect rounded-xl p-8 hover-glow">
        <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Personal Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-gray-300">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-300">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin" className="text-gray-300">LinkedIn Profile</Label>
              <Input
                id="linkedin"
                value={formData.linkedin}
                onChange={(e) => handleChange("linkedin", e.target.value)}
                className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github" className="text-gray-300">GitHub Profile</Label>
              <Input
                id="github"
                value={formData.github}
                onChange={(e) => handleChange("github", e.target.value)}
                className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                placeholder="https://github.com/yourusername"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website" className="text-gray-300">Personal Website</Label>
              <Input
                id="website"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
                className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="summary" className="text-gray-300">Professional Summary *</Label>
            <Textarea
              id="summary"
              value={formData.summary}
              onChange={(e) => handleChange("summary", e.target.value)}
              className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
              placeholder="Write a brief professional summary highlighting your career goals and key strengths..."
              required
            />
          </div>
          <div className="flex justify-end pt-4">
            <Button 
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Next Step
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoForm;