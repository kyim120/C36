import { ResumeData } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface SummaryProps {
  data: ResumeData;
  onPrevious: () => void;
}

const Summary = ({ data, onPrevious }: SummaryProps) => {
  const { toast } = useToast();

  const handleGenerate = () => {
    toast({
      title: "🎉 Resume Generated Successfully!",
      description: "Your AI-enhanced resume and portfolio are being created. This would typically integrate with your backend API.",
    });
    console.log("Resume Data:", data);
  };

  return (
    <div className="animate-fade-in">
      <div className="glass-effect rounded-xl p-8 hover-glow">
        <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          🎯 Profile Summary
        </h2>
        
        <div className="space-y-6">
          {/* Personal Info */}
          <Card className="glass-effect border-gray-600 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <p><strong>Name:</strong> {data.personalInfo.fullName}</p>
              <p><strong>Email:</strong> {data.personalInfo.email}</p>
              <p><strong>Phone:</strong> {data.personalInfo.phone}</p>
              {data.personalInfo.linkedin && <p><strong>LinkedIn:</strong> {data.personalInfo.linkedin}</p>}
              {data.personalInfo.github && <p><strong>GitHub:</strong> {data.personalInfo.github}</p>}
              {data.personalInfo.website && <p><strong>Website:</strong> {data.personalInfo.website}</p>}
            </div>
            {data.personalInfo.summary && (
              <div className="mt-4">
                <p><strong className="text-white">Summary:</strong></p>
                <p className="text-gray-300 mt-2">{data.personalInfo.summary}</p>
              </div>
            )}
          </Card>

          {/* Education */}
          {data.education.length > 0 && (
            <Card className="glass-effect border-gray-600 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Education ({data.education.length})</h3>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-blue-500 pl-4">
                    <p className="text-white font-medium">{edu.degree}</p>
                    <p className="text-gray-300">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.startDate} - {edu.endDate}</p>
                    {edu.grade && <p className="text-gray-300">Grade: {edu.grade}</p>}
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <Card className="glass-effect border-gray-600 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Experience ({data.experience.length})</h3>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-purple-500 pl-4">
                    <p className="text-white font-medium">{exp.title}</p>
                    <p className="text-gray-300">{exp.company}</p>
                    <p className="text-gray-400 text-sm">
                      {exp.startDate} - {exp.isCurrentJob ? "Present" : exp.endDate}
                    </p>
                    <p className="text-gray-300 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <Card className="glass-effect border-gray-600 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Skills ({data.skills.length})</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <Card className="glass-effect border-gray-600 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Projects ({data.projects.length})</h3>
              <div className="space-y-4">
                {data.projects.map((project) => (
                  <div key={project.id} className="border-l-2 border-green-500 pl-4">
                    <p className="text-white font-medium">{project.title}</p>
                    <p className="text-gray-300 mt-1">{project.description}</p>
                    {project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-4 mt-2 text-sm">
                      {project.githubLink && (
                        <a href={project.githubLink} className="text-blue-400 hover:underline">GitHub</a>
                      )}
                      {project.liveDemo && (
                        <a href={project.liveDemo} className="text-green-400 hover:underline">Live Demo</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Achievements */}
          {data.achievements.length > 0 && (
            <Card className="glass-effect border-gray-600 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Achievements ({data.achievements.length})</h3>
              <div className="space-y-3">
                {data.achievements.map((achievement) => (
                  <div key={achievement.id} className="border-l-2 border-yellow-500 pl-4">
                    <p className="text-white font-medium">{achievement.title}</p>
                    <p className="text-gray-300">{achievement.organization}</p>
                    <p className="text-gray-400 text-sm">{achievement.date}</p>
                    {achievement.description && <p className="text-gray-300 mt-1">{achievement.description}</p>}
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        <div className="flex justify-between pt-6">
          <Button 
            onClick={onPrevious}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white px-8 py-2"
          >
            Previous
          </Button>
          <Button 
            onClick={handleGenerate}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-2 rounded-lg transition-all duration-300 hover:scale-105 animate-glow"
          >
            🚀 Generate Resume & Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Summary;