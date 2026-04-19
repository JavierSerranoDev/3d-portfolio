const posts = [
    {
        id: 0,
        title: "Real-time graphics with Vulkan. What is it and how does it work?",
        date: "2026-01-15",
        teaser: "Vulkan is notoriously complex — but what if you could learn it through an art museum? Here's how I visualized its 16 setup steps as a gallery experience while building my final project for my MSc in Computer Science in Game Programming at the University of Hull.",
        description: "Vulkan is one of the most powerful and explicit graphics APIs available today, but its steep learning curve can be intimidating. During my MSc in Computer Science in Game Programming at the University of Hull, I had to implement a Vulkan renderer from scratch as my final project for the C++ Programming and Design and Real-Time Graphics modules. To make sense of the complexity, I developed an analogy-based mental model: the Vulkan Art Museum. Each of the 16 setup steps maps to something tangible in a gallery setting — from opening the doors of the building, to hiring the right artist, to managing the canvases on display. This post walks you through that thought process and how it helped me not just understand Vulkan, but teach it.",
        html: `
            <p>Vulkan is not like OpenGL. Where OpenGL holds your hand, Vulkan hands you a blank canvas, a list of rules, and says: "figure it out." When I started following the <a href="https://vulkan-tutorial.com/" target="_blank" rel="noreferrer" style="color: #839cb5; text-decoration: underline;">Vulkan Tutorial</a> as part of my final project for the C++ Programming and Design and Real-Time Graphics modules during my MSc in Computer Science in Game Programming at the University of Hull, I quickly realized that the sheer number of objects, dependencies and setup steps was overwhelming without a mental model to anchor them.</p>

            <p>So I built one. I call it the <strong>Vulkan Art Museum</strong> — an analogy that maps each of Vulkan's 16 initialization steps to something you might find in a gallery or art school. The goal was simple: if I could explain it this way to myself, I could explain it to anyone.</p>

            <p><strong>Step 0 — The Window (GLFW):</strong> Before Vulkan even enters the picture, we need a window to render into. GLFW handles this. Think of it as the physical building of the gallery — it exists independently of the art inside, but nothing can be displayed without it.</p>

            <p><strong>Step 1 — The Instance:</strong> Creating a Vulkan instance is like opening the front door of an art school that contains every tool, book, and resource you'll need. You must declare upfront which extensions and validation layers you want — what you're bringing into the building with you.</p>

            <p><strong>Step 2 — The Debug Messenger:</strong> Optional, but invaluable during development. This is the security guard of the art school — someone contracted specifically to tap you on the shoulder and say "you're doing that wrong" before it becomes a bigger problem.</p>

            <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                <img src="${import.meta.env.BASE_URL}images/blogs/vulkan/vulkan-1.png" alt="Vulkan setup diagram" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
            </div>

            <p><strong>Step 3 — The Window Surface:</strong> Before picking a GPU, we set up the surface we'll render to. In the analogy, this is the blank easel inside the gallery. We need to confirm our chosen artist can actually paint on this type of easel before hiring them.</p>

            <p><strong>Step 4 — Physical Device Selection:</strong> Now we interview artists — the GPUs available in the system. We check their portfolios: do they support the extensions we need? Do they have the right queue families? We pick the best candidate for the job.</p>

            <p><strong>Step 5 — Logical Device and Queue Families:</strong> We've chosen our artist. Now we sign the contract — the Logical Device. We don't get the whole person; we get access to specific services or "inboxes" called Queues. A Graphics Queue for painting, a Presentation Queue for hanging the art on the wall.</p>

            <p><strong>Step 6 — The Swap Chain:</strong> This is the Gallery Manager and the Canvas Stockpile. It holds a collection of canvases (VkImages) and cycles them in and out. The Manager hands us a fresh canvas to paint on, and when we're done, takes it and places it on the easel for the public to see.</p>

            <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                <img src="${import.meta.env.BASE_URL}images/blogs/vulkan/vulkan-2.png" alt="Swap chain and pipeline diagram" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
            </div>

            <p><strong>Step 7 — Image Views:</strong> A VkImage is raw data. An ImageView describes how to interpret it — like putting a specific frame or lens on a canvas that tells the artist: "treat this as a 2D color image."</p>

            <p><strong>Step 8 — The Render Pass:</strong> This is the Session Plan or Blueprint. It tells the driver exactly what to expect: "We will use one canvas, clear it to black at the start, paint on it, and store the result for display." It defines inputs, outputs, and memory layout — not how pixels are calculated, but what surfaces are involved.</p>

            <p><strong>Step 9 — The Graphics Pipeline:</strong> This is the Technique or Assembly Line. It configures the fixed machinery: which shaders to use, how to handle geometry, what the viewport looks like, and how colors blend. Once built, it is immutable — you cannot change the technique mid-session.</p>

            <p><strong>Step 10 — Framebuffers:</strong> This links a specific canvas (Image View) to the Blueprint (Render Pass). It is the act of clamping a canvas onto the easel so the Render Pass instructions can be executed on something concrete.</p>

            <p><strong>Step 11 — Command Pool:</strong> The Notepad Manager. It allocates and manages the memory needed to store our lists of drawing instructions before we send them to the GPU.</p>

            <p><strong>Step 12 — Command Buffers:</strong> These are the To-Do Lists. We don't paint yet — we record the steps: "Begin rendering. Bind the pipeline. Draw a triangle. End rendering." We hand this list to the artist later.</p>

            <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                <img src="${import.meta.env.BASE_URL}images/blogs/vulkan/vulkan-3.png" alt="Final Vulkan triangle render" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
            </div>

            <p><strong>Step 13 — Synchronization Objects:</strong> Semaphores and Fences are the Traffic Lights. They ensure we don't start painting on a canvas still being displayed (ImageAvailable), and we don't display a canvas that is half-painted (RenderFinished).</p>

            <p><strong>Step 14 — Draw Frames:</strong> The Work Day. Every frame: ask the Manager for a canvas, hand the To-Do list to the artist, then hand the finished painting back to the Manager to put on the wall. Repeat.</p>

            <p><strong>Step 15 — Recreate Swap Chain:</strong> Handling Renovations. If the window is resized, the old canvases no longer fit the easel. We stop work, discard the old canvases, and create new ones sized to the new window dimensions.</p>

            <p>What I found most valuable about this mental model is that it made the relationships between objects clear. The Render Pass and the Pipeline are often confused — the Render Pass is about <em>what surfaces are involved and their memory layout</em>, while the Pipeline is about <em>how pixels are calculated</em>. Framing them as a Blueprint and a Technique respectively made that distinction click immediately.</p>

            <p>This project was submitted as my final work for the C++ Programming and Design and Real-Time Graphics modules at the University of Hull during the September 2025 to January 2026 trimester. If you are starting out with Vulkan and feeling overwhelmed, I hope this museum tour helps you find your footing.</p>
        `,
        media : [
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/vulkan/vulkan-header.png`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/vulkan/vulkan-1.png`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/vulkan/vulkan-2.png`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/vulkan/vulkan-3.png`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ]
    },
    {
        id: 1,
        title: "New journey: A master's degree in computer science in game programming",
        date: "2025-09-15",
        teaser: "From the heat and humidity of Mérida, Yucatán to the grey skies of Kingston upon Hull — here's how I made the leap to pursue my MSc in Computer Science for Game Programming at the University of Hull.",
        description: "Leaving behind my career as a software developer and university lecturer in Mérida, Yucatán, Mexico to pursue a master's degree in the UK was one of the biggest decisions of my life. This post tells the story of how it all started — from conversations with colleagues at Universidad Anáhuac Mayab, to finding the right programme at the University of Hull, navigating the application process through Across the Pond, securing funding through FIDERH, and finally landing in Manchester just one week before classes began in September 2025.",
        html: `
            <p>It started the way many big life decisions do — with a conversation. While teaching the modules of Game Engines I and Videogame Practicum at Universidad Anáhuac Mayab for the BSc in Digital Animation Engineering, some of my colleagues brought up the idea of pursuing a master's degree. The topic had been on my mind for a while, but hearing it said out loud made it feel more real and more urgent.</p>

            <p>I knew from the start that I didn't just want any master's programme. I wanted to study somewhere where game development wasn't an afterthought, but the main focus — at a university with a real history in the industry. After a lot of research, I found it: the <a href="https://www.hull.ac.uk/study/postgraduate-taught/courses/computer-science-for-games-programming-msc" target="_blank" rel="noreferrer" style="color: #839cb5; text-decoration: underline;">MSc Computer Science for Games Programming at the University of Hull</a>. Hull has been producing skilled graduates for the games industry for over 20 years, with close ties to major studios and alumni working across the global games sector. The programme covers everything from real-time graphics and C++ to AI, networking, and project management — all hands-on, in industry-standard labs equipped with high-performance workstations, VR, AR, motion capture, and more.</p>

            <p>That was the destination. Getting there was another matter entirely.</p>

            <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                <img src="${import.meta.env.BASE_URL}images/blogs/uk-student/uk-student-1.webp" alt="Across the Pond logo" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
            </div>

            <p><strong>Finding the way in — Across the Pond.</strong> Applying to a UK university as an international student from Mexico is not a straightforward process. That's where <a href="https://www.studyacrossthepond.com/" target="_blank" rel="noreferrer" style="color: #839cb5; text-decoration: underline;">Across the Pond</a> came in. They are a free student recruitment and advisory service that has been helping Latin American students navigate UK university applications since 2004, representing over 40 universities across Britain. Their team — many of whom have studied in the UK themselves — guided me through every step of the application, from choosing the right programme to preparing the supporting documents. Their acceptance rates at partner universities are notably high, and their personalised approach made the whole process feel far less overwhelming than it might have been otherwise.</p>

            <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                <img src="${import.meta.env.BASE_URL}images/blogs/uk-student/uk-student-2.png" alt="FIDERH logo" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
            </div>

            <p><strong>Funding it — FIDERH.</strong> Studying abroad is expensive, and the UK is no exception. For Mexican students, the best option available is <a href="https://www.fiderh.org.mx" target="_blank" rel="noreferrer" style="color: #839cb5; text-decoration: underline;">FIDERH</a> — the Fondo para el Desarrollo de Recursos Humanos, a federal trust managed by the Bank of Mexico that provides affordable loans to Mexican students pursuing postgraduate studies either in Mexico or abroad. The terms are genuinely generous: no administrative costs, no payments and no interest while you are studying, resources delivered in foreign currency, and repayments starting one year after graduation in Mexican pesos. There are even interest discounts if you repay on time or return to work in a Mexican university. For anyone from Mexico considering postgraduate studies abroad, FIDERH is the first place to look.</p>

            <p>With the application in, the funding approved, and the visa sorted, there was only one thing left: actually getting there.</p>

            <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                <img src="${import.meta.env.BASE_URL}images/blogs/uk-student/uk-student-3.webp" alt="University of Hull logo" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
            </div>

            <p><strong>Landing in the UK.</strong> I flew into Manchester in September 2025, arriving just one week before classes started. Anyone who has been to Mérida, Yucatán knows what the weather is like — hot, humid, and relentlessly sunny for most of the year, with temperatures regularly above 35°C. Stepping off the plane into a grey, 14°C English September was a culture shock of its own. The cold doesn't just hit you physically; it hits you mentally. You realise very quickly that the layers of clothing you thought were enough are not nearly enough, and that "mild" means something completely different in the UK than it does in Yucatán.</p>

            <p>But Hull grew on me fast. The city is unpretentious, affordable, and has a warmth to it — in the people, if not always in the air. The university campus is well-equipped and the games programming community there is tight-knit and passionate.</p>

            <p><strong>Life on campus — game jams and societies.</strong> One of the first things I did after settling in was join the university's video game development society. It has been one of the best decisions of the year. The society organises regular events, workshops, and most importantly — game jams. I have participated in multiple jams organised by the university since arriving, collaborating with students from different disciplines and backgrounds to build games under tight deadlines.</p>

            <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                <img src="${import.meta.env.BASE_URL}images/blogs/uk-student/uk-student-4.jpeg" alt="Presenting at the 3Thing Game Jam at University of Hull" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
            </div>

            <p>One of the highlights so far was presenting a game with my team at the <strong>3Thing Game Jam</strong> hosted by the university — a jam where every game must be built around three randomly assigned themes. Standing up in front of an audience to present something you built in 48 hours with a team you barely knew a week earlier is one of those experiences that reminds you why you got into game development in the first place.</p>

            <p>The journey from Mérida to Hull — geographically, professionally, and personally — has been one of the most challenging and rewarding things I have ever done. If you are a Mexican developer or teacher considering taking the leap to study abroad, I hope this story is useful. Feel free to reach out if you have questions about the process, FIDERH, or life at Hull.</p>
        `,
        media : [
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/uk-student/uk-student-header.jpeg`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/uk-student/uk-student-1.webp`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/uk-student/uk-student-2.png`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/uk-student/uk-student-3.webp`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/uk-student/uk-student-4.jpeg`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ]
    },
    {
        id: 2,
        title: "How did I get here? My story of becoming a teacher in game development",
        date: "2022-08-01",
        teaser: "Nobody told me that getting a job at a game studio straight out of university would eventually lead me into a university classroom. Here's the unlikely story of how I became a game development teacher in Mérida, Yucatán — and what teaching gave me that I never expected.",
        description: "Fresh out of my BSc in Software Engineering, I landed a job at RCK Games and started applying software development to game development in a region where that combination was genuinely rare. That rarity opened an unexpected door: a teaching position at Universidad Modelo for the BDes in Interactive Design, where I taught modules on educational game design, augmented reality, and digital learning. Later I moved on to Universidad Anáhuac Mayab to teach for the BSc in Digital Animation Engineering. This is the story of those years — the struggles of a new teacher figuring it out in real time, the passion for education I didn't know I had, and the students who went on to ship their own games on Steam.",
        html: `
            <p>When I graduated with my BSc in Software Engineering, teaching was not part of the plan. The plan was to write code, ship products, and grow as a developer. And for a while, that's exactly what I did — I joined RCK Games and started applying my software engineering background to game development, which at the time was a genuinely unusual combination in Mérida, Yucatán.</p>

            <p>The games industry in the Yucatán region was small and still finding its footing. Developers with a formal software engineering background who were actively working in game development were rare enough that it turned heads. That combination — software engineer by training, game developer by practice — is what opened the door I never expected to walk through.</p>

            <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                <img src="${import.meta.env.BASE_URL}images/blogs/teacher/teacher-1.jpg" alt="Teaching at Universidad Modelo" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
            </div>

            <p><strong>Universidad Modelo — the first classroom.</strong> In August 2019, I was offered a teaching position at <a href="https://www.unimodelo.edu.mx/merida/licenciaturas/diseno-interactivo-merida" target="_blank" rel="noreferrer" style="color: #839cb5; text-decoration: underline;">Universidad Modelo</a> for their BDes in Interactive Design — a programme focused on digital creativity, user experience, and interactive media. The modules assigned to me were Design of Educational Video Games, Augmented Reality, and Design of Objects of Digital Learning.</p>

            <p>I will be honest: I was terrified. I was a recently graduated developer with a few years of industry experience, not an educator with a pedagogy degree. I had to build the course content from scratch — the lectures, the assignments, the evaluation criteria, all of it. There was no template to follow. I spent many evenings in the months before classes started figuring out how to translate what I knew into something teachable, something that would actually be useful to design students who had little to no programming background.</p>

            <p>The struggle was real. Standing in front of a classroom for the first time and realising that knowing something and being able to explain it clearly to someone else are two very different skills is a humbling experience. But it also forces you to understand your own knowledge more deeply. You cannot bluff your way through a student's question the way you might in a meeting. You have to actually know.</p>

            <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                <img src="${import.meta.env.BASE_URL}images/blogs/teacher/teacher-2.jpg" alt="Workshop and student projects" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
            </div>

            <p><strong>What teaching gave me.</strong> What I didn't expect was how much I would get out of it. Teaching forced me to keep up with new technologies in a way that purely industry work sometimes doesn't — students ask about the latest tools, the newest trends, the things they see on YouTube and in game jams. Staying relevant in the classroom kept me sharp in the studio as well.</p>

            <p>It also gave me something I had never really developed before: the ability to speak in front of an audience with confidence. Public speaking, presenting ideas clearly, structuring an argument — these are skills that classroom teaching trains relentlessly. Every lecture is a small performance, and over time the nerves become focus.</p>

            <p>And the students. The students are the best part. Watching someone go from not knowing what a game engine is to prototyping their first playable level is genuinely one of the most satisfying things I have experienced professionally.</p>

            <p><strong>Universidad Anáhuac Mayab — the next chapter.</strong> In August 2022 I joined the faculty at <a href="https://merida.anahuac.mx/licenciaturas/ingenieria-y-ciencias-exactas/ingenieria-en-animacion-digital" target="_blank" rel="noreferrer" style="color: #839cb5; text-decoration: underline;">Universidad Anáhuac Mayab</a> to teach for their BSc in Digital Animation Engineering — a more technically demanding programme where I taught Game Engines I, Game Engines II, Programming for Games, and the Practicum for Video Games module, in which students simulate the workflow of a real game studio following SCRUM processes.</p>

            <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                <img src="${import.meta.env.BASE_URL}images/blogs/teacher/teacher-3.jpg" alt="Student exposition at Anáhuac Mayab" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
            </div>

            <p>One of the initiatives I am most proud of during that time was organising an exposition with industry professionals — bringing developers, studio leads, and creatives into the university to share their experiences with students directly. Creating those kinds of environments, where education meets industry, is something I care deeply about.</p>

            <p><strong>Students who shipped.</strong> The moment that crystallised for me why teaching matters was seeing former students go on to do real things. Some joined international development teams. Others went further — <a href="https://store.steampowered.com/app/2849760/Onychomp__Lush_journey/" target="_blank" rel="noreferrer" style="color: #839cb5; text-decoration: underline;">Howl Studio</a>, founded by former students of mine, shipped <strong>Onychomp: Lush Journey</strong> on Steam — a high-speed roguelike dungeon crawler where you play as a werewolf rat ascending a procedurally generated mountain before dawn. It is a genuinely well-crafted indie game, and seeing it on a Steam page with a launch trailer was one of those moments where everything feels worth it.</p>

            <p>I didn't set out to be a teacher. But teaching found me through a rare combination of circumstance — a software engineer in a game studio, in a region where that was uncommon enough to open a classroom door. And it turned out to be one of the most important things that has ever happened to my career. Not just for what I gave to students, but for what they gave back.</p>
        `,
        media : [
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/teacher/teacher-header.avif`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/teacher/teacher-1.jpg`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/teacher/teacher-2.jpg`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/teacher/teacher-3.jpg`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ]
    },
    {
        id: 3,
        title: "A game developer's journey in Mexico",
        date: "2025-09-15",
        teaser: "From studying Software Engineering at UADY to shipping projects at RCK Games, teaching at two universities, and eventually landing at the University of Hull — this is the story of how I built a career in game development in Mexico, one step at a time.",
        description: "This is the story of my career from the beginning — graduating from the Universidad Autónoma de Yucatán with a BSc in Software Engineering, joining RCK Games as a junior developer and growing with the company for nearly a decade, discovering a passion for teaching at two universities, and connecting with the broader Mexican game development community. It is the story of building something in a region where the industry was still finding its footing, and of the people, studios, and moments that shaped who I am as a developer.",
        html: `
            <p>Every career has a starting point. Mine was the Faculty of Mathematics at the <strong>Universidad Autónoma de Yucatán</strong> (UADY), where I studied for my BSc in Software Engineering. UADY is one of the most respected public universities in south-eastern Mexico, and the Faculty of Mathematics has a long tradition of producing engineers who go on to build real things. It was there that I first encountered the idea that software could be more than enterprise systems and databases — that it could be used to create experiences, worlds, and games.</p>

            <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                <img src="${import.meta.env.BASE_URL}images/blogs/start/start-1.svg" alt="Universidad Autónoma de Yucatán logo" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
            </div>

            <p>The Yucatán region in 2016 was not exactly a hotbed of game development. The industry existed in pockets — a handful of studios, a growing community of enthusiasts, and very few formal pathways for someone who wanted to build games professionally. What made the difference for me was landing a job at <strong>RCK Games</strong> shortly after graduating — a video game and interactive experience development studio based in Mérida that would become the place where I grew, not just as a developer, but as a professional.</p>

            <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                <img src="${import.meta.env.BASE_URL}images/blogs/start/start-2.png" alt="RCK Games logo" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
            </div>

            <p>I joined RCK Games as a Junior Software Developer in 2016. At the time, being a software engineer who was actively applying that background to game and interactive development was an unusual combination in the region. Most developers came from design or arts backgrounds. Having formal software engineering training meant I could bring architectural thinking, REST API integration, and scalable systems to projects that previously hadn't had that foundation. Over the years I grew through the ranks — from Junior to Senior Software Developer, and eventually to Software Development Team Lead — taking on increasingly complex projects, mentoring developers, building teams, and working directly with clients across a range of industries.</p>

            <p>RCK Games built a strong reputation locally as experts in interactive design and immersive experiences — AR, VR, mobile applications, web experiences — at a time when many clients in the Yucatán region were just beginning to understand what was possible. Being part of that growth, from a small studio to a recognised name in the regional industry, was one of the most formative experiences of my career.</p>

            <p><strong>Connecting with the broader Mexican game dev community.</strong> In 2019, I travelled to Mexico City for what was at the time one of the first major gatherings of game developers in the country — an event hosted at <a href="https://hyperbeard.com" target="_blank" rel="noreferrer" style="color: #839cb5; text-decoration: underline;">HyperBeard</a>, the largest mobile game developer and publisher in Mexico. Founded in 2014, HyperBeard had built an extraordinary track record — over 30 games published across the App Store and Google Play, with titles like KleptoCats, Tsuki Adventure, and Adorable Home reaching millions of players worldwide. For a developer from Mérida, being in a room with the people behind Mexico's biggest game studio was a reminder of how much was possible from within this country.</p>

            <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                <img src="${import.meta.env.BASE_URL}images/blogs/start/start-3.jpg" alt="At HyperBeard Games, Mexico City, 2019" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
            </div>

            <p>The Mexican game development scene has a particular character to it. It is scattered geographically, scrappy by necessity, and driven almost entirely by people who love games enough to build them despite limited infrastructure and investment. Meeting developers from across the country in 2019 — comparing notes, sharing war stories, talking about tools and techniques — was energising in a way that is hard to describe. It made the work feel less isolated.</p>

            <p><strong>Teaching, leading, and eventually leaving.</strong> Alongside my work at RCK Games, I began teaching at Universidad Modelo and later Universidad Anáhuac Mayab — experiences that deepened my understanding of game development in ways that pure industry work sometimes cannot. Teaching forces clarity. It also connects you to the next generation of developers in a very direct and meaningful way.</p>

            <p>By 2025, after nearly a decade at RCK Games, years of teaching, freelance projects, and a growing sense that I wanted to challenge myself in a new direction, I made the decision to pursue my MSc in Computer Science for Game Programming at the University of Hull in the UK. It was the next chapter — not a departure from everything that came before, but a continuation of it.</p>

            <p>Mérida gave me my foundation. RCK Games gave me my craft. Teaching gave me my voice. And Mexico's game development community — small, tenacious, and quietly remarkable — gave me the perspective to know that where you come from has never been an obstacle to building something worth playing.</p>
        `,
        media : [
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/start/start-header.avif`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/start/start-1.svg`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/start/start-2.png`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : `${import.meta.env.BASE_URL}images/blogs/start/start-3.jpg`,
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ]
    }
]

export default posts