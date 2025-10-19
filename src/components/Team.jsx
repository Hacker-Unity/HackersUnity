import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

// Social media icons component for reuse
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

// Enhanced team data with IDs and more detailed bios - expanded to 20 members for carousel
const coreMembers = [
  {
    id: 1,
    name: 'Mohit Sharma',
    role: 'Outreach and Partnership',
    image: 'images/team/mohitsharma.jpg',
    bio: 'Connects with colleges, communities, and potential partners to grow reach and build collaborations.',
    social: {
      linkedin: 'https://www.linkedin.com/in/mohit-sharma-1305-pro05',
      twitter: 'https://x.com/MohitSh86125572',
      instagram: 'https://www.instagram.com/mohitsharma_1305?igsh=YTltbmlmODN2YzNz'
    }
  },
  {
    id: 2,
    name: 'Aditya Dahuja',
    role: 'Tech Dev Team',
    image: 'images/team/adityadahuja.jpeg',
    bio: 'Develops and maintains the website, platforms, and event tech infrastructure.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 3,
    name: 'Kashish Jangid',
    role: 'Community Manager',
    image: 'images/team/kashishjangid.jpeg',
    bio: 'Community builder with experience in organizing tech events and hackathons.',
    social: {
      linkedin: 'https://www.linkedin.com/in/kashish-jangid?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      twitter: 'https://x.com/kashishjangid05?t=RxuaYdRQsFt05l_SdZsh9w&s=09',
      instagram: 'https://www.instagram.com/kashish_jangid005?igsh=NDZ1dGo0azY3cnhr'
    }
  },
  {
    id: 4,
    name: 'Lokesh Tak',
    role: 'Sponsorship Outreaching',
    image: 'images/team/lokeshtak.jpeg',
    bio: 'Event planning specialist with a passion for creating memorable tech gatherings.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 5,
    name: 'Mousam',
    role: 'Design & Media',
    image: 'images/team/mousam.jpeg',
    bio: 'Backend specialist with expertise in scalable architecture and database optimization.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 6,
    name: 'Bhavya Jain',
    role: 'Design and Media Team',
    image: 'images/team/bhavyajain.jpeg',
    bio: 'Frontend expert focused on creating responsive and accessible user interfaces.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 7,
    name: 'Muskan Raj',
    role: 'Documentation',
    image: 'images/team/muskanraj.jpeg',
    bio: 'Infrastructure specialist with experience in CI/CD pipelines and cloud platforms.',
    social: {
      linkedin: 'https://www.linkedin.com/in/muskan-raj-985928351',
      twitter: 'https://x.com/MuskanRaj27740?t=_1xJYvyMYCuR5b5H54Qc-Q&s=08',
      // instagram: '#'
    }
  },
  {
    id: 8,
    name: 'Yash Verma',
    role: 'Sponsorship Outreaching',
    image: 'images/team/yashverma.jpg',
    bio: 'Creative designer with a passion for creating beautiful and intuitive interfaces.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 9,
    name: 'Jyoti',
    role: 'Design & Media',
    image: 'images/team/jyoti.jpeg',
    bio: 'Mobile app specialist with expertise in React Native and cross-platform development.',
    social: {
      linkedin: 'https://www.linkedin.com/in/jyoti447?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      twitter: '#',
      instagram: 'https://www.instagram.com/sparklesoul778?igsh=N3hjeGk0MXpwN21m'
    }
  },
  {
    id: 10,
    name: 'Awantika Jaiswal',
    role: 'Content & Media',
    image: 'images/team/awantikajaiswal.jpg',
    bio: 'Content expert focused on creating engaging and informative technical content.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 11,
    name: 'Aryan Jangir',
    role: 'Outreaching',
    image: 'images/team/aryanjangir.jpeg',
    bio: 'Data specialist with expertise in machine learning and predictive analytics.',
    social: {
      linkedin: 'https://www.linkedin.com/in/aryan-jangir2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // twitter: '',
      instagram: 'https://www.instagram.com/aryanjangir_01?igsh=ZHpuZm9tMmN1ZmZx'
    }
  },
  {
    id: 12,
    name: 'Palak Sahani',
    role: 'Design & Media Team',
    image: 'images/team/palaksahani.jpeg',
    bio: 'Quality assurance expert focused on ensuring robust and reliable software.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 13,
    name: 'Janvi Kochar',
    role: 'Design and Media Team',
    image: 'images/team/janvikochar.jpg',
    bio: 'Creates visuals, videos, and manages social media.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 14,
    name: 'Lakshya Goyal',
    role: 'Video Editor',
    image: 'images/team/lakshyagoyal.jpeg',
    bio: 'Product specialist focused on delivering user-centered solutions and features.',
    social: {
      linkedin: 'https://www.linkedin.com/in/zero2004',
      twitter: 'https://x.com/goyal_lakshya22?s=09',
      instagram: 'https://www.instagram.com/laksh_2204/?utm_source=qr&r=nametag'
    }
  },
  {
    id: 15,
    name: 'Priya Mathur',
    role: 'Content Maker',
    image: 'images/team/priyamathur.jpg',
    bio: 'Blockchain specialist with expertise in smart contracts and decentralized apps.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 16,
    name: 'Yashasvi Saini',
    role: 'Content and Documentation',
    image: 'images/team/yashasvisaini.jpeg',
    bio: 'Prepares event content, handles official docs, and maintains records.',
    social: {
      linkedin: 'https://www.linkedin.com/in/yashasvi-saini-b44424352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // twitter: '#',
      instagram: 'https://www.instagram.com/y_ashasvi_/profilecard/?igsh=aDFmOGIyYnhxbzB4'
    }
  },
  {
    id: 17,
    name: 'Shorya Pratap',
    role: 'Outreaching',
    image: 'images/team/shoryapratap.jpg',
    bio: 'AI specialist with expertise in natural language processing and computer vision.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 18,
    name: 'Yogita Chugh',
    role: 'Sponsorship & Finance',
    image: 'images/team/yogitachugh.png',
    bio: 'User experience researcher focused on understanding user needs and behaviors.',
    social: {
      linkedin: 'https://www.linkedin.com/in/yogita-chugh-8927a832a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      // twitter: '#',
      instagram: 'https://www.instagram.com/yogita_chugh17?igsh=MXh0ZGdjanoyMjFqbg=='
    }
  },
  {
    id: 19,
    name: 'Saksham Jain',
    role: 'Video Editor',
    image: 'images/team/sakshamjain.jpg',
    bio: 'Documentation specialist with a talent for explaining complex technical concepts.',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 20,
    name: 'Krishna Gupta',
    role: 'Event Management',
    image: 'images/team/krishnagupta.jpg',
    bio: 'Oversees planning, scheduling, and smooth execution of the entire event.',
    social: {
      linkedin: 'https://www.linkedin.com/in/krishna-gupta333',
      twitter: 'https://x.com/Krishna75819279?t=-tfA3THciIAxbyMc8uL6rw&s=08',
      instagram: 'https://www.instagram.com/1k.r.i.s.h.n.a._?igsh=MXJkenFjemdydGEydg=='
    }
  },
  {
    id: 21,
    name: 'Priyanshu Kumar',
    role: 'Tech Dev Team',
    image: 'images/team/priyanshukumar.jpg',
    bio: 'Develops and maintains the website, platforms, and event tech infrastructure.',
    social: {
      // linkedin: 'https://www.linkedin.com/in/krishna-gupta333',
      twitter: 'https://x.com/Priyanshu15100',
      instagram: 'https://www.instagram.com/that.coldcoffee'
    }
  },
];



