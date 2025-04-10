import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiAward, FiShield } from 'react-icons/fi';
import { Card } from '../components/ui/Card';

const Features = () => {
    const features = [
        {
            icon: <FiBookOpen className="w-6 h-6" />,
            title: 'Interactive Learning',
            description: 'Engaging activities that make learning fun and effective for children of all ages.',
            color: 'bg-primary-100 text-primary-600',
        },
        {
            icon: <FiUsers className="w-6 h-6" />,
            title: 'Social Skills',
            description: 'Collaborative games that help children develop important social and emotional skills.',
            color: 'bg-secondary-100 text-secondary-600',
        },
        {
            icon: <FiAward className="w-6 h-6" />,
            title: 'Achievement System',
            description: 'Reward-based learning that motivates children to reach their educational goals.',
            color: 'bg-accent-100 text-accent-600',
        },
        {
            icon: <FiShield className="w-6 h-6" />,
            title: 'Child-Safe Content',
            description: 'All content is carefully curated and age-appropriate for a safe learning environment.',
            color: 'bg-green-100 text-green-600',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Parents & Teachers Love KidJig</h2>
                    <p className="text-lg text-gray-600">
                        Our platform is designed with education experts to provide the best learning experience for children.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="p-6 h-full">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.color}`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;