import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "MOODS - Social Music Platform | Josh D. Rubio",
    description: "A vibrant social network designed for music enthusiasts. UX/UI Design case study.",
}

export default function Moods() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <Link href="https://www.figma.com/proto/QJmcZgWG7n99XQsa5RCqAc/Moods-Social-Music-APP?node-id=2-2&p=f&t=IuFUCBWylzaeU1YJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1" target="_blank" className="btn btn-gradient d-inline-block text-uppercase">
                                            View Prototype
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            MOODS
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            <em>Sounding memories.</em> There's a sound for every moment, memory, and mood. With MOODS, the social-media platform for music lovers, you can listen, share, and re-live the sound of every meaningful memory in a memorable way.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">My Role</p>
                                        <h6>Concept & Design</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Duration</p>
                                        <h6>5 Weeks</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Tools</p>
                                        <h6>Figma + Material 3</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>App Redesign</h6>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="col-12 mb-5">
                                    <img src="/assets/imgs/work/img-moods.png" alt="MOODS Hero" className="w-100 rounded-3" />
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    {/* OVERVIEW */}
                                    <h5 className="fs-5 fw-medium mb-3">Project Overview</h5>
                                    <p className="text-300 fs-6 mb-3">
                                        <strong>From streaming app to social network.</strong> What started as <strong>BeatBoop</strong>, a music streaming app created as an educational project, has now evolved into <strong>MOODS</strong>—a vibrant social platform for music lovers.
                                    </p>
                                    <p className="text-300">
                                        This reimagined platform builds upon its predecessor's foundation, refining features and functionalities to deliver a fresh, engaging experience. MOODS not only celebrates music as a shared passion but also emulates a <strong>real-world app pivot scenario</strong>—showcasing the journey of transforming an existing concept into an innovative product.
                                    </p>

                                    {/* BEFORE/AFTER COMPARISON */}
                                    <div className="col-12 my-5">
                                        <img src="/assets/imgs/projects/moods/before-after.png" alt="BeatBoop vs MOODS Comparison" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* PROBLEM & SOLUTION */}
                                    <div className="col-12 my-5">
                                        <img src="/assets/imgs/projects/moods/problem-solution.png" alt="Problem and Solution Overview" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* PROCESS */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-4">My Process</h5>
                                    <div className="row text-center mt-4 mb-5 g-3">
                                        <div className="col-6 col-md-3">
                                            <div className="p-3 rounded-3 border bg-light h-100">
                                                <div className="fw-bold text-100 fs-5">01</div>
                                                <div className="fw-semibold text-100 mt-2">DEFINE</div>
                                                <div className="text-force-gray text-uppercase small mt-1">Scope</div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className="p-3 rounded-3 border bg-light h-100">
                                                <div className="fw-bold text-100 fs-5">02</div>
                                                <div className="fw-semibold text-100 mt-2">RESEARCH</div>
                                                <div className="text-force-gray text-uppercase small mt-1">Activities</div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className="p-3 rounded-3 border bg-light h-100">
                                                <div className="fw-bold text-100 fs-5">03</div>
                                                <div className="fw-semibold text-100 mt-2">IDEATE</div>
                                                <div className="text-force-gray text-uppercase small mt-1">Features</div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className="p-3 rounded-3 border bg-light h-100">
                                                <div className="fw-bold text-100 fs-5">04</div>
                                                <div className="fw-semibold text-100 mt-2">DESIGN</div>
                                                <div className="text-force-gray text-uppercase small mt-1">Iterate</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* DEFINE SECTION */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-3">1. Define</h5>
                                    <p className="text-300">
                                        During this stage, I conducted a <strong>UX audit of the existing BeatBoop app</strong>, identifying key opportunities for improvement. I then defined the scope of the revamp, ensuring a strategic overhaul of its functionalities, user experience, and brand identity.
                                    </p>
                                    <p className="text-300">
                                        This process laid the foundation for a well-structured rebuild, aligning MOODS with <strong>user needs and industry trends</strong> while answering a critical question: <em>How can we enhance users' experience without overcomplicating the app's core functionality?</em>
                                    </p>

                                    {/* KICK-OFF IMAGE */}
                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/moods/kick-off.png" alt="Project Kick-off and Brainstorming" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    <h6 className="mt-5 fw-semibold">Finding a Direction to Develop</h6>
                                    <p className="text-300">
                                        To prioritize features effectively, I created a <strong>ranking framework</strong> evaluating potential features across four key criteria: <strong>Feasibility, Technical complexity, Business potential, and Personal alignment</strong>.
                                    </p>
                                    <p className="text-300">
                                        This data-driven approach revealed <strong>high-priority features</strong> like Collaborative Playlists, Mood-Based Playlists, and Smart Suggestions—features that combined technical feasibility with strong business and user value.
                                    </p>

                                    {/* FINDING DIRECTION IMAGE */}
                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/moods/finding-direction.png" alt="Feature Prioritization Matrix" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    <h6 className="mt-5 fw-semibold">Why Social?</h6>
                                    <p className="text-300">
                                        Based on the evaluations, a clear trend emerged: <strong>social features ranked highest</strong>. Features like <strong>Collaborative Playlists</strong> and <strong>Music Stories</strong>, combined with user-centered options like Smart Suggestions and Mood-Based Playlists, showed the strongest potential.
                                    </p>
                                    <p className="text-300">
                                        These features leverage users' desire to <strong>share and interact through music</strong>, aligning with the broader shift toward integrating social networking into specialized platforms. This insight shaped MOODS into a <strong>music-driven social network</strong>, carving out a unique niche and addressing the growing demand for more connected and interactive music experiences.
                                    </p>

                                    {/* WHY SOCIAL IMAGE */}
                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/moods/why-social.png" alt="Why Social Features Matter" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* RESEARCH SECTION */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-3">2. The Research</h5>
                                    <p className="text-300">
                                        To explore <strong>user behavior and preferences</strong> regarding social interactions in music-driven apps—or music-focused interactions within social media platforms—while validating the effectiveness of MOODS' key features in fostering <strong>engagement and community</strong> among music enthusiasts.
                                    </p>

                                    <div className="p-4 bg-light rounded-3 mt-4">
                                        <h6 className="fw-semibold mb-3">🎯 Research Goals</h6>
                                        <ul className="text-300 mb-0">
                                            <li className="mb-2">
                                                <strong className="text-100">Analyze User Interaction Trends:</strong> Review how users engage with social features in existing music-driven apps to inform MOODS' design.
                                            </li>
                                            <li className="mb-2">
                                                <strong className="text-100">Identify Motivations for Social Engagement:</strong> Investigate user motivations behind music-based social interactions to guide MOODS' feature development.
                                            </li>
                                            <li className="mb-0">
                                                <strong className="text-100">Assess Social Features' Impact on Retention:</strong> Study the effect of social elements on user retention in similar platforms to predict MOODS' potential impact.
                                            </li>
                                        </ul>
                                    </div>

                                    <h6 className="mt-6 fw-semibold">Competitive Audit</h6>
                                    <p className="text-300">
                                        I conducted a <strong>comprehensive competitive analysis</strong> examining platforms like Instagram, TikTok, Spotify, and YouTube Music. Using a <strong>KT-SWOT framework</strong>, I identified their strengths, weaknesses, opportunities, and threats—focusing specifically on social/music features, UX/UI design, and feature functionality.
                                    </p>
                                    <p className="text-300">
                                        <strong>Key insight:</strong> While platforms like Spotify offer collaborative playlists and Instagram excels at visual storytelling, <em>none provide a fully immersive social network experience centered on music</em>. This gap validated MOODS' unique positioning.
                                    </p>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/moods/competitive-audit.png" alt="Competitive Analysis Report (KT-SWOT)" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    <h6 className="mt-6 fw-semibold">Feature Benchmarking</h6>
                                    <p className="text-300">
                                        I created a <strong>feature audit</strong> to identify and catalog the key social and music-driven features of relevant platforms. This analysis revealed <strong>strengths, weaknesses, and trends</strong> that would directly inform MOODS' development.
                                    </p>
                                    <p className="text-300">
                                        Platforms like <strong>TikTok</strong> excel at viral content creation and music integration, while <strong>Spotify</strong> focuses on personalization but lacks meaningful social tools. This benchmarking helped identify opportunities for MOODS to differentiate through <strong>collaborative features and community-driven discovery</strong>.
                                    </p>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/moods/feature-benchmarking.png" alt="Feature Analysis Report" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    <h6 className="mt-6 fw-semibold">Personas Development</h6>
                                    <p className="text-300">
                                        To create detailed user personas reflecting the <strong>needs, motivations, and frustrations</strong> of target audiences, I developed two primary personas: <strong>Jamie (The Social Connector)</strong> and <strong>Taylor (The Music Explorer)</strong>.
                                    </p>
                                    <p className="text-300">
                                        Data was driven from both the competitive audits and secondary research on musical and social media user demographics. These personas guided design and development decisions, ensuring MOODS' core features aligned with <strong>real user behaviors and pain points</strong>.
                                    </p>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/moods/personas.png" alt="User Personas - Jamie and Taylor" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    <h6 className="mt-6 fw-semibold">Synthesized User Needs</h6>
                                    <p className="text-300">
                                        From the personas and their needs, I synthesized a <strong>core user needs statement</strong> that would drive all feature development:
                                    </p>
                                    <div className="p-4 bg-dark text-white rounded-3 my-4">
                                        <p className="fs-5 mb-0 text-center" style={{ color: 'white' }}>
                                            <em>"Users want a <strong style={{ color: '#a3e635' }}>personalized, social, and seamless</strong> music experience that allows them to <strong style={{ color: '#a3e635' }}>connect, discover, and share</strong> music based on their moods and preferences."</em>
                                        </p>
                                    </div>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/moods/user-needs.png" alt="User Needs Synthesis" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* IDEATION SECTION */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-3">3. The Ideation</h5>
                                    <p className="text-300">
                                        During this stage, I analyzed and refined the research insights to <strong>define and validate the core functionalities</strong> of the revamp. I identified gaps and opportunities for differentiation, crafted a cohesive narrative, prioritized features using a structured matrix, and mapped out user journeys to ensure a <strong>seamless and engaging experience</strong> for each feature.
                                    </p>

                                    <h6 className="mt-5 fw-semibold">Need-to-Feature Report</h6>
                                    <p className="text-300">
                                        Using the synthesized user needs, I created a <strong>need-to-feature framework</strong> that directly mapped each high-level user need to specific features. This ensured every feature had a clear purpose and addressed real user pain points.
                                    </p>
                                    <p className="text-300">
                                        For example, the need for <strong>"Sharing and connecting with others through music"</strong> translated into features like <strong>Collaborative Playlists</strong> and <strong>Music Stories</strong>—allowing users to co-create playlists with friends and share musical moments in a social feed.
                                    </p>
                                    <p className="text-300">
                                        This systematic approach validated that MOODS wasn't just adding features for the sake of it—each one served a <strong>strategic purpose</strong> in creating a cohesive, music-driven social experience.
                                    </p>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/moods/need-to-feature.png" alt="Need-to-Feature Report" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    <h6 className="mt-6 fw-semibold">Gaps and Opportunities</h6>
                                    <p className="text-300">
                                        During this stage, the features that ranked the highest during the curation process were matched with <strong>opportunities and gaps</strong> known during the process, resulting in a comprehensive analysis:
                                    </p>
                                    <p className="text-300">
                                        <strong>Key Differentiators:</strong> Social features like <strong>Music Stories</strong> and <strong>Collaborative Playlists</strong> offer the greatest potential for MOODS to carve out a unique niche. These features enable <strong>expressive storytelling</strong> and <strong>dynamic, immersive interactions</strong>—capabilities that existing platforms lack.
                                    </p>
                                    <p className="text-300">
                                        Additionally, I created a <strong>Feature Matrix Framework</strong> comparing MOODS against Instagram, TikTok, Spotify, and YouTube Music. This revealed that while some platforms offer collaborative playlists or music stories individually, <strong>none combine them with mood-based discovery and smart suggestions</strong> in a unified social experience.
                                    </p>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/moods/gaps-opportunities.png" alt="Gaps and Opportunities Analysis" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    <h6 className="mt-6 fw-semibold">Feature Prioritization</h6>
                                    <p className="text-300">
                                        Using an <strong>Impact vs. Effort matrix</strong>, I prioritized features based on their potential to drive engagement while considering implementation complexity:
                                    </p>
                                    <ul className="text-300">
                                        <li><strong>High Impact, Low Effort:</strong> Mood-Based Playlists and Smart Suggestions—features that leverage AI to enhance personalization without overwhelming development resources.</li>
                                        <li><strong>High Impact, Medium Effort:</strong> Music Stories and Collaborative Playlists—social features that require more development but offer significant differentiation.</li>
                                        <li><strong>Medium Impact, High Effort:</strong> Dynamic Lyrics Mode—an innovative feature with strong personal relevance but higher technical complexity.</li>
                                    </ul>
                                    <p className="text-300">
                                        This structured approach ensured decisions were <strong>data-informed and aligned with project goals</strong>, balancing innovation with feasibility.
                                    </p>

                                    <h6 className="mt-6 fw-semibold">User Journey Workflows</h6>
                                    <p className="text-300">
                                        For each high-priority feature, I mapped detailed <strong>user journey workflows</strong> tracking emotional states, actions, and pain points across six stages: <strong>Stage → Awareness → Engagement → Interaction → Enjoyment → Reflection & Sharing</strong>.
                                    </p>

                                    <div className="row g-4 my-4">
                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-3">Music Stories</h6>
                                            <p className="text-300 mb-3">
                                                <strong>Share Your Music Journey.</strong> Jamie loves sharing snippets of her artistic life with her followers in Germany. Inspired by a song from her latest playlist, she uses <strong>Music Stories</strong> to create a visual story paired with music—establishing her vibe, receiving reactions and comments from her community, sparking a meaningful exchange about music and art.
                                            </p>
                                            <img src="/assets/imgs/projects/moods/music-stories-journey.png" alt="Music Stories User Journey" className="w-100 rounded-3 border shadow-sm" />
                                        </div>

                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-3">Smart Suggestions & Mood Matcher</h6>
                                            <p className="text-300 mb-3">
                                                <strong>Let the Music Find You.</strong> Taylor wakes up early to prepare for his morning run. As he ties his shoes, his phone buzzes with a notification from MOODS: <em>"Start your day with energy!"</em> He taps it and finds the "Running Beats" playlist. Later, Jamie uses the <strong>Mood Matcher</strong> to find a playlist that complements her current mood—calm and introspective—offering her suggestions that align with her emotional state.
                                            </p>
                                            <p className="text-300 mb-3">
                                                <strong>Smart Suggestions</strong> enhance Taylor's morning routine by providing <strong>personalized, mood-aligned playlists</strong> that support his goals, seamlessly integrating music with his lifestyle.
                                            </p>
                                            <img src="/assets/imgs/projects/moods/definitions-mood-matcher.png" alt="Smart Suggestions and Mood Matcher Journey" className="w-100 rounded-3 border shadow-sm" />
                                        </div>

                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-3">Dynamic Lyrics Mode</h6>
                                            <p className="text-300 mb-3">
                                                <strong>Understand the Music, Anywhere.</strong> Taylor often listens to songs in languages he's learning. During his morning commute, he plays a Spanish track and enables <strong>Dynamic Lyrics Mode</strong>—which synchronizes lyrics with the song being played. Users can adjust font sizes, themes, and even enable translations, making music accessible to diverse audiences.
                                            </p>
                                            <p className="text-300 mb-3">
                                                <strong>Dynamic Lyrics Mode</strong> bridges music and language, helping users like Taylor connect to songs on a deeper, multilingual level.
                                            </p>
                                            <img src="/assets/imgs/projects/moods/dynamic-lyrics-journey.png" alt="Dynamic Lyrics Mode User Journey" className="w-100 rounded-3 border shadow-sm" />
                                        </div>

                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-3">Collaborative Playlists</h6>
                                            <p className="text-300 mb-3">
                                                <strong>Music for Every Great Vibe.</strong> Taylor frequently hosts casual get-togethers with friends. Using <strong>Collaborative Playlists</strong>, he creates a shared playlist for the evening. His friends can search, vote on songs, and add their own favorites—creating a dynamic, crowd-sourced soundtrack. The playlist evolves in real-time, reflecting the group's collective taste and energy.
                                            </p>
                                            <p className="text-300 mb-3">
                                                <strong>Collaborative Playlists</strong> bring people together by allowing users like Taylor to co-create shared music experiences in real time.
                                            </p>
                                        </div>
                                    </div>

                                    {/* DESIGN SECTION */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-3">4. The Design</h5>
                                    <p className="text-300">
                                        With research and ideation complete, I transitioned into the design phase—where insights transformed into <strong>tangible, polished interfaces</strong>. This stage focused on building a cohesive visual language, refining user flows, and ensuring every interaction felt intuitive and engaging.
                                    </p>
                                    <p className="text-300">
                                        The design process balanced <strong>familiarity with innovation</strong>—revamping existing features while seamlessly integrating new social functionalities. The goal was to create an experience that felt both <strong>fresh and familiar</strong>, allowing users to explore MOODS' new capabilities without friction.
                                    </p>

                                    <h6 className="mt-6 fw-semibold">Design System</h6>
                                    <p className="text-300">
                                        For MOODS, a <strong>design system was developed using Google Material 3</strong> as a foundation. This system was then refined and expanded to accommodate the unique requirements of a music-centric and socially interactive platform.
                                    </p>
                                    <p className="text-300">
                                        Custom components, typography, and visual elements were carefully curated to <strong>enhance usability, maintain brand consistency, and ensure a seamless user experience</strong> across all interactions. The system provided a scalable framework that supported rapid iteration while maintaining visual coherence.
                                    </p>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/moods/design-system.png" alt="MOODS Design System" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    <h6 className="mt-6 fw-semibold">Wireframes</h6>
                                    <p className="text-300">
                                        During the wireframing phase, I focused on structuring the revamped MOODS experience with <strong>clarity and usability at its core</strong>. I started with low-fidelity wireframes to explore multiple layout possibilities, ensuring that core functionalities were intuitive and accessible.
                                    </p>
                                    <p className="text-300">
                                        Iterating based on research insights, I refined the wireframes, mapping out user interactions and optimizing information hierarchy. The goal was to create a <strong>solid foundation for the visual design</strong> while maintaining flexibility for future refinements.
                                    </p>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/moods/wireframes.png" alt="MOODS Wireframes" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    <h6 className="mt-6 fw-semibold">Features</h6>
                                    <p className="text-300">
                                        During the design stage, I focused on <strong>revamping each of the pre-existing features</strong>—such as Home, Player, Lists, and Profiles—by scaling them to align with the MOODS concept. This involved refining the UI, improving usability, and ensuring consistency with the newly developed design system.
                                    </p>
                                    <p className="text-300">
                                        Additionally, I integrated the new social-media features, making them feel like a <strong>seamless extension of the platform</strong> rather than an afterthought. This feature-driven approach allowed me to maintain a user-centered perspective, ensuring that every screen and interaction supported the overall experience.
                                    </p>

                                    <div className="row g-4 my-5">
                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-3">Home</h6>
                                            <p className="text-300">
                                                The <strong>Home screen</strong> received a comprehensive redesign to serve as the central hub for music discovery and social interaction:
                                            </p>
                                            <ul className="text-300">
                                                <li><strong>Clean and minimalistic design</strong> with enhanced visual hierarchy</li>
                                                <li><strong>Enhanced top-bar</strong> with profile drop-down menu and quick accesses</li>
                                                <li><strong>New Tool-bar at the bottom</strong> featuring new post/story creation and search direct access</li>
                                                <li><strong>Mood-based category system</strong> for intuitive content organization</li>
                                                <li><strong>Social-media stories</strong> prominently featured for community engagement</li>
                                                <li><strong>Enhanced listing system</strong> showcasing personalized playlists and recommendations</li>
                                            </ul>
                                            <img src="/assets/imgs/projects/moods/feature-home.png" alt="Home Feature Design" className="w-100 rounded-3 border shadow-sm" />
                                        </div>

                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-3">Lists</h6>
                                            <p className="text-300">
                                                The <strong>Lists feature</strong> was refined to provide better organization and discoverability:
                                            </p>
                                            <ul className="text-300">
                                                <li><strong>Clean and minimalistic design</strong> with improved visual clarity</li>
                                                <li><strong>Mood-based category system</strong> allowing users to organize playlists by emotional context</li>
                                                <li><strong>New: Podcasts</strong> integration expanding content beyond music</li>
                                                <li><strong>Personalized podcast cards</strong> with rich metadata and visual appeal</li>
                                                <li><strong>Social-media share inside the app</strong> enabling seamless content sharing</li>
                                                <li><strong>All accessible through the lists button</strong> in the bottom navigation</li>
                                            </ul>
                                            <img src="/assets/imgs/projects/moods/feature-lists.png" alt="Lists Feature Design" className="w-100 rounded-3 border shadow-sm" />
                                        </div>

                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-3">Music Player</h6>
                                            <p className="text-300">
                                                The <strong>Music Player</strong> was enhanced while maintaining consistency with the previous design, adding powerful new functionalities:
                                            </p>
                                            <ul className="text-300 mb-3">
                                                <li><strong>Consistency with the previous design</strong> ensuring familiarity</li>
                                                <li><strong>Enhanced top bar</strong> with improved controls and visibility</li>
                                                <li><strong>Tool bar added</strong> for quick access to key features</li>
                                                <li><strong>New functionalities:</strong>
                                                    <ul className="mt-2">
                                                        <li>Enhanced accessibility features</li>
                                                        <li>Fixed iconography for better recognition</li>
                                                        <li>Reactive components responding to user actions</li>
                                                        <li><strong>Lyrics preview with shareable feature</strong></li>
                                                        <li><strong>Dynamic lyrics</strong> synchronized with playback</li>
                                                        <li><strong>Recommendations section</strong> with mood-based tags</li>
                                                        <li><strong>Social interactions:</strong> Comments section and friends who had listened</li>
                                                        <li><strong>More visibility for the artists</strong> with dedicated sections</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <img src="/assets/imgs/projects/moods/feature-player.png" alt="Music Player Feature Design" className="w-100 rounded-3 border shadow-sm" />
                                        </div>
                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-3">Search Screens</h6>
                                            <p className="text-300">
                                                The <strong>Search screens</strong> were redesigned to provide a clean, fast, and social experience, prioritizing accessibility and flexible input methods:
                                            </p>
                                            <ul className="text-300">
                                                <li><strong>Clean and minimalistic design</strong> focusing on usability and content discovery.</li>
                                                <li><strong>Enhanced accessibility</strong> with the top-bar and tool-bar always active.</li>
                                                <li><strong>Flexible input methods:</strong> Supports standard text input and <strong>sound input (Text by voice)</strong>.</li>
                                                <li><strong>Mood-based tags/category system</strong> for searching and filtering content by emotional context, genre, or activity.</li>
                                                <li><strong>New Feature: "Your friends have listened" section</strong> which leverages social interaction to drive music discovery.</li>
                                                <li><strong>Search history</strong> visible for quick access to previous queries.</li>
                                                <li><strong>Filters personalization</strong> available to refine search results.</li>
                                                <li><strong>Always accessible from the tool bar</strong>, ensuring the search function is only one tap away from any screen.</li>
                                            </ul>
                                            <img src="/assets/imgs/projects/moods/feature-search.png" alt="Search Screens Feature Design" className="w-100 rounded-3 border shadow-sm" />
                                        </div>
                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-3">Social Features, Posts & Stories</h6>
                                            <p className="text-300">
                                                The application introduces a complete suite of <strong>[NEW!] Social Features</strong> to foster community engagement and personalized content sharing. These features are centered around a dedicated social feed and an intuitive content creation system:
                                            </p>
                                            <ul className="text-300">
                                                <li><strong>Social-media feed</strong> designed for playlist-based posts with an <strong>infinite scroll</strong>.</li>
                                                <li><strong>Post & Stories Creation system</strong> allowing users to create content in a simple, three-step process: <strong>1) Pick a song, 2) Pick a picture, 3) Post</strong> or <strong>3) Story</strong>.</li>
                                                <li>Content creation includes options for <strong>aesthetic posting</strong>, adding images, and <strong>song chip integration</strong> for stories.</li>
                                                <li>The <strong>Social Feed</strong> displays <strong>User profiles</strong> and supports <strong>Social interactions</strong> (sharing, liking, commenting) directly within the music experience.</li>
                                                <li>The feed is <strong>Accessible from the tool bar</strong> and includes a <strong>search bar</strong> for discovery.</li>
                                                <li><strong>Stories</strong> and <strong>Post</strong> content are easily <strong>Accessible through the tool bar</strong>.</li>
                                                <li><strong>Personalized cards + chips</strong> (Music chips) are integrated into the feed for quick actions and music context.</li>
                                                <li><strong>Profiles</strong> (User + artists) are introduced, featuring <strong>User playlists</strong> and the ability to <strong>Post with 1 click</strong> on the post.</li>
                                                <li>A <strong>Followers system</strong> is implemented, alongside a <strong>Follow button</strong> on Artist profiles, enhancing the community structure.</li>
                                                <li>The User Profile allows for <strong>Profile access</strong> and displays content in a visually appealing, scrollable gallery.</li>
                                            </ul>
                                            <img src="/assets/imgs/projects/moods/feature-social.png" alt="Social Features and Post/Stories Design" className="w-100 rounded-3 border shadow-sm" />
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-6 text-center">
                                        <Link href="https://www.figma.com/proto/QJmcZgWG7n99XQsa5RCqAc/Moods-Social-Music-APP?node-id=2-2&p=f&t=IuFUCBWylzaeU1YJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1" target="_blank" className="btn btn-gradient me-2 mb-2">
                                            View Live Prototype
                                            <i className="ri-external-link-line ms-2" />
                                        </Link>
                                        <Link href="/#contact" className="btn btn-outline-dark mb-2">
                                            Let's Discuss This Project
                                            <i className="ri-arrow-right-line ms-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}
