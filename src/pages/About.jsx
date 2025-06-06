const About = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">About Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-blue-100 text-lg">
            We are a passionate team dedicated to creating amazing web experiences. Our mission is to help
            businesses and individuals achieve their goals through innovative technology solutions.
          </p>
          <p className="text-blue-100 text-lg">
            Founded in 2024, we've been at the forefront of web development, constantly pushing the
            boundaries of what's possible on the web.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-blue-100">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Innovation First
            </li>
            <li className="flex items-center text-blue-100">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Customer Focus
            </li>
            <li className="flex items-center text-blue-100">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Quality Delivery
            </li>
            <li className="flex items-center text-blue-100">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Continuous Learning
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-white mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'John Doe', role: 'CEO' },
            { name: 'Jane Smith', role: 'CTO' },
            { name: 'Mike Johnson', role: 'Lead Designer' },
          ].map((member, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-blue-400 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-blue-100">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About; 