const founders = [
  {
    id: 1,
    name: 'Jha Suraj Kumar',
    role: 'Founder',
    image: 'images/jhasurajkumar.jpg',
    bio: 'Tech entrepreneur with experience in building communities and organizing 15+ hackathons and 50+ Technical Workshops',
    social: {
      linkedin: 'https://www.linkedin.com/in/jha-surajkumar/',
      twitter: 'https://x.com/Surajkumar2jha',
      instagram: 'https://www.instagram.com/suraj.lov_07'
    }
  },
  {
    id: 2,
    name: 'Chinmay Bhatt',
    role: 'Co-Founder',
    image: 'images/chinmay.jpg',
    bio: 'Tech entrepreneur with experience in organizing 4+ hackathons and 5+ Technical Workshops',
    social: {
      linkedin: 'https://www.linkedin.com/in/chinmaybhattt',
      twitter: 'https://x.com/chinmaybhattt',
      instagram: 'https://www.instagram.com/chinmaybhattt'
    }
  },
];

// We need exactly 20 team members for the carousel
const allTeamMembers = [...coreMembers];

// If we don't have 20 members yet, generate more to reach exactly 20
if (allTeamMembers.length < 20) {
  const roles = ['Developer', 'Designer', 'Marketing', 'Content Creator', 'Project Manager', 'QA Engineer', 'DevOps Engineer', 'Data Scientist'];
  
  for (let i = allTeamMembers.length + 1; i <= 20; i++) {
    const initials = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + 
                    String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const roleIndex = Math.floor(Math.random() * roles.length);
    
    allTeamMembers.push({
      id: i,
      name: `Team Member ${i}`,
      role: roles[roleIndex],
      image: `https://placehold.co/300x300/4F46E5/FFFFFF?text=${initials}`,
      bio: `Passionate ${roles[roleIndex].toLowerCase()} contributing to our community's growth and success.`,
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    });
  }
}

