import { useState } from "react";
import bannerImage1 from "../assets/image/banner1.png";
import bannerImage2 from "../assets/image/banner2.png";
import video1 from "../assets/videos/video1.mp4";
import video13 from "../assets/videos/video13.mp4";
import backtohome from "../assets/image/backtohome.png";
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
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const theme = e.dataTransfer.getData("theme");

        if (theme === "sustainable") navigate("/sustainable");
        else if (theme === "innovative") navigate("/innovative");
        else if (theme === "future") navigate("/future");
    };

    const videos = [
        {
            img: bannerImage1,
            title: "Ace your Interviews with ACCA’s interview prep series",
            desc: "Kick off your journey with expert-led guidance on interview skills.",
            src: video1,
        },
        {
            img: bannerImage2,
            title: "How to reflect and recharge after an interview.",
            desc: "Learn how to evaluate your performance and prepare for what’s next.",
            src: video13,
        },
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

            {/* Sidebar Mobile*/}
            <div className="inter-breadcrumbs">
                <div className="w-screen max-w-none col-span-2 space-y-0 sidebar-mobile display-side relative left-1/2 -translate-x-1/2 sm:static sm:w-full sm:max-w-full">
                    <a href="" className="cursor-pointer block navigation">
                        <a href="/"><span> Home /</span></a>{" "}
                        <a href="#"><span style={{ fontWeight: "600" }}>Interview Prep Series</span></a>
                    </a>
                </div>
            </div>

            {/* Main Content of the page */}
            <section className="pt-10 pb-6 interview-page">
                <div className="custom-container">
                    <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto mobile-flex">

                        {/* Sidebar desktop */}
                        <div className="col-span-2 space-y-2 sidebar-desktop">
                            <a href="/" className="block">
                                <div className="cursor-pointer back-to-home group">
                                    <img
                                        src={backtohome}
                                        alt="Back arrow"
                                        className="arrow inline-block align-middle mr-1 transition-transform duration-300 ease-in-out group-hover:-translate-x-1"
                                        style={{ width: "22px", height: "16px" }}
                                    />
                                    <span style={{ fontSize: "16px", fontWeight: "500" }}>Back to</span>
                                    <br />
                                    <span style={{ fontSize: "22px", fontWeight: "500" }}> Home</span>
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

                        {/* Interview Prep Series */}
                        <div className="col-span-10 space-y-6 interview-prep">
                            <h2 className="h2-fonts mb-2 mt-0">
                                Ace your interviews with clear, practical guidance.
                            </h2>
                            <p className="mb-0 main-p" style={{ marginBottom: "35px" }}>
                                Interviews can be your gateway to success, but only when you’re well prepared. ACCA's Interview Prep Series equips you with the tools to approach every stage of the process with clarity, confidence, and professionalism. Whether you're entering the workforce or ready to take your next step, this series supports you in building skills that stand out.
                            </p>

                            {/* Video Grid - 2 columns */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 row-gaps">
                                {videos.map((video, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="flex items-center justify-center overflow-hidden relative">
                                            {playingIndex === index ? (
                                                <video
                                                    src={video.src}
                                                    controls
                                                    autoPlay
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="relative w-full h-full cursor-pointer">
                                                    <img
                                                        src={video.img}
                                                        alt={`Video Thumbnail ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    {/* Play Button Overlay */}
                                                    <button
                                                        onClick={() => setPlayingIndex(index)}
                                                        className="absolute inset-0 flex items-center justify-center"
                                                    >
                                                        <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="black"
                                                                viewBox="0 0 24 24"
                                                                width="36"
                                                                height="36"
                                                            >
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="mt-4">{video.title}</h3>
                                        <p className="mt-2 text-gray-600 text-sm">{video.desc}</p>
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
