import { FaRegNewspaper } from 'react-icons/fa';

import { latestPosts } from '@/utils/data/blog';

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="bg-gray-100 dark:bg-gray-800 py-16 w-full"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center mb-8">
          <FaRegNewspaper className="mr-4 text-3xl text-indigo-500 dark:text-indigo-400" />
          <h2 className="text-3xl font-bold">Latest Updates</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map(post => (
            <a
              key={post.title}
              href={post.url}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {post.date}
                  </p>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-500 text-white font-bold text-sm">
                    Read more
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
