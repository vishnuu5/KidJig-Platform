import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Card } from '../components/ui/Card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Parent of 2',
            avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
            content: 'KidJig has been a game-changer for my children\'s education. They look forward to their daily activities and have shown remarkable improvement in math and reading skills.',
            rating: 5,
        },
        {
            id: 2,
            name: 'Michael Thompson',
            role: 'Elementary Teacher',
            avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
            content: 'As a teacher, I\'ve recommended KidJig to all the parents in my class. The activities align perfectly with our curriculum and make learning fun for the students.',
            rating: 5,
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Parent of 3',
            avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
            content: 'My kids have different learning styles and ages, but KidJig has something for each of them. The personalized learning paths have been incredibly effective.',
            rating: 4,
        },
        {
            id: 4,
            name: 'David Wilson',
            role: 'Education Specialist',
            avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
            content: 'The research-backed approach to learning on KidJig is impressive. I\'ve seen significant cognitive development in children who use the platform regularly.',
            rating: 5,
        },
    ];

    return (
        <section className="section-padding bg-primary-50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What Parents & Teachers Say</h2>
                    <p className="text-lg text-gray-600">
                        Don't just take our word for it. Here's what our community has to say about KidJig.
                    </p>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="testimonials-slider pb-12"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <Card className="h-full p-6">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.avatar || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400">
                                            {i < testimonial.rating ? (
                                                <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5 inline text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            )}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;