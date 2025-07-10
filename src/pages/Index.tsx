
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Users,
  Clock,
  BookOpen,
  MessageCircle,
  User,
  Play,
  CheckCircle,
  Globe,
  Award
} from "lucide-react";
// import bannerImage from "../assets/image/banner.png"
import workOne from "../assets/image/work_1.png"
import workTwo from "../assets/image/work_2.png"
import footer from "../assets/image/footer.png"
import fc1 from "../assets/image/fc1.png"
import fc2 from "../assets/image/fc2.png"
import fc3 from "../assets/image/fc3.png"
import ip1 from "../assets/image/ip1.png"
import ip2 from "../assets/image/ip2.png"
import ip3 from "../assets/image/ip3.png"
import students from "../assets/image/students.png"
import fmembers from "../assets/image/fmembers.png"
import members from "../assets/image/members.png"
import decision from "../assets/image/decision.png"
import interview from "../assets/image/interview.png"
import Banner from "../assets/image/Banner.png"
import upskills1 from "../assets/image/upskills1.png";
import upskills2 from "../assets/image/upskills2.png";
import optimized from "../assets/image/optimized.png";
import impactful from "../assets/image/impactful.png";
import adaptive from "../assets/image/adaptive.png";
import effective from "../assets/image/effective.png";
import ethical from "../assets/image/ethical.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import arrow from "../assets/image/arrow.png";
import right from "../assets/image/right.png";





