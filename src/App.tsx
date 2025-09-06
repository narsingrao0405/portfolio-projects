import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-lg">
                                <Code className="text-white" size={24} />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Portfolio Projects</h1>
                                <p className="text-gray-600">Full-stack developer & software engineer</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://github.com/narsingrao0405"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                                aria-label="GitHub Profile"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/narsing0405"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:narsingrao0405@gmail.com"
                                className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                aria-label="Send Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
                            Welcome to My Portfolio
                        </h2>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-slide-in">
                            Explore my collection of full-stack applications, from customer support systems
                            to business communication tools. Each project showcases modern web technologies
                            and user-centered design principles.
                        </p>
                        <div className="mt-8 flex justify-center space-x-4">
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                                <div className="text-2xl font-bold">{projects.length}</div>
                                <div className="text-sm opacity-80">Projects</div>
                            </div>
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                                <div className="text-2xl font-bold">
                                    {projects.reduce((sum, project) => sum + project.screenshots.length, 0)}
                                </div>
                                <div className="text-sm opacity-80">Screenshots</div>
                            </div>
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                                <div className="text-2xl font-bold">
                                    {projects.filter(p => p.liveUrl).length}
                                </div>
                                <div className="text-sm opacity-80">Live Demos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Each project includes interactive screenshot galleries to showcase the user interface
                        and key features. Click on any image to explore in full-size view.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid gap-8 lg:gap-12">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Empty State for Projects without Screenshots */}
                {projects.some(p => p.screenshots.length === 0) && (
                    <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">
                            More Screenshots Coming Soon
                        </h3>
                        <p className="text-blue-700">
                            Some projects are still being documented with screenshots.
                            Check back later for complete visual previews of all features.
                        </p>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                                <Code className="text-white" size={20} />
                            </div>
                            <h3 className="text-lg font-semibold">Portfolio Projects</h3>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Built with React, TypeScript, and Tailwind CSS
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a
                                href="https://github.com/narsingrao0405"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/narsing0405"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="mailto:narsingrao0405@gmail.com"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
                            © 2025 Portfolio Projects. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
