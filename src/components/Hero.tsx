
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-data-lightGray to-data-purple/10">
      <div className="section-container relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-data-blue/10 text-data-blue font-medium">
              Hello, I'm
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Prasath Vedharethinam
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-light">
              Cloud Consultant
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              A passionate third-year Information Technology student at Lovely Professional University with expertise in cloud platforms, programming languages and web development.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                asChild
                className="bg-data-blue hover:bg-data-blue/90 text-white shadow-lg shadow-data-blue/25 hover:shadow-data-blue/35 transition-all duration-300"
              >
                <a href="#projects" className="inline-flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-data-blue text-data-blue hover:bg-data-blue/10"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-data-blue text-data-blue hover:bg-data-blue/10 group"
              >
                <a 
                  href="https://drive.google.com/drive/folders/1dkadzBuXbYReuZ9YvPCmofJCiHFMilPt?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Download CV</span>
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-data-blue/20 via-data-purple/20 to-transparent rounded-full blur-3xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  alt="Prasath Vedharethinam" 
                  className="w-full h-full object-cover"
                  src="/lovable-uploads/9a478737-4580-4484-813a-14f2c9af2ff9.jpg"
                />
              </div>
              <motion.div 
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-data-peach"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-data-purple"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
          }}
        >
          <motion.p 
            className="text-sm text-gray-500 mb-2"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Scroll Down
          </motion.p>
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-data-blue"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
