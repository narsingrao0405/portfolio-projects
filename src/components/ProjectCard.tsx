import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ScreenshotGallery from './ScreenshotGallery';
import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            {/* Project Header */}
            <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                    <div className="flex space-x-2">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                                aria-label="View on GitHub"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                aria-label="View live demo"
                            >
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Screenshot Gallery */}
            <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Screenshots</h4>
                <ScreenshotGallery
                    projectName={project.name}
                    screenshotFolder={project.screenshotFolder}
                    screenshots={project.screenshots}
                    className="mb-6"
                />
            </div>

            {/* Features */}
            <div className="p-6 pt-0">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer with links */}
            <div className="p-6 pt-0 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                    {project.screenshots.length} screenshot{project.screenshots.length !== 1 ? 's' : ''} available
                </div>
                <div className="flex space-x-3">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                        >
                            <Github size={16} className="mr-2" />
                            View Code
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
