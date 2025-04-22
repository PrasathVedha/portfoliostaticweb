
import { motion } from 'framer-motion';
const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="section-title">About Me</h2>
          <div className="section-subtitle">Get to know me better</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <motion.div className="data-card" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <div className="h-12 w-12 bg-data-purple/30 rounded-md flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 1 0-16 0" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Who I Am</h3>
            <p className="text-gray-600">
              I'm a third-year student at Lovely Professional University, Punjab, 
              pursuing a Bachelor of Technology in Information technology with a focus on data analysis.
              I'm passionate about using data to solve real-world problems.
            </p>
          </motion.div>

          <motion.div className="data-card" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <div className="h-12 w-12 bg-data-lightBlue/30 rounded-md flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-data-blue">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">What I Do</h3>
            <p className="text-gray-600">
              I analyze complex datasets, create interactive visualizations, and build predictive models. 
              I transform raw data into valuable insights that drive decision-making.
              My approach combines technical skills with effective communication.
            </p>
          </motion.div>
        </div>

        <motion.div className="mt-12 p-6 bg-data-lightGray rounded-lg border border-gray-100" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }}>
          <h3 className="text-xl font-medium mb-4">Education</h3>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h4 className="font-medium">Lovely Professional University, Punjab, India</h4>
                <p className="text-gray-600">Bachelor of Technology - Information technology</p>
              </div>
              <div className="text-gray-500 mt-1 md:mt-0">
                <span className="bg-data-blue/10 text-data-blue text-sm px-2 py-1 rounded">
                  2022 - Present
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h4 className="font-medium">Paavai Vidhyashram CBSE school, Tamil Nadu</h4>
                <p className="text-gray-600">Senior secondary - Percentage: 90.4%</p>
              </div>
              <div className="text-gray-500 mt-1 md:mt-0">
                <span className="bg-data-blue/10 text-data-blue text-sm px-2 py-1 rounded">
                  2020 - 2022
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h4 className="font-medium">Paavai Vidhyashram CBSE school, Tamil Nadu</h4>
                <p className="text-gray-600">Secondary - Percentage: 93.4%</p>
              </div>
              <div className="text-gray-500 mt-1 md:mt-0">
                <span className="bg-data-blue/10 text-data-blue text-sm px-2 py-1 rounded">
                  2019 - 2020
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default About;
