import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Hero = () => {
    return (
        <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <Badge variant="primary" size="md" className="mb-4">
                            Fun Learning for Kids
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Discover, Learn, and <span className="text-primary-600">Play</span> with KidJig
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                            Interactive activities and educational games designed to make learning fun and engaging for children of all ages.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <Button
                                variant="primary"
                                size="lg"
                                icon={<FiArrowRight />}
                            >
                                Get Started
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                icon={<FiPlay />}
                                iconPosition="left"
                            >
                                Watch Demo
                            </Button>
                        </div>
                        <div className="mt-8 flex items-center justify-center lg:justify-start">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <img
                                        key={i}
                                        src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`}
                                        alt={`User ${i}`}
                                        className="w-10 h-10 rounded-full border-2 border-white"
                                    />
                                ))}
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium">Trusted by 10,000+ parents</p>
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            className="w-4 h-4 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="ml-1 text-sm font-medium">4.9/5</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            <img
                                src="https://img.freepik.com/free-vector/children-learning-together-concept_23-2148630936.jpg?w=900&t=st=1712704000~exp=1712704600~hmac=c9e0a5f5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5"
                                alt="Kids learning and playing"
                                className="w-full h-auto rounded-2xl shadow-xl"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-100 rounded-full opacity-70 z-0"></div>
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-100 rounded-full opacity-70 z-0"></div>

                        {/* Floating Elements Animation */}
                        <motion.div
                            className="absolute top-10 right-10 w-12 h-12 bg-accent-400 rounded-lg z-20"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        ></motion.div>
                        <motion.div
                            className="absolute bottom-20 left-10 w-8 h-8 bg-primary-400 rounded-full z-20"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                        ></motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;