<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <!-- Copyright Section -->
                <div class="copy-container">
                    <svg class="copy-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 19a9 9 0 0 1 9 0"></path>
                        <path d="M3 6a9 9 0 0 1 9 0"></path>
                        <line x1="3" y1="6" x2="3" y2="19"></line>
                        <line x1="21" y1="6" x2="21" y2="19"></line>
                    </svg>
                    <p class="copy-text">© 2024 Juan Munguia. All rights reserved</p>
                </div>

                <!-- Social Media Section -->
                <div class="social-media">
                    <a href="https://www.linkedin.com/in/juanmunguia" target="_blank" rel="noopener noreferrer" class="social-link linkedin">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.824 0-9.737h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.595zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.955.771-1.713 1.997-1.713 1.225 0 1.915.758 1.923 1.713 0 .947-.698 1.705-1.923 1.705zm1.946 11.597H3.392V9.715h3.891v10.737zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/GitNinja0" target="_blank" rel="noopener noreferrer" class="social-link github">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>

            <!-- Divider -->
            <div class="footer-divider"></div>

            <!-- Bottom text -->
            <div class="footer-bottom">
                <p>Designed & Built with <span class="heart">❤</span> by Juan Munguia</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background: linear-gradient(135deg, #00171f 0%, #003459 100%);
    border-top: 1px solid rgba(0, 212, 255, 0.1);
    margin-top: auto;
    
    .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 3rem 2rem;
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .copy-container {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            
            .copy-icon {
                color: #00d4ff;
                min-width: 20px;
                opacity: 0.8;
                transition: opacity 0.3s ease;
            }

            .copy-text {
                color: #b0b0b0;
                font-size: 0.95rem;
                margin: 0;
                transition: color 0.3s ease;
                
                &:hover {
                    color: #00d4ff;
                }
            }
        }

        .social-media {
            display: flex;
            gap: 1.5rem;
            align-items: center;

            .social-link {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: #e0e0e0;
                text-decoration: none;
                font-size: 0.95rem;
                font-weight: 500;
                padding: 0.5rem 1rem;
                border-radius: 8px;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;

                svg {
                    width: 20px;
                    height: 20px;
                    transition: transform 0.3s ease;
                }

                &::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 126, 167, 0.2));
                    border-radius: 8px;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    z-index: -1;
                }

                &:hover {
                    color: #00d4ff;
                    transform: translateY(-2px);
                    
                    &::before {
                        opacity: 1;
                    }

                    svg {
                        transform: scale(1.1);
                    }
                }

                &.linkedin:hover {
                    color: #0a66c2;
                }

                &.github:hover {
                    color: #ffffff;
                }
            }
        }

        .footer-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), transparent);
            margin: 2rem 0;
        }

        .footer-bottom {
            text-align: center;
            
            p {
                color: #8a8a8a;
                font-size: 0.9rem;
                margin: 0;
                transition: color 0.3s ease;

                .heart {
                    color: #ff6b6b;
                    animation: heartbeat 1.5s ease-in-out infinite;
                }

                &:hover {
                    color: #00d4ff;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .footer-container {
            padding: 2rem 1.5rem;

            .footer-content {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            .copy-container {
                justify-content: center;
            }

            .social-media {
                justify-content: center;
            }
        }
    }

    @media (max-width: 450px) {
        .footer-container {
            padding: 1.5rem 1rem;

            .footer-content {
                gap: 1.5rem;
            }

            .social-media {
                gap: 1rem;

                .social-link {
                    padding: 0.4rem 0.8rem;
                    font-size: 0.85rem;

                    svg {
                        width: 18px;
                        height: 18px;
                    }

                    span {
                        display: none;
                    }
                }
            }

            .copy-text {
                font-size: 0.85rem;
            }
        }
    }
}

@keyframes heartbeat {
    0%, 100% {
        transform: scale(1);
    }
    25% {
        transform: scale(1.2);
    }
    50% {
        transform: scale(1);
    }
}
</style>