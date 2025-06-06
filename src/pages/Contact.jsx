import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <p className="text-blue-100">
                <strong className="text-white">Address:</strong>
                <br />
                123 Business Street
                <br />
                New York, NY 10001
              </p>
              <p className="text-blue-100">
                <strong className="text-white">Email:</strong>
                <br />
                contact@yourcompany.com
              </p>
              <p className="text-blue-100">
                <strong className="text-white">Phone:</strong>
                <br />
                +1 (555) 123-4567
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
            <div className="space-y-2">
              <p className="text-blue-100">
                <strong className="text-white">Monday - Friday:</strong>
                <br />
                9:00 AM - 6:00 PM
              </p>
              <p className="text-blue-100">
                <strong className="text-white">Saturday:</strong>
                <br />
                10:00 AM - 4:00 PM
              </p>
              <p className="text-blue-100">
                <strong className="text-white">Sunday:</strong>
                <br />
                Closed
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-blue-100 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-blue-100 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-blue-100 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-blue-100 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 