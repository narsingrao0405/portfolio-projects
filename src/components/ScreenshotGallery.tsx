import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface ScreenshotGalleryProps {
    projectName: string;
    screenshotFolder: string;
    screenshots: string[];
    className?: string;
}

const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({
    projectName,
    screenshotFolder,
    screenshots,
    className = ''
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
                <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg group">
                    {/* Main Image */}
                    <div className="relative aspect-video">
                        <img
                            src={getImagePath(getCurrentScreenshot())}
                            alt={`${projectName} - ${getCurrentScreenshot().replace('.png', '').replace('.jpg', '').replace('.jpeg', '')}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `data:image/svg+xml;base64,${btoa(`
                  <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#f3f4f6"/>
                    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="16">
                      Image not found
                    </text>
                  </svg>
                `)}`;
                            }}
                        />

                        {/* Overlay with controls */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                            <button
                                onClick={openModal}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-opacity-30"
                                aria-label="Open full-size view"
                            >
                                <ZoomIn size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    {screenshots.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
                                aria-label="Next image"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </>
                    )}

                    {/* Auto-play toggle */}
                    {screenshots.length > 1 && (
                        <button
                            onClick={() => setIsAutoPlay(!isAutoPlay)}
                            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            {isAutoPlay ? 'Pause' : 'Play'}
                        </button>
                    )}
                </div>

                {/* Thumbnail Navigation */}
                {screenshots.length > 1 && (
                    <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
                        {screenshots.map((screenshot, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`flex-shrink-0 w-16 h-12 rounded border-2 transition-all duration-200 ${index === currentIndex
                                        ? 'border-blue-500 ring-2 ring-blue-200'
                                        : 'border-gray-300 hover:border-gray-400'
                                    }`}
                            >
                                <img
                                    src={getImagePath(screenshot)}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover rounded"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="64" height="48" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#f3f4f6"/>
                        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="10">N/A</text>
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
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-7xl max-h-full">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 z-10 hover:bg-opacity-70"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>

                        {/* Navigation in modal */}
                        {screenshots.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70"
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}

                        {/* Modal Image */}
                        <img
                            src={getImagePath(getCurrentScreenshot())}
                            alt={`${projectName} - ${getCurrentScreenshot().replace('.png', '').replace('.jpg', '').replace('.jpeg', '')}`}
                            className="max-w-full max-h-full object-contain rounded-lg"
                            onClick={closeModal}
                        />

                        {/* Modal Caption */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-center">
                            <p className="font-medium">{projectName}</p>
                            <p className="text-sm opacity-75">
                                {getCurrentScreenshot().replace('.png', '').replace('.jpg', '').replace('.jpeg', '')}
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
