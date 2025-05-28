import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";

const ProjectsForm = ({ data, onUpdate, onNext, onPrevious }) => {
  const [projects, setProjects] = useState(
    data.length > 0
      ? data
      : [
          {
            id: crypto.randomUUID(),
            title: "",
            description: "",
            techStack: [],
            githubLink: "",
            liveDemo: "",
          },
        ]
  );

  const updateProject = (id, field, value) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, [field]: value } : p
    );
    setProjects(updated);
    onUpdate(updated);
  };

  const addProject = () => {
    const newProject = {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      techStack: [],
      githubLink: "",
      liveDemo: "",
    };
    const updated = [...projects, newProject];
    setProjects(updated);
    onUpdate(updated);
  };

  const removeProject = (id) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    onUpdate(updated);
  };

  const addTech = (id, tech) => {
    if (!tech.trim()) return;
    const project = projects.find((p) => p.id === id);
    if (project && !project.techStack.includes(tech)) {
      updateProject(id, "techStack", [...project.techStack, tech]);
    }
  };

  const removeTech = (id, tech) => {
    const project = projects.find((p) => p.id === id);
    if (project) {
      updateProject(
        id,
        "techStack",
        project.techStack.filter((t) => t !== tech)
      );
    }
  };

  const handleSubmit = (e) => {
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
                          const input = e.target;
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

