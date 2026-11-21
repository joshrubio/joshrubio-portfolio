import {
    BulletList,
    Callout,
    Column,
    Columns,
    Figure,
    Paragraph,
    ProcessSteps,
    ProjectBody,
    ProjectCTA,
    ProjectHeader,
    ProjectPage,
    Quote,
    Section,
    SubHeading,
} from "@/components/case-study"

export const metadata = {
    title: "MOODS - Social Music Platform | Josh D. Rubio",
    description: "A vibrant social network designed for music enthusiasts. UX/UI Design case study.",
}

export default function Moods() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View Prototype", href: "https://www.figma.com/proto/QJmcZgWG7n99XQsa5RCqAc/Moods-Social-Music-APP?node-id=2-2&p=f&t=IuFUCBWylzaeU1YJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1" }}
                title="MOODS"
                summary="<em>Sounding memories.</em> There's a sound for every moment, memory, and mood. With MOODS, the social-media platform for music lovers, you can listen, share, and re-live the sound of every meaningful memory in a memorable way."
                meta={[
                    { label: "My Role", value: "Concept & Design" },
                    { label: "Duration", value: "5 Weeks" },
                    { label: "Tools", value: "Figma + Material 3" },
                    { label: "Type", value: "App Redesign" },
                ]}
                hero={{ src: "/assets/imgs/projects/moods/thumbnail.webp", alt: "MOODS Hero" }}
            />

            <ProjectBody>
                <Section title="Project Overview">
                    <Paragraph><strong>From streaming app to social network.</strong> What started as <strong>BeatBoop</strong>, a music streaming app created as an educational project, has now evolved into <strong>MOODS</strong>—a vibrant social platform for music lovers.</Paragraph>

                    <Paragraph>This reimagined platform builds upon its predecessor's foundation, refining features and functionalities to deliver a fresh, engaging experience. MOODS not only celebrates music as a shared passion but also emulates a <strong>real-world app pivot scenario</strong>—showcasing the journey of transforming an existing concept into an innovative product.</Paragraph>

                    <Figure src="/assets/imgs/projects/moods/before-after.webp" alt="BeatBoop vs MOODS Comparison" />

                    <Figure src="/assets/imgs/projects/moods/problem-solution.webp" alt="Problem and Solution Overview" />
                </Section>

                <Section title="My Process">
                    <ProcessSteps
                        steps={[
                            { label: "DEFINE", hint: "Scope" },
                            { label: "RESEARCH", hint: "Activities" },
                            { label: "IDEATE", hint: "Features" },
                            { label: "DESIGN", hint: "Iterate" },
                        ]}
                    />
                </Section>

                <Section title="1. Define">
                    <Paragraph>During this stage, I conducted a <strong>UX audit of the existing BeatBoop app</strong>, identifying key opportunities for improvement. I then defined the scope of the revamp, ensuring a strategic overhaul of its functionalities, user experience, and brand identity.</Paragraph>

                    <Paragraph>This process laid the foundation for a well-structured rebuild, aligning MOODS with <strong>user needs and industry trends</strong> while answering a critical question: <em>How can we enhance users' experience without overcomplicating the app's core functionality?</em></Paragraph>

                    <Figure src="/assets/imgs/projects/moods/kick-off.webp" alt="Project Kick-off and Brainstorming" />

                    <SubHeading>Finding a Direction to Develop</SubHeading>

                    <Paragraph>To prioritize features effectively, I created a <strong>ranking framework</strong> evaluating potential features across four key criteria: <strong>Feasibility, Technical complexity, Business potential, and Personal alignment</strong>.</Paragraph>

                    <Paragraph>This data-driven approach revealed <strong>high-priority features</strong> like Collaborative Playlists, Mood-Based Playlists, and Smart Suggestions—features that combined technical feasibility with strong business and user value.</Paragraph>

                    <Figure src="/assets/imgs/projects/moods/finding-direction.webp" alt="Feature Prioritization Matrix" />

                    <SubHeading>Why Social?</SubHeading>

                    <Paragraph>Based on the evaluations, a clear trend emerged: <strong>social features ranked highest</strong>. Features like <strong>Collaborative Playlists</strong> and <strong>Music Stories</strong>, combined with user-centered options like Smart Suggestions and Mood-Based Playlists, showed the strongest potential.</Paragraph>

                    <Paragraph>These features leverage users' desire to <strong>share and interact through music</strong>, aligning with the broader shift toward integrating social networking into specialized platforms. This insight shaped MOODS into a <strong>music-driven social network</strong>, carving out a unique niche and addressing the growing demand for more connected and interactive music experiences.</Paragraph>

                    <Figure src="/assets/imgs/projects/moods/why-social.webp" alt="Why Social Features Matter" />
                </Section>

                <Section title="2. The Research">
                    <Paragraph>To explore <strong>user behavior and preferences</strong> regarding social interactions in music-driven apps—or music-focused interactions within social media platforms—while validating the effectiveness of MOODS' key features in fostering <strong>engagement and community</strong> among music enthusiasts.</Paragraph>

                    <Callout tone="info" title="🎯 Research Goals">
                        <BulletList>
                            <li><strong>Analyze User Interaction Trends:</strong> Review how users engage with social features in existing music-driven apps to inform MOODS' design.</li>
                            <li><strong>Identify Motivations for Social Engagement:</strong> Investigate user motivations behind music-based social interactions to guide MOODS' feature development.</li>
                            <li><strong>Assess Social Features' Impact on Retention:</strong> Study the effect of social elements on user retention in similar platforms to predict MOODS' potential impact.</li>
                        </BulletList>
                    </Callout>

                    <SubHeading>Competitive Audit</SubHeading>

                    <Paragraph>I conducted a <strong>comprehensive competitive analysis</strong> examining platforms like Instagram, TikTok, Spotify, and YouTube Music. Using a <strong>KT-SWOT framework</strong>, I identified their strengths, weaknesses, opportunities, and threats—focusing specifically on social/music features, UX/UI design, and feature functionality.</Paragraph>

                    <Paragraph><strong>Key insight:</strong> While platforms like Spotify offer collaborative playlists and Instagram excels at visual storytelling, <em>none provide a fully immersive social network experience centered on music</em>. This gap validated MOODS' unique positioning.</Paragraph>

                    <Figure src="/assets/imgs/projects/moods/competitive-audit.webp" alt="Competitive Analysis Report (KT-SWOT)" />

                    <SubHeading>Feature Benchmarking</SubHeading>

                    <Paragraph>I created a <strong>feature audit</strong> to identify and catalog the key social and music-driven features of relevant platforms. This analysis revealed <strong>strengths, weaknesses, and trends</strong> that would directly inform MOODS' development.</Paragraph>

                    <Paragraph>Platforms like <strong>TikTok</strong> excel at viral content creation and music integration, while <strong>Spotify</strong> focuses on personalization but lacks meaningful social tools. This benchmarking helped identify opportunities for MOODS to differentiate through <strong>collaborative features and community-driven discovery</strong>.</Paragraph>

                    <Figure src="/assets/imgs/projects/moods/feature-benchmarking.webp" alt="Feature Analysis Report" />

                    <SubHeading>Personas Development</SubHeading>

                    <Paragraph>To create detailed user personas reflecting the <strong>needs, motivations, and frustrations</strong> of target audiences, I developed two primary personas: <strong>Jamie (The Social Connector)</strong> and <strong>Taylor (The Music Explorer)</strong>.</Paragraph>

                    <Paragraph>Data was driven from both the competitive audits and secondary research on musical and social media user demographics. These personas guided design and development decisions, ensuring MOODS' core features aligned with <strong>real user behaviors and pain points</strong>.</Paragraph>

                    <Figure src="/assets/imgs/projects/moods/personas.webp" alt="User Personas - Jamie and Taylor" />

                    <SubHeading>Synthesized User Needs</SubHeading>

                    <Paragraph>From the personas and their needs, I synthesized a <strong>core user needs statement</strong> that would drive all feature development:</Paragraph>

                    <Quote><em>"Users want a <strong>personalized, social, and seamless</strong> music experience that allows them to <strong>connect, discover, and share</strong> music based on their moods and preferences."</em></Quote>

                    <Figure src="/assets/imgs/projects/moods/user-needs.webp" alt="User Needs Synthesis" />
                </Section>

                <Section title="3. The Ideation">
                    <Paragraph>During this stage, I analyzed and refined the research insights to <strong>define and validate the core functionalities</strong> of the revamp. I identified gaps and opportunities for differentiation, crafted a cohesive narrative, prioritized features using a structured matrix, and mapped out user journeys to ensure a <strong>seamless and engaging experience</strong> for each feature.</Paragraph>

                    <SubHeading>Need-to-Feature Report</SubHeading>

                    <Paragraph>Using the synthesized user needs, I created a <strong>need-to-feature framework</strong> that directly mapped each high-level user need to specific features. This ensured every feature had a clear purpose and addressed real user pain points.</Paragraph>

                    <Paragraph>For example, the need for <strong>"Sharing and connecting with others through music"</strong> translated into features like <strong>Collaborative Playlists</strong> and <strong>Music Stories</strong>—allowing users to co-create playlists with friends and share musical moments in a social feed.</Paragraph>

                    <Paragraph>This systematic approach validated that MOODS wasn't just adding features for the sake of it—each one served a <strong>strategic purpose</strong> in creating a cohesive, music-driven social experience.</Paragraph>

                    <Figure src="/assets/imgs/projects/moods/need-to-feature.webp" alt="Need-to-Feature Report" />

                    <SubHeading>Gaps and Opportunities, Feature Matrix Framework, Feature Prioritization</SubHeading>

                    <Paragraph>During this stage, the features that ranked the highest during the curation process were matched with <strong>opportunities and gaps</strong> known during the process, resulting in a comprehensive analysis:</Paragraph>

                    <Paragraph><strong>Key Differentiators:</strong> Social features like <strong>Music Stories</strong> and <strong>Collaborative Playlists</strong> offer the greatest potential for MOODS to carve out a unique niche. These features enable <strong>expressive storytelling</strong> and <strong>dynamic, immersive interactions</strong>—capabilities that existing platforms lack.</Paragraph>

                    <Paragraph>Additionally, I created a <strong>Feature Matrix Framework</strong> comparing MOODS against Instagram, TikTok, Spotify, and YouTube Music. This revealed that while some platforms offer collaborative playlists or music stories individually, <strong>none combine them with mood-based discovery and smart suggestions</strong> in a unified social experience.</Paragraph>

                    <Figure src="/assets/imgs/projects/moods/gaps-opportunities.webp" alt="Gaps and Opportunities Analysis" />

                    <SubHeading>Feature Prioritization</SubHeading>

                    <Paragraph>Using an <strong>Impact vs. Effort matrix</strong>, I prioritized features based on their potential to drive engagement while considering implementation complexity:</Paragraph>

                    <BulletList>
                        <li><strong>High Impact, Low Effort:</strong> Mood-Based Playlists and Smart Suggestions—features that leverage AI to enhance personalization without overwhelming development resources.</li>
                        <li><strong>High Impact, Medium Effort:</strong> Music Stories and Collaborative Playlists—social features that require more development but offer significant differentiation.</li>
                        <li><strong>Medium Impact, High Effort:</strong> Dynamic Lyrics Mode—an innovative feature with strong personal relevance but higher technical complexity.</li>
                    </BulletList>

                    <Paragraph>This structured approach ensured decisions were <strong>data-informed and aligned with project goals</strong>, balancing innovation with feasibility.</Paragraph>

                    <SubHeading>User Journey Workflows</SubHeading>

                    <Paragraph>For each high-priority feature, I mapped detailed <strong>user journey workflows</strong> tracking emotional states, actions, and pain points across six stages: <strong>Stage → Awareness → Engagement → Interaction → Enjoyment → Reflection & Sharing</strong>.</Paragraph>

                    <SubHeading>Definitions & Mood Matcher</SubHeading>

                    <Paragraph><strong>Let the Music Find You.</strong> Taylor wakes up early to prepare for his morning run. As he ties his shoes, his phone buzzes with a notification from MOODS: <em>"Start your day with energy!"</em> He taps it and finds the "Running Beats" playlist. Later, Jamie uses the <strong>Mood Matcher</strong> to find a playlist that complements her current mood—calm and introspective—offering her suggestions that align with her emotional state.</Paragraph>

                    <Paragraph><strong>Smart Suggestions</strong> enhance Taylor's morning routine by providing <strong>personalized, mood-aligned playlists</strong> that support his goals, seamlessly integrating music with his lifestyle.</Paragraph>

                    <Figure src="/assets/imgs/projects/moods/definitions-mood-matcher.webp" alt="Smart Suggestions and Mood Matcher Journey" />

                    <Columns>
                        <Column>
                            <SubHeading>Music Stories & Smart Suggestions</SubHeading>

                            <Paragraph><strong>Share Your Music Journey.</strong> Jamie loves sharing snippets of her artistic life with her followers in Germany. Inspired by a song from her latest playlist, she uses <strong>Music Stories</strong> to create a visual story paired with music—establishing her vibe, receiving reactions and comments from her community, sparking a meaningful exchange about music and art.</Paragraph>

                            <Figure src="/assets/imgs/projects/moods/music-stories-journey.webp" alt="Music Stories User Journey" />
                        </Column>
                        <Column>
                            <SubHeading>Dynamic Lyrics Mode & Collaborative Playlists</SubHeading>

                            <Paragraph><strong>Understand the Music, Anywhere.</strong> Taylor often listens to songs in languages he's learning. During his morning commute, he plays a Spanish track and enables <strong>Dynamic Lyrics Mode</strong>—which synchronizes lyrics with the song being played. Users can adjust font sizes, themes, and even enable translations, making music accessible to diverse audiences.</Paragraph>

                            <Paragraph><strong>Dynamic Lyrics Mode</strong> bridges music and language, helping users like Taylor connect to songs on a deeper, multilingual level.</Paragraph>

                            <Paragraph><strong>Music for Every Great Vibe.</strong> Taylor frequently hosts casual get-togethers with friends. Using <strong>Collaborative Playlists</strong>, he creates a shared playlist for the evening. His friends can search, vote on songs, and add their own favorites—creating a dynamic, crowd-sourced soundtrack. The playlist evolves in real-time, reflecting the group's collective taste and energy.</Paragraph>

                            <Paragraph><strong>Collaborative Playlists</strong> bring people together by allowing users like Taylor to co-create shared music experiences in real time.</Paragraph>

                            <Figure src="/assets/imgs/projects/moods/dynamic-lyrics-journey.webp" alt="Dynamic Lyrics Mode User Journey" />
                        </Column>
                    </Columns>
                </Section>

                <Section title="4. The Design">
                    <Paragraph>With research and ideation complete, I transitioned into the design phase—where insights transformed into <strong>tangible, polished interfaces</strong>. This stage focused on building a cohesive visual language, refining user flows, and ensuring every interaction felt intuitive and engaging.</Paragraph>

                    <Paragraph>The design process balanced <strong>familiarity with innovation</strong>—revamping existing features while seamlessly integrating new social functionalities. The goal was to create an experience that felt both <strong>fresh and familiar</strong>, allowing users to explore MOODS' new capabilities without friction.</Paragraph>

                    <SubHeading>Design System</SubHeading>

                    <Paragraph>For MOODS, a <strong>design system was developed using Google Material 3</strong> as a foundation. This system was then refined and expanded to accommodate the unique requirements of a music-centric and socially interactive platform.</Paragraph>

                    <Paragraph>Custom components, typography, and visual elements were carefully curated to <strong>enhance usability, maintain brand consistency, and ensure a seamless user experience</strong> across all interactions. The system provided a scalable framework that supported rapid iteration while maintaining visual coherence.</Paragraph>

                    <Figure src="/assets/imgs/projects/moods/design-system.webp" alt="MOODS Design System" />

                    <SubHeading>Wireframes</SubHeading>

                    <Paragraph>During the wireframing phase, I focused on structuring the revamped MOODS experience with <strong>clarity and usability at its core</strong>. I started with low-fidelity wireframes to explore multiple layout possibilities, ensuring that core functionalities were intuitive and accessible.</Paragraph>

                    <Paragraph>Iterating based on research insights, I refined the wireframes, mapping out user interactions and optimizing information hierarchy. The goal was to create a <strong>solid foundation for the visual design</strong> while maintaining flexibility for future refinements.</Paragraph>

                    <Figure src="/assets/imgs/projects/moods/wireframes.webp" alt="MOODS Wireframes" />

                    <SubHeading>Features</SubHeading>

                    <Paragraph>During the design stage, I focused on <strong>revamping each of the pre-existing features</strong>—such as Home, Player, Lists, and Profiles—by scaling them to align with the MOODS concept. This involved refining the UI, improving usability, and ensuring consistency with the newly developed design system.</Paragraph>

                    <Paragraph>Additionally, I integrated the new social-media features, making them feel like a <strong>seamless extension of the platform</strong> rather than an afterthought. This feature-driven approach allowed me to maintain a user-centered perspective, ensuring that every screen and interaction supported the overall experience.</Paragraph>

                    <Columns>
                        <Column>
                            <SubHeading>Home</SubHeading>

                            <Paragraph>The <strong>Home screen</strong> received a comprehensive redesign to serve as the central hub for music discovery and social interaction:</Paragraph>

                            <BulletList>
                                <li><strong>Clean and minimalistic design</strong> with enhanced visual hierarchy</li>
                                <li><strong>Enhanced top-bar</strong> with profile drop-down menu and quick accesses</li>
                                <li><strong>New Tool-bar at the bottom</strong> featuring new post/story creation and search direct access</li>
                                <li><strong>Mood-based category system</strong> for intuitive content organization</li>
                                <li><strong>Social-media stories</strong> prominently featured for community engagement</li>
                                <li><strong>Enhanced listing system</strong> showcasing personalized playlists and recommendations</li>
                            </BulletList>

                            <Figure src="/assets/imgs/projects/moods/feature-home.webp" alt="Home Feature Design" />
                        </Column>
                        <Column>
                            <SubHeading>Lists</SubHeading>

                            <Paragraph>The <strong>Lists feature</strong> was refined to provide better organization and discoverability:</Paragraph>

                            <BulletList>
                                <li><strong>Clean and minimalistic design</strong> with improved visual clarity</li>
                                <li><strong>Mood-based category system</strong> allowing users to organize playlists by emotional context</li>
                                <li><strong>New: Podcasts</strong> integration expanding content beyond music</li>
                                <li><strong>Personalized podcast cards</strong> with rich metadata and visual appeal</li>
                                <li><strong>Social-media share inside the app</strong> enabling seamless content sharing</li>
                                <li><strong>All accessible through the lists button</strong> in the bottom navigation</li>
                            </BulletList>

                            <Figure src="/assets/imgs/projects/moods/feature-lists.webp" alt="Lists Feature Design" />
                        </Column>
                        <Column>
                            <SubHeading>Music Player</SubHeading>

                            <Paragraph>The <strong>Music Player</strong> was enhanced while maintaining consistency with the previous design, adding powerful new functionalities:</Paragraph>

                            <BulletList>
                                <li><strong>Consistency with the previous design</strong> ensuring familiarity</li>
                                <li><strong>Enhanced top bar</strong> with improved controls and visibility</li>
                                <li><strong>Tool bar added</strong> for quick access to key features</li>
                                <li><strong>New functionalities:</strong> <ul> <li>Enhanced accessibility features</li> <li>Fixed iconography for better recognition</li> <li>Reactive components responding to user actions</li> <li><strong>Lyrics preview with shareable feature</strong></li> <li><strong>Dynamic lyrics</strong> synchronized with playback</li> <li><strong>Recommendations section</strong> with mood-based tags</li> <li><strong>Social interactions:</strong> Comments section and friends who had listened</li> <li><strong>More visibility for the artists</strong> with dedicated sections</li> </ul></li>
                            </BulletList>

                            <Figure src="/assets/imgs/projects/moods/feature-player.webp" alt="Music Player Feature Design" />
                        </Column>
                        <Column>
                            <SubHeading>Search Screens</SubHeading>

                            <Paragraph>The <strong>Search screens</strong> were redesigned to provide a clean, fast, and social experience, prioritizing accessibility and flexible input methods:</Paragraph>

                            <BulletList>
                                <li><strong>Clean and minimalistic design</strong> focusing on usability and content discovery.</li>
                                <li><strong>Enhanced accessibility</strong> with the top-bar and tool-bar always active.</li>
                                <li><strong>Flexible input methods:</strong> Supports standard text input and <strong>sound input (Text by voice)</strong>.</li>
                                <li><strong>Mood-based tags/category system</strong> for searching and filtering content by emotional context, genre, or activity.</li>
                                <li><strong>New Feature: "Your friends have listened" section</strong> which leverages social interaction to drive music discovery.</li>
                                <li><strong>Search history</strong> visible for quick access to previous queries.</li>
                                <li><strong>Filters personalization</strong> available to refine search results.</li>
                                <li><strong>Always accessible from the tool bar</strong>, ensuring the search function is only one tap away from any screen.</li>
                            </BulletList>

                            <Figure src="/assets/imgs/projects/moods/feature-search.webp" alt="Search Screens Feature Design" />
                        </Column>
                        <Column>
                            <SubHeading>Social Features, Posts & Stories</SubHeading>

                            <Paragraph>The application introduces a complete suite of <strong>[NEW!] Social Features</strong> to foster community engagement and personalized content sharing. These features are centered around a dedicated social feed and an intuitive content creation system:</Paragraph>

                            <BulletList>
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
                            </BulletList>

                            <Figure src="/assets/imgs/projects/moods/feature-social.webp" alt="Social Features and Post/Stories Design" />
                        </Column>
                    </Columns>
                </Section>

                <ProjectCTA
                    links={[
                        { label: "View Live Prototype", href: "https://www.figma.com/proto/QJmcZgWG7n99XQsa5RCqAc/Moods-Social-Music-APP?node-id=2-2&p=f&t=IuFUCBWylzaeU1YJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1", icon: "ri-external-link-line" },
                        { label: "Let's Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
