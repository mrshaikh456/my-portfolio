"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Star,
  Github,
  Linkedin,
  Twitter,
  Code,
  Paintbrush,
  Video,
  PenTool,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import Image from "next/image";

export function PortfolioComponent() {

  // Explicitly typing useRef to reference HTML elements
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const portfolioRef = useRef<HTMLElement | null>(null);
  const testimonialsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = [
        heroRef,
        aboutRef,
        skillsRef,
        portfolioRef,
        testimonialsRef,
        contactRef,
      ];

      sections.forEach((section) => {
        if (section.current) {
          const sectionTop = section.current.offsetTop;
          const sectionHeight = section.current.clientHeight;
          if (
            scrollY > sectionTop - window.innerHeight / 2 &&
            scrollY < sectionTop + sectionHeight - window.innerHeight / 2
          ) {
            section.current.style.opacity = "1";
            section.current.style.transform = "translateY(0)";
          } else {
            section.current.style.opacity = "0";
            section.current.style.transform = "translateY(50px)";
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      category: "Front-end Development",
      items: [
        "HTML5/CSS3/JavaScript",
        "React.js",
        "Vite",
        "Bootstrap",
        "Tailwind",
        "GSAP",
      ],
    },
    {
      category: "Back-end Development",
      items: ["Python", "Java", "C++", "R Programming", "MySQL"],
    },
    {
      category: "UI/UX Design",
      items: ["Figma", "Prototyping", "Mockups", "Illustrations"],
    },
    { category: "Operating Systems", items: ["Ubuntu", "Kali Linux"] },
    {
      category: "Other",
      items: [
        "Data Structures and Algorithms",
        "Microcontrollers",
        "Soft skills",
      ],
    },
  ];

  const projects = {
    web: [
      {
        title: "E-commerce Platform",
        description:
          "A fully responsive online store built with React and Node.js",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Task Management App",
        description:
          "A productivity tool with real-time updates using Socket.io",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    design: [
      {
        title: "Brand Identity",
        description: "Complete brand overhaul for a tech startup",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "UI/UX Redesign",
        description: "Improved user experience for a popular mobile app",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    video: [
      {
        title: "Product Launch",
        description: "Cinematic video for a new gadget release",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Corporate Documentary",
        description: "Behind-the-scenes look at a Fortune 500 company",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    writing: [
      {
        title: "Tech Blog",
        description: "Series of articles on emerging technologies",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "E-book",
        description: "Comprehensive guide on web development best practices",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  };

  const testimonials = [
    {
      name: "John Doe",
      title: "CEO, Tech Innovators",
      quote:
        "Working with Mr. Shaikh was an absolute pleasure. Their attention to detail and creative problem-solving skills truly set them apart.",
    },
    {
      name: "Jane Smith",
      title: "Marketing Director, Creative Co.",
      quote:
        "Mr. Shaikh's ability to blend technical expertise with creative flair resulted in a website that exceeded our expectations.",
    },
    {
      name: "Alex Johnson",
      title: "Founder, StartUp X",
      quote:
        "The video editing skills of Mr. Shaikh brought our product launch to life. The final cut was simply breathtaking.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Montserrat']">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center text-center transition-all duration-1000"
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#6600ff] to-[#ff00ff] opacity-20"></div> */}
        <div className="relative z-10 space-y-4">
          <h1 className="text-5xl font-bold mb-4">
            Hello, I&apos;m Mr. Shaikh
          </h1>
          <p className="text-5xl font-semibold h-16">
            I&apos;m a{" "}
            <span>
              <Typewriter
                words={["Web Developer", "Designer", "Video Editor", "Author"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>
          <Button className="bg-[#ff00ff] text-white hover:bg-[#cc00cc] text-xl p-3 transition-all duration-300 transform hover:scale-105">
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Contact Me
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="py-20 bg-[#1a1a1a] transition-all duration-1000"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
                src="/images/profile-pic.jpg"
                alt="Mr. Shaikh"
                width={300}
                height={300}
                className="rounded-full object-cover mx-auto border-4 border-[#ff00ff]"
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl font-bold mb-4 text-[#ff00ff]">
                About Me
              </h2>
              <p className="mb-6 text-[#e0e0e0]">
                I&apos;m a web developer and UI/UX Designer with a passion for
                creating immersive digital experiences. I specialize in
                front-end and back-end development, with expertise in various
                programming languages and frameworks.
                <br />
                <br />
                Beyond the screens you&apos;ll find me lost in virtual worlds,
                gaming away or diving into the depths of a good book. I&apos;ve
                got a knack of spinning tales too - Whether it&apos;s through,
                shayaris, ghazals, poems, stories, or writing a book. Oh, and
                anime? Count me in! I&apos;m all about those captivating
                narratives and mind-blowing visuals.
                <br />
                <br />
                I&apos;m a firm believer in the power of collaboration and
                creativity to bring ideas to life. Whether you&apos;re working
                on a team project, mentoring a student, or creating something
                completely unique, I&apos;m here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        className="py-20 bg-[#0a0a0a] transition-all duration-1000"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#ff00ff]">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#6600ff]">
                  {skillCategory.category}
                </h3>
                <ul className="list-disc list-inside text-[#e0e0e0]">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="mb-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section
        ref={portfolioRef}
        className="py-20 bg-[#1a1a1a] transition-all duration-1000"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#ff00ff]">
            My Work
          </h2>
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="web" className="text-[#b3b3b3]">
                <Code className="mr-2" />
                Web Development
              </TabsTrigger>
              <TabsTrigger value="design" className="text-[#b3b3b3]">
                <Paintbrush className="mr-2" />
                Design
              </TabsTrigger>
              <TabsTrigger value="video" className="text-[#b3b3b3]">
                <Video className="mr-2" />
                Video Editing
              </TabsTrigger>
              <TabsTrigger value="writing" className="text-[#b3b3b3]">
                <PenTool className="mr-2" />
                Writing
              </TabsTrigger>
            </TabsList>
            {Object.entries(projects).map(([category, projectList]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projectList.map((project, index) => (
                    <Card
                      key={index}
                      className="bg-[#0a0a0a] border-[#6600ff] overflow-hidden transition-all duration-300 transform hover:scale-105"
                    >
                      <CardHeader>
                        <CardTitle className="text-[#ff00ff]">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-[#e0e0e0]">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={300}
                          height={300}
                          className="w-full h-48 object-cover rounded-md"
                        />
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-[#6600ff] hover:bg-[#5200cc]">
                          View Project
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={testimonialsRef}
        className="py-50 bg-[#0a0a0a] transition-all duration-1000"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#ff00ff]">
            What Clients Say
          </h2>
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-[#1a1a1a] border-[#6600ff]">
                    <CardHeader>
                      <CardTitle className="text-[#ff00ff]">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-[#e0e0e0]">
                        {testimonial.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#e0e0e0]">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-[#ffcc00] fill-current"
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="py-40 bg-[#1a1a1a] transition-all duration-1000"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#ff00ff]">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-[#0a0a0a] text-white border-[#6600ff]"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#0a0a0a] text-white border-[#6600ff]"
                />
                <Textarea
                  placeholder="Your Message"
                  className="bg-[#0a0a0a] text-white border-[#6600ff]"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#ff00ff] hover:bg-[#cc00cc] transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start space-y-4">
              <p className="text-xl text-[#e0e0e0]">
                Connect with me on social media:
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#6600ff] text-[#6600ff] hover:bg-[#6600ff] hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#6600ff] text-[#6600ff] hover:bg-[#6600ff] hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#6600ff] text-[#6600ff] hover:bg-[#6600ff] hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter className="h-6 w-6" />
                </Button>
              </div>
              <p className="text-xl mt-4 text-[#e0e0e0]">
                Or email me directly:
              </p>
              <a
                href="mailto:mr.shaikh456456@gmail.com"
                className="text-[#ff00ff] hover:underline"
              >
                mr.shaikh456456@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Mr. Shaikh. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-[#e0e0e0] hover:text-[#ff00ff] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#e0e0e0] hover:text-[#ff00ff] transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
