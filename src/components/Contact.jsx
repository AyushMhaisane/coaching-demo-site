import React from 'react';
import { instituteData } from '../instituteData';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-blue-900 text-white relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-12">

                    {/* LEFT: Contact Info & Map */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6">Visit Our Center</h2>
                        <p className="text-blue-200 mb-8">
                            Come meet our teachers and see the classrooms. We are conveniently located near PCCOE College.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg">
                                    <MapPin className="text-yellow-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Address</h4>
                                    <p className="text-blue-200 text-sm leading-relaxed">
                                        {instituteData.address}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg">
                                    <Phone className="text-yellow-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Phone</h4>
                                    <p className="text-blue-200">{instituteData.phone}</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Embed (Pointing to Nigdi Pradhikaran area) */}
                        <div className="rounded-xl overflow-hidden border-2 border-white/20 shadow-lg h-64 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.273180572864!2d73.75932827519485!3d18.65172828246743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e658f3388d%3A0xc486411d718229c7!2sNigdi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703140000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Institute Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* RIGHT: Lead Capture Form */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-blue-900 mb-2">Book a Free Demo Class</h3>
                            <p className="text-gray-500 mb-6 text-sm">
                                Fill this form and our academic counselor will call you within 24 hours.
                            </p>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                                    <input type="text" placeholder="Enter student's name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent's Mobile Number</label>
                                    <input type="tel" placeholder="Enter 10-digit number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                                            <option>Class 8</option>
                                            <option>Class 9</option>
                                            <option>Class 10</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Board</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                                            <option>State Board</option>
                                            <option>CBSE</option>
                                        </select>
                                    </div>
                                </div>

                                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 rounded-xl shadow-lg transition transform hover:-translate-y-1 mt-2">
                                    Schedule My Free Class
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;