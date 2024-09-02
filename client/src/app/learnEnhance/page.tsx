import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navtop from '../components/Navtop';

const LearnAndEnhance: React.FC = () => {
  return (
    <>
    <Navtop />
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-5">
      <header className="bg-white shadow-lg rounded-lg p-4 mb-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 text-center">Learn and Enhance Your Skills</h1>
        </div>
      </header>

      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="https://plus.unsplash.com/premium_photo-1661767552224-ef72bb6b671f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Web Development"
            width={500}
            height={300}
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Web Development Fundamentals</h2>
          <p className="text-gray-600 mb-4">Master the basics of web development including HTML, CSS, and JavaScript. Learn how to build responsive websites and web applications.</p>
          <a href="#" className="text-blue-600 hover:underline">Learn More</a>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="https://plus.unsplash.com/premium_photo-1676998931123-75789162f170?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="React"
            width={500}
            height={300}
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Advanced React Techniques</h2>
          <p className="text-gray-600 mb-4">Dive deeper into React with advanced topics like Hooks, Context API, and performance optimization. Perfect for experienced developers looking to enhance their skills.</p>
          <a href="#" className="text-blue-600 hover:underline">Learn More</a>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Data Science"
            width={500}
            height={300}
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Data Science with Python</h2>
          <p className="text-gray-600 mb-4">Explore data science concepts using Python. Learn about data analysis, visualization, and machine learning techniques with hands-on projects.</p>
          <a href="#" className="text-blue-600 hover:underline">Learn More</a>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="UI/UX Design"
            width={500}
            height={300}
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-blue-600 mb-2">UI/UX Design Essentials</h2>
          <p className="text-gray-600 mb-4">Understand the principles of UI/UX design. Learn how to create user-friendly interfaces and improve user experiences through design thinking and prototyping.</p>
          <a href="#" className="text-blue-600 hover:underline">Learn More</a>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Digital Marketing"
            width={500}
            height={300}
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Digital Marketing Strategies</h2>
          <p className="text-gray-600 mb-4">Learn effective digital marketing strategies to grow your online presence. Covering SEO, content marketing, social media, and more.</p>
          <a href="#" className="text-blue-600 hover:underline">Learn More</a>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cybersecurity"
            width={500}
            height={300}
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Cybersecurity Basics</h2>
          <p className="text-gray-600 mb-4">Get introduced to the field of cybersecurity. Learn about common threats, defensive measures, and best practices to protect digital information.</p>
          <a href="#" className="text-blue-600 hover:underline">Learn More</a>
        </div>
      </section>

    </div>
      <Footer />
    </>
  );
};

export default LearnAndEnhance;
