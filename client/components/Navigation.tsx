import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Users,
  GraduationCap,
  Heart,
  BookOpen,
  Phone,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { redirectToPayment, CAMPAIGN_SOURCES } from "@/lib/payment";

interface SubMenuItem {
  label: string;
  href: string;
  isPayment?: boolean;
  paymentType?:
    | "donationUrl"
    | "sponsorshipUrl"
    | "generalUrl"
    | "volunteerUrl";
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to add background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = [
    { label: "Home", href: "/", icon: Home },
    {
      label: "About",
      href: "/about",
      icon: Users,
    },
    {
      label: "Programs",
      href: "/programs",
      icon: GraduationCap,
    },
    {
      label: "Get Involved",
      href: "/get-involved",
      icon: Heart,
      subItems: [
        {
          label: "Sponsor a Child",
          href: "/sponsor",
        },
        {
          label: "Donate Now",
          href: "/get-involved/donate",
          isPayment: true,
          paymentType: "donationUrl",
        },
        { label: "Volunteer", href: "/volunteer" },
      ],
    },
    { label: "Blog", href: "/blog", icon: BookOpen },
    { label: "Contact Us", href: "/contact", icon: Phone },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || isMenuOpen
          ? "bg-transparent backdrop-blur-lg"
          : "bg-gradient-to-b from-black/30 to-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 relative">
          {/* Logo */}
          <div className="flex-shrink-0 relative">
            <Link to="/" className="flex items-center group relative">
              {/* Animated background glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-charity-orange-400/20 to-charity-green-400/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe1924878cede46d7bcef650c923a1cb1%2F37c22b8b58fc48e7a2936a8117e2e504?format=webp&width=800"
                alt="Cheptugeniot Initiative"
                className={cn(
                  "w-auto transition-all duration-500 object-contain relative",
                  isScrolled || isMenuOpen ? "h-24 md:h-28" : "h-32 md:h-40",
                )}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.label} className="relative">
                  {item.subItems ? (
                    <>
                      <button
                        className={cn(
                          "flex items-center space-x-1.5 font-medium px-4 py-2.5 rounded-xl transition-all duration-400 relative group overflow-hidden",
                          isScrolled || isMenuOpen
                            ? "text-charity-neutral-700 hover:text-charity-orange-700"
                            : "text-white hover:text-charity-orange-100",
                        )}
                        onClick={() => toggleDropdown(item.label)}
                      >
                        {/* Animated background */}
                        <div
                          className={cn(
                            "absolute inset-0 rounded-xl transition-all duration-500 -z-10",
                            activeDropdown === item.label
                              ? isScrolled || isMenuOpen
                                ? "bg-charity-orange-100"
                                : "bg-white/20 backdrop-blur-sm"
                              : "bg-transparent group-hover:bg-white/10 dark:group-hover:bg-white/5",
                          )}
                        ></div>

                        {/* Animated underline */}
                        <div
                          className={cn(
                            "absolute bottom-0 left-0 h-1 bg-gradient-to-r from-charity-orange-500 to-charity-green-500 rounded-full transition-all duration-500 transform origin-left",
                            activeDropdown === item.label
                              ? "w-full"
                              : "w-0 group-hover:w-full",
                          )}
                        ></div>

                        <IconComponent
                          className={cn(
                            "h-4 w-4 transition-all duration-300",
                            activeDropdown === item.label
                              ? "rotate-0"
                              : "group-hover:scale-110",
                          )}
                        />
                        <span
                          className={cn(
                            "text-sm font-medium transition-all duration-300",
                            activeDropdown === item.label
                              ? "scale-100"
                              : "group-hover:scale-105",
                          )}
                        >
                          {item.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-all duration-300",
                            activeDropdown === item.label
                              ? "rotate-180 scale-110"
                              : "group-hover:rotate-12",
                          )}
                        />
                      </button>

                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-charity-orange-100 py-3 z-50 animate-in fade-in zoom-in-95 duration-300">
                          {/* Decorator top */}
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-white rounded-b-full border-l border-r border-charity-orange-100"></div>

