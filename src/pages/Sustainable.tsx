import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import sustain from "../assets/image/sustain.png";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/image/img3.png";
import img4 from "../assets/image/img4.png";
import rightbanner from "../assets/image/rightbanner.png"
import theme1 from "../assets/image/theme1.png"
import theme2 from "../assets/image/theme2.png"
import what1 from "../assets/image/what1.png"
import what2 from "../assets/image/what2.png"
import what3 from "../assets/image/what3.png"
import What_Flashcard from "../assets/image/What_Flashcard.pdf";
import Learn_more from "../assets/image/Learn_more.pdf";
import { FiSearch, FiUser, FiMapPin, FiSettings } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Plus } from "lucide-react";
import why from "../assets/image/why.png";
import who from "../assets/image/who.png";
import where from "../assets/image/where.png";
import How from "../assets/image/How.png";
import { X } from "lucide-react";
import bulb from "../assets/image/bulb.png";
import person from "../assets/image/person.png"
import arrow from "../assets/image/arrow.png";
import leftarrow from "../assets/image/leftarrow.png";

const Sustainable = () => {
  const [activeTab, setActiveTab] = useState("what");
  const [activePopup, setActivePopup] = useState<{ tab: string; icon: number } | null>(null);
  const [showPinkBox, setShowPinkBox] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const buttonRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({});

  const popupRef = useRef<HTMLDivElement | null>(null); // Ref for popup

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        closePopup(); // Close popup on outside click
      }
    }

    if (activePopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activePopup]); // Only run effect when popup changes

  useEffect(() => {
    // Start pink box animation immediately
    const timer1 = setTimeout(() => {
      setShowPinkBox(false);
    }, 1500); // Pink box visible for 1.5 seconds, then starts fading

    // Show content after pink box animation completes
    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 1000); // Content shows after 2 seconds

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const tabs = [
    { id: "what", label: "What", icon: <FiSearch className="text-red-500" /> },
    {
    id: "why",
    label: "Why",
    icon: <img src={bulb} alt="Why" className=" object-contain" style={{ width: '50%' }}/>,
  },
    { id: "who", label: "Who", icon: <img src={person} alt="person" className="object-contain" style={{ width: '50%' }} />,},
    { id: "where", label: "Where", icon: <FiMapPin className="text-red-500" /> },
    { id: "how", label: "How", icon: <FiSettings className="text-red-500" /> },
  ];

  const contentData = {
    what: {
      title: "What is Sustainable Business?",
      description: "Sustainable finance refers to financial tools and investments that support environmentally sustainable and socially responsible business practices. It promotes long-term value by integrating economic viability, social equity, and environmental protection into financial decision making.",
      image: rightbanner,
      popupImages: [
        {
          id: 1,
          src: what1,
          alt: "What popup image 1",
        },
        {
          id: 2,
          src: what2,
          alt: "What popup image 2",
        },
        {
          id: 3,
          src: what3,
          alt: "What popup image 3",
        },
      ],
    },
    why: {
      title: "Why the need to implement sustainability?",
      description: "Climate and sustainability are significant drivers for organisations, both large and small. As governments recognise the need to address the climate emergency, organisations must respond with their own plans to achieve carbon neutrality, net-zero, or similar defined targets.",
      image: why,
      popupImages: [
        {
          id: 1,
          src: what1,
          alt: "Why popup image 1",
        },
        {
          id: 2,
          src: what2,
          alt: "Why popup image 2",
        },
        {
          id: 3,
          src: what3,
          alt: "Why popup image 3",
        },
      ],
    },
    who: {
      title: "Who creates the ESG framework?",
      description: "Accountants, in collaboration with sustainability leads and senior leadership, play a key role in creating ESG frameworks. They define material risks, set measurable KPIs, and ensure transparent disclosures, aligning ESG with strategy, reporting standards and investor expectations.",
      image: who,
      popupImages: [
        {
          id: 1,
          src: what1,
          alt: "Who popup image 1",
        },
        {
          id: 2,
          src: what2,
          alt: "Who popup image 2",
        },
        {
          id: 3,
          src: what3,
          alt: "Who popup image 3",
        },
      ],
    },
    where: {
      title: "Where is accountancy's role in ESG?",
      description: "Accountants are central to the ESG journey. They provide the frameworks, assurance and reporting expertise needed to drive meaningful sustainability outcomes. Their work touches strategy, risk, compliance, and decision support.",
      image: where,
      popupImages: [
        {
          id: 1,
          src: what1,
          alt: "Where popup image 1",
        },
        {
          id: 2,
          src: what2,
          alt: "Where popup image 2",
        },
        {
          id: 3,
          src: what3,
          alt: "Where popup image 3",
        },
      ],
    },
    how: {
      title: "How do organisations embed sustainability?",
      description: "Organisations embed sustainability by aligning ESG goals with strategy, ensuring governance oversight, using credible data, adopting green finance, and building team capabilities. Finance professionals play a key role in integrating ESG across planning, risk and reporting.",
      image: How,
      popupImages: [
        {
          id: 1,
          src: what1,
          alt: "How popup image 1",
        },
        {
          id: 2,
          src: what2,
          alt: "How popup image 2",
        },
        {
          id: 3,
          src: what3,
          alt: "How popup image 3",
        },
      ],
    },
  };

  const handleIconClick = (iconNumber: number) => {
    setActivePopup({ tab: activeTab, icon: iconNumber });
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const content = contentData[activeTab as keyof typeof contentData];

  const themes = [
    {
      id: 1,
      title: "Innovative Tech",
      image: theme1,
    },
    {
      id: 2,
      title: "Future Skills",
      image: theme2,
    },
  ];

  return (
    <div className="remove-scrollbar min-h-screen bg-background">
      <style>{`
        @keyframes pinkBoxSmoothRise {
          0% {
            transform: translate(-50%, 100%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -100%) scale(2.5);
            opacity: 0;
          }
        }

        .pink-box-animation {
          animation: pinkBoxSmoothRise 2.5s ease-in-out forwards;
        }

        .content-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile popup centering for max-width 425px */
        @media (max-width: 425px) {
          .mobile-popup-center {
            position: fixed !important;
            top: 74% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            margin-top: 0 !important;
            right: auto !important;
            width: 90vw !important;
            max-width: 350px !important;
          }
        }
      `}</style>

      <Header />

      {/* Pink Box Animation */}
      {showPinkBox && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="pink-box-animation absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[#FFD1DF] opacity-90"></div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-[140px]">
        <div className="absolute inset-0">
          <img
            src={sustain}
            alt="Industrial welding background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="margin-acca container mx-auto relative z-10 sustainable-banner">
          <div className="">
            <h1 className="" style={{ fontSize: '70px', lineHeight: '60px', color: "#ffff", whiteSpace: "0%", fontWeight: 700 }}>
              Sustainable Business<span style={{ color: '#D20024' }}>.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content of the page */}
      <section className="pt-0 pb-6">
        <div className="custom-container">
          <div className={`md:grid md:grid-cols-12 gap-6 max-w-7xl mx-auto mobile-flex transition-all duration-500 ${showContent ? 'content-fade-in opacity-100' : 'opacity-0'}`}>

            {/* Sidebar for desktop*/}
            <div className="col-span-2 space-y-2 sidebar-desktop">
              <a href="/" className="block">
                <div className="cursor-pointer hover:underline back-to-home">
                  <span style={{ fontSize: '16px', fontWeight: '500' }}>← Back to</span><br />
                  <span style={{ fontSize: '22px', fontWeight: '500' }}>&nbsp; Home</span>
                </div>
              </a>

              <a href="/flashcards" className="cursor-pointer block">
                <img
                  src={img1}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
              <a href="" className="cursor-pointer block img-class">
                <img
                  src={img2}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
              <a href="#" className="cursor-pointer block">
                <img
                  src={img3}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
              <a href="#" className="cursor-pointer block img-class">
                <img
                  src={img4}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
            </div>

            {/* Sidebar Mobile*/}
            <div className="w-screen max-w-none col-span-2 space-y-0 sidebar-mobile display-side relative left-1/2 -translate-x-1/2 sm:static sm:w-full sm:max-w-full">
              <a href="" className="cursor-pointer block navigation">
                <a href="/"><span> Home /</span></a> <a href="flashcards"><span>ACCA PI Flashcards /</span></a><a href="#"><span style={{ fontWeight: '600' }}> Sustainable Business</span></a>
              </a>
            </div>

            {/* Themes List */}
            <div className="col-span-10 space-y-6">
              {/* Tabs Navigation */}
              <div className="flex flex-wrap max-[425px]:flex gap-6 mb-8 mt-4 margin-this">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-gap button-style flex items-center px-6 py-3 transition-colors duration-200 ${activeTab === tab.id
                      ? " font-bold"
                      : "border-color text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="grid md:grid-cols-[65%_35%] gap-6 max-w-7xl mx-auto mobile-gap">

                {/* Left Content */}
                <div className="space-y-6">
                  <h2 className="h2-fonts h2-tabs">
                    {contentData[activeTab].title.replace(/\?$/, "")}
                    <span style={{ color: "#C80000" }}>?</span>
                  </h2>

                  <p className="tabs-para">
                    {content.description}
                  </p>

                  <div className="flex space-x-6 pt-4 tabs-links">
                    <span className="flex">
                      <a
                      href={Learn_more}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200 flex items-center"
                    >
                      Click here to learn more 
                    </a>
                    <span className="inline-flex items-center ml-2" style={{ color: '#C80000' }}>
                    <img src={arrow} className="w-4 h-4 pt-1"/> 
                  </span>
                    </span>
                    
                    <span className="flex">
                      <a
                      href={What_Flashcard}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200 flex items-center"
                    >
                      Download Flashcard 
                    </a>
                    <span className="inline-flex items-center ml-2" style={{ color: '#C80000' }}>
                    <img src={arrow} className="w-4 h-4 pt-1"/> 
                  </span>
                    </span>
                    
                  </div>
                </div>

                {/* Right Content - Image with Interactive Icons */}
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-full h-64 object-cover image-height"
                    />

                    {/* Interactive Icons */}
                    <div className="absolute inset-0 position-set">
                      {/* Icon 1 - Top Right */}
                      <div className="absolute btn-1">
                        <button
                          ref={(el) => buttonRefs.current[1] = el}
                          onClick={() => handleIconClick(1)}
                          className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <Plus className="h-5 w-5 border border-[#CF001B] text-[#CF001B] rounded-full font-bold cssforthis" />
                        </button>

                        {/* Popup for Icon 1 - positioned below button */}
                        {activePopup && activePopup.icon === 1 && (
                          <div
                            ref={popupRef}
                            className="absolute top-full right-0 mt-2 z-50 bg-white shadow-2xl overflow-hidden icon1 mobile-popup-center" style={{ width: '400px', maxWidth: '90vw' }}>
                            <div className="relative">
                              <button
                                onClick={closePopup}
                                className="absolute top-2 right-2 z-10 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center max-[425px]:flex"
                              >
                                <X className="h-4 w-4" />
                              </button>

                              <div className="p-4">
                                <img
                                  src={contentData[activePopup.tab as keyof typeof contentData].popupImages[activePopup.icon - 1].src}
                                  alt={contentData[activePopup.tab as keyof typeof contentData].popupImages[activePopup.icon - 1].alt}
                                  className="w-full h-auto object-contain rounded-lg max-h-80"
                                  onError={(e) => {
                                    console.error('Image failed to load:', e.currentTarget.src);
                                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMThweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Icon 2 - Middle Right */}
                      <div className="absolute btn-2">
                        <button
                          ref={(el) => buttonRefs.current[2] = el}
                          onClick={() => handleIconClick(2)}
                          className="transform -translate-y-1/2 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <Plus className="h-5 w-5 border border-[#CF001B] text-[#CF001B] rounded-full font-bold cssforthis" />
                        </button>

                        {/* Popup for Icon 2 - positioned below button */}
                        {activePopup && activePopup.icon === 2 && (
                          <div
                            ref={popupRef}
                            className="absolute top-full right-0 mt-1 z-50 bg-white shadow-2xl overflow-hidden icon2 mobile-popup-center" style={{ width: '300px', maxWidth: '90vw' }}>
                            <div className="relative">
                              <button
                                onClick={closePopup}
                                className="absolute top-2 right-2 z-10 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center max-[425px]:flex"
                              >
                                <X className="h-4 w-4" />
                              </button>

                              <div className="p-4">
                                <img
                                  src={contentData[activePopup.tab as keyof typeof contentData].popupImages[activePopup.icon - 1].src}
                                  alt={contentData[activePopup.tab as keyof typeof contentData].popupImages[activePopup.icon - 1].alt}
                                  className="w-full h-auto object-contain rounded-lg max-h-80"
                                  onError={(e) => {
                                    console.error('Image failed to load:', e.currentTarget.src);
                                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMThweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Icon 3 - Bottom Right */}
                      <div className="absolute btn-3">
                        <button
                          ref={(el) => buttonRefs.current[3] = el}
                          onClick={() => handleIconClick(3)}
                          className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <Plus className="h-5 w-5 border border-[#CF001B] text-[#CF001B] rounded-full font-bold cssforthis" />
                        </button>

                        {/* Popup for Icon 3 - positioned below button */}
                        {activePopup && activePopup.icon === 3 && (
                          <div
                            ref={popupRef}
                            className="absolute top-full right-0 mt-2 z-50 bg-white shadow-2xl overflow-hidden icon3 mobile-popup-center" style={{ right: '-45px', width: '450px', maxWidth: '90vw' }}>
                            <div className="relative">
                              <button
                                onClick={closePopup}
                                className="absolute top-2 right-2 z-10 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center max-[425px]:flex"
                              >
                                <X className="h-4 w-4" />
                              </button>

                              <div className="p-4">
                                <img
                                  src={contentData[activePopup.tab as keyof typeof contentData].popupImages[activePopup.icon - 1].src}
                                  alt={contentData[activePopup.tab as keyof typeof contentData].popupImages[activePopup.icon - 1].alt}
                                  className="w-full h-auto object-contain rounded-lg max-h-80"
                                  onError={(e) => {
                                    console.error('Image failed to load:', e.currentTarget.src);
                                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMThweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <p className="mt-6 below-para">
                    Click on the above icons for more
                  </p>
                </div>
              </div>

              {/* Related Themes */}
              <div className="mt-12 theme-css">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Related Themes</h4>

                {/* Divider line */}
                <div className="bg-[#CF001B] h-[2px] w-[60px] mb-4"></div>

                <div className="grid grid-cols-[65%_35%] gap-6 max-w-7xl mx-auto">
                  {/* Left 65% Column (Images) */}
                  <div className="flex gap-6 justify-start">
                    {themes.map((theme) => (
                      <div key={theme.id} className="w-1/2 overflow-hidden">
                        <div className="relative">
                          <img
                            src={theme.image}
                            alt={theme.title}
                            className="w-full h-[200px] object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right 35% Column (Empty or Content Placeholder) */}
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainable;
