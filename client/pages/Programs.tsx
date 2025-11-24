import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Phone,
  X,
  Heart,
  Gift,
  CheckCircle,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { featuredEvent, pastProjects } from "@shared/programs-data";

const Programs = () => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showImageLightbox, setShowImageLightbox] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showImageLightbox || !selectedEvent) return;

      if (e.key === "Escape") {
        setShowImageLightbox(false);
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev > 0 ? prev - 1 : selectedEvent.gallery.length - 1,
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev < selectedEvent.gallery.length - 1 ? prev + 1 : 0,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showImageLightbox, selectedEvent, selectedImageIndex]);

  // Mock data for upcoming events (can be moved to shared data later)
  const upcomingEvents: any[] = [];

  // Past events from shared data
  const pastEvents = pastProjects;

  const EventCard = ({
    event,
    type = "upcoming",
  }: {
    event: any;
    type?: "featured" | "upcoming" | "past";
  }) => (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 group cursor-pointer h-full hover:-translate-y-1 transform"
      onClick={() => {
        setSelectedEvent(event);
        setShowEventModal(true);
      }}
    >
      <div className="relative overflow-hidden h-32">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="p-4">
        <h3 className="text-base font-bold text-charity-neutral-800 line-clamp-2 group-hover:text-charity-orange-600 transition-colors duration-200">
          {event.title}
        </h3>
        <p className="text-charity-orange-600 font-semibold text-sm italic mt-2 line-clamp-1">
          {event.subtitle}
        </p>

        <div className="mt-3 pt-3 border-t border-charity-neutral-200">
          <div className="text-charity-orange-600 font-medium text-xs flex items-center group-hover:translate-x-0.5 transition-transform duration-200">
            View Details
            <ArrowRight className="ml-1 h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-0 relative overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.builder.io/o/assets%2F80b74e3fdcaa4c0ca29f792322dc0e5f%2F153245ad30eb4b7e8c5599a0eca08317?alt=media&token=0664e38d-660f-485a-9b9e-d42392e23699&apiKey=80b74e3fdcaa4c0ca29f792322dc0e5f"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 via-orange-400/40 to-orange-600/40 animate-gradient"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="white"/></svg>\')',
            backgroundSize: "40px 40px",
          }}
        ></div>

        <Navigation />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Programs
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Creating lasting change through community events and initiatives
                across Kenya
              </p>
            </div>
          </AnimatedSection>
        </div>

        <style>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 8s ease infinite;
          }
        `}</style>
      </section>

      {/* Featured Events */}
      <section
        id="featured-events"
        className="py-24 bg-gradient-to-br from-white via-charity-orange-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-20">
              <div className="inline-block mb-4 px-4 py-2 bg-charity-orange-100 rounded-full">
                <span className="text-charity-orange-700 font-semibold text-sm tracking-wider">
                  FEATURED PROGRAMS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-charity-neutral-800 mb-6">
                Spotlight on Impact
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Discover the transformative programs making real change in communities across Kenya
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Main Featured Event - Full Layout */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-lg font-bold transform rotate-3">
                      {featuredEvent.date}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        {featuredEvent.title}
                      </h1>
                      <p className="text-xl text-white/90 italic">
                        {featuredEvent.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center mb-4">
                            <MapPin className="h-5 w-5 text-charity-orange-600 mr-2" />
                            <span className="text-charity-neutral-700 font-semibold">
                              VENUE: {featuredEvent.venue}
                            </span>
                          </div>

                          <div className="bg-charity-green-50 p-4 rounded-xl border-l-4 border-charity-green-500">
                            <h3 className="font-bold text-charity-neutral-800 mb-2">
                              Our Theme for this year:
                            </h3>
                            <p className="text-charity-green-700 italic font-medium">
                              "{featuredEvent.theme}"
                            </p>
                          </div>
                        </div>

                        <div className="bg-charity-orange-50 p-6 rounded-xl">
                          <h3 className="text-lg font-bold text-charity-neutral-800 mb-4">
                            A Personal Message:
                          </h3>
                          <p className="text-charity-neutral-700 leading-relaxed whitespace-pre-line">
                            {featuredEvent.message}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                          <h3 className="text-lg font-bold text-charity-neutral-800 mb-4 text-center">
                            ITEMS NEEDED
                          </h3>
                          <div className="grid grid-cols-2 gap-3">
                            {featuredEvent.itemsNeeded.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-charity-neutral-700 text-sm">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="text-center space-y-4">
                          <div className="bg-charity-neutral-100 p-4 rounded-xl">
                            <p className="text-charity-neutral-600 mb-2">
                              For more info contact us:
                            </p>
                            <div className="flex items-center justify-center space-x-2">
                              <Phone className="h-4 w-4 text-charity-orange-600" />
                              <span className="font-bold text-charity-neutral-800">
                                {featuredEvent.contact}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <a
                              href={featuredEvent.paymentLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full bg-charity-orange-600 hover:bg-charity-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 transform hover:scale-105"
                            >
                              💝 Make a Contribution
                            </a>

                            <button
                              onClick={() => {
                                setSelectedEvent(featuredEvent);
                                setShowEventModal(true);
                              }}
                              className="w-full border-2 border-charity-green-600 text-charity-green-600 hover:bg-charity-green-600 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group"
                            >
                              Learn More Details
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-charity-neutral-800 mb-4">
                Our Impact & Success Stories
              </h2>
              <p className="text-lg text-charity-neutral-600 max-w-3xl mx-auto">
                Celebrating the transformative work and lasting impact of our community initiatives
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pastEvents.map((event, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 80}
              >
                <EventCard event={event} type="past" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-charity-green-600 to-charity-orange-600">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M20,50 Q30,30 50,30 T80,50" fill="none" stroke="white" stroke-width="1"/><path d="M20,70 Q30,50 50,50 T80,70" fill="none" stroke="white" stroke-width="1"/></svg>\')',
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Be Part of Our Mission
              </h2>
              <p className="text-lg md:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
                Every contribution—whether time, resources, or expertise—helps us create lasting change in communities across Kenya. Join us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-involved/volunteer"
                  className="inline-flex items-center justify-center px-10 py-4 bg-white text-charity-green-600 hover:bg-charity-neutral-50 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Volunteer With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-charity-orange-600 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Event Details Modal */}
      {showEventModal && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-smooth">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100">
            <div className="relative">
              <button
                onClick={() => {
                  setShowEventModal(false);
                  setSelectedEvent(null);
                }}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-t-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold inline-block mb-4">
                    {selectedEvent.date}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedEvent.title}
                  </h1>
                  <p className="text-xl text-white/90 italic">
                    {selectedEvent.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-8">
                {/* Event Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-charity-neutral-800 mb-4 flex items-center">
                    <Heart className="h-6 w-6 text-charity-orange-600 mr-2" />
                    About This Event
                  </h2>
                  <p className="text-charity-neutral-700 leading-relaxed whitespace-pre-line">
                    {selectedEvent.fullDescription}
                  </p>
                </div>

                {/* Event Schedule or Impact for past events */}
                {selectedEvent.schedule && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-charity-neutral-800 mb-4 flex items-center">
                      <Calendar className="h-6 w-6 text-charity-green-600 mr-2" />
                      Event Schedule
                    </h2>
                    <div className="bg-charity-neutral-50 rounded-xl p-6">
                      {selectedEvent.schedule.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 mb-4 last:mb-0"
                        >
                          <div className="bg-charity-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold min-w-20 text-center">
                            {item.time}
                          </div>
                          <div className="flex-1">
                            <p className="text-charity-neutral-700 font-medium">
                              {item.activity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedEvent.gallery && selectedEvent.gallery.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-charity-neutral-800 mb-4">
                      Photo Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedEvent.gallery.map(
                        (url: string, index: number) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedImageIndex(index);
                              setShowImageLightbox(true);
                            }}
                            className="relative group cursor-pointer"
                          >
                            <img
                              src={url}
                              alt={`${selectedEvent.title} photo ${index + 1}`}
                              className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-xl transition-all duration-300 flex items-center justify-center">
                              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold">
                                Click to View
                              </span>
                            </div>
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {/* Expected Impact or Actual Impact */}
                {(selectedEvent.expectedImpact ||
                  selectedEvent.actualImpact) && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-charity-neutral-800 mb-4 flex items-center">
                      <CheckCircle className="h-6 w-6 text-charity-green-600 mr-2" />
                      {selectedEvent.expectedImpact
                        ? "Expected Impact"
                        : "Actual Impact Achieved"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(
                        selectedEvent.expectedImpact ||
                        selectedEvent.actualImpact
                      ).map((goal, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 bg-charity-green-50 p-4 rounded-lg"
                        >
                          <CheckCircle className="h-5 w-5 text-charity-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-charity-neutral-700">
                            {goal}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonials for past events */}
                {selectedEvent.testimonials && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-charity-neutral-800 mb-4 flex items-center">
                      <Heart className="h-6 w-6 text-charity-orange-600 mr-2" />
                      Community Voices
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedEvent.testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className="bg-charity-orange-50 p-6 rounded-xl"
                        >
                          <p className="text-charity-neutral-700 italic mb-4">
                            "{testimonial.quote}"
                          </p>
                          <div className="border-t border-charity-orange-200 pt-4">
                            <p className="font-bold text-charity-neutral-800">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-charity-orange-600">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Long-term Impact for past events */}
                {selectedEvent.longTermImpact && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-charity-neutral-800 mb-4 flex items-center">
                      <CheckCircle className="h-6 w-6 text-charity-green-600 mr-2" />
                      Long-term Impact
                    </h2>
                    <div className="bg-charity-green-50 p-6 rounded-xl border-l-4 border-charity-green-500">
                      <p className="text-charity-neutral-700 leading-relaxed">
                        {selectedEvent.longTermImpact}
                      </p>
                    </div>
                  </div>
                )}

                {/* Event Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-charity-orange-50 p-6 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-charity-orange-600" />
                      <span className="text-charity-neutral-700">
                        {selectedEvent.contact}
                      </span>
                    </div>
                  </div>

                  {selectedEvent.itemsNeeded && (
                    <div className="bg-red-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-charity-neutral-800 mb-4 flex items-center">
                        <Gift className="h-5 w-5 text-red-600 mr-2" />
                        Items Needed
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedEvent.itemsNeeded.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-charity-neutral-700 text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Theme Section */}
                <div className="bg-charity-green-50 p-6 rounded-xl mb-8 border-l-4 border-charity-green-500">
                  <h3 className="text-lg font-bold text-charity-neutral-800 mb-2">
                    Event Theme:
                  </h3>
                  <p className="text-xl text-charity-green-700 italic font-medium">
                    "{selectedEvent.theme}"
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedEvent.paymentLink && (
                    <a
                      href={selectedEvent.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-charity-orange-600 hover:bg-charity-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 transform hover:scale-105 text-center"
                    >
                      💝 Make a Contribution
                    </a>
                  )}

                  <Link
                    to="/contact"
                    className="flex-1 border-2 border-charity-green-600 text-charity-green-600 hover:bg-charity-green-600 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 text-center"
                  >
                    Contact Us for More Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {showImageLightbox && selectedEvent && selectedEvent.gallery && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setShowImageLightbox(false)}
        >
          <button
            onClick={() => setShowImageLightbox(false)}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            <X className="h-6 w-6 text-black" />
          </button>

          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="relative flex-1 flex items-center justify-center bg-black rounded-xl overflow-hidden">
              <img
                src={selectedEvent.gallery[selectedImageIndex]}
                alt={`${selectedEvent.title} photo ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>

            {/* Navigation and Info */}
            <div className="mt-4 flex items-center justify-between bg-white p-4 rounded-xl">
              {/* Previous Button */}
              <button
                onClick={() => {
                  setSelectedImageIndex((prev) =>
                    prev > 0 ? prev - 1 : selectedEvent.gallery.length - 1,
                  );
                }}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <ChevronLeft className="h-6 w-6 text-charity-orange-600" />
              </button>

              {/* Image Counter */}
              <div className="text-center flex-1 mx-4">
                <p className="text-charity-neutral-800 font-semibold">
                  {selectedImageIndex + 1} of {selectedEvent.gallery.length}
                </p>
                <p className="text-charity-neutral-600 text-sm">
                  {selectedEvent.title}
                </p>
              </div>

              {/* Next Button */}
              <button
                onClick={() => {
                  setSelectedImageIndex((prev) =>
                    prev < selectedEvent.gallery.length - 1 ? prev + 1 : 0,
                  );
                }}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <ChevronRight className="h-6 w-6 text-charity-orange-600" />
              </button>
            </div>

            {/* Keyboard Navigation Hint */}
            <p className="text-white text-center text-xs mt-2 opacity-70">
              Use arrow keys or click buttons to navigate. Press ESC to close.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Programs;
