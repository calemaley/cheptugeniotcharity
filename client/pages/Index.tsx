// client/pages/Index.tsx
import { useState, useEffect, useRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Users,
  GraduationCap,
  Droplets,
  Utensils,
  TrendingUp,
  Calendar,
  User,
  MapPin,
  Star,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { redirectToPayment, CAMPAIGN_SOURCES } from "@/lib/payment";
import { recentBlogs } from "@shared/blog-data";
import { recentPrograms } from "@shared/programs-data";
import { allChildren } from "@shared/children-data";
import Carousel from "@/components/Carousel";

/**
 * SectionReveal: simple reveal-on-scroll wrapper using IntersectionObserver.
 * Adds "reveal-in" class when visible; default state is hidden with translate+opacity.
 *
 * Usage: wrap each major <section> content with <SectionReveal>...</SectionReveal>
 */
const SectionReveal = ({
  children,
  rootMargin = "-10% 0px -10% 0px",
  threshold = 0.12,
}: {
  children: ReactNode;
  rootMargin?: string;
  threshold?: number;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            // keep visible once revealed
            obs.unobserve(el);
          }
        });
      },
      { root: null, rootMargin, threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  return (
    <section
      ref={ref as any}
      className={cn(
        // initial hidden state
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      aria-hidden={!visible}
    >
      {children}
    </section>
  );
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Featured children for homepage (use first 4 from shared data)
  const featuredChildren = allChildren.slice(0, 4);

  // Hero images for background carousel with specific positioning for faces
  const heroImages = [
    {
      src: "/hero-boy-bricks.jpg",
      title: "Building Dreams Together",
      subtitle: "Every brick tells a story of hope and determination",
      description: "Join hands with our community to create lasting change",
      objectPosition: "center 40%", // Position to show boy's face
    },
    {
      src: "/hero-community-gathering.jpg",
      title: "Unity in Action",
      subtitle: "Strong communities, brighter futures",
      description: "Together we build stronger foundations for generations to come",
      objectPosition: "center 45%", // Position to show speakers' faces
    },
    {
      src: "/hero-group-family.jpg",
      title: "Family & Community",
      subtitle: "Supporting each other, growing together",
      description: "Every family deserves opportunity, dignity, and care",
      objectPosition: "center 50%", // Position to show group faces
    },
  ];

  const popularProjects = [
    {
      icon: Heart,
      title: "Make a Donation",
      description:
        "Your contribution helps us provide essential resources to children in need.",
      color: "charity-orange-500",
    },
    {
      icon: Users,
      title: "Sponsor a Child",
      description:
        "Create a lasting impact by sponsoring a child's education and development.",
      color: "charity-green-500",
    },
    {
      icon: GraduationCap,
      title: "Become a Volunteer",
      description:
        "Join our team and make a direct difference in children's lives.",
      color: "charity-orange-600",
    },
  ];

  const helpItems = [
    {
      icon: TrendingUp,
      title: "Start investing in our volunteer group",
      description:
        "Join our growing community of dedicated volunteers making real change.",
    },
    {
      icon: Droplets,
      title: "Because Everyone Deserves Clean Water",
      description:
        "Help us provide access to clean, safe drinking water for all.",
    },
    {
      icon: GraduationCap,
      title: "Childhood Education development support",
      description:
        "Support educational programs that give children the tools for success.",
    },
    {
      icon: Utensils,
      title: "Child Deserves Better Healthy Foods",
      description:
        "Ensure children have access to nutritious meals for healthy growth.",
    },
  ];

  const stats = [
    { number: "15+", label: "Total Campaigns" },
    { number: "50+", label: "Volunteers" },
    { number: "8K+", label: "Quick Fundraise" },
    { number: "87+", label: "Happy Volunteers" },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        setTimeout(() => setIsTransitioning(false), 2100);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length, isTransitioning]);


  return (
    <>
      {/* Hero Background Carousel */}
      <SectionReveal>
        <section className="relative h-screen overflow-hidden">
          <Navigation />
          
          {/* Background Image Carousel */}
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-[2000ms] ease-in-out",
                  index === currentSlide
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110",
                )}
                style={{
                  transitionDelay: index === currentSlide ? "0ms" : "0ms",
                }}
              >
                {/* Background Image with Parallax Effect */}
                <div className="absolute inset-0">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: image.objectPosition || "center center",
                      transform: index === currentSlide ? "scale(1.05)" : "scale(1.08)",
                      transition: "transform 20s ease-out",
                    }}
                  />
                  {/* Gradient Overlays - Lighter for better image visibility */}
                  <div className="absolute inset-0 bg-gradient-to-br from-charity-primary-900/65 via-charity-primary-800/55 to-charity-green-900/65" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                  {/* Side vignettes to keep focus on center faces */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
                  {/* Top gradient to reduce sky brightness */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
                </div>

                {/* Animated Pattern Overlay */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px',
                    animation: index === currentSlide ? 'patternMove 30s linear infinite' : 'none',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {/* Darker backdrop behind content for better readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none" />
              <div className="relative space-y-8">
                {/* Animated Badge */}
                <div className="inline-block px-6 py-2.5 bg-gradient-to-r from-white/20 via-charity-purple-500/20 to-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-xl">
                  <span className="text-sm md:text-base font-semibold text-white drop-shadow-lg">
                    Building Stronger Communities
                  </span>
                </div>

                {/* Main Title with Animation */}
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight min-h-[1.2em] drop-shadow-2xl">
                    <span 
                      key={currentSlide}
                      className="block animate-fade-in-up"
                      style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.7)' }}
                    >
                      {heroImages[currentSlide].title}
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium max-w-3xl mx-auto min-h-[1.5em] drop-shadow-lg">
                    <span 
                      key={`subtitle-${currentSlide}`}
                      className="inline-block animate-fade-in-up"
                      style={{ 
                        animationDelay: '0.2s',
                        textShadow: '0 2px 12px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.8)' 
                      }}
                    >
                      {heroImages[currentSlide].subtitle}
                    </span>
                  </p>
                  <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto pt-2 min-h-[2.5em] drop-shadow-md">
                    <span 
                      key={`desc-${currentSlide}`}
                      className="inline-block animate-fade-in-up px-4 py-2 bg-black/20 backdrop-blur-sm rounded-lg"
                      style={{ 
                        animationDelay: '0.4s',
                        textShadow: '0 1px 6px rgba(0,0,0,0.7)' 
                      }}
                    >
                      {heroImages[currentSlide].description}
                    </span>
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link
                    to="/get-involved/volunteer"
                    key={`btn1-${currentSlide}`}
                    className="px-8 py-4 bg-charity-orange-500 hover:bg-charity-orange-600 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-charity-orange-500/50 hover:scale-105 flex items-center justify-center group backdrop-blur-sm animate-fade-in-up"
                    style={{ animationDelay: '0.6s' }}
                  >
                    Join Us Today
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={() =>
                      redirectToPayment("donationUrl", {
                        source: CAMPAIGN_SOURCES.hero,
                        campaign: "hero-donate",
                      })
                    }
                    key={`btn2-${currentSlide}`}
                    className="px-8 py-4 border-2 border-white/90 text-white hover:bg-white/10 hover:border-white rounded-xl transition-all duration-300 font-semibold text-lg backdrop-blur-sm hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: '0.7s' }}
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators - Bottom Center */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentSlide(index);
                      setTimeout(() => setIsTransitioning(false), 2100);
                    }
                  }}
                  className={cn(
                    "relative transition-all duration-500",
                    index === currentSlide ? "w-12" : "w-3"
                  )}
                >
                  <div
                      className={cn(
                        "h-3 rounded-full transition-all duration-500",
                        index === currentSlide
                          ? "bg-gradient-to-r from-charity-purple-500 to-charity-orange-400 shadow-lg shadow-charity-purple-500/50"
                          : "bg-white/50 hover:bg-charity-purple-200/70"
                      )}
                  />
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-gradient-to-r from-charity-purple-400 to-charity-orange-400 rounded-full animate-ping opacity-20" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Auto-play Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
            <div 
              key={currentSlide}
              className="h-full bg-gradient-to-r from-charity-purple-500 via-charity-orange-400 to-charity-green-400 animate-progress"
              style={{ animationDuration: "6s", animationTimingFunction: "linear" }}
            />
          </div>
        </section>
      </SectionReveal>

      {/* About Us Snippet - Reordered */}
      <SectionReveal>
        <section className="py-24 bg-gradient-to-br from-white to-charity-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 lg:order-2">
                <div>
                  <div className="inline-block mb-4 px-4 py-2 bg-charity-orange-100 rounded-full">
                    <span className="text-charity-orange-700 font-semibold text-sm tracking-wider">
                      ABOUT US
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-charity-neutral-800 mb-6">
                    Building Stronger Communities
                  </h2>
                </div>
                <p className="text-lg text-charity-neutral-600 leading-relaxed">
                  Tabasamu Charity is dedicated to transforming lives and building stronger communities through education, healthcare, and sustainable development. Since our founding, we've been committed to creating lasting positive change for children and families across Kenya.
                </p>
                <p className="text-charity-neutral-600 leading-relaxed">
                  Our comprehensive programs focus on providing quality education, essential healthcare services, and opportunities for community development. Together with our volunteers and supporters, we're building a brighter future for the next generation.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-charity-orange-600 to-charity-orange-500 hover:from-charity-orange-700 hover:to-charity-orange-600 text-white rounded-xl transition-all duration-300 font-bold transform hover:scale-105 shadow-lg"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="relative lg:order-1">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <img
                    src="/children-school-group.jpg"
                    alt="Cheptugeniot Initiative - Children in School"
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: 'center 50%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Call-to-Action Section */}
      <SectionReveal>
        <section className="py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Volunteer Section */}
            <div className="relative h-80 lg:h-96 bg-charity-orange-600 flex items-center justify-center overflow-hidden group cursor-pointer">
              <img
                src="/children-school-group.jpg"
                alt="Children in School - Volunteer with Us"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                style={{ objectPosition: 'center 50%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charity-orange-600/80 to-charity-orange-500/80 group-hover:from-charity-orange-700/90 group-hover:to-charity-orange-600/90 transition-all duration-500" />
              <div className="relative text-center text-white px-8 group-hover:scale-105 transition-transform duration-500">
                <Users className="h-16 w-16 mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                <h3 className="text-3xl font-bold mb-4 group-hover:text-yellow-100 transition-colors duration-300">
                  Become A Volunteer
                </h3>
                <p className="text-xl mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Join our mission to make a difference
                </p>
                <Link
                  to="/get-involved/volunteer"
                  className="inline-block px-8 py-3 bg-white text-charity-orange-600 hover:bg-yellow-100 hover:scale-105 hover:shadow-lg rounded-lg font-bold transition-all duration-300 group-hover:animate-pulse"
                >
                  JOIN NOW
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>

            {/* Donate Section */}
            <div className="relative h-80 lg:h-96 bg-charity-green-700 flex items-center justify-center overflow-hidden group cursor-pointer">
              <img
                src="/children-school-group.jpg"
                alt="Children in School - Support Our Cause"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                style={{ objectPosition: 'center 50%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charity-green-700/80 to-charity-green-600/80 group-hover:from-charity-green-800/90 group-hover:to-charity-green-700/90 transition-all duration-500" />
              <div className="relative text-center text-white px-8 group-hover:scale-105 transition-transform duration-500">
                <Heart className="h-16 w-16 mx-auto mb-4 group-hover:scale-110 group-hover:text-pink-200 transition-all duration-500 fill-current" />
                <h3 className="text-3xl font-bold mb-4 group-hover:text-green-100 transition-colors duration-300">
                  Support Our Cause
                </h3>
                <p className="text-xl mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Every donation creates lasting impact
                </p>
                <button
                  onClick={() =>
                    redirectToPayment("donationUrl", {
                      source: CAMPAIGN_SOURCES.cta,
                      campaign: "donate-section",
                    })
                  }
                  className="inline-block px-8 py-3 bg-white text-charity-green-700 hover:bg-green-100 hover:scale-105 hover:shadow-lg rounded-lg font-bold transition-all duration-300 group-hover:animate-pulse"
                >
                  DONATE NOW
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Popular Projects */}
      <SectionReveal>
        <section className="py-28 bg-gradient-to-b from-white to-charity-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-charity-purple-100 to-charity-orange-100 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-charity-purple-700 to-charity-orange-700 bg-clip-text text-transparent tracking-wider">
                  WAYS TO MAKE AN IMPACT
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-charity-neutral-800">
                How You Can Help
              </h3>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto mt-4">
                Choose how you'd like to support our mission and transform lives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {popularProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-500 text-center cursor-pointer group border-2 border-transparent hover:border-charity-orange-200"
                  >
                    <div
                      className={cn(
                        "w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500",
                        `bg-${project.color}/10 group-hover:bg-${project.color}/20`,
                      )}
                    >
                      <IconComponent
                        className={cn(
                          "h-8 w-8 group-hover:scale-125 transition-transform duration-300",
                          `text-${project.color}`,
                        )}
                      />
                    </div>
                    <h4 className={cn(
                      "text-xl font-bold text-charity-neutral-800 mb-4 group-hover:scale-105 transition-all duration-300",
                      index === 0 ? "group-hover:text-charity-orange-600" : index === 1 ? "group-hover:text-charity-purple-600" : "group-hover:text-charity-green-600"
                    )}>
                      {project.title}
                    </h4>
                    <p className="text-charity-neutral-600 group-hover:text-charity-neutral-700 transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {project.title === "Make a Donation" ? (
                        <button
                          onClick={() =>
                            redirectToPayment("donationUrl", {
                              source: CAMPAIGN_SOURCES.hero,
                              campaign: "popular-projects-donate",
                            })
                          }
                          className="inline-block px-6 py-2 bg-charity-orange-600 text-white rounded-lg hover:bg-charity-orange-700 transition-colors duration-200"
                        >
                          Donate Now
                        </button>
                      ) : project.title === "Sponsor a Child" ? (
                        <Link
                          to="/sponsor"
                          className="inline-block px-6 py-2 bg-charity-orange-600 text-white rounded-lg hover:bg-charity-orange-700 transition-colors duration-200"
                        >
                          Sponsor Now
                        </Link>
                      ) : (
                        <Link
                          to="/get-involved/volunteer"
                          className="inline-block px-6 py-2 bg-charity-orange-600 text-white rounded-lg hover:bg-charity-orange-700 transition-colors duration-200"
                        >
                          Learn More
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Meet Our Children */}
      <SectionReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Meet Our Children
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Every child has a unique story and dreams waiting to be
                fulfilled. Meet some of the amazing children who need your
                support to achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {featuredChildren.slice(0, 2).map((child, index) => (
                <div
                  key={child.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group cursor-pointer transform hover:-translate-y-2"
                  onClick={() =>
                    (window.location.href = `/sponsor?child=${child.id}`)
                  }
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={child.image}
                      alt={child.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="text-sm font-medium">
                          Dreams of being a {child.dreamJob}
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-charity-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      Available
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-charity-neutral-800 mb-2 group-hover:text-charity-orange-600 transition-colors duration-200">
                      {child.name}
                    </h3>

                    <div className="flex items-center text-charity-neutral-600 mb-4">
                      <Calendar className="h-4 w-4 mr-2 text-charity-orange-500" />
                      <span className="font-medium">{child.age} years old</span>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-charity-neutral-700 mb-2">
                        Interests:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {child.interests.map((interest, i) => (
                          <span
                            key={i}
                            className={cn(
                              "px-3 py-1 text-sm rounded-full font-medium transition-all duration-300",
                              i % 2 === 0 
                                ? "bg-charity-green-100 text-charity-green-700 hover:bg-charity-green-200"
                                : "bg-charity-purple-100 text-charity-purple-700 hover:bg-charity-purple-200"
                            )}
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6 p-4 bg-charity-orange-50 rounded-xl">
                      <div className="text-center">
                        <span className="text-charity-neutral-700 font-medium text-sm block mb-1">
                          Monthly Support:
                        </span>
                        <div className="text-2xl font-bold text-charity-orange-600">
                          KES {child.monthlyNeed.toLocaleString()}
                        </div>
                        <div className="text-xs text-charity-neutral-500">
                          ≈ ${Math.round(child.monthlyNeed / 135)} USD
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/sponsor?child=${child.id}`}
                      className="block w-full text-center px-6 py-3 bg-charity-orange-600 hover:bg-charity-orange-700 text-white rounded-lg transition-colors duration-200 font-medium group-hover:transform group-hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      💝 Sponsor {child.name.split(" ")[0]}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/children"
                className="inline-flex items-center px-8 py-4 bg-charity-green-600 hover:bg-charity-green-700 text-white rounded-xl font-bold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
              >
                View All Children
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* How You Can Help Us */}
      <SectionReveal>
        <section className="py-20 relative overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://cdn.builder.io/o/assets%2F80b74e3fdcaa4c0ca29f792322dc0e5f%2F8d975f746acc4941bfe12ec3f1c5138a?alt=media&token=2e1e0384-83fc-4b15-ae49-a302f7da8126&apiKey=80b74e3fdcaa4c0ca29f792322dc0e5f"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-charity-orange-600/85" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                How You Can Help Us?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {helpItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="text-center text-white group cursor-pointer"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-white/20 group-hover:bg-white/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-xl">
                      <IconComponent className="h-10 w-10 group-hover:scale-125 group-hover:text-yellow-200 transition-all duration-300" />
                    </div>
                    <h4 className="text-lg font-bold mb-3 group-hover:text-yellow-100 group-hover:scale-105 transition-all duration-300">
                      {item.title}
                    </h4>
                    <p className="text-white/90 text-sm group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      {item.description}
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <div className="w-16 h-1 bg-white/50 mx-auto rounded-full group-hover:bg-yellow-200 transition-colors duration-300"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Featured Events */}
      <SectionReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-bold text-charity-neutral-800">
                Featured Events
              </h2>
              <Link
                to="/programs#featured-event"
                className="flex items-center text-charity-orange-600 hover:text-charity-orange-700 font-medium group"
              >
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {recentPrograms.map((program, index) => (
                <Link
                  key={index}
                  to="/programs#featured-event"
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group block"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold transform rotate-3">
                      {program.date}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-charity-orange-200 transition-colors duration-200">
                        {program.title}
                      </h4>
                      {program.venue && (
                        <div className="flex items-center text-white/90 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{program.venue}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-charity-neutral-600 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="mt-4 text-charity-orange-600 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-200">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Impact Statistics */}
      <SectionReveal>
        <section className="py-20 relative overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://cdn.builder.io/o/assets%2F80b74e3fdcaa4c0ca29f792322dc0e5f%2F5ab93ce551fe442ba1ad6d5cb267b689?alt=media&token=6c7413b8-90dc-43b0-94ba-f01de3392756&apiKey=80b74e3fdcaa4c0ca29f792322dc0e5f"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-charity-green-700/85" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                LET'S SUPPORT US TO HELP THEM
              </h2>
              <p className="text-xl text-white/90">
                Join your hands with us for a better life and future
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center text-white group cursor-pointer"
                >
                  <div className="bg-white/10 rounded-xl p-6 group-hover:bg-white/20 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 border border-white/20 group-hover:border-white/40">
                    <div className="text-5xl font-bold mb-2 group-hover:text-yellow-100 group-hover:scale-110 transition-all duration-300">
                      {stat.number}
                    </div>
                    <div className="text-lg opacity-90 group-hover:opacity-100 group-hover:text-green-100 transition-all duration-300">
                      {stat.label}
                    </div>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-1 bg-yellow-200 mx-auto rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/about"
                className="inline-block px-8 py-3 bg-white text-charity-green-700 hover:bg-charity-neutral-100 rounded-lg font-bold transition-colors duration-200"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Featured Blog */}
      <SectionReveal>
        <section className="py-20 bg-gradient-to-br from-charity-neutral-50 to-charity-orange-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-charity-neutral-800 mb-4">
                Latest Story
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-2xl mx-auto">
                Discover inspiring stories of hope, transformation, and the
                power of community support
              </p>
            </div>

            {recentBlogs.map((blog, index) => (
              <Link
                key={index}
                to="/blog"
                className="block bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 cursor-pointer group transform hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden h-80 lg:h-auto">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-charity-purple-600 to-charity-purple-500 text-white rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        {blog.category}
                      </span>
                    </div>

                    {/* Featured Label */}
                    <div className="absolute top-6 right-6">
                      <span className="inline-flex items-center px-3 py-1 bg-charity-green-600 text-white rounded-full text-xs font-bold shadow-lg animate-pulse">
                        FEATURED
                      </span>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-4 text-sm font-medium">
                          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                            <User className="h-3 w-3 mr-1" />
                            <span>{blog.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-charity-purple-200 to-charity-purple-100 rounded-full opacity-20 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-charity-green-100 to-charity-purple-100 rounded-full opacity-30 transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-700"></div>

                    <div className="relative z-10">
                      <h3 className="text-3xl lg:text-4xl font-bold text-charity-neutral-800 mb-6 leading-tight group-hover:text-charity-orange-600 transition-colors duration-300">
                        {blog.title}
                      </h3>

                      <p className="text-lg text-charity-neutral-600 leading-relaxed mb-8 line-clamp-4">
                        {blog.snippet}
                      </p>

                      {/* Call to Action */}
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-charity-purple-600 via-charity-orange-600 to-charity-orange-500 hover:from-charity-purple-700 hover:via-charity-orange-700 hover:to-charity-orange-600 text-white rounded-xl font-bold shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
                          <span className="mr-2">Read Full Story</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>

                        {/* Reading Time */}
                        <div className="flex items-center text-charity-neutral-500 text-sm font-medium">
                          <div className="w-2 h-2 bg-charity-green-500 rounded-full mr-2 animate-pulse"></div>
                          <span>5 min read</span>
                        </div>
                      </div>

                      {/* Decorative Quote */}
                      <div className="mt-8 p-4 bg-charity-orange-50 rounded-xl border-l-4 border-charity-orange-500 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <p className="text-charity-orange-700 italic font-medium text-sm">
                          "Every act of kindness is a push forward towards a
                          brighter future."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </SectionReveal>

      <Footer />
    </>
  );
};

export default Index;
