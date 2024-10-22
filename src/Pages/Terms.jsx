import React from 'react';

export default function TermsOfService() {
  return (
    <div className=" w-full flex flex-col justify-start items-center py-12 px-8 bg-transparent text-white">
      <h1 className='text-4xl font-bold mb-6'>Terms of Service</h1>

      <p className='text-lg mb-6'>
        Welcome to our platform! By accessing or using our services, you agree to comply with and be bound by these Terms of Service. Please read them carefully.
      </p>

      <div className='max-w-3xl w-full'>
        <h2 className='text-3xl font-semibold mt-6 mb-4'>1. Acceptance of Terms</h2>
        <p className='mb-4'>
          By using our services, you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.
        </p>

        <h2 className='text-3xl font-semibold mt-6 mb-4'>2. Use of Our Services</h2>
        <p className='mb-4'>
          You must use our services in compliance with applicable laws and regulations. You agree not to engage in any prohibited activities, including but not limited to:
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li>Unauthorized access to our systems or networks</li>
          <li>Using our services for illegal activities</li>
          <li>Distributing malware or other harmful software</li>
          <li>Harassing or intimidating other users</li>
        </ul>

        <h2 className='text-3xl font-semibold mt-6 mb-4'>3. Intellectual Property</h2>
        <p className='mb-4'>
          All content, features, and functionality on our platform, including but not limited to text, graphics, logos, and software, are the exclusive property of our company and protected by copyright, trademark, and other intellectual property laws.
        </p>

        <h2 className='text-3xl font-semibold mt-6 mb-4'>4. Disclaimer of Warranties</h2>
        <p className='mb-4'>
          Our services are provided on an "as-is" and "as-available" basis without any warranties of any kind. We do not guarantee that our services will be uninterrupted or error-free.
        </p>

        <h2 className='text-3xl font-semibold mt-6 mb-4'>5. Limitation of Liability</h2>
        <p className='mb-4'>
          To the fullest extent permitted by law, we will not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
        </p>

        <h2 className='text-3xl font-semibold mt-6 mb-4'>6. Changes to These Terms</h2>
        <p className='mb-4'>
          We may modify these Terms of Service from time to time. We will notify you of any changes by posting the new terms on this page. Your continued use of our services after any changes constitutes your acceptance of the new terms.
        </p>

        <h2 className='text-3xl font-semibold mt-6 mb-4'>7. Contact Us</h2>
        <p className='mb-4'>
          If you have any questions about these Terms of Service, please contact us at:
        </p>
        <p>
          <a href="mailto:contact@yourdomain.com" className='text-blue-300 underline'>contact@yourdomain.com</a>
        </p>
      </div>
    </div>
  );
}
