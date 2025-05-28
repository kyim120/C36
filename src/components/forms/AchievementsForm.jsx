import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";

const AchievementsForm = ({ data, onUpdate, onNext, onPrevious }) => {
  const [achievements, setAchievements] = useState(
    data && data.length > 0 ? data : []
  );

  const addAchievement = () => {
    const newAchievement = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      title: "",
      organization: "",
      date: "",
      description: ""
    };
    const updatedAchievements = [...achievements, newAchievement];
    setAchievements(updatedAchievements);
    onUpdate(updatedAchievements);
  };

  const removeAchievement = (id) => {
    const updatedAchievements = achievements.filter(achievement => achievement.id !== id);
    setAchievements(updatedAchievements);
    onUpdate(updatedAchievements);
  };

  const updateAchievement = (id, field, value) => {
    const updatedAchievements = achievements.map(achievement =>
      achievement.id === id ? { ...achievement, [field]: value } : achievement
    );
    setAchievements(updatedAchievements);
    onUpdate(updatedAchievements);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <div className="glass-effect rounded-xl p-8 hover-glow">
        <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Achievements & Certifications
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {achievements.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400 mb-4">No achievements added yet</p>
              <Button
                type="button"
                onClick={addAchievement}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              >
                Add Your First Achievement
              </Button>
            </div>
          )}

          {achievements.map((achievement, index) => (
            <Card key={achievement.id} className="glass-effect border-gray-600 p-6 hover-glow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Achievement {index + 1}</h3>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => removeAchievement(achievement.id)}
                  className="hover:scale-105 transition-transform"
                >
                  Remove
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-gray-300">Achievement Title *</Label>
                  <Input
                    value={achievement.title}
                    onChange={(e) => updateAchievement(achievement.id, "title", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Best Project Award"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Organization *</Label>
                  <Input
                    value={achievement.organization}
                    onChange={(e) => updateAchievement(achievement.id, "organization", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="University / Company / Organization"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Date *</Label>
                  <Input
                    type="month"
                    value={achievement.date}
                    onChange={(e) => updateAchievement(achievement.id, "date", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white"
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-gray-300">Description</Label>
                  <Textarea
                    value={achievement.description}
                    onChange={(e) => updateAchievement(achievement.id, "description", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Brief description of the achievement..."
                  />
                </div>
              </div>
            </Card>
          ))}
          
          {achievements.length > 0 && (
            <Button
              type="button"
              onClick={addAchievement}
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-300"
            >
              + Add Another Achievement
            </Button>
          )}

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
              Complete Profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AchievementsForm;
