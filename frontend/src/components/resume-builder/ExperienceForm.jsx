import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Card } from "../ui/card";

const ExperienceForm = ({ data, onUpdate, onNext, onPrevious }) => {
  const [experienceList, setExperienceList] = useState(
    data.length > 0
      ? data
      : [
          {
            id: crypto.randomUUID(),
            title: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
            isCurrentJob: false,
          },
        ]
  );

  const addExperience = () => {
    const newExperience = {
      id: crypto.randomUUID(),
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      isCurrentJob: false,
    };
    const updatedList = [...experienceList, newExperience];
    setExperienceList(updatedList);
    onUpdate(updatedList);
  };

  const removeExperience = (id) => {
    const updatedList = experienceList.filter((exp) => exp.id !== id);
    setExperienceList(updatedList);
    onUpdate(updatedList);
  };

  const updateExperience = (id, field, value) => {
    const updatedList = experienceList.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    setExperienceList(updatedList);
    onUpdate(updatedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
      <div className="animate-fade-in">
      <div className="glass-effect rounded-xl p-8 hover-glow">
        <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {experienceList.map((experience, index) => (
            <Card key={experience.id} className="glass-effect border-gray-600 p-6 hover-glow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Experience {index + 1}</h3>
                {experienceList.length > 1 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => removeExperience(experience.id)}
                    className="hover:scale-105 transition-transform"
                  >
                    Remove
                  </Button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-gray-300">Job Title *</Label>
                  <Input
                    value={experience.title}
                    onChange={(e) => updateExperience(experience.id, "title", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Software Engineer"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Company *</Label>
                  <Input
                    value={experience.company}
                    onChange={(e) => updateExperience(experience.id, "company", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Start Date *</Label>
                  <Input
                    type="month"
                    value={experience.startDate}
                    onChange={(e) => updateExperience(experience.id, "startDate", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">End Date</Label>
                  <Input
                    type="month"
                    value={experience.endDate}
                    onChange={(e) => updateExperience(experience.id, "endDate", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white"
                    disabled={experience.isCurrentJob}
                  />
                </div>
                <div className="md:col-span-2 flex items-center space-x-2">
                  <Checkbox
                    id={`current-${experience.id}`}
                    checked={experience.isCurrentJob}
                    onCheckedChange={(checked) => {
                      updateExperience(experience.id, "isCurrentJob", !!checked);
                      if (checked) {
                        updateExperience(experience.id, "endDate", "");
                      }
                    }}
                    className="border-gray-600"
                  />
                  <Label htmlFor={`current-${experience.id}`} className="text-gray-300">
                    I currently work here
                  </Label>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-gray-300">Job Description *</Label>
                  <Textarea
                    value={experience.description}
                    onChange={(e) => updateExperience(experience.id, "description", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 min-h-[100px]"
                    placeholder="Describe your responsibilities and achievements..."
                    required
                  />
                </div>
              </div>
            </Card>
          ))}
          
          <Button
            type="button"
            onClick={addExperience}
            variant="outline"
            className="w-full border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-300"
          >
            + Add Another Experience
          </Button>

          <div className="flex justify-between pt-4">
            <Button 
              type="button"
              onClick={onPrevious}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white px-8 py-2"
            >
              Previous
            </Button>
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

export default ExperienceForm;
