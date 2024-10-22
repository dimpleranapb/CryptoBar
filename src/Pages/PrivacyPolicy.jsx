import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="h-full w-full flex flex-col justify-start items-center py-8 px-12 bg-transparent text-white">
      <h1 className='text-4xl font-bold mb-6'>Privacy Policy</h1>
      
      <p className='text-lg mb-6'>
        Your privacy is important to us. This privacy policy outlines the types of personal information we collect, how we use it, and your rights regarding that information. By using our services, you agree to the collection and use of information in accordance with this policy.
      </p>

      <div className='max-w-3xl w-full'>
        <h2 className='text-3xl font-semibold mt-6 mb-4'>1. Information We Collect</h2>
        <p className='mb-4'>
          We may collect personal information that you provide directly to us, including but not limited to:
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Mailing Address</li>
          <li>Payment Information (if applicable)</li>
        </ul>
        <p className='mb-4'>
          We also collect information automatically, such as your IP address, browser type, and usage information when you interact with our services.
        </p>

        <h2 className='text-3xl font-semibold mt-6 mb-4'>2. How We Use Your Information</h2>
        <p className='mb-4'>
          The information we collect is used to:
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li>Provide and maintain our services</li>
          <li>Improve, personalize, and expand our services</li>
          <li>Understand and analyze how you use our services</li>
          <li>Communicate with you, either directly or through one of our partners</li>
          <li>Process your transactions and send you related information</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2 className='text-3xl font-semibold mt-6 mb-4'>3. Your Rights</h2>
        <p className='mb-4'>
          You have the following rights regarding your personal information:
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li><strong>Access:</strong> You have the right to request copies of your personal information.</li>
          <li><strong>Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
          <li><strong>Erasure:</strong> You have the right to request that we erase your personal information under certain conditions.</li>
          <li><strong>Restriction:</strong> You have the right to request that we restrict the processing of your personal information under certain conditions.</li>
          <li><strong>Data Portability:</strong> You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>

        <h2 className='text-3xl font-semibold mt-6 mb-4'>4. Changes to This Policy</h2>
        <p className='mb-4'>
          We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new policy on this page and updating the effective date.
        </p>

        <h2 className='text-3xl font-semibold mt-6 mb-4'>5. Contact Us</h2>
        <p className='mb-4'>
          If you have any questions or concerns about this privacy policy, please contact us at:
        </p>
        <p>
          <a href="mailto:contact@cryptobar.com" className='text-blue-300 underline'>contact@yourdomain.com</a>
        </p>
      </div>
    </div>
  );
}
