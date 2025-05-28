import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";

const CertificationsForm = ({ data, onUpdate, onNext, onPrevious }) => {
  const [certifications, setCertifications] = useState(
    data.length > 0 ? data : []
  );

  const addCertification = () => {
    const newCertification = {
      id: crypto.randomUUID(),
      title: "",
      organization: "",
      date: "",
      description: ""
    };
    const updated = [...certifications, newCertification];
    setCertifications(updated);
    onUpdate(updated);
  };

  const removeCertification = (id) => {
    const updated = certifications.filter(cert => cert.id !== id);
    setCertifications(updated);
    onUpdate(updated);
  };

  const updateCertification = (id, field, value) => {
    const updated = certifications.map(cert =>
      cert.id === id ? { ...cert, [field]: value } : cert
    );
    setCertifications(updated);
    onUpdate(updated);
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
          {certifications.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400 mb-4">No achievements added yet</p>
              <Button
                type="button"
                onClick={addCertification}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              >
                Add Your First Achievement
              </Button>
            </div>
          )}

          {certifications.map((cert, index) => (
            <Card key={cert.id} className="glass-effect border-gray-600 p-6 hover-glow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Certification {index + 1}</h3>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => removeCertification(cert.id)}
                  className="hover:scale-105 transition-transform"
                >
                  Remove
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-gray-300">Certification Title *</Label>
                  <Input
                    value={cert.title}
                    onChange={(e) => updateCertification(cert.id, "title", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Full Stack Web Development"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Organization *</Label>
                  <Input
                    value={cert.organization}
                    onChange={(e) => updateCertification(cert.id, "organization", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Coursera / Google / etc."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Date *</Label>
                  <Input
                    type="month"
                    value={cert.date}
                    onChange={(e) => updateCertification(cert.id, "date", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white"
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-gray-300">Description</Label>
                  <Textarea
                    value={cert.description}
                    onChange={(e) => updateCertification(cert.id, "description", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Brief description of the certification..."
                  />
                </div>
              </div>
            </Card>
          ))}
          
          {certifications.length > 0 && (
            <Button
              type="button"
              onClick={addCertification} 
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

export default CertificationsForm;
