// src/components/About.jsx
import React from 'react';
import { instituteData } from '../instituteData';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    const benefits = [
        "Small batch sizes for individual attention",
        "Experienced faculty focused on concepts",
        "Regular testing and performance tracking",
        "Safe and conducive learning environment"
    ];

    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-yellow-200 rounded-3xl -z-10"></div>
                        <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-blue-200 rounded-3xl -z-10"></div>
                        <img
                            src={instituteData.aboutImage}
                            alt="Classroom environment"
                            className="rounded-3xl shadow-2xl relative z-10 w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 relative z-10">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">About Us</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
                            Why Parents Trust <br />
                            <span className="text-yellow-500">{instituteData.name}?</span>
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            We believe that every student has potential. Our methodology moves beyond rote learning, focusing on building a strong conceptual foundation that helps students succeed not just in exams, but in their future academics.
                        </p>

                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3 text-blue-900 font-medium">
                                    <CheckCircle2 className="text-yellow-500 flex-shrink-0" size={24} />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;