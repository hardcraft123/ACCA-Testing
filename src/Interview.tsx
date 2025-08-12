import bannerImage1 from "../assets/image/banner1.png";
import bannerImage2 from "../assets/image/banner2.png";
import bannerImage3 from "../assets/image/banner3.png";
import bannerImage4 from "../assets/image/banner4.png";

import interviewbanner from "../assets/image/interviewbanner.png";
import sustainable from "../assets/image/sustainable.png";
import innovative from "../assets/image/innovative.png";
import future from "../assets/image/future.png";
import ips from "../assets/image/ips.png";
import { useNavigate } from 'react-router-dom';
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const Interview = () => {
    const navigate = useNavigate();

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const theme = e.dataTransfer.getData("theme");

        if (theme === "sustainable") navigate("/sustainable");
        else if (theme === "innovative") navigate("/innovative");
        else if (theme === "future") navigate("/future");
    };

    const videos = [
        { img: bannerImage1, title: "Interview skills overview", desc: "Learn how to make a powerful first impression." },
        { img: bannerImage2, title: "CV writing essentials", desc: "Structure your response for maximum impact." },
        { img: bannerImage3, title: "Optimise your LinkedIn profile", desc: "Non-verbal cues that convey confidence." },
        { img: bannerImage4, title: "Nail first impressions", desc: "Strategies for answering unexpected queries." },
        { img: bannerImage1, title: "Dress for the role", desc: "A proven framework for behavioral interviews." },
        { img: bannerImage2, title: "Introduce yourself with impact", desc: "Turn challenges into strengths in your answers." },
        { img: bannerImage3, title: "Optimise your LinkedIn profile", desc: "Approach the money talk with confidence." },
        { img: bannerImage4, title: "Nail first impressions", desc: "Pitfalls that can cost you the job offer." },
        { img: bannerImage1, title: "Handle challenge-based questions", desc: "Connect naturally during your conversation." },
        { img: bannerImage2, title: "Share what you’ve learned", desc: "Tips for engaging multiple interviewers." },
        { img: bannerImage3, title: "Demonstrate company alignment", desc: "Stand out in remote hiring processes." },
        { img: bannerImage4, title: "Address salary and goals", desc: "Show curiosity and initiative effectively." },
        { img: bannerImage1, title: "Discuss strengths and growth areas", desc: "Understand your future employer inside out." },
        { img: bannerImage2, title: "Answering unfamiliar questions", desc: "Choose attire that matches the company culture." },
        { img: bannerImage3, title: "Ask the right questions", desc: "Leave a lasting positive impression." },
        { img: bannerImage4, title: "Practice with Interview Buddy", desc: "Stay calm and focused under pressure." },
        { img: bannerImage1, title: "Discuss strengths and growth areas", desc: "Stand out while collaborating with others." },
        { img: bannerImage2, title: "Answering unfamiliar questions", desc: "Engage interviewers with memorable narratives." },
        { img: bannerImage3, title: "What to do post-interview", desc: "Show your value across different roles." },
        { img: bannerImage4, title: "Interview series at a glance", desc: "End with confidence and clarity." }
    ];

    return (
        <div className="remove-scrollbar min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-black text-white overflow-hidden min-h-[200px]">
                <div className="absolute inset-0">
                    <img
                        src={interviewbanner}
                        alt="Industrial welding background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0"></div>
                </div>
                <div className="margin-acca container mx-auto relative z-10 flashcard-banner">
                    <div className="">
                        <h1 className="" style={{ fontSize: '70px', lineHeight: '60px', color: "#ffff", whiteSpace: "0%", fontWeight: 700 }}>
                            Interview Prep Series<span style={{ color: '#D20024' }}>.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content of the page */}
            <section className="pt-10 pb-6 interview-page">
                <div className="custom-container">
                    <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto mobile-flex">

                        {/* Sidebar desktop*/}
                        <div className="col-span-2 space-y-2 sidebar-desktop">
                            <a href="/" className="block">
                                <div className="cursor-pointer hover:underline back-to-home">
                                    <span style={{ fontSize: '16px', fontWeight: '500' }}>← Back to</span><br />
                                    <span style={{ fontSize: '22px', fontWeight: '500' }}>&nbsp; Home</span>
                                </div>
                            </a>

                            <a href="#" className="cursor-pointer block">
                                <img
                                    src={ips}
                                    alt="Industrial welding background"
                                    className="w-full h-full object-cover ips-image"
                                />
                            </a>
                        </div>

                        {/* Sidebar Mobile*/}
                        <div className="w-screen max-w-none col-span-2 space-y-0 sidebar-mobile display-side relative left-1/2 -translate-x-1/2 sm:static sm:w-full sm:max-w-full">
                            <a href="" className="cursor-pointer block navigation">
                                <a href="/"><span> Home /</span></a> <a href="flashcards"><span style={{ fontWeight: '600' }}>Interview Prep Series</span></a>
                            </a>
                        </div>

                        {/* Interview Prep Series */}
                        <div className="col-span-10 space-y-6 interview-prep">
                            <h2 className="h2-fonts mb-2 mt-0">
                                Practical guidance to help you prepare with confidence. 
                            </h2>
                            <p className="mb-0" style={{marginBottom:'35px'}}>
                                Interviews can be your gateway to success, but only when you’re well prepared. 
                                This series helps you build strong communication, confidence, and clarity at each step of the process.
                            </p>

                            {/* Video Grid - 2 columns */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 row-gaps">
                                {videos.map((video, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="flex items-center justify-center overflow-hidden">
                                            <img
                                                src={video.img}
                                                alt={`Video Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="mt-4">{video.title}</h3>
                                        <p className="text-gray-600 text-sm">{video.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Interview;
