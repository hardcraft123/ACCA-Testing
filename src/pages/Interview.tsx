import { useState } from "react";
import bannerImage1 from "../assets/image/banner1.png";
import bannerImage2 from "../assets/image/banner2.png";
import backtohome from "../assets/image/backtohome.png";
import interviewbanner from "../assets/image/interviewbanner.png";
import sustainable from "../assets/image/sustainable.png";
import innovative from "../assets/image/innovative.png";
import future from "../assets/image/future.png";
import ips from "../assets/image/ips.png";
import videoicon from "../assets/image/videoicon.png";
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const Interview = () => {
    const navigate = useNavigate();
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState("");

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
            title: "Ace your Interviews with ACCA's interview prep series",
            desc: "Kick off your journey with expert-led guidance on interview skills.",
            youtubeUrl: "https://www.youtube.com/watch?v=6-liW6XjIHI", // Use embed URL format
        },
        {
            img: bannerImage2,
            title: "How to reflect and recharge after an interview.",
            desc: "Learn how to evaluate your performance and prepare for what's next.",
            youtubeUrl: "https://www.youtube.com/watch?v=La_bgTB2KpQ", // Use embed URL format
        },
    ];

    const handlePlayVideo = (youtubeUrl: string) => {
        setCurrentVideoUrl(youtubeUrl);
        setIsVideoModalOpen(true);
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
        setCurrentVideoUrl("");
    };

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
                                    <span className="home-align" style={{ fontSize: "22px", fontWeight: "500" }}> Home</span>
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
                                Interviews can be your gateway to success, but only when you're well prepared. ACCA's Interview Prep Series equips you with the tools to approach every stage of the process with clarity, confidence, and professionalism. Whether you're entering the workforce or ready to take your next step, this series supports you in building skills that stand out.
                            </p>

                            {/* Video Grid - 2 columns */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 row-gaps">
                                {videos.map((video, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="flex items-center justify-center overflow-hidden relative">
                                            <div className="relative w-full h-full cursor-pointer">
                                                <img
                                                    src={video.img}
                                                    alt={`Video Thumbnail ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* Image Overlay */}
                                                <div 
                                                    className="absolute inset-0"
                                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
                                                ></div>
                                                {/* Play Button Overlay */}
                                                <button
                                                    onClick={() => handlePlayVideo(video.youtubeUrl)}
                                                    className="absolute inset-0 flex items-center justify-center"
                                                >
                                                    <div className="w-auto h-auto flex items-center justify-center hover:scale-110 transition-transform">
                                                        <img
                                                            src={videoicon}
                                                            alt="Play video"
                                                            className="videoicon"
                                                        />
                                                    </div>
                                                </button>
                                            </div>
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

            {/* YouTube Video Modal */}
            <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
                <DialogContent className="max-w-none w-screen h-screen p-0 bg-color">
                    <DialogClose asChild>
                        <button 
                            className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors videocross"
                            onClick={closeVideoModal}
                        >
                            <X size={32} />
                        </button>
                    </DialogClose>
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-full max-w-6xl aspect-video">
                            {currentVideoUrl && (
                                <iframe
                                    src={currentVideoUrl}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="YouTube Video"
                                />
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <Footer />
        </div>
    );
};

export default Interview;
