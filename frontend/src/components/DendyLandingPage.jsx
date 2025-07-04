import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DendyLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  const openTelegramBot = () => {
    window.open('https://t.me/DenDyFoodbot', '_blank');
  };

  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/QorGNiSVuwMY36zdA', '_blank');
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const glowEffect = {
    hover: {
      boxShadow: "0 0 20px rgba(255, 255, 0, 0.6)",
      transition: { duration: 0.3 }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'menu', 'food', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-yellow-400 pixel-font">DENDY</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Bosh sahifa', 'Haqida', 'Xizmatlar', 'Menyu', 'Taom', 'Aloqa'].map((item, index) => (
                <a
                  key={item}
                  href={`#${['hero', 'about', 'services', 'menu', 'food', 'contact'][index]}`}
                  className={`text-sm font-medium hover:text-yellow-400 transition-colors duration-200 ${
                    currentSection === ['hero', 'about', 'services', 'menu', 'food', 'contact'][index] 
                      ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Bosh sahifa', 'Haqida', 'Xizmatlar', 'Menyu', 'Taom', 'Aloqa'].map((item, index) => (
                <a
                  key={item}
                  href={`#${['hero', 'about', 'services', 'menu', 'food', 'contact'][index]}`}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-black overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/7657856/pexels-photo-7657856.jpeg')`
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            variants={fadeInVariants}
            className="mb-12"
          >
            <img 
              src="https://postimg.cc/xqnQCZ59" 
              alt="Dendy Logo" 
              className="mx-auto h-32 w-auto mb-8 drop-shadow-2xl"
            />
          </motion.div>
          
          <motion.h1
            variants={fadeInVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent pixel-font"
          >
            O'YIN VA TAOM
          </motion.h1>
          
          <motion.h2
            variants={fadeInVariants}
            className="text-3xl md:text-5xl font-bold mb-8 text-purple-300 pixel-font"
          >
            BIR JOYDA!
          </motion.h2>
          
          <motion.p
            variants={fadeInVariants}
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Xonqa tumanidagi eng zamonaviy o'yin klubi va tez taom xizmati. 
            24/7 ochiq, premium o'yin tajribasi va mazali taomlar!
          </motion.p>
          
          <motion.div
            variants={fadeInVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 0, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              onClick={openGoogleMaps}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 shadow-lg"
            >
              📍 Xaritada Ko'rish
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              onClick={openTelegramBot}
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-500 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              🤖 Buyurtma Berish
            </motion.button>
          </motion.div>
        </div>
        
        {/* Floating neon elements */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20 blur-sm"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-20 h-20 bg-purple-400 rounded-full opacity-20 blur-sm"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400 pixel-font">BIZ HAQIMIZDA</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-600 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInVariants}>
              <img 
                src="https://images.pexels.com/photos/8728386/pexels-photo-8728386.jpeg" 
                alt="Gaming Setup" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </motion.div>
            
            <motion.div variants={fadeInVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">📍 Manzil</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Xonqa tumani, Xorazm viloyati, Dehqon bozori orqasida joylashgan zamonaviy o'yin klubi va tez taom xizmati.
              </p>
              
              <h3 className="text-2xl font-bold text-purple-300 mb-4">🕐 Ish vaqti</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-yellow-400 font-bold">24/7 ochiq</span> - Kun va tunda ishlaydi!
              </p>
              
              <h3 className="text-2xl font-bold text-purple-300 mb-4">🎯 Bizning maqsadimiz</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                O'yinchilar uchun eng yaxshi tajriba va mazali taomlarni taqdim etish. 
                Zamonaviy texnologiya va professional xizmat bilan.
              </p>
              
              <motion.div
                whileHover={glowEffect.hover}
                className="bg-gradient-to-r from-purple-800 to-purple-900 p-6 rounded-lg border border-purple-500/30"
              >
                <p className="text-yellow-400 font-bold text-lg">
                  Premyum o'yin tajribasi va mazali taomlar bir joyda! 🎮🍔
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 bg-gradient-to-br from-black to-gray-900 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400 pixel-font">XIZMATLARIMIZ</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-600 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 0, 0.3)" }}
              className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-2xl border border-purple-500/30 text-center"
            >
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/7562468/pexels-photo-7562468.jpeg" 
                  alt="RTX Computers" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">💻 RTX Kompyuterlar</h3>
                <p className="text-gray-300">35+ ta eng zamonaviy RTX grafik kartali kompyuterlar</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)" }}
              className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-2xl border border-purple-500/30 text-center"
            >
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/7774029/pexels-photo-7774029.jpeg" 
                  alt="PlayStation 5" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">🎮 PlayStation 5</h3>
                <p className="text-gray-300">Yangi avlod PlayStation 5 konsoli</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 0, 0.3)" }}
              className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-2xl border border-purple-500/30 text-center"
            >
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/flagged/photo-1580234748052-2c23d8b27a71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxnYW1pbmclMjBsb3VuZ2V8ZW58MHx8fHB1cnBsZXwxNzUxNjUwNzM3fDA&ixlib=rb-4.1.0&q=85" 
                  alt="VIP Zone" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">👑 VIP Zona</h3>
                <p className="text-gray-300">Maxsus VIP zona premium tajriba uchun</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)" }}
              className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-2xl border border-purple-500/30 text-center"
            >
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/19012052/pexels-photo-19012052.jpeg" 
                  alt="Tournaments" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">🏆 Turnirlar</h3>
                <p className="text-gray-300">Muntazam e-sport turnirlar va musobaqalar</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 0, 0.3)" }}
              className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-2xl border border-purple-500/30 text-center"
            >
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/7653150/pexels-photo-7653150.jpeg" 
                  alt="Fast Food" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">🍔 Tez Taom</h3>
                <p className="text-gray-300">Burger, fri, shawarma va boshqa mazali taomlar</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)" }}
              className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-2xl border border-purple-500/30 text-center"
            >
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/5780761/pexels-photo-5780761.jpeg" 
                  alt="Retro Gaming" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">🕹️ Retro O'yinlar</h3>
                <p className="text-gray-300">Klassik arcade o'yinlar va nostalgik tajriba</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Food & Drinks Section */}
      <motion.section
        id="food"
        className="py-20 bg-gradient-to-br from-purple-900 to-black relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400 pixel-font">TAOM VA ICHIMLIKLAR</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-600 mx-auto mb-8"></div>
          </motion.div>
          
          {/* Setlar va Combo'lar */}
          <motion.div variants={fadeInVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-purple-300 mb-8 text-center">🍽️ Setlar va Combo'lar</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255, 255, 0, 0.3)" }}
                className="bg-gradient-to-r from-purple-800 to-purple-900 p-6 rounded-lg border border-purple-500/30"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-bold text-yellow-400">Combo 2</h4>
                  <span className="text-2xl font-bold text-white">65,000 so'm</span>
                </div>
                <p className="text-gray-300 mb-4">2 ta burger, 1 ta fri, 2 ta Coca Cola</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openTelegramBot}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300"
                >
                  👉 Buyurtma Berish
                </motion.button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255, 255, 0, 0.3)" }}
                className="bg-gradient-to-r from-purple-800 to-purple-900 p-6 rounded-lg border border-purple-500/30"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-bold text-yellow-400">Chizburger Set</h4>
                  <span className="text-2xl font-bold text-white">160,000 so'm</span>
                </div>
                <p className="text-gray-300 mb-4">4 ta chizburger, 4 ta fri, 4 ta Coca Cola</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openTelegramBot}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300"
                >
                  👉 Buyurtma Berish
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Burgerlar */}
          <motion.div variants={fadeInVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-purple-300 mb-8 text-center">🍔 Burgerlar</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Gamburger", price: "29,000 so'm" },
                { name: "Chizburger", price: "31,000 so'm" },
                { name: "DablBurger", price: "39,000 so'm" },
                { name: "DablChizBurger", price: "46,000 so'm" },
                { name: "Chicken Burger", price: "29,000 so'm" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                  className="bg-gradient-to-r from-purple-800 to-purple-900 p-6 rounded-lg border border-purple-500/30"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-bold text-yellow-400">{item.name}</h4>
                    <span className="text-xl font-bold text-white">{item.price}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openTelegramBot}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 text-sm"
                  >
                    👉 Buyurtma Berish
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Hot-doglar */}
          <motion.div variants={fadeInVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-purple-300 mb-8 text-center">🌭 Hot-doglar</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Hot-Dog (1 sasiska)", price: "18,000 so'm" },
                { name: "Hot-Dog BIG (2 sasiska)", price: "25,000 so'm" },
                { name: "Gigant Hot-Dog (4 ta sasiska)", price: "28,000 so'm" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                  className="bg-gradient-to-r from-purple-800 to-purple-900 p-6 rounded-lg border border-purple-500/30"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-bold text-yellow-400">{item.name}</h4>
                    <span className="text-xl font-bold text-white">{item.price}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openTelegramBot}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 text-sm"
                  >
                    👉 Buyurtma Berish
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Ichimliklar */}
          <motion.div variants={fadeInVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-purple-300 mb-8 text-center">🥤 Ichimliklar</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Coca Cola (0.5L)", price: "8,000 so'm" },
                { name: "Ice Tea", price: "10,000 so'm" },
                { name: "Ice Coffee", price: "15,000 so'm" },
                { name: "Moxito Classic", price: "20,000 so'm" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                  className="bg-gradient-to-r from-purple-800 to-purple-900 p-6 rounded-lg border border-purple-500/30"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-bold text-yellow-400">{item.name}</h4>
                    <span className="text-xl font-bold text-white">{item.price}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openTelegramBot}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 text-sm"
                  >
                    👉 Buyurtma Berish
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 to-black relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400 pixel-font">ALOQA</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-600 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInVariants} className="space-y-8">
              <div className="bg-gradient-to-r from-purple-800 to-purple-900 p-8 rounded-2xl border border-purple-500/30">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">📞 Telefon</h3>
                <p className="text-xl text-white font-bold">+998 33 119 14 15</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-800 to-purple-900 p-8 rounded-2xl border border-purple-500/30">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">📱 Instagram</h3>
                <div className="space-y-2">
                  <p className="text-lg text-white">@dendyfood</p>
                  <p className="text-lg text-white">@dendyuz</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-800 to-purple-900 p-8 rounded-2xl border border-purple-500/30">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">🤖 Telegram Bot</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openTelegramBot}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300"
                >
                  @DenDyFoodbot
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInVariants}>
              <div className="bg-gradient-to-r from-purple-800 to-purple-900 p-8 rounded-2xl border border-purple-500/30 h-full">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">📍 Bizning Manzil</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.7234567890123!2d60.123456!3d41.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzAwLjAiTiA2MMKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890123"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openGoogleMaps}
                  className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 w-full"
                >
                  Katta Xaritada Ko'rish
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="https://postimg.cc/xqnQCZ59" 
              alt="Dendy Logo" 
              className="mx-auto h-16 w-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-yellow-400 mb-2 pixel-font">DENDY FOOD & GAME CLUB</h3>
            <p className="text-gray-400 mb-4">O'yin va taom bir joyda - 24/7 xizmat</p>
            <p className="text-gray-500 text-sm">© 2025 Dendy Food & Game Club. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DendyLandingPage;