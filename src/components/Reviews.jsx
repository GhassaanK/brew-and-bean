import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Importing icons for rating

const reviewsData = [
  {
    id: 1,
    name: 'John Doe',
    review: 'Amazing service! Will definitely come back.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'Good experience, but could improve in some areas.',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 3,
    name: 'Mark Taylor',
    review: 'Not satisfied with the service. Could be better.',
    rating: 2,
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="bg-gray-100 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-serif text-center text-[#4B2E2B] mb-12">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviewsData.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <h3 className="text-xl font-semibold text-[#4B2E2B]">{review.name}</h3>
            </div>
            <p className="text-gray-600 mb-4">{review.review}</p>
            <div className="flex space-x-1 text-yellow-500">
              {/* Render filled and empty stars for the rating */}
              {[...Array(5)].map((_, index) => (
                index < review.rating ? <FaStar key={index} /> : <FaRegStar key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
