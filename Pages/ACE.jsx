import React from 'react';
import Header from '../components/ace/Header';
import HeroSection from '../components/ace/HeroSection';
import PlayerCloudShowcase from '../components/ace/PlayerCloudShowcase';
import ProductShowcase from '../components/ace/ProductShowcase';
import PhilosophySection from '../components/ace/PhilosophySection';
import Footer from '../components/ace/Footer';
import AgentChat from '../components/ace/AgentChat';

export default function ACE() {
    return (
        <div className="bg-white min-h-screen overflow-x-hidden">
            <Header />
            <HeroSection />
            <PlayerCloudShowcase />
            <ProductShowcase />
            <PhilosophySection />
            <Footer />
            <AgentChat />
        </div>
    );
}
