import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Traditional Indian Pottery",
      excerpt:
        "Discover the ancient techniques and cultural significance behind Indian pottery making...",
      image:
        "https://images.squarespace-cdn.com/content/v1/625a6c789b6f1b4ea88e3fdb/1685616218576-FDE45AA7VDJPR92SSXT0/ceramics+on+a+dresser.png",
      date: "March 15, 2024",
      author: "Priya Sharma",
      category: "Crafts",
    },
    {
      id: 2,
      title: "Preserving Heritage: Indian Textile Traditions",
      excerpt:
        "Exploring the rich history and techniques of traditional Indian textile weaving...",
      image:
        "https://blog.lio.io/wp-content/uploads/2022/03/Blogs-Images-53.jpg",
      date: "March 12, 2024",
      author: "Rahul Verma",
      category: "Textiles",
    },
    {
      id: 3,
      title: "The Stories Behind Indian Jewelry",
      excerpt:
        "Each piece of traditional Indian jewelry tells a unique story of culture and craftsmanship...",
      image:
        "https://www.vummidi.com/blog/wp-content/uploads/2024/06/Diamond-Timeless-Beauty.jpg",
      date: "March 10, 2024",
      author: "Anita Desai",
      category: "Jewelry",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover stories about Indian handicrafts, artisans, and cultural heritage
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-64"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar size={16} className="mr-2" />
                {post.date}
                <span className="mx-2">•</span>
                <User size={16} className="mr-2" />
                {post.author}
              </div>
              <span className="inline-block px-3 py-1 text-sm font-medium text-primary-600 bg-primary-50 rounded-full mb-4">
                {post.category}
              </span>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700"
              >
                Read More
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;