                          {item.subItems.map((subItem) =>
                            subItem.isPayment ? (
                              <button
                                key={subItem.label}
                                onClick={() => {
                                  redirectToPayment(subItem.paymentType, {
                                    source: CAMPAIGN_SOURCES.navigation,
                                    campaign: subItem.label
                                      .toLowerCase()
                                      .replace(" ", "-"),
                                  });
                                  setActiveDropdown(null);
                                }}
                                className="block w-full text-left px-5 py-3 text-charity-neutral-700 hover:text-charity-orange-700 font-medium transition-all duration-300 group/sub relative overflow-hidden mx-2 rounded-lg hover:bg-gradient-to-r hover:from-charity-orange-50 to-transparent"
                              >
                                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-charity-orange-400 to-charity-green-400 transform scale-y-0 group-hover/sub:scale-y-100 transition-transform duration-500 origin-top"></div>
                                <span className="flex items-center group-hover/sub:translate-x-1 transition-transform duration-300">
                                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover/sub:opacity-100 transition-all duration-300 -translate-x-2 group-hover/sub:translate-x-0" />
                                  {subItem.label}
                                </span>
                              </button>
                            ) : (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="block px-5 py-3 text-charity-neutral-700 hover:text-charity-orange-700 font-medium transition-all duration-300 group/sub relative overflow-hidden mx-2 rounded-lg hover:bg-gradient-to-r hover:from-charity-orange-50 to-transparent"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-charity-orange-400 to-charity-green-400 transform scale-y-0 group-hover/sub:scale-y-100 transition-transform duration-500 origin-top"></div>
                                <span className="flex items-center group-hover/sub:translate-x-1 transition-transform duration-300">
                                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover/sub:opacity-100 transition-all duration-300 -translate-x-2 group-hover/sub:translate-x-0" />
                                  {subItem.label}
                                </span>
                              </Link>
                            ),
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center space-x-1.5 font-medium px-4 py-2.5 rounded-xl transition-all duration-400 relative group overflow-hidden",
                        isScrolled || isMenuOpen
                          ? "text-charity-neutral-700 hover:text-charity-orange-700"
                          : "text-white hover:text-charity-orange-100",
                      )}
                    >
                      {/* Animated background */}
                      <div
                        className={cn(
                          "absolute inset-0 rounded-xl transition-all duration-500 -z-10",
                          isScrolled || isMenuOpen
                            ? "bg-transparent group-hover:bg-charity-orange-100"
                            : "bg-transparent group-hover:bg-white/10 dark:group-hover:bg-white/5",
                        )}
                      ></div>

                      {/* Animated underline */}
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-charity-orange-500 to-charity-green-500 rounded-full transition-all duration-500 transform origin-left w-0 group-hover:w-full"></div>

