import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, User, Briefcase, Mail, ExternalLink } from 'lucide-react';

// Link to the Inter font from Google Fonts.
// This ensures the custom font is loaded and applied correctly.
const fontLink = (
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap"
    rel="stylesheet"
  />
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Defines the navigation links and their corresponding icons and IDs.
  const navLinks = [
    { name: 'About', id: 'about', icon: <User /> },
    { name: 'Projects', id: 'projects', icon: <Briefcase /> },
    { name: 'Contact', id: 'contact', icon: <Mail /> },
  ];

  // Toggles the mobile menu open and closed.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // This useEffect hook listens for scroll events to determine which section
  // is currently in view and updates the activeSection state accordingly.
  // This highlights the current section in the navigation bar.
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      // The scroll position is adjusted by half the window height to
      // trigger the change when the section is in the middle of the screen.
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener when the component unmounts.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
    title: "Duskwitch: Heroic Soul - Creative Lead",
    description: "After receiving funding from Weird Ghosts, developed a functional prototype as the creative director of Vivdblue Ltd. Production is on hiatus, but the demo is available on Steam and itch.io",
    image: "https://www.vividblue.net/img/test_img.jpeg",
    tags: ["Unreal Engine", "Character Art", "Creative Director", "Game Projects"],
    link: "https://www.vividblue.net/"
    },
    {
      title: "Open Colosseum - Environment Models and Props",
      description: "3D Environment Lead work done for NFTy Arcade's game: Open Colosseum. Exhibiting sculpting, retopology, and texturing skills for game-ready assets.",
      image: "https://cdna.artstation.com/p/assets/covers/images/086/846/718/smaller_square/nate-tannis-nate-tannis-tbrender-014.jpg?1744216770",
      tags: ["Shipped Title", "Environment Art", "Maya", "Stylized", "ZBrush", "Substance Painter", "Unity"],
      link: "https://natetannis.artstation.com/projects/nJLwa6"
    },
 {
      title: "UE5 Environment - Edge of the World",
      description: "Stylized cityscape inspired by Blue Archive, real-time render in Unreal Engine 5.",
      image: "https://i.postimg.cc/pd19Pyw8/Screenshot-20250810-002528-Chrome.jpg",
      tags: ["Environment Art", "Maya", "Stylized", "Substance Painter", "Unreal Engine"],
      link: "https://www.linkedin.com/posts/natetannis_im-thrilled-to-share-my-latest-project-activity-7281841204261003264-ZE0x?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAC5Nhg8BTkoQ4wANmP1OzOvyTId7cYl2lF0&utm_campaign=copy_link"
    },
    {
      title: "Ambriel - Chibi VTuber Model",
      description: "3D chibi model made for a client, set up with motion tracking and 2D mouth lipsync!",
      image: "https://cdna.artstation.com/p/assets/videos/images/083/519/042/smaller_square/nate-tannis-maxresdefault.jpg?1736174634",
      tags: ["Character Art", "Anime Style", "Animation", "Maya", "Unity"],
      link: "https://natetannis.artstation.com/projects/oJ699J"
    },
    {
    title: "Civic Story - Character Artist",
    description: "Created stylized character models for Civic Story using Maya and Substance Painter, shipped Civic Story with well-optimized assets with an educational theme.",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1880370/header.jpg?t=1730226416",
    tags: ["Shipped Title", "Character Art", "Anime Style", "Maya", "Substance Painter"],
    link: "https://store.steampowered.com/app/1880370/Civic_Story/"
    },
  ];

  return (
    <div className="bg-gray-950 text-gray-100 font-inter">
      {/* Load the Inter font using a link tag */}
      {fontLink}
      {/* Header and Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/70 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400">
            Nathaniel Tannis
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`flex items-center space-x-2 text-lg font-medium transition-colors duration-300 rounded-lg px-3 py-2
                  ${activeSection === link.id ? 'text-teal-400' : 'text-gray-400 hover:text-gray-50'}`}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 text-gray-400 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-lg">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-950/90 backdrop-blur-md pb-4">
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={toggleMenu}
                  className={`flex items-center space-x-2 w-full text-center py-2 text-lg font-medium transition-colors duration-300
                    ${activeSection === link.id ? 'text-teal-400 bg-gray-800' : 'text-gray-400 hover:text-gray-50 hover:bg-gray-800'}`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="h-screen flex items-center justify-center text-center p-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              3D Artist & Creative Lead
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              Creating cute and vibrant characters, immersive stylized environments and props for games and digital media.
            </p>
            <a href="#projects" className="mt-8 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10 transition-transform duration-300 transform hover:scale-105 shadow-lg">
              Explore My Work
              <Rocket className="ml-2" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-gray-900 rounded-t-[50px] md:rounded-t-[100px] -mt-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12">
              <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-teal-400">
                <img
                  src="https://i.postimg.cc/jSLDpnGt/nateavatar.png"
                  alt="Nathaniel Tannis"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/256x256/1e293b/d1d5db?text=Avatar' }}
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">About Me</h2>
                <p className="mt-6 text-lg text-gray-400">
                  Hey there! I'm a passionate 3D artist with 5 years of experience that loves making 3D models look like 2D art as much as I can. As an instructor at VCAD, 
                  I've honed my ability to teach and communicate complex artistic and technical concepts. My time as a Creative Director running VividBlue Ltd gave me invaluable experience in managing project workflows, collaborating with teams, and delivering on a shared vision.
                </p>
                <p className="mt-4 text-lg text-gray-400">
                  I'm proficient with creating detailed stylized assets and environments using industry-standard software like Maya, ZBrush, and Substance Painter. My experience with game engines like Unreal Engine and Unity allows me to create assets that are both visually appealing and technically optimized.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 bg-gray-950">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white">My Work</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1f2937/d1d5db?text=Project+Image' }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300 flex items-center">
                      {project.title} <ExternalLink size={18} className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
                    </h3>
                    <p className="mt-3 text-gray-400">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-teal-800 text-teal-200 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-gray-900 rounded-b-[50px] md:rounded-b-[100px] mt-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Let's Connect</h2>
            <p className="mt-6 text-lg text-gray-400">
              I'm always open to new opportunities and commission work! Feel free to reach out and say hi!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="mailto:nate_tannis@outlook.com" className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-sky-600 hover:bg-sky-700 transition-transform duration-300 transform hover:scale-105 shadow-lg">
                <div className="flex items-center justify-center">
                  <Mail className="mr-2" />
                  Send an Email
                </div>
              </a>
              <a href="https://www.linkedin.com/in/natetannis/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 border-2 border-gray-500 text-base font-medium rounded-full text-gray-50 hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105 shadow-lg">
                Connect on LinkedIn
              </a>
              <a href="https://natetannis.artstation.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 border-2 border-gray-500 text-base font-medium rounded-full text-gray-50 hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105 shadow-lg">
                View ArtStation
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 bg-gray-950">
        <p>&copy; 2025 Nathaniel Tannis. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
