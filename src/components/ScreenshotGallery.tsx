import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface ScreenshotGalleryProps {
    projectName: string;
    screenshotFolder: string;
    screenshots: string[];
    className?: string;
    displayType?: 'mobile' | 'web';
}

const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({
    projectName,
    screenshotFolder,
    screenshots,
    className = '',
    displayType = 'web'
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlay && screenshots.length > 1 && !isModalOpen) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
                );
            }, 4000); // Change image every 4 seconds

            return () => clearInterval(interval);
        }
    }, [isAutoPlay, screenshots.length, isModalOpen]);

    // Return early if no screenshots
    if (!screenshots || screenshots.length === 0) {
        return (
            <div className="bg-gray-100 rounded-lg p-8 text-center">
                <p className="text-gray-500">No screenshots available for this project</p>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
        );
    };

    const openModal = () => {
        setIsModalOpen(true);
        setIsAutoPlay(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsAutoPlay(true);
    };

    const getImagePath = (screenshot: string) => {
        return `/${screenshotFolder}/screenshots/${screenshot}`;
    };

    const getCurrentScreenshot = () => screenshots[currentIndex];

    return (
        <>
            <div className={`relative ${className}`}>
                {/* Main Gallery Container */}
                {displayType === 'mobile' ? (
                    // Mobile App Display (iPhone Frame)
                    <div className="relative bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl group max-w-xs mx-auto">
                        {/* iPhone 16 Frame */}
                        <div className="relative aspect-[9/19.5] bg-black rounded-[2.5rem] p-1">
                            {/* Dynamic Island */}
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20"></div>

                            {/* Screen Content - Clean display of actual screenshots */}
                            <div className="relative h-full bg-white rounded-[2.2rem] overflow-hidden">
                                <img
                                    src={getImagePath(getCurrentScreenshot())}
                                    alt={`${projectName} - ${getCurrentScreenshot().replace('.png', '').replace('.jpg', '').replace('.jpeg', '').replace('.svg', '')}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="400" height="867" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#f3f4f6"/>
                          <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="16">
                            Image not found
                          </text>
                        </svg>
                      `)}`;
                                    }}
                                />
                            </div>
                        </div>

                        {/* Overlay with controls for mobile */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center rounded-[2.5rem]">
                            <button
                                onClick={openModal}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-opacity-30"
                                aria-label="Open full-size view"
                            >
                                <ZoomIn size={20} />
                            </button>
                        </div>

                        {/* Navigation Arrows for mobile */}
                        {screenshots.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70 z-10"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70 z-10"
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </>
                        )}

                        {/* Auto-play toggle for mobile */}
                        {screenshots.length > 1 && (
                            <button
                                onClick={() => setIsAutoPlay(!isAutoPlay)}
                                className="absolute top-3 right-3 bg-black bg-opacity-50 text-white rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                            >
                                {isAutoPlay ? 'Pause' : 'Play'}
                            </button>
                        )}
                    </div>
                ) : (
                    // Web Application Display (Browser Frame)
                    <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl group max-w-4xl mx-auto">
                        {/* Browser Header */}
                        <div className="bg-gray-700 px-4 py-3 flex items-center space-x-2">
                            <div className="flex space-x-1.5">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="flex-1 bg-gray-600 rounded-md px-3 py-1 ml-4">
                                <span className="text-gray-300 text-sm">🔒 {projectName.toLowerCase().replace(/\s+/g, '')}.com</span>
                            </div>
                        </div>

                        {/* Web Screenshot Content */}
                        <div className="relative bg-white">
                            <img
                                src={getImagePath(getCurrentScreenshot())}
                                alt={`${projectName} - ${getCurrentScreenshot().replace('.png', '').replace('.jpg', '').replace('.jpeg', '').replace('.svg', '')}`}
                                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#f3f4f6"/>
                          <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="24">
                            Web Screenshot Not Found
                          </text>
                        </svg>
                      `)}`;
                                }}
                            />
                        </div>

                        {/* Overlay with controls for web */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                            <button
                                onClick={openModal}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 text-white hover:bg-opacity-30"
                                aria-label="Open full-size view"
                            >
                                <ZoomIn size={24} />
                            </button>
                        </div>

                        {/* Navigation Arrows for web */}
                        {screenshots.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70 z-10"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70 z-10"
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </>
                        )}

                        {/* Auto-play toggle for web */}
                        {screenshots.length > 1 && (
                            <button
                                onClick={() => setIsAutoPlay(!isAutoPlay)}
                                className="absolute top-16 right-4 bg-black bg-opacity-50 text-white rounded px-3 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                            >
                                {isAutoPlay ? 'Pause' : 'Play'}
                            </button>
                        )}
                    </div>
                )}

                {/* Thumbnail Navigation */}
                {screenshots.length > 1 && (
                    <div className="mt-6 flex justify-center space-x-2 overflow-x-auto pb-2">
                        {screenshots.map((screenshot, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`flex-shrink-0 ${displayType === 'mobile' ? 'w-6 h-12' : 'w-12 h-8'} rounded-xl border-2 transition-all duration-200 ${index === currentIndex
                                    ? 'border-blue-500 ring-2 ring-blue-200 shadow-lg'
                                    : 'border-gray-300 hover:border-gray-400'
                                    }`}
                            >
                                <img
                                    src={getImagePath(screenshot)}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        const size = displayType === 'mobile' ? '32,56' : '48,32';
                                        target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="${size.split(',')[0]}" height="${size.split(',')[1]}" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" fill="#f3f4f6"/>
                            <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="8">N/A</text>
                          </svg>
                        `)}`;
                                    }}
                                />
                            </button>
                        ))}
                    </div>
                )}

                {/* Image Counter */}
                {screenshots.length > 1 && (
                    <div className="mt-2 text-center text-sm text-gray-600">
                        {currentIndex + 1} of {screenshots.length}
                    </div>
                )}
            </div>

            {/* Full-size Modal */}
            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
                        <div className={`relative ${displayType === 'mobile' ? 'max-w-sm' : 'max-w-6xl'} max-h-full`}>
                            {/* Close button */}
                            <button
                                onClick={closeModal}
                                className="absolute -top-12 right-0 bg-black bg-opacity-50 text-white rounded-full p-2 z-10 hover:bg-opacity-70"
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>

                            {/* Navigation in modal */}
                            {screenshots.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 z-10"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 z-10"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}

                            {/* Modal Content - Display based on type */}
                            {displayType === 'mobile' ? (
                                // Mobile Modal Frame
                                <div className="relative bg-gray-900 rounded-[2.5rem] shadow-2xl p-1 max-h-screen max-w-xs">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20"></div>

                                    <div className="relative aspect-[9/19.5] bg-black rounded-[2.5rem] overflow-hidden">
                                        <div className="relative h-full bg-white rounded-[2.2rem] overflow-hidden">
                                            <img
                                                src={getImagePath(getCurrentScreenshot())}
                                                alt={`${projectName} - ${getCurrentScreenshot().replace('.png', '').replace('.jpg', '').replace('.jpeg', '').replace('.svg', '')}`}
                                                className="w-full h-full object-cover"
                                                onClick={closeModal}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Web Modal Frame
                                <div className="relative bg-gray-800 rounded-lg shadow-2xl max-h-screen overflow-hidden">
                                    {/* Browser Header */}
                                    <div className="bg-gray-700 px-4 py-3 flex items-center space-x-2">
                                        <div className="flex space-x-1.5">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                        <div className="flex-1 bg-gray-600 rounded-md px-3 py-1 ml-4">
                                            <span className="text-gray-300 text-sm">🔒 {projectName.toLowerCase().replace(/\s+/g, '')}.com</span>
                                        </div>
                                    </div>

                                    {/* Web Screenshot in Modal */}
                                    <div className="relative bg-white max-h-[80vh] overflow-auto">
                                        <img
                                            src={getImagePath(getCurrentScreenshot())}
                                            alt={`${projectName} - ${getCurrentScreenshot().replace('.png', '').replace('.jpg', '').replace('.jpeg', '').replace('.svg', '')}`}
                                            className="w-full h-auto object-contain"
                                            onClick={closeModal}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Modal Caption */}
                            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-center">
                                <p className="font-medium">{projectName}</p>
                                <p className="text-sm opacity-75">
                                    {getCurrentScreenshot().replace('.png', '').replace('.jpg', '').replace('.jpeg', '').replace('.svg', '')}
                                    ({currentIndex + 1} of {screenshots.length})
                                </p>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
};

export default ScreenshotGallery;
