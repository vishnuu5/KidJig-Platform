import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Activities = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Activities' },
        { id: 'math', name: 'Math' },
        { id: 'science', name: 'Science' },
        { id: 'reading', name: 'Reading' },
        { id: 'art', name: 'Art & Craft' },
    ];

    const activities = [
        {
            id: 1,
            title: 'Number Adventure',
            category: 'math',
            image: 'https://img.freepik.com/free-vector/hand-drawn-mathematics-background_23-2148157511.jpg?w=740&t=st=1712704000~exp=1712704600~hmac=c9e0a5f5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5',
            duration: '15 min',
            ageRange: '5-7 years',
            description: 'Learn counting and basic addition through an exciting adventure game.',
        },
        {
            id: 2,
            title: 'Space Explorer',
            category: 'science',
            image: 'https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?w=740&t=st=1712704000~exp=1712704600~hmac=c9e0a5f5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5',
            duration: '20 min',
            ageRange: '6-9 years',
            description: 'Discover the solar system and learn about planets through interactive games.',
        },
        {
            id: 3,
            title: 'Story Time',
            category: 'reading',
            image: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334862.jpg?w=740&t=st=1712704000~exp=1712704600~hmac=c9e0a5f5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5',
            duration: '15 min',
            ageRange: '4-8 years',
            description: 'Interactive stories that improve reading comprehension and vocabulary.',
        },
        {
            id: 4,
            title: 'Colorful Creations',
            category: 'art',
            image: 'https://img.freepik.com/free-vector/hand-drawn-art-supplies-collection_23-2149214332.jpg?w=740&t=st=1712704000~exp=1712704600~hmac=c9e0a5f5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5',
            duration: '25 min',
            ageRange: '3-10 years',
            description: 'Express creativity through guided drawing and coloring activities.',
        },
        {
            id: 5,
            title: 'Fraction Fun',
            category: 'math',
            image: 'https://img.freepik.com/free-vector/colorful-math-symbols-pattern_23-2148174097.jpg?w=740&t=st=1712704000~exp=1712704600~hmac=c9e0a5f5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5',
            duration: '20 min',
            ageRange: '7-10 years',
            description: 'Learn fractions through pizza-making and cake-sharing games.',
        },
        {
            id: 6,
            title: 'Animal Kingdom',
            category: 'science',
            image: 'https://img.freepik.com/free-vector/hand-drawn-wild-animals-collection_23-2149093417.jpg?w=740&t=st=1712704000~exp=1712704600~hmac=c9e0a5f5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5a5d5',
            duration: '15 min',
            ageRange: '4-8 years',
            description: 'Explore different animal habitats and learn about wildlife conservation.',
        },
    ];

    const filteredActivities = activeCategory === 'all'
        ? activities
        : activities.filter(activity => activity.category === activeCategory);

    return (
        <section className="section-padding">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Learning Activities</h2>
                    <p className="text-lg text-gray-600">
                        Explore our collection of fun and educational activities designed by experts.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Activities Slider */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="activities-slider"
                >
                    {filteredActivities.map((activity) => (
                        <SwiperSlide key={activity.id}>
                            <Card className="h-full overflow-hidden">
                                <div className="relative h-48">
                                    <img
                                        src={activity.image || "/placeholder.svg"}
                                        alt={activity.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <Badge
                                        variant={
                                            activity.category === 'math' ? 'primary' :
                                                activity.category === 'science' ? 'secondary' :
                                                    activity.category === 'reading' ? 'accent' :
                                                        'success'
                                        }
                                        className="absolute top-3 right-3"
                                    >
                                        {activity.category}
                                    </Badge>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="flex items-center text-sm text-gray-500">
                                            <FiClock className="mr-1" /> {activity.duration}
                                        </span>
                                        <span className="text-sm text-gray-500">{activity.ageRange}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                                    <p className="text-gray-600 mb-4">{activity.description}</p>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                        icon={<FiArrowRight />}
                                    >
                                        Start Activity
                                    </Button>
                                </div>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="text-center mt-10">
                    <Button variant="primary" size="lg">
                        View All Activities
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Activities;