import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    // Fade in section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Header animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, delay: 0.5, duration: 1, ease: "power2.out" }
    );

    // Cards animation
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0, scale: 0.9, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          delay: 0.2 * index,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      title: "G and C Perfume Store Logo",
      img: "/images/project1.jpg",
      link: "https://www.canva.com/design/DAGrYDH1vA0/t163Zk5WJ7F-574ONWc1nA/view",
    },
    {
      title: "ECOWAS News in Africa",
      img: "/images/project2.jpg",
      link: "https://assets.adobe.com/id/urn:aaid:sc:US:7aacab16-b4d1-40eb-8b8e-1c85c2164038?view=published",
    },
    {
      title: "YC Directory App",
      img: "/images/project3.jpg",
      link: "https://www.canva.com/design/DAGfvGsn2aA/E7hqHTRT8heDVbSKb79SKA/view",
    },
    {
      title: "KMS & co Skincare Store",
      img: "/images/project4.jpg",
      link: "",
    },
    {
      title: "Kindemy Learning Platform",
      img: "/images/project5.jpg",
      link: "https://www.sketch.com/s/7d626c06-317b-4c13-b8ad-cd2f8929fc1b",
    },
    {
      title: "Traffik App (Figma)",
      img: "/images/project6.jpg",
      link: "https://www.figma.com/design/mZo8zLX0PQ3A0HMoaK3th6/traffik-app-design",
    },
    {
      title: "KTMO brand bead design",
      img: "/images/project7.jpg",
      link: "https://www.canva.com/design/DAGrdAL9ePc/Y6FEet_5YmgaafdFM81D2A/view",
    },
    {
      title: "Pawfect finder app",
      img: "/images/project8.jpg",
      link: "https://www.canva.com/design/DAGfvGsn2aA/E7hqHTRT8heDVbSKb79SKA/view?utm_content=DAGfvGsn2aA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hade1dab8e4",
    },
  ];

  return (
    <div ref={sectionRef} id="work" className="bg-black min-h-screen py-20 px-4 md:px-10 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            Featured Projects
          </h1>
          <p
            ref={subtitleRef}
            className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto"
          >
            A futuristic collection of design solutions, infused with creativity and clarity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, i) => (
            <div
              key={i}
              ref={addToRefs}
              className="group relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl bg-white/5 hover:bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-500 transform hover:scale-[1.025] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-[1deg]"
                  />
                </a>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-white mb-2">{project.title}</h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
