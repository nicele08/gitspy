/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Code to submit the form to the backend can go here
  };

  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-800 py-16 w-full"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 dark:text-white font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border border-gray-400 dark:border-white dark:bg-black bg-white rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              autoComplete="none"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 dark:text-white font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border border-gray-400 dark:border-white dark:bg-black bg-white rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="none"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 dark:text-white font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              rows={3}
              className="resize-none appearance-none border border-gray-400 dark:border-white dark:bg-black bg-white rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              autoComplete="none"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
