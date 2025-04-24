
import { motion } from 'framer-motion';
import { SlidersHorizontal, User, BrainCircuit } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-data-lightGray/50">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-subtitle">Get to know me better</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <motion.div 
            className="data-card group hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-12 w-12 bg-gradient-to-br from-data-purple/30 to-data-purple/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <User className="text-data-blue w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3">Who I Am</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a third-year student at Lovely Professional University, Punjab, pursuing a Bachelor of Technology in Information Technology with a focus on data analysis. I'm passionate about using data to solve real-world problems.
            </p>
          </motion.div>

          <motion.div 
            className="data-card group hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-12 w-12 bg-gradient-to-br from-data-blue/30 to-data-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <BrainCircuit className="text-data-blue w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3">What I Do</h3>
            <p className="text-gray-600 leading-relaxed">
              I design scalable cloud architectures, optimize costs, and secure enterprise workloads. I transform legacy systems into agile, cloud-native solutions that accelerate innovation. My approach blends technical expertise with strategic business alignment to deliver measurable results.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 p-8 bg-white rounded-2xl border border-gray-100 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <SlidersHorizontal className="text-data-blue w-6 h-6" />
            <h3 className="text-xl font-medium">Education</h3>
          </div>
          <div className="space-y-6">
            <motion.div 
              className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div>
                <h4 className="font-medium text-lg">Lovely Professional University, Punjab, India</h4>
                <p className="text-gray-600">Bachelor of Technology - Information Technology</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="bg-data-blue/10 text-data-blue text-sm px-3 py-1.5 rounded-full font-medium">
                  Since 2022
                </span>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div>
                <h4 className="font-medium text-lg">Paavai Vidhyashram CBSE school, Tamil Nadu</h4>
                <p className="text-gray-600">Senior secondary - Percentage: 90.4%</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="bg-data-blue/10 text-data-blue text-sm px-3 py-1.5 rounded-full font-medium">
                  2020 - 2022
                </span>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div>
                <h4 className="font-medium text-lg">Paavai Vidhyashram CBSE school, Tamil Nadu</h4>
                <p className="text-gray-600">Secondary - Percentage: 93.4%</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="bg-data-blue/10 text-data-blue text-sm px-3 py-1.5 rounded-full font-medium">
                  2019 - 2020
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
