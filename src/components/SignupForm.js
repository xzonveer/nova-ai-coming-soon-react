import { useState, useCallback } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (email) {
      // TODO: Integrate EmailJS or backend
      // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY');
      console.log('Notify:', email);
      setStatus('✅ You\'re on the list! We\'ll notify you soon.');
      setEmail('');
      setTimeout(() => setStatus(''), 5000);
    }
  }, [email]);

  return (
    <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl max-w-md w-full neon-glow">
      <h3 className="text-2xl font-orbitron font-bold text-white mb-6 text-center">Get Early Access</h3>
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 font-inter focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition-all"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-inter font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl neon-glow"
        >
          Notify Me
        </button>
      </div>
      {status && <p className="mt-4 text-center text-green-400 font-inter">{status}</p>}
    </form>
  );
}

export default SignupForm;