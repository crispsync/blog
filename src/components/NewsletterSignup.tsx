import React, { useState } from 'react';
import axios from 'axios';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://connect.mailerlite.com/api',

        {
          email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-MailerLite-ApiKey': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNWFkYWFhYTViMWVlZDFkMDY3YjQ0YmU1YjZjNTcxYmYzMjQyZDU2M2NmMTM0MmM3MzU4N2E3Yjc5OWNmMTQ2MDI4NTE5YjM3Mzk5Yjk3M2YiLCJpYXQiOjE3MjQyMTY2MTEuMjcxMTQ4LCJuYmYiOjE3MjQyMTY2MTEuMjcxMTUsImV4cCI6NDg3OTg5MDIxMS4yNjg3NTUsInN1YiI6IjEwODE4NDAiLCJzY29wZXMiOltdfQ.ZqHOK9-85ss0n7tokyF-xq5l6J4JVfOnewP0uHBkJ8qwfX4dBuiu1MQitMVA1hdD8gSnISexKxIgjwhRhLqCqmI4GgMaF0eEcXfVYrTw2Lsqnizlyw0U0Shy3P-_mPUyHVpL2Gk1DjB-YEuFMh4615arXvora3vyU25B6YR8WPWLrERWt0Q02BIc8Im1-c0UxsSUGWT6ZFCQkkP1ONQKLs7hyaOgvJ97xSP_wsinmJipSr07YJI7ixg3IPiqzYfX9BmHeX2gXl1N77MX4sqdO5Qfyw_2wlVJd29kroJbSeKI-4Q5ysqNoqmh51VjrZ34o5Gp27nud6RwvU90yNpkGNXQMgrA8GNq8MOM2TmnUnXBO2eSXKDAWZhO5XPYX5lej-Wdd0HUTdxYFOEVQ8_u17V4z9sInHDGhbX8MHHE_3hpAtXVWsbmBANB0qFCUu0LYB9E3NsiaOZBg-P8rVf6Dcp4JX6LRVi4jMTiJIu6Gh2cLN3uGpKZvtN2WCgtWf36x1TcuGGv8SIpoN-NepS5QTJjWy-f_gFr3UGOYB7hZiijQzO8Wk2o-fQksOIZ87N5p5vUJTPDnsmX_tjhmN706ypW4w_2-FYxMWcKeVxkHOtWX6rhbbsZ4aaLB9CgdLY5mwRQYouIoyNLgWEvcs8eW-B_L2dqex62ve8FWsyXnn8',
          },
        }
      );

      if (response.status === 200) {
        setSubmitted(true);
      } else {
        alert('There was an issue with your submission. Please try again.');
      }
    } catch (error) {
      console.error('Error saving email:', error);
      alert('There was an issue with your submission. Please try again.');
    }
  };

  return (
    <section className="bg-primaryBackground dark:bg-darkBackground p-8 rounded-lg text-center mb-16 w-full md:w-3/4 lg:w-2/3 mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-primaryText dark:text-darkPrimaryText">
        Unlock the Future with Cutting-Edge AI and Technology Insights
      </h2>
      <p className="text-lg text-secondaryText dark:text-darkSecondaryText mb-6">
        Get exclusive AI tips, tech trends, and actionable insights straight to your inbox. Whether you’re looking to innovate or level up your career, we’ve got the tools to help you lead in the tech world.
      </p>
      {submitted ? (
        <p className="text-lg text-green-500 dark:text-green-400">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 pl-10 rounded-full w-full md:w-96 bg-white text-primaryText dark:bg-gray-700 dark:text-darkPrimaryText border dark:border-gray-600 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-white rounded-full hover:bg-cyan-600 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
};

export default NewsletterSignup;
