'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryItem {
    id: string
    src: string
    alt: string
    className?: string // For grid spans
}

const items: GalleryItem[] = [
    // Feature Highlights
    { id: 'payment', src: '/assets/imgs/projects/take-away/gallery-payment-method.png', alt: 'Payment Methods', className: 'col-span-1 row-span-1' },
    { id: 'recovery', src: '/assets/imgs/projects/take-away/gallery-recovery.png', alt: 'Password Recovery', className: 'col-span-1 row-span-1' },

    // Desktop View (Wide)
    { id: 'proceso-compra', src: '/assets/imgs/projects/take-away/Carrito-Desktop-1.png', alt: 'Desktop Cart View', className: 'col-span-2 row-span-1' },

    // Mobile Screens
    { id: 'create-profile', src: '/assets/imgs/projects/take-away/gallery-create-profile.png', alt: 'Create Profile', className: 'col-span-1 row-span-2' },
    { id: 'welcome', src: '/assets/imgs/projects/take-away/gallery-welcome.png', alt: 'Welcome Screen', className: 'col-span-1 row-span-2' },

    // Detailed Views
    { id: 'onboarding', src: '/assets/imgs/projects/take-away/Cliente-Onboarding-1.png', alt: 'Client Onboarding', className: 'col-span-1 row-span-2' },
    { id: 'orders', src: '/assets/imgs/projects/take-away/Pedidos-En-proceso.png', alt: 'Orders In Process', className: 'col-span-1 row-span-2' },

    // More Features
    { id: '404', src: '/assets/imgs/projects/take-away/404-Error-1.png', alt: '404 Error Screen', className: 'col-span-1 row-span-2' },
    { id: 'payment-summary', src: '/assets/imgs/projects/take-away/Resumen-de-Pago.png', alt: 'Payment Summary', className: 'col-span-1 row-span-2' },

    // Delivery Status
    { id: 'delivery', src: '/assets/imgs/projects/take-away/Restaurante-Pedido-En-Entrega.png', alt: 'Restaurant Delivery Status', className: 'col-span-1 row-span-2' },
    { id: 'delivery-detail', src: '/assets/imgs/projects/take-away/Restaurante-Pedido-En-Entrega-1.png', alt: 'Delivery Detail View', className: 'col-span-1 row-span-2' },
]

export default function BentoGallery() {
    const [selectedId, setSelectedId] = useState<string | null>(null)

    // Lock body scroll when modal is open
    React.useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [selectedId])

    return (
        <div className="container py-4">
            <style jsx>{`
                .bento-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr); /* Mobile default */
                    grid-auto-rows: 200px;
                    gap: 1rem;
                }
                @media (min-width: 768px) {
                    .bento-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }
                /* Utility classes mapping locally */
                .col-span-1 { grid-column: span 1; }
                .col-span-2 { grid-column: span 2; }
                .row-span-1 { grid-row: span 1; }
                .row-span-2 { grid-row: span 2; }

                /* Item styling */
                .gallery-item {
                    border-radius: 12px;
                    overflow: hidden;
                    cursor: pointer;
                    position: relative;
                    background-color: #f3f4f6;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                }
                .gallery-item:hover {
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
                    transform: translateY(-2px);
                    z-index: 10;
                }
                .gallery-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top;
                }
                
                /* Modal Styling */
                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0,0,0,0.9);
                    backdrop-filter: blur(8px);
                    padding: 20px;
                }
                .modal-content {
                    position: relative;
                    max-width: 100%;
                    max-height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .modal-img {
                    max-width: 90vw;
                    max-height: 85vh;
                    width: auto;
                    height: auto;
                    object-fit: contain;
                    border-radius: 8px;
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
                }
                /* Fixed Close Button (Top Right of Screen) */
                .close-btn {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: rgba(255,255,255,0.1);
                    border: none;
                    color: white;
                    border-radius: 50%;
                    width: 48px;
                    height: 48px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                    z-index: 10000;
                }
                .close-btn:hover {
                    background: rgba(255,255,255,0.25);
                    transform: scale(1.1);
                }
            `}</style>

            <div className="bento-grid">
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layoutId={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={`gallery-item ${item.className || ''}`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.img
                            src={item.src}
                            alt={item.alt}
                            className="gallery-img"
                        />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <div className="modal-overlay" onClick={() => setSelectedId(null)}>
                        {/* Independent Close Button */}
                        <button onClick={() => setSelectedId(null)} className="close-btn" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        <motion.div
                            layoutId={selectedId}
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {(() => {
                                const item = items.find((i) => i.id === selectedId)
                                return (
                                    <motion.img
                                        src={item?.src}
                                        alt={item?.alt}
                                        className="modal-img"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )
                            })()}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}