                      <IconComponent className="h-4 w-4 transition-all duration-300 group-hover:scale-110" />
                      <span className="text-sm font-medium transition-all duration-300 group-hover:scale-105">
                        {item.label}
                      </span>
                    </Link>
                  )}

                  {/* Separator between items */}
                  {index < menuItems.length - 1 &&
                    !isScrolled &&
                    !isMenuOpen && (
                      <div className="absolute right-0 h-4 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                    )}
                </div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "p-2.5 rounded-xl transition-all duration-300 relative group overflow-hidden",
                isScrolled || isMenuOpen
                  ? "text-charity-neutral-800"
                  : "text-white",
              )}
            >
              {/* Animated background */}
              <div
                className={cn(
                  "absolute inset-0 rounded-xl transition-all duration-500 -z-10",
                  isScrolled || isMenuOpen
                    ? "bg-charity-orange-100 group-hover:bg-charity-orange-150"
                    : "bg-white/10 group-hover:bg-white/20",
                )}
              ></div>

              {/* Animated underline */}
              <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-charity-orange-400 to-charity-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {isMenuOpen ? (
                <X className="h-5 w-5 transition-all duration-500 rotate-90" />
              ) : (
                <Menu className="h-5 w-5 transition-all duration-500" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <div
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-in fade-in duration-300"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar */}
            <div className="md:hidden fixed top-24 left-0 h-[calc(100vh-6rem)] w-72 bg-gradient-to-b from-white to-charity-orange-50/20 shadow-2xl z-50 transform transition-all duration-300 ease-out animate-in slide-in-from-left-full rounded-tr-3xl rounded-br-3xl border-r-2 border-charity-orange-100">
              {/* Animated top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-charity-orange-400 via-charity-green-400 to-charity-orange-400 rounded-tr-3xl"></div>

              {/* Navigation items */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
                {menuItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.label}
                      style={{
                        animation: `slideInLeft 0.5s ease-out ${index * 50}ms both`,
                      }}
                    >
                      {item.subItems ? (
                        <>
                          <button
                            className="flex items-center justify-between w-full text-left text-charity-neutral-800 hover:text-charity-orange-700 transition-all duration-300 font-medium px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-charity-orange-100 to-transparent group relative overflow-hidden"
                            onClick={() => toggleDropdown(item.label)}
                          >
                            {/* Left accent bar */}
                            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-charity-orange-400 to-charity-green-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                            <div className="flex items-center space-x-3">
                              <IconComponent
                                className={cn(
                                  "h-4 w-4 transition-all duration-300",
                                  activeDropdown === item.label
                                    ? "scale-110 text-charity-orange-600"
                                    : "group-hover:scale-110",
                                )}
                              />
                              <span className="group-hover:translate-x-1 transition-transform duration-300">
                                {item.label}
                              </span>
                            </div>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform duration-300",
                                activeDropdown === item.label &&
                                  "rotate-180 text-charity-orange-600",
                              )}
                            />
                          </button>
                          {activeDropdown === item.label && (
                            <div className="mt-2 pl-4 space-y-1 animate-in slide-in-from-top duration-300">
                              {item.subItems.map((subItem, subIndex) =>
                                subItem.isPayment ? (
                                  <button
                                    key={subItem.label}
                                    onClick={() => {
                                      redirectToPayment(subItem.paymentType, {
                                        source: CAMPAIGN_SOURCES.navigation,
                                        campaign: subItem.label
                                          .toLowerCase()
                                          .replace(" ", "-"),
                                      });
                                      setIsMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="block w-full text-left text-charity-neutral-700 hover:text-charity-orange-700 transition-all duration-300 px-4 py-2.5 rounded-lg hover:bg-charity-orange-100 group/sub relative overflow-hidden font-medium"
                                    style={{
                                      animation: `slideInLeft 0.3s ease-out ${subIndex * 30}ms both`,
                                    }}
                                  >
                                    <div className="absolute left-0 top-0 h-full w-0.5 bg-charity-orange-500 transform scale-y-0 group-hover/sub:scale-y-100 transition-transform duration-500 origin-top"></div>
                                    <span className="flex items-center group-hover/sub:translate-x-1 transition-transform duration-300">
                                      <ArrowRight className="h-3 w-3 mr-2 opacity-50" />
                                      {subItem.label}
                                    </span>
                                  </button>
                                ) : (
                                  <Link
                                    key={subItem.label}
                                    to={subItem.href}
                                    className="block text-charity-neutral-700 hover:text-charity-orange-700 transition-all duration-300 px-4 py-2.5 rounded-lg hover:bg-charity-orange-100 group/sub relative overflow-hidden font-medium"
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    style={{
                                      animation: `slideInLeft 0.3s ease-out ${subIndex * 30}ms both`,
                                    }}
                                  >
                                    <div className="absolute left-0 top-0 h-full w-0.5 bg-charity-orange-500 transform scale-y-0 group-hover/sub:scale-y-100 transition-transform duration-500 origin-top"></div>
                                    <span className="flex items-center group-hover/sub:translate-x-1 transition-transform duration-300">
                                      <ArrowRight className="h-3 w-3 mr-2 opacity-50" />
                                      {subItem.label}
                                    </span>
                                  </Link>
                                ),
                              )}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          className="flex items-center space-x-3 text-charity-neutral-800 hover:text-charity-orange-700 transition-all duration-300 font-medium px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-charity-orange-100 to-transparent group relative overflow-hidden"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {/* Left accent bar */}
                          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-charity-orange-400 to-charity-green-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                          <IconComponent className="h-4 w-4 transition-all duration-300 group-hover:scale-110" />
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {item.label}
                          </span>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
