import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { FiArrowRight } from 'react-icons/fi';

const CallToAction = () => {
    return (
        <section className="section-padding bg-primary-600 text-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make Learning Fun?</h2>
                        <p className="text-lg text-primary-100 mb-8 max-w-lg">
                            Join thousands of parents and teachers who are transforming how children learn with KidJig's interactive platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="secondary"
                                size="lg"
                                icon={<FiArrowRight />}
                            >
                                Start Free Trial
                            </Button>
                            <Button
                                variant="ghost"
                                size="lg"
                                className="bg-primary-700 text-white hover:bg-primary-800"
                            >
                                Schedule Demo
                            </Button>
                        </div>
                        <p className="mt-4 text-sm text-primary-200">No credit card required. Cancel anytime.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-white p-6 rounded-2xl shadow-xl">
                            <div className="flex items-center mb-6">
                                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-800 mb-2">Daily Learning Progress</h4>
                                    <div className="flex items-center">
                                        <div className="w-full bg-gray-200 rounded-full h-4 mr-2">
                                            <div className="bg-accent-500 h-4 rounded-full" style={{ width: '75%' }}></div>
                                        </div>
                                        <span className="text-gray-800 font-medium">75%</span>
                                    </div>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-800 mb-2">Activities Completed</h4>
                                    <div className="grid grid-cols-7 gap-1">
                                        {[...Array(7)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-8 rounded ${i < 5 ? 'bg-primary-500' : 'bg-gray-300'}`}
                                            ></div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                                        <span>Mon</span>
                                        <span>Tue</span>
                                        <span>Wed</span>
                                        <span>Thu</span>
                                        <span>Fri</span>
                                        <span>Sat</span>
                                        <span>Sun</span>
                                    </div>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-800 mb-2">Achievements</h4>
                                    <div className="flex space-x-2">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="bg-secondary-100 p-2 rounded-full">
                                                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-500 rounded-full opacity-20 z-0"></div>
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-500 rounded-full opacity-20 z-0"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;