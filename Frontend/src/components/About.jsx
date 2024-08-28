import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="bg-white-100 min-h-screen p-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <header className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4 text-pink-600">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to Bookstore, where you can find the best books and more.
          </p>
        </header>
        
        {/* Introduction Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600 text-center">Our Story</h2>
          <p className="text-gray-700 mb-4">
            At Bookstore, we believe in the magic of books. Our journey began with a simple passion for reading and sharing knowledge. From a small local shop to a thriving bookstore, we've grown thanks to our loyal customers and dedicated team.
          </p>
          <p className="text-gray-700 mb-4">
            Our founder, started the bookstore with a vision of creating a community hub for book lovers. What started as a humble beginning in a quaint corner of the city quickly became a beloved landmark. Over the years, we've expanded our collection to include not only bestsellers but also rare finds and unique titles that cater to every interest.
          </p>
          <p className="text-gray-700 mb-4">
            We've hosted numerous events, including author signings, book clubs, and literary workshops, fostering a vibrant community of readers and writers. Our commitment to supporting local authors and providing a platform for emerging talent has been a cornerstone of our success.
          </p>
          <p className="text-gray-700">
            As we look to the future, we remain dedicated to enriching lives through the joy of reading. We continue to innovate and adapt to the evolving needs of our customers while staying true to the core values that have guided us from the beginning.
          </p>
        </section>
        
        {/* Mission Statement Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600 text-center">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to provide a diverse range of books and create a space where readers can discover, learn, and grow. We aim to foster a love for reading and support our community by offering exceptional service and a welcoming atmosphere.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center py-6">
          <Link to="/" className="text-pink-500 hover:underline">Back to Home</Link>
        </footer>
      </div>
    </div>
  );
}

export default About;
