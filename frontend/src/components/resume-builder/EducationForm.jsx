import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card } from "../ui/card";

const EducationForm = ({ data, onUpdate, onNext, onPrevious }) => {
  const [educationList, setEducationList] = useState(
    data.length > 0
      ? data
      : [
          {
            id: crypto.randomUUID(),
            degree: "",
            institution: "",
            startDate: "",
            endDate: "",
            grade: "",
          },
        ]
  );

  const addEducation = () => {
    const newEducation = {
      id: crypto.randomUUID(),
      degree: "",
      institution: "",
      startDate: "",
      endDate: "",
      grade: "",
    };
    const updatedList = [...educationList, newEducation];
    setEducationList(updatedList);
    onUpdate(updatedList);
  };

  const removeEducation = (id) => {
    const updatedList = educationList.filter((edu) => edu.id !== id);
    setEducationList(updatedList);
    onUpdate(updatedList);
  };

  const updateEducation = (id, field, value) => {
    const updatedList = educationList.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    setEducationList(updatedList);
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
          Education Background
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {educationList.map((education, index) => (
            <Card key={education.id} className="glass-effect border-gray-600 p-6 hover-glow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Education {index + 1}</h3>
                {educationList.length > 1 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => removeEducation(education.id)}
                    className="hover:scale-105 transition-transform"
                  >
                    Remove
                  </Button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-gray-300">Degree/Program *</Label>
                  <Input
                    value={education.degree}
                    onChange={(e) => updateEducation(education.id, "degree", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Bachelor of Science in Computer Science"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Institution *</Label>
                  <Input
                    value={education.institution}
                    onChange={(e) => updateEducation(education.id, "institution", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="University Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Start Date *</Label>
                  <Input
                    type="month"
                    value={education.startDate}
                    onChange={(e) => updateEducation(education.id, "startDate", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">End Date *</Label>
                  <Input
                    type="month"
                    value={education.endDate}
                    onChange={(e) => updateEducation(education.id, "endDate", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white"
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-gray-300">Grade/CGPA</Label>
                  <Input
                    value={education.grade}
                    onChange={(e) => updateEducation(education.id, "grade", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="3.8/4.0 or 85%"
                  />
                </div>
              </div>
            </Card>
          ))}
          
          <Button
            type="button"
            onClick={addEducation}
            variant="outline"
            className="w-full border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-300"
          >
            + Add Another Education
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

export default EducationForm;
