// src/components/Testimonials.jsx
import React from 'react';
import { instituteData } from '../instituteData';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-blue-50">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        What Parents Say
                    </h2>
                    <p className="text-lg text-gray-600">
                        The success stories that motivate us every day.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {instituteData.testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow relative flex flex-col h-full">
                            {/* Big quote icon for style */}
                            <Quote className="absolute top-6 right-6 text-blue-100 w-12 h-12 rotate-180" />

                            <div className="flex-grow relative z-10">
                                {/* 5 Stars */}
                                <div className="flex gap-1 text-yellow-400 mb-6">
                                    {[1, 2, 3, 4, 5].map(star => (<span>★</span>))}
                                </div>
                                <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                                    "{testimonial.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                {/* Dummy avatar placeholder using initials */}
                                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-xl">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                                    <p className="text-sm text-blue-500">{testimonial.type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;