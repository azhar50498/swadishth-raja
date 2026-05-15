import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  FlaskConical, 
  ThermometerSnowflake, 
  Award,
  ChevronRight,
  TrendingUp,
  Package,
  Headset,
  Phone,
  MapPin
} from 'lucide-react';
import { useState } from 'react';

const MASALAS = [
  { id: 1, name: "Sambhar Masala", desc: "Authentic South Indian blend.", img: "https://res.cloudinary.com/dajvtytvg/image/upload/q_auto/f_auto/v1778820204/Gemini_Generated_Image_vwb23hvwb23hvwb2_9_xaejya.png", color: "#22c55e" },
  { id: 2, name: "Chicken Masala", desc: "Perfectly balanced poultry spice.", img: "https://res.cloudinary.com/dajvtytvg/image/upload/q_auto/f_auto/v1778820199/Gemini_Generated_Image_vwb23hvwb23hvwb2_8_dfgw6r.png", color: "#ef4444" },
  { id: 3, name: "Kitchen King", desc: "The ultimate all-purpose blend.", img: "https://res.cloudinary.com/dajvtytvg/image/upload/q_auto/f_auto/v1778820190/Gemini_Generated_Image_vwb23hvwb23hvwb2_7_t1jaf5.png", color: "#a855f7" },
  { id: 4, name: "Garam Masala", desc: "The crown jewel of Indian spices.", img: "https://res.cloudinary.com/dajvtytvg/image/upload/q_auto/f_auto/v1778820190/Gemini_Generated_Image_vwb23hvwb23hvwb2_7_t1jaf5.png", color: "#f97316" },
  { id: 5, name: "Shahi Paneer", desc: "Rich and creamy blend for paneer.", img: "https://res.cloudinary.com/dajvtytvg/image/upload/q_auto/f_auto/v1778820175/Gemini_Generated_Image_vwb23hvwb23hvwb2_5_bww10r.png", color: "#3b82f6" },
  { id: 6, name: "Sabji Masala", desc: "Everyday vegetable perfection.", img: "https://res.cloudinary.com/dajvtytvg/image/upload/q_auto/f_auto/v1778820170/Gemini_Generated_Image_vwb23hvwb23hvwb2_4_hrftnb.png", color: "#84cc16" },
  { id: 7, name: "Chhole Masala", desc: "Robust and tangy chickpea spice.", img: "https://res.cloudinary.com/dajvtytvg/image/upload/q_auto/f_auto/v1778820170/Gemini_Generated_Image_vwb23hvwb23hvwb2_4_hrftnb.png", color: "#f59e0b" },
  { id: 8, name: "Chat Masala", desc: "Tangy Indian street food classic.", img: "https://res.cloudinary.com/dajvtytvg/image/upload/q_auto/f_auto/v1778820154/Gemini_Generated_Image_vwb23hvwb23hvwb2_2_ykozlx.png", color: "#14b8a6" },
  { id: 9, name: "Biryani Masala", desc: "Aromatic ecstasy for rice dishes.", img: "https://res.cloudinary.com/dajvtytvg/image/upload/q_auto/f_auto/v1778820139/Gemini_Generated_Image_vwb23hvwb23hvwb2_1_djr6au.png", color: "#ea580c" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const WHATSAPP_NUMBER = "919971172460";

  const generateWhatsAppLink = (productName?: string) => {
    const text = productName 
      ? `Hello Swadishth Raja! I am interested in bulk distribution for ${productName}.`
      : `Hello Swadishth Raja! I am interested in bulk distribution.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const LogoSVG = ({ className = "w-12 h-12" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" stroke="#eb5e28" strokeWidth="2" fill="transparent" />
      <circle cx="50" cy="50" r="40" stroke="#eb5e28" strokeWidth="1.5" strokeDasharray="6 4" fill="transparent" />
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontFamily="Playfair Display, Georgia, serif" fontSize="36" fontWeight="bold" fill="#eb5e28" letterSpacing="1">SR</text>
    </svg>
  );

  const SpiceParticles = () => {
    const particles = Array.from({ length: 20 });
    
    return (
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        {particles.map((_, i) => {
          const size = Math.random() * 6 + 2; 
          const left = Math.random() * 100;
          const animationDuration = Math.random() * 20 + 20; 
          const delay = Math.random() * -40; 
          
          return (
            <div
              key={i}
              className="absolute rounded-full particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                bottom: '-10px',
                backgroundColor: Math.random() > 0.5 ? 'var(--color-spice-orange)' : 'var(--color-spice-light)',
                boxShadow: '0 0 10px var(--color-spice-orange)',
                animation: `float ${animationDuration}s linear infinite`,
                animationDelay: `${delay}s`,
                opacity: 0,
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-dark-bg selection:bg-spice-orange selection:text-white">
      <SpiceParticles />
      
      {/* 1. Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 bg-transparent flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-spice-orange/20 blur-xl rounded-full group-hover:bg-spice-orange/30 transition-colors duration-300"></div>
                <LogoSVG className="w-14 h-14 drop-shadow-[0_0_8px_rgba(235,94,40,0.8)] relative z-10" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-wide text-white">Swadishth Raja</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#catalog" className="text-sm font-medium hover:text-spice-light transition-colors uppercase tracking-widest text-gray-300">Catalog</a>
              <a href="#roadmap" className="text-sm font-medium hover:text-spice-light transition-colors uppercase tracking-widest text-gray-300">Process</a>
              <a 
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="bg-spice-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-sm font-medium transition-all shadow-[0_0_20px_rgba(235,94,40,0.3)] hover:shadow-[0_0_30px_rgba(235,94,40,0.5)] text-sm uppercase tracking-widest"
              >
                Become a Distributor
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-300">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass absolute top-full left-0 w-full border-t border-white/10 p-4 flex flex-col gap-4"
          >
            <a href="#catalog" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 text-sm uppercase tracking-widest text-gray-300">Catalog</a>
            <a href="#roadmap" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 text-sm uppercase tracking-widest text-gray-300">Process</a>
            <a 
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="bg-spice-orange text-center text-white px-6 py-3 rounded-sm font-medium text-sm w-full uppercase tracking-widest"
            >
              Become a Distributor
            </a>
          </motion.div>
        )}
      </nav>

      {/* 2. Immersive Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract dark spice-like background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
           <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 ken-burns"
              alt="Abstract Spices"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-spice-light font-medium tracking-[0.2em] uppercase text-sm mb-6 block">B2B Wholesale Portal</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-white drop-shadow-2xl">
              Strictly Pure.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-spice-orange to-spice-light">Manufacturing Excellence.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              India's premium wholesale masala supplier. We partner with large-scale distributors to deliver unadulterated, lab-tested spices.
            </p>

          </motion.div>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="border-y border-[#333] bg-black/50 relative z-20"
      >
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center flex-grow">
              {[
                { icon: <FlaskConical className="w-8 h-8 mx-auto mb-3 text-spice-orange" />, title: "Lab Tested", text: "100% adulteration free." },
                { icon: <ThermometerSnowflake className="w-8 h-8 mx-auto mb-3 text-spice-orange" />, title: "Low-Temp Grinding", text: "Preserves natural oils & aroma." },
                { icon: <Award className="w-8 h-8 mx-auto mb-3 text-spice-orange" />, title: "FSSAI Certified", text: "Factory-direct compliance." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="pt-6 md:pt-0 first:pt-0 flex flex-col items-center"
                >
                  {item.icon}
                  <h3 className="font-serif text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. The 10-Masala Box */}
      <section id="catalog" className="py-16 md:py-24 relative bg-[#0a0a0a]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-spice-orange/5 blur-[150px] rounded-full pointer-events-none z-[1]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">Our Signature 10₹ Range</h2>
            <p className="text-gray-400 font-light italic">Hover over any product to inquire</p>
          </motion.div>

          {/* Grid of 9 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MASALAS.map((masala, i) => (
              <motion.div
                key={masala.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="group relative flex flex-col w-full bg-[#0a0a0a] rounded-xl border border-[#333] transition-all duration-300 hover:scale-105 hover:border-[#eb5e28] hover:shadow-[0_0_30px_rgba(235,94,40,0.15)] overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square flex items-center justify-center p-8 overflow-hidden bg-[#050505] border-b border-[#333]">
                  {/* Subtle radial glow */}
                  <div 
                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${masala.color} 0%, transparent 70%)` }}
                  ></div>
                  
                  {/* Image */}
                  <img 
                    src={masala.img} 
                    alt={masala.name} 
                    className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:-translate-y-2 drop-shadow-2xl"
                  />

                  {/* ₹10 Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-[#333] text-white px-3 py-1 rounded text-sm font-bold tracking-wider shadow-lg">
                    ₹10 MRP
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow relative z-20 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{masala.name}</h3>
                  <p className="text-gray-400 text-sm flex-grow mb-6">{masala.desc}</p>
                  
                  <a 
                    href={generateWhatsAppLink(masala.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center bg-[#1a1a1a] hover:bg-[#eb5e28] text-white py-4 px-6 rounded-md transition-colors duration-300 border border-[#333] hover:border-[#eb5e28] text-sm uppercase tracking-widest font-bold font-sans shadow-md"
                  >
                    Bulk WhatsApp Order
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Distributor Roadmap */}
      <motion.section 
        id="roadmap" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-24 bg-black/40 border-y border-[#333] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">Partner With Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">A streamlined, transparent process to become an authorized distributor.</p>
          </motion.div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-spice-orange to-transparent opacity-50 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: "01", title: "View Catalog", desc: "Select your required spice variants & volumes.", icon: <Package className="w-6 h-6 text-spice-orange" /> },
                { step: "02", title: "Connect on WhatsApp", desc: "Share requirements directly with our sales team.", icon: <MessageCircle className="w-6 h-6 text-spice-orange" /> },
                { step: "03", title: "Factory Direct", desc: "Logistics dispatched directly from our grinding units.", icon: <TrendingUp className="w-6 h-6 text-spice-orange" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-full glass-accent flex items-center justify-center relative mb-6 group-hover:scale-110 transition-transform duration-500">
                     <span className="absolute -top-2 -right-2 text-4xl font-serif font-black text-white/5 group-hover:text-spice-light/20 transition-colors pointer-events-none">{item.step}</span>
                     {item.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. B2B Form Lite */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-24 relative"
      >
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-spice-orange/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-8 md:p-12 rounded-xl border border-white/10"
          >
            <div className="text-center mb-10">
               <Headset className="w-12 h-12 text-spice-orange mx-auto mb-4" />
               <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-white">Enterprise Sales</h2>
               <p className="text-gray-300">For supply orders exceeding 500KG, submit your details below.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Company Name</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-spice-orange transition-colors" placeholder="e.g. Acme Retail" />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Contact Person</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-spice-orange transition-colors" placeholder="Full Name" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-spice-orange transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-spice-orange transition-colors" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">Monthly Volume Requirement</label>
                <select className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-spice-orange transition-colors appearance-none">
                  <option className="bg-dark-bg">500KG - 1 Tonne</option>
                  <option className="bg-dark-bg">1 Tonne - 5 Tonnes</option>
                  <option className="bg-dark-bg">5+ Tonnes</option>
                </select>
              </div>
              <button className="w-full bg-spice-orange hover:bg-orange-600 text-white font-medium py-4 rounded transition-colors text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(235,94,40,0.2)]">
                Request Call Back
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-spice-orange bg-[#050505] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 mb-12">
            
            {/* 1. About */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 bg-transparent flex items-center justify-center relative">
                  <LogoSVG className="w-12 h-12 drop-shadow-[0_0_5px_rgba(235,94,40,0.5)] relative z-10" />
                </div>
                <span className="font-serif font-bold text-xl tracking-wide text-white">Swadishth Raja</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                India's premium wholesale masala supplier. We partner with large-scale distributors to deliver unadulterated, lab-tested spices directly from the factory.
              </p>
            </div>

            {/* 2. Navigation */}
            <div>
              <h4 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#catalog" className="text-gray-400 hover:text-spice-light transition-colors text-sm">Product Catalog</a></li>
                <li><a href="#roadmap" className="text-gray-400 hover:text-spice-light transition-colors text-sm">Distributor Process</a></li>
                <li><a href="#" className="text-gray-400 hover:text-spice-light transition-colors text-sm">Quality Certifications</a></li>
                <li><a href="#" className="text-gray-400 hover:text-spice-light transition-colors text-sm">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* 3. Contact */}
            <div>
              <h4 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+919971172460" className="flex items-start gap-3 group">
                    <Phone className="w-5 h-5 text-spice-orange shrink-0 mt-0.5 group-hover:animate-pulse" />
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-widest mb-1">Distributor Help-Line</span>
                      <span className="block text-gray-200 group-hover:text-spice-light transition-colors text-sm font-medium tracking-wide">+91 99711 72460</span>
                    </div>
                  </a>
                </li>
                <li>
                   <a 
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] px-4 py-2.5 rounded transition-all group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Chat on WhatsApp</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm mt-2">
                  <MapPin className="w-5 h-5 text-spice-orange shrink-0 mt-0.5" />
                  <span>Industrial Estate, New Delhi, India 110001</span>
                </li>
              </ul>
            </div>

            {/* 4. Certifications */}
            <div>
              <h4 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-wider">Trust & Quality</h4>
              <div className="grid grid-cols-2 gap-3 opacity-70">
                <div className="glass p-3 text-center rounded border border-white/5">
                  <FlaskConical className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Lab Tested</span>
                </div>
                <div className="glass p-3 text-center rounded border border-white/5">
                  <Award className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">FSSAI Certified</span>
                </div>
                <div className="glass p-3 text-center rounded border border-white/5 col-span-2">
                  <ThermometerSnowflake className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Low-Temp Grinding</span>
                </div>
              </div>
            </div>

          </div>
          
          <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} Swadishth Raja Manufacturing. All Rights Reserved.</p>
            <p className="text-[#555] uppercase tracking-widest">Designed by Azhar Web Studio</p>
          </div>
        </div>
      </footer>

      {/* 7. Floating WhatsApp Hub */}
      <a 
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      >
        <span className="hidden md:block glass px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
           Chat with Sales
        </span>
        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center p-3 shadow-[0_0_20px_rgba(37,211,102,0.4)] animate-bounce hover:animate-none transition-all duration-300">
          <MessageCircle className="w-full h-full text-white" />
        </div>
      </a>
      
    </div>
  );
}
