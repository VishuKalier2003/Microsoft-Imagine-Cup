import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SparklesCore } from '../components/ui/sparkles';
import { GeminiSection } from '../components/GeminiSection';
import { TimelineSection } from '../components/TimelineSection';
import { FeaturesSection } from '@/components/ui/features-section';
import '../styles/landing.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const scrollToFeatures = () => {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="landing-page">

            <main>
                {/* Hero Section */}
                <section className="hero-section" id="hero">
                    <div className="hero-bg">
                        <div className="absolute inset-0 w-full h-full">
                            <SparklesCore
                                id="tsparticlesfullpage"
                                background="transparent"
                                minSize={0.6}
                                maxSize={1.4}
                                particleDensity={100}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                                speed={1}
                            />
                        </div>
                    </div>

                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="hero-content"
                        >
                            <h1 className="hero-title">
                                The Future of <br />
                                <span className="text-gradient">Personal Health</span>
                            </h1>
                            <p className="hero-subtitle">
                                Advanced AI-driven health monitoring that empowers you to take control of your well-being. Smart. Secure. Revolutionary.
                            </p>
                            <div className="hero-buttons">
                                <button
                                    onClick={() => navigate('/auth')}
                                    className="btn btn-primary"
                                >
                                    Get Started
                                    <ArrowRight size={18} style={{ display: 'inline', marginLeft: '8px' }} />
                                </button>
                                <button
                                    onClick={scrollToFeatures}
                                    className="btn btn-secondary"
                                >
                                    Learn More
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Gemini AI Section */}
                <GeminiSection />

                {/* Health Journey Timeline */}
                <TimelineSection />

                {/* New Features Section */}
                <div id="features" className="text-center mt-32 mb-8">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Why Health.AI?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto' }}>
                        Discover how our next-generation technology sets a new standard for personal health management.
                    </p>
                </div>
                <FeaturesSection />
            </main>

            {/* Footer */}
            <footer className="main-footer">
                <div className="container footer-content">
                    <div className="footer-brand">HEALTH.AI</div>
                    <div className="footer-links">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Contact</a>
                        <a href="#">About</a>
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>
                        © 2025 Health.AI. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
