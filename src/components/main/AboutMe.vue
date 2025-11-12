<template>
    <section id="aboutMe" class="about">
        <div class="about-container">
            <!-- Section Header -->
            <div class="about-header">
                <h2>About Me</h2>
                <div class="header-line"></div>
            </div>

            <!-- Main Introduction -->
            <div class="intro-section">
                <p class="intro-text">
                    I'm a passionate <span class="highlight">Full-Stack Developer</span> with a strong commitment to continuous learning and innovation. I specialize in building scalable, high-performance web applications that seamlessly blend functionality, elegant design, and exceptional user experiences.
                </p>
            </div>

            <!-- Experience Blocks -->
            <div class="experience-blocks">
                <!-- Front-End Block -->
                <div class="block">
                    <h3>🎨 Front-End Development</h3>
                    <p>
                        I craft interactive and responsive user interfaces using modern frameworks like <span class="tech-highlight">Vue.js, React, and Angular</span>. My focus is on creating pixel-perfect designs that enhance user experiences across all devices, combining clean code with intuitive navigation patterns.
                    </p>
                </div>

                <!-- Back-End Block -->
                <div class="block">
                    <h3>⚙️ Back-End Architecture</h3>
                    <p>
                        I build robust, scalable server-side solutions with <span class="tech-highlight">Spring Boot and Java</span>, complemented by expanding expertise in <span class="tech-highlight">PHP and C#/.NET</span>. I implement secure authentication systems using JWT and BasicAuth, integrate payment solutions via Stripe, and ensure data integrity across complex applications.
                    </p>
                </div>

                <!-- Cloud & DevOps Block -->
                <div class="block">
                    <h3>☁️ Cloud & DevOps</h3>
                    <p>
                        I deploy and manage applications on <span class="tech-highlight">AWS cloud infrastructure</span> with hands-on experience in Docker containerization and CI/CD pipeline automation. This ensures seamless deployments, optimal performance, and scalable infrastructure for production environments.
                    </p>
                </div>

                <!-- Customer Experience Block -->
                <div class="block">
                    <h3>🤝 Customer-Centric Approach</h3>
                    <p>
                        With experience as a Messaging Agent at MasOrange Group, I've developed strong problem-solving skills and customer service excellence. I understand client needs deeply, translate them into technical solutions, and maintain professional relationships. This customer-first mindset directly influences my development approach, prioritizing user satisfaction.
                    </p>
                </div>

                <!-- Design Block -->
                <div class="block">
                    <h3>🎭 Design & UI/UX</h3>
                    <p>
                        I leverage my graphic design expertise with <span class="tech-highlight">Figma, Adobe Photoshop, and Illustrator</span> to create visually stunning interfaces that captivate users. I believe that great design and functionality must work together seamlessly to create memorable user experiences.
                    </p>
                </div>

                <!-- Agile & Education Block -->
                <div class="block">
                    <h3>📚 Agile Development & Education</h3>
                    <p>
                        I thrive in collaborative environments using <span class="tech-highlight">Scrum methodologies and Jira</span> for efficient project management. Currently pursuing a Higher Vocational Training in Web Application Development (Year 2), I maintain a commitment to continuous improvement and staying aligned with industry best practices.
                    </p>
                </div>
            </div>

            <!-- Closing Section -->
            <div class="about-footer">
                <p>
                    My mission is to continue growing professionally, delivering innovative solutions that create meaningful impact. I'm always eager to tackle new challenges and collaborate on projects that push the boundaries of what's possible in web development.
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about {
    padding: 4rem 2rem;
    background: linear-gradient(135deg, rgba(0, 23, 31, 0.5) 0%, rgba(0, 52, 89, 0.3) 100%);
    margin: 2rem 0;

    .about-container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .about-header {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 3rem;

        h2 {
            color: #00d4ff;
            font-size: 2.5rem;
            font-weight: 700;
            margin: 0;
            background: linear-gradient(135deg, #007ea7, #00d4ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            white-space: nowrap;
        }

        .header-line {
            flex: 1;
            height: 2px;
            background: linear-gradient(90deg, #007ea7, transparent);
            border-radius: 2px;
        }
    }

    .intro-section {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: linear-gradient(135deg, rgba(0, 126, 167, 0.08), rgba(0, 212, 255, 0.03));
        border-left: 3px solid #00d4ff;
        border-radius: 8px;

        .intro-text {
            color: #e0e0e0;
            font-size: 1.1rem;
            line-height: 1.8;
            margin: 0;

            .highlight {
                color: #00d4ff;
                font-weight: 600;
            }
        }
    }

    .experience-blocks {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
        margin: 3rem 0;

        .block {
            background: linear-gradient(135deg, rgba(0, 126, 167, 0.1), rgba(0, 212, 255, 0.05));
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 12px;
            padding: 2rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
                transition: left 0.6s ease;
                z-index: 0;
            }

            &:hover {
                border-color: rgba(0, 212, 255, 0.4);
                background: linear-gradient(135deg, rgba(0, 126, 167, 0.15), rgba(0, 212, 255, 0.1));
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(0, 212, 255, 0.1);

                &::before {
                    left: 100%;
                }
            }

            h3 {
                color: #00d4ff;
                font-size: 1.3rem;
                margin: 0 0 1rem 0;
                font-weight: 600;
                position: relative;
                z-index: 1;
            }

            p {
                color: #b8b8b8;
                font-size: 0.95rem;
                line-height: 1.7;
                margin: 0;
                position: relative;
                z-index: 1;

                .tech-highlight {
                    color: #00d4ff;
                    font-weight: 500;
                }
            }
        }
    }

    .about-footer {
        background: linear-gradient(135deg, rgba(0, 126, 167, 0.1), rgba(0, 212, 255, 0.05));
        border: 1px solid rgba(0, 212, 255, 0.2);
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        margin-top: 2rem;

        p {
            color: #c8c8c8;
            font-size: 1rem;
            line-height: 1.8;
            margin: 0;
            font-weight: 500;
        }
    }

    @media (max-width: 1024px) {
        padding: 3rem 2rem;

        .about-header h2 {
            font-size: 2rem;
        }

        .experience-blocks {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }
    }

    @media (max-width: 768px) {
        padding: 2.5rem 1.5rem;

        .about-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 2rem;

            h2 {
                font-size: 1.8rem;
            }

            .header-line {
                width: 100%;
            }
        }

        .intro-section {
            .intro-text {
                font-size: 1rem;
            }
        }

        .experience-blocks {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin: 2rem 0;

            .block {
                padding: 1.5rem;

                h3 {
                    font-size: 1.2rem;
                    margin-bottom: 0.8rem;
                }

                p {
                    font-size: 0.9rem;
                }
            }
        }

        .about-footer {
            padding: 1.5rem;

            p {
                font-size: 0.95rem;
            }
        }
    }

    @media (max-width: 450px) {
        padding: 2rem 1rem;

        .about-header {
            margin-bottom: 1.5rem;

            h2 {
                font-size: 1.5rem;
            }

            .header-line {
                height: 1.5px;
            }
        }

        .intro-section {
            padding: 1rem;
            margin-bottom: 1.5rem;

            .intro-text {
                font-size: 0.95rem;
                line-height: 1.6;
            }
        }

        .experience-blocks {
            gap: 1rem;
            margin: 1.5rem 0;

            .block {
                padding: 1.25rem;

                h3 {
                    font-size: 1.05rem;
                    margin-bottom: 0.6rem;
                }

                p {
                    font-size: 0.85rem;
                    line-height: 1.6;
                }
            }
        }

        .about-footer {
            padding: 1.25rem;

            p {
                font-size: 0.9rem;
                line-height: 1.6;
            }
        }
    }
}
</style>