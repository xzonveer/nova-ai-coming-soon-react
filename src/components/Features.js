function Features() {
  const features = [
    { icon: '🤖', title: 'Custom AI Solutions', desc: 'Tailored AI for your business' },
    { icon: '⚡', title: 'Lightning Fast', desc: 'Deploy in days, not months' },
    { icon: '🚀', title: 'Scalable', desc: 'Grow with enterprise-grade AI' },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {features.map((feature, idx) => (
        <div key={idx} className="glass p-8 rounded-2xl text-center group hover:neon-glow transition-all duration-500 transform hover:-translate-y-4">
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h4 className="text-xl font-orbitron font-bold text-white mb-3">{feature.title}</h4>
          <p className="text-gray-300 font-inter">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;