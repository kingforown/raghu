import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';

const CategorySection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our curated collections designed for the modern urban lifestyle
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div className="aspect-square relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-300 mb-4">
                  {category.count} Products
                </p>
                <div className="flex items-center text-orange-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Explore Collection
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;