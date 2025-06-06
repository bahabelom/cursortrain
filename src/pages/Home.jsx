const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to Our Website
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Create something amazing with modern web technologies
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white/10 backdrop-blur-md p-8 rounded-xl hover:transform hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Feature {item}</h3>
              <p className="text-blue-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already using our platform to build amazing things.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Sign Up Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Home; 