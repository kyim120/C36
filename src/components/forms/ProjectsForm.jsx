
import { useState } from "react";
import { Project } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ProjectsFormProps {
  data: Project[];
  onUpdate: (data: Project[]) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ProjectsForm = ({ data, onUpdate, onNext, onPrevious }: ProjectsFormProps) => {
  const [projects, setProjects] = useState<Project[]>(
    data.length > 0 ? data : [{
      id: crypto.randomUUID(),
      title: "",
      description: "",
      techStack: [],
      githubLink: "",
      liveDemo: ""
    }]
  );

  const addProject = () => {
    const newProject: Project = {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      techStack: [],
      githubLink: "",
      liveDemo: ""
    };
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    onUpdate(updatedProjects);
  };

  const removeProject = (id: string) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
    onUpdate(updatedProjects);
  };

  const updateProject = (id: string, field: keyof Project, value: string | string[]) => {
    const updatedProjects = projects.map(project =>
      project.id === id ? { ...project, [field]: value } : project
    );
    setProjects(updatedProjects);
    onUpdate(updatedProjects);
  };

  const addTech = (projectId: string, tech: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project && tech && !project.techStack.includes(tech)) {
      updateProject(projectId, "techStack", [...project.techStack, tech]);
    }
  };

  const removeTech = (projectId: string, techToRemove: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      updateProject(projectId, "techStack", project.techStack.filter(tech => tech !== techToRemove));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <div className="glass-effect rounded-xl p-8 hover-glow">
        <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Projects Portfolio
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {projects.map((project, index) => (
            <Card key={project.id} className="glass-effect border-gray-600 p-6 hover-glow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Project {index + 1}</h3>
                {projects.length > 1 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => removeProject(project.id)}
                    className="hover:scale-105 transition-transform"
                  >
                    Remove
                  </Button>
                )}
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-gray-300">Project Title *</Label>
                  <Input
                    value={project.title}
                    onChange={(e) => updateProject(project.id, "title", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="My Awesome Project"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Description *</Label>
                  <Textarea
                    value={project.description}
                    onChange={(e) => updateProject(project.id, "description", e.target.value)}
                    className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 min-h-[100px]"
                    placeholder="Describe your project, its features, and impact..."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">Tech Stack</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add technology"
                      className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const input = e.target as HTMLInputElement;
                          addTech(project.id, input.value);
                          input.value = '';
                        }
                      }}
                    />
                  </div>
                  {project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white cursor-pointer hover:scale-105 transition-transform"
                          onClick={() => removeTech(project.id, tech)}
                        >
                          {tech} ✕
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">GitHub Repository</Label>
                    <Input
                      value={project.githubLink}
                      onChange={(e) => updateProject(project.id, "githubLink", e.target.value)}
                      className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                      placeholder="https://github.com/user/repo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300">Live Demo</Label>
                    <Input
                      value={project.liveDemo}
                      onChange={(e) => updateProject(project.id, "liveDemo", e.target.value)}
                      className="input-glow bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                      placeholder="https://myproject.com"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
          
          <Button
            type="button"
            onClick={addProject}
            variant="outline"
            className="w-full border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-300"
          >
            + Add Another Project
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

export default ProjectsForm;