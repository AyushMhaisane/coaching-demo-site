import React from 'react';
import { instituteData } from '../instituteData';
import { BookOpen, Globe, Trophy } from 'lucide-react'; // Import icons

// Helper to pick icons based on name
const getIcon = (iconName) => {
    if (iconName === 'Globe') return <Globe className="w-8 h-8 text-blue-500" />;
    if (iconName === 'Trophy') return <Trophy className="w-8 h-8 text-yellow-500" />;
    return <BookOpen className="w-8 h-8 text-blue-500" />;
};

const Services = () => {
    return (
        <section id="courses" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Courses</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {instituteData.courses.map((course, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border-b-4 border-blue-600">
                            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                {getIcon(course.icon)}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
                            <p className="text-gray-600">{course.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;