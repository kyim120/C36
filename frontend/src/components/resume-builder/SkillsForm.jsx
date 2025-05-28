import React, { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";

const SkillsForm = ({ data, onUpdate, onNext, onPrevious }) => {
  const [skills, setSkills] = useState(data || []);
  const [newSkill, setNewSkill] = useState("");
  const inputRef = useRef(null);

  const commonSkills = [
    "JavaScript", "Python", "React", "Node.js", "TypeScript", "HTML", "CSS",
    "Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Java", "C++",
    "Communication", "Leadership", "Problem Solving", "Team Work", "Project Management"
  ];

  const addSkill = (skill) => {
    const trimmed = skill.trim();
    if (trimmed && !skills.includes(trimmed) && trimmed.length <= 30) {
      const updatedSkills = [...skills, trimmed];
      setSkills(updatedSkills);
      onUpdate(updatedSkills);
    }
    setNewSkill("");
    inputRef.current?.focus();
  };

  const removeSkill = (skillToRemove) => {
    const updatedSkills = skills.filter(skill => skill !== skillToRemove);
    setSkills(updatedSkills);
    onUpdate(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
       <div className="animate-fade-in">
      <div className="glass-effect rounded-xl p-8 hover-glow">
        <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-gray-300">Add Your Skills</Label>
              <div className="flex gap-2">
                <Input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                  placeholder="Type a skill and press Add"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addSkill(newSkill);
                    }
                  }}
                />
                <Button
                  type="button"
                  onClick={() => addSkill(newSkill)}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white"
                >
                  Add
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-gray-300">Common Skills (Click to Add)</Label>
              <div className="flex flex-wrap gap-2">
                {commonSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant={skills.includes(skill) ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                      skills.includes(skill)
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                        : "border-gray-600 text-gray-300 hover:bg-gray-800/50"
                    }`}
                    onClick={() => {
                      if (skills.includes(skill)) {
                        removeSkill(skill);
                      } else {
                        addSkill(skill);
                      }
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {skills.length > 0 && (
              <div className="space-y-3">
                <Label className="text-gray-300">Your Selected Skills</Label>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-gradient-to-r from-green-500 to-blue-500 text-white cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => removeSkill(skill)}
                    >
                      {skill} ✕
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-gray-400">Click on a skill to remove it</p>
              </div>
            )}
          </div>

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

export default SkillsForm;