// Duplicate the array to create a seamless infinite loop
// Using three copies ensures all cards are visible in sequence
const duplicatedMembers = [...allTeamMembers, ...allTeamMembers, ...allTeamMembers];

const Team = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12,
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        duration: 0.5
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(79, 70, 229, 0.4)",
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      }
    }
  };
  
  // Auto-scrolling carousel animation controls
  const carouselControls = useAnimation();
  const x = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  // Start the auto-scrolling animation immediately on load
  useEffect(() => {
    // Start animation immediately
    const startAnimation = () => {
      if (!isHovering) {
        carouselControls.start({
          x: '-300%', // Move to show all team members completely (three full sets)
          transition: {
            x: {
              duration: 90, // Much slower speed to ensure all cards are visible
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0 // No delay between repetitions for seamless loop
            }
          }
        });
      } else {
        // Pause the animation when hovering
        carouselControls.stop();
      }
    };
    
    // Start animation immediately
    startAnimation();
    
    return () => {
      // Cleanup animation when component unmounts
      carouselControls.stop();
    };
  }, [carouselControls, isHovering]);

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-primary">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The passionate individuals behind Hacker's Unity who are dedicated to building and
            supporting our vibrant tech community
          </p>
        </motion.div>

        {/* Founders Section */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-white mb-16 relative inline-block"
          >
            <span className="relative z-10">Founders</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
          </motion.h3>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {founders.map((founder) => (
              <motion.div
                key={founder.id}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-8 flex flex-col items-center text-center group"
              >
                <motion.div 
                  className="mb-8 relative"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-secondary/30 p-1">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-accent text-white text-sm font-semibold py-1 px-4 rounded-full">
                    {founder.role}
                  </div>
                </motion.div>
                
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {founder.name}
                </h4>
                
                <p className="text-gray-300 mb-6">{founder.bio}</p>
                
                <div className="flex space-x-6">
                  <motion.a
                    href={founder.social.linkedin}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
                  >
                    <LinkedInIcon />
                  </motion.a>
                  <motion.a
                    href={founder.social.twitter}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
                  >
                    <TwitterIcon />
                  </motion.a>
                  <motion.a
                    href={founder.social.instagram}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
                  >
                    <InstagramIcon />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Team Section - Auto-scrolling Carousel - Commented out as requested */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 text-center bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl p-10 max-w-4xl mx-auto"
        >
          <h4 className="text-2xl font-bold text-white mb-6">Join Our Team</h4>
          <p className="text-gray-300 mb-8 text-lg">
            We're always looking for talented individuals who are passionate about technology and community building.
            If you're excited about making an impact in the tech world, we'd love to hear from you!
          </p>
          <motion.a
            href="https://forms.gle/CBN36n3sssEr31Lo8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(79, 70, 229, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary inline-flex items-center space-x-2"
          >
            <span>View Open Positions</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
      
      {/* Binary code background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full flex flex-wrap text-xs text-secondary/50 font-mono">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-1/10 opacity-30">
              {Array.from({ length: 30 }).map((_, j) => (
                <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