const Index = () => {
  return (
    <div className="remove-scrollbar min-h-screen bg-background">
      {/* Header  */}

      <Header />


      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={Banner}
            alt="Industrial welding background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="margin-acca container mx-auto  relative z-10">
          <div className="">
            <h1 className="" style={{ fontSize: '100px', lineHeight: '90px', color: "#ffff", whiteSpace: "0%", fontWeight: 700 }}>
              ACCA Virtual<br></br> Skills Platform<span style={{ color: '#D20024' }}>.</span>
            </h1>
            <p className="" style={{ fontSize: '26px', lineHeight: '50px', whiteSpace: "0px", }}>
              With on-demand learning
            </p>
          </div>
        </div>
      </section>

      {/* Gateway Section */}
      <section className="width">
        <div className="container mx-auto px-4 py-6  text-left">
          <h2 className="h2-fonts">Your skill-building companion</h2>

          {/* Divider line */}
          <div className="bg-[#CF001B] h-[2px] w-[100px] mb-6"></div>

          <p className="">
            Designed for future members and members of ACCA, this virtual hub builds future-ready skills. View and download flashcards on sustainable business, innovative tech and future skills to thrive in a fast-changing world shaped by AI and innovation.
          </p>
        </div>
      </section>



      {/* Upskill Section */}
      <section className=" bg-white upskills">
        <div className="container mx-auto px-4">
          <h2 className="text-left mb-4 h2-fonts">Upskill</h2>

          {/* Divider line */}
          <div className="bg-[#CF001B] h-[2px] w-[100px] mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-8xl mx-auto gap-class">
            {/* Interview Prep Series Card */}
            <div className=" overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={upskills2}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2">
                <h3 className="h3-fonts mb-3">Interview Prep Series</h3>
                <p className="mb-4">
                  Prepare with real-world mock interviews, expert guidance, and practical tips:
                </p>
                <ul className="space-y-2 mb-4 only-ul pl-4">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#1e1e1e] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Structured and free</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#1e1e1e] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Real-world mock interviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#1e1e1e] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Packed with engaging videos</span>
                  </li>
                </ul>


                <span>
                  <a href="#" className="inline-flex items-center">
                    Sharpen your interview skills
                  </a>
                  <span className="inline-flex items-center ml-2" style={{ color: '#C80000' }}>
                    <img src={arrow} className="w-4 h-4 pt-1"/> 
                  </span>
                </span>
              </div>
            </div>

            {/* ACCA PI Flashcards Card */}
            <div className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={upskills1}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2">
                <h3 className="h3-fonts mb-3">ACCA PI Flashcards</h3>
                <p className="mb-4">
                  Access on-demand modules:
                </p>
                <ul className="space-y-2 mb-4 only-ul pl-4">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#1e1e1e] rounded-full mt-3 mr-4 flex-shrink-0 bullets"></span>
                    <span className="">Free to access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#1e1e1e] rounded-full mt-3 mr-4 flex-shrink-0 bullets"></span>
                    <span className="">Flexible and self-paced</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#1e1e1e] rounded-full mt-3 mr-4 flex-shrink-0 bullets"></span>
                    <span className="">Thoughtfully customised</span>
                  </li>
                </ul>

                <span>
                  <Link to="/flashcards" className="inline-flex items-center">
                    Start building your skills with flashcards
                  </Link>
                  <span className="inline-flex items-center ml-2" style={{ color: '#C80000' }}>
                    <img src={arrow} className="w-4 h-4 pt-1"/> 
                  </span>
                </span>


              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Key Skills */}
      <section className="py-0 bg-gradient-to-r from-[#C80000] to-[#E50068] key-skills-section">
        <div className="container mx-auto px-4">
          <h2 className="text-left mb-4 h2-fonts skills-gain">Key skills you will gain</h2>

          {/* Divider line */}
          <div className="bg-[#ffffff] h-[2px] w-[100px] mb-12"></div>

          <div className="grid md:grid-cols-5 [@media(max-width:425px)]:grid-cols-2 gap-0 max-w-8xl mx-auto key-skills relative">
            <div className="text-center">
              <h3 className="mb-6">Optimised<br></br> interview readiness</h3>
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src={optimized}
                  alt="Industrial welding background"
                  className="object-cover opacity-100" style={{}}
                />
              </div>
            </div>

            {/* Vertical divider after first column */}
            <div className="relative text-center">
              <div className="absolute -left-px top-1/2 transform -translate-y-1/2 w-px h-16 bg-white hidden md:block"></div>
              <h3 className="mb-6">Impactful<br></br> personal branding</h3>
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src={impactful}
                  alt="Industrial welding background"
                  className="object-cover opacity-100" style={{}}
                />
              </div>
            </div>

            {/* Vertical divider after second column */}
            <div className="relative text-center">
              <div className="absolute -left-px top-1/2 transform -translate-y-1/2 w-px h-16 bg-white hidden md:block"></div>
              <h3 className="mb-6">Adaptive and<br></br> critical thinking</h3>
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src={adaptive}
                  alt="Industrial welding background"
                  className="object-cover opacity-100" style={{}}
                />
              </div>
            </div>

            {/* Vertical divider after third column */}
            <div className="relative text-center">
              <div className="absolute -left-px top-1/2 transform -translate-y-1/2 w-px h-16 bg-white hidden md:block"></div>
              <h3 className="mb-6">Effective<br></br> communication</h3>
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src={effective}
                  alt="Industrial welding background"
                  className="object-cover opacity-100" style={{}}
                />
              </div>
            </div>

{/* for desktop */}
            {/* Vertical divider after fourth column */}
            <div className="relative text-center readiness readi-desk">
              <div className="absolute -left-px top-1/2 transform -translate-y-1/2 w-px h-16 bg-white hidden md:block"></div>
              <h3 className="mb-6">Ethical<br></br> decision making</h3>
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src={ethical}
                  alt="Industrial welding background"
                  className="object-cover opacity-100" style={{}}
                />
              </div>
            </div>
          </div>

{/* For mobile */}
          <div className="relative text-center readiness readi-mobile">
              <div className="absolute -left-px top-1/2 transform -translate-y-1/2 w-px h-16 bg-white hidden md:block"></div>
              <h3 className="mb-6">Ethical<br></br> decision making</h3>
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src={ethical}
                  alt="Industrial welding background"
                  className="object-cover opacity-100" style={{}}
                />
              </div>
            </div>

          <div className="text-center mt-2">
            <p className=" max-w-4xl mx-auto this-para">
              Together, these skills build your confidence in environmental awareness, tech fluency, and career readiness.
            </p>
          </div>
        </div>
      </section>




      {/* ACCA Careers Section */}
      <section className="bg-black py-12 careers">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h2 className="text-white">
            Connect your learning to real opportunities<br />
            with ACCA Careers
          </h2>

          <<a
  href="#"
  className="flex w-full sm:w-auto border border-white text-white rounded-sm overflow-hidden"
>
  <span className="px-4 py-2 text-[20px] flex-grow">
    Find your next role
  </span>
  <span className="px-4 border-l border-white flex items-center justify-center flex-shrink-0">
    <img
      src="/src/assets/image/right.png"
      alt="arrow"
      className="w-6 h-6 pt-1"
    />
  </span>
</a>
        </div>
      </section>




      {/* Footer */}
      <Footer />


    </div>
  );
};

export default Index;
