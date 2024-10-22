import React from 'react';

export default function AboutUs() {
  return (
    <div className=" w-full flex flex-col justify-start items-center py-8 px-12 bg-transparent text-white">
      <h1 className='text-4xl font-bold mb-6'>About Us</h1>

      <p className='text-lg mb-6'>
        Welcome to our platform! We are dedicated to providing exceptional services and experiences to our users. Our mission is to empower individuals and businesses through innovative solutions that enhance productivity and connectivity.
      </p>

      <div className='max-w-3xl w-full'>
        <h2 className='text-3xl font-semibold mt-6 mb-4'>Our Mission</h2>
        <p className='mb-4'>
          Our mission is to create a user-friendly platform that helps people achieve their goals effectively. We strive to build a community where users can access valuable resources, share knowledge, and collaborate to foster growth.
        </p>

        <h2 className='text-3xl font-semibold mt-6 mb-4'>Our Vision</h2>
        <p className='mb-4'>
          We envision a world where technology simplifies tasks and connects individuals. Our vision is to lead the industry in providing innovative solutions that adapt to the evolving needs of our users.
        </p>

        <h2 className='text-3xl font-semibold mt-6 mb-4'>Our Values</h2>
        <ul className='list-disc list-inside mb-4'>
          <li><strong>Integrity:</strong> We operate with transparency and honesty in everything we do.</li>
          <li><strong>Innovation:</strong> We are committed to continuous improvement and creativity in our solutions.</li>
          <li><strong>Customer Focus:</strong> Our users are at the heart of our decisions; we prioritize their needs and feedback.</li>
          <li><strong>Collaboration:</strong> We believe in the power of teamwork and partnerships to achieve shared goals.</li>
        </ul>

        <h2 className='text-3xl font-semibold mt-6 mb-4'>Get in Touch</h2>
        <p className='mb-4'>
          We would love to hear from you! If you have any questions, feedback, or suggestions, feel free to contact us at:
        </p>
        <p>
          <a href="mailto:contact@yourdomain.com" className='text-blue-300 underline'>contact@yourdomain.com</a>
        </p>
      </div>
    </div>
  );
}
