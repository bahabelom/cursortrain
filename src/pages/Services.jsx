const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with the latest technologies.',
      features: ['React.js', 'Node.js', 'Responsive Design', 'API Integration'],
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
      features: ['iOS', 'Android', 'React Native', 'Flutter'],
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that engage users.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Testing'],
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for your business needs.',
      features: ['AWS', 'Azure', 'Google Cloud', 'DevOps'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl hover:transform hover:scale-105 transition-all"
          >
            <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
            <p className="text-blue-100 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-blue-100">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Basic', price: '$99', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
            { name: 'Pro', price: '$199', features: ['All Basic features', 'Feature 4', 'Feature 5'] },
            { name: 'Enterprise', price: 'Custom', features: ['All Pro features', 'Custom solutions', '24/7 Support'] },
          ].map((plan, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-blue-400 mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-blue-100">{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 