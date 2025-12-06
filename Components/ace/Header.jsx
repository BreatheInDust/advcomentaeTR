import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ExternalLink } from 'lucide-react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const menuItems = [
        {
            title: 'Products',
            items: ['PlayerCloud', 'ACE Filmworks', 'ACE AI Studio', 'X-Reality Labs', 'ACE Connect', 'ACE Media Cloud']
        },
        {
            title: 'Gaming',
            items: ['PlayerCloud Free', 'CloudBoost Plans', 'Supported Games', 'Cross-Platform Play', 'Season Schedules']
        },
        {
            title: 'Company',
            items: ['About ACE', 'Our Vision', 'Careers', 'Press & Media', 'Contact Us']
        },
        {
            title: 'Resources',
            items: ['Documentation', 'Developer Portal', 'API Reference', 'Community Forum', 'Support']
        },
        {
            title: 'Developers',
            items: ['SDK Downloads', 'Integration Guides', 'Code Examples', 'GitHub Repository', 'API Keys']
        }
    ];

    const handleGoogleSignIn = () => {
        const clientId = '273421864472-bo1rmotnerktsm8t17h0idu94bco24jc.apps.googleusercontent.com';
        const redirectUri = window.location.origin;
        const scope = 'email profile';
        const responseType = 'token';
        
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=${responseType}&scope=${encodeURIComponent(scope)}`;
        
        window.location.href = authUrl;
    };

    const viewSourceCode = () => {
        window.open('view-source:' + window.location.href, '_blank');
    };

    return (
        <>
            <motion.header 
                className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="max-w-[1800px] mx-auto px-8 lg:px-16 py-8 flex items-center justify-between">
                    {/* Logo */}
                    <motion.div 
                        className="flex-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693474a01f291e584b0d6f2b/e76f231ba_ACE.png" 
                            alt="ACE Productions" 
                            className="h-10 w-auto"
                        />
                    </motion.div>

                    {/* Menu Button */}
                    <motion.button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="px-8 py-4 bg-black text-white rounded-full text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors duration-300 flex items-center gap-3"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        <span>{menuOpen ? 'Close' : 'Menu'}</span>
                    </motion.button>
                </div>
            </motion.header>

            {/* Mega Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setMenuOpen(false)}
                        />
                        
                        <motion.div
                            className="fixed top-[100px] right-8 lg:right-16 w-[95vw] lg:w-[600px] bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="max-h-[80vh] overflow-y-auto">
                                {/* Quick Actions */}
                                <div className="border-b border-gray-100 p-8">
                                    <h3 className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-4">Quick Actions</h3>
                                    <div className="space-y-2">
                                        <motion.button
                                            onClick={handleGoogleSignIn}
                                            className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl text-sm font-medium flex items-center justify-between hover:shadow-lg transition-shadow duration-300"
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            <span>Sign in with Google</span>
                                            <ExternalLink size={16} />
                                        </motion.button>
                                        <motion.button
                                            onClick={viewSourceCode}
                                            className="w-full px-6 py-4 bg-gray-50 text-gray-900 rounded-2xl text-sm font-medium flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            <span>View Source Code</span>
                                            <ExternalLink size={16} />
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Navigation Sections */}
                                {menuItems.map((section, idx) => (
                                    <motion.div
                                        key={section.title}
                                        className="border-b border-gray-100 last:border-b-0"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                                    >
                                        <button
                                            onClick={() => setActiveSubmenu(activeSubmenu === section.title ? null : section.title)}
                                            className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            <span className="text-lg font-medium text-gray-900">{section.title}</span>
                                            <motion.div
                                                animate={{ rotate: activeSubmenu === section.title ? 90 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronRight size={20} className="text-gray-400" />
                                            </motion.div>
                                        </button>
                                        
                                        <AnimatePresence>
                                            {activeSubmenu === section.title && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                    className="overflow-hidden bg-gray-50"
                                                >
                                                    <div className="px-8 py-4 space-y-2">
                                                        {section.items.map((item, itemIdx) => (
                                                            <motion.a
                                                                key={item}
                                                                href="#"
                                                                className="block px-4 py-3 text-sm text-gray-600 hover:text-black hover:bg-white rounded-xl transition-all duration-200"
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: itemIdx * 0.03, duration: 0.2 }}
                                                                whileHover={{ x: 4 }}
                                                            >
                                                                {item}
                                                            </motion.a>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
