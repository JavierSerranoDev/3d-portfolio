const projects = [
    {
        id: 0,
        title: "ReCSaM",
        date: "2024-01-15",
        teaser: "ReCSaM is a mobile application for psychological therapy sessions by phychology specialist on Android developed in FLutterflow/Flutter for Clijutey (Therapeutic Justice Clinic of Yucatán).",
        description: "ReCSaM is a mobile application for Android developed in FLutterflow/Flutter for Clijutey (Therapeutic Justice Clinic of Yucatán) in which experts on the field of therapeutic psycology can register and create profiles for their patients, save a register of their sesions and create automatically a report for each patient based on the information saved in the app. The app also features a recording system for voice recognition and a unique UI/UX for the clients to easily see their previous sessions entries and reports.",
        html: 
            `
                <div>ReCSaM was approached as a solution to streamline the management of patient records and session notes for therapists at the clinic. The use of a microphone to take notes and database allowed for efficient data collection and storage.</div>
                <div>I worked along with the client in a "UI/UX prototype" phase to gather feedback and iterate on the design before moving forward with development. Using Figma as a tool I designed the application UI/UX, creating wireframes and prototypes to ensure that the app was user-friendly and met the client's needs and expectations.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/recsam/recsam_header.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>Once the design was finalized, I moved on to the development phase and researched the technical requirements. I decided on using Flutterflow/Flutter because it provided a fast and efficient way to build the application with a modern UI/UX. Fast was the key factor in choosing this technology.</div>
                <div>For the subscription feature, I decided to use Firebase Authentication along with Firestore for data storage and Stripe for payment processing.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/recsam/recsam_1_horizontal.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>I wrote a cohesive manual for the application, ensuring that users could easily navigate and utilize all features effectively and to work with my team. Speaking of which, I hired team members to assist with the development and testing phases. After some intial meetings, I worked as a SCRUM Master and Project Manager.</div>
                <div>I created the tasks, along with their acceptance criteria. Gave them clear instructions and deadlines to the team, and thus we were able to start the testing phase.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/recsam/recsam_2_horizontal.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>After testing the app and fixing the bugs, we were able to launch the app on the Play Store. I was also in charge of managing the deployment process and the admin accounts for the client as well as writing the proper documentation. It was a great achievement for the team and a great experience for me as a developer and project manager. We also created a webpage for terms and conditions and privacy policies for the app, as well as the Stripe page for receving payments.</div>
            `,
        media : [
            {
                "absolute_url" : "/images/projects/recsam/recsam_header.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : "/images/projects/recsam/recsam_1_horizontal.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/recsam/recsam_2_horizontal.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/recsam/recsam_3_horizontal.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ],
        "tools" : [
            {
                "id" : 3,
                "responsibilities" : [
                    "Lead and created a new team of developers from scratch, recruiting and hiring developers with the right skills and experience to contribute to the project effectively.",
                    "Designed the application UI/UX, creating wireframes and prototypes to ensure that the app was user-friendly and met the client's needs and expectations.",
                    "Taught the new developers how to use the tools and technologies we were using for the project, such as Flutter and Git, ensuring that they were able to contribute to the project effectively and efficiently.",
                    "Managed the development process, providing guidance and support to the team members, ensuring that the project was on track and aligned with the client's vision and goals, and making important decisions regarding the development of the app.",
                    "Took important decisions regarding the development of the app and communicating them with the client, such as choosing the right technologies and tools for the project, and ensuring that the development process was efficient and effective in delivering a high-quality product to the client."
                ],
            },
            {
                "id" : 1,
                "responsibilities" : [
                    "Learnt how to use Flutter and Flutterflow for mobile app development, which was a new experience for me and allowed me to expand my skills and knowledge in mobile app development, creating a visually stunning and user-friendly application that met the client's needs and expectations.",
                    "Learnt how to integrate Firebase as well as Stripe for the payment system as well as admisnitration of products and different tiers of subscriptions for the users, which was a great learning experience for me and allowed me to expand my skills and knowledge in mobile app development and backend integration."
                ],
            },
            {
                "id" : 0,
                "responsibilities" : [
                    "Used Firebase for user authentication and database management, and user data management leveraging its powerful features to create a secure and efficient backend for the mobile application.",
                    "Learnt how to integrate Firebase into a Flutter application, which was a new experience for me and allowed me to expand my skills and knowledge in mobile app development and backend integration.",
                    "Worked closely with the design team to ensure that the application's design was properly implemented and aligned with the client's vision and goals, providing feedback and suggestions to ensure that the final product met their expectations."
                ],
            },
            {
                "id" : 11,
                "responsibilities" : [
                    "Creation and administration of the Stripe account.",
                    "Integration of Stripe for payment processing.",
                    "Management of products and subscription tiers for users.",
                ],
            },
            {
                "id" : 2,
                "responsibilities" : [
                    "Learnt to use the Google Cli for the use of Google Cloud services, which was a new experience for me and allowed me to expand my skills and knowledge in cloud services and backend management.",
                    "Managed the deployment of the backend services on Google Cloud, ensuring that the app's backend was secure, efficient, and scalable to handle the needs of the application and its users."
                ],
            },
            {
                "id" : 5,
                "responsibilities" : [
                    "In order to upload the app to the Play Store, I learnt how to create and manage a Google Play Developer account, which was a new experience for me and allowed me to expand my skills and knowledge in mobile app deployment and store management.",
                    "Created a webpage for terms and conditions and privacy policies for the app, as well as the Stripe page for receving payments which was also a new experience for me and allowed me to learn about the legal requirements and best practices for mobile app development and deployment."
                ],
            }
        ],
        "experiences" : []
    },
    {
        id: 1,
        title: "VICENTE FERNANDEZ TE CANTA DESDE EL CIELO",
        date: "2024-01-15",
        teaser: "Vicente Fernandez Te Canta Desde El Cielo was a AR web experience developed for the family of Vicente 'Chente' Fernandez, along with Sony Music Latin and Spotify.",
        description: "Vicente Fernandez  Te Canta Desde El Cielo was a website developed for the family of Vicente 'Chente' Fernandez, a famous Mexican singer, to honor his legacy and provide a platform for fans to celebrate his life and music along with Sony Music Latin and Spotify. The website featured a AR experience where user could see stunning videos of Chente performing in different stages of his career, along a particle system for petals. We used 8th Wall for the AR experience and Unity WebGL for the website, creating an engaging and interactive experience for users to celebrate Chente's legacy and music effectively.",
        html: 
            `
                <div>Vicente Fernandez is a beloved singer in Mexico that passed away some years ago. His family, along with Sony Music Latin and Spotify, had an idea to celebraty his anniversaty.</div>
                <div>CoolNerdyPeople approached them with the idea for an AR web application to showcase the singer on the sky, singing mexico's favorite songs while rose petals fall from the sky.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/chente/chente_1.webp" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>Along with the software development we had to gather information on what tools we could use to develop this project. It was a fast paced development cycle, with a lot of trial and error, client changes and techinical difficulties due to the short time and learning of new tools.</div>
                <div>But these types of cycles is where we thrive at RCK Games, we get to learnt 8th Wall's Web AR techonology, the use of 3D applied with three.js, and their particle system. As well as the use of videos in AR space.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/chente/chente_2.webp" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>I worked really close with the design team due to requesting them changes, what we had learn and what we needed to complete the project on time, i.e. the green screen videos for the frames that were used in front of the videos on the AR space.</div>
                <div>Like always I reviewed software development tasks and backed my team when needed, giving proper solutions and explanations to clients on meetings.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/chente/chente_3.webp" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>After testing the app and fixing the bugs, we were able to launch the web page with a successful campaign that got some news coverage.</div>
            `,
        media : [
            {
                "absolute_url" : "/images/projects/chente/chente_header.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/chente/chente_1.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/chente/chente_2.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : "/images/projects/chente/chente_3.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/chente/chente_4.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/videos/projects/chente/chente_video.mov",
                "type" : "VIDEO",
                "orientation" : "LANDSCAPE"
            }
        ],
        "tools" : [
            {
                "id" : 3,
                "responsibilities" : [
                    "Was responsible for leading the development of the website and ensuring that the project was completed successfully. Managing the git repository, creating and managing branches for my responsibilities, ensuring that my work was properly organized and integrated with the main codebase.",
                    "Collaborated with the client and the design team to ensure that the website's design was properly implemented and aligned with the client's vision and goals, providing feedback and suggestions to ensure that the final product met their expectations.",
                    "Took important decisions regarding the development of the website and communicating them with the client, such as choosing the right technologies and tools for the project, and ensuring that the development process was efficient and effective in delivering a high-quality product to the client."
                ],
            },
            {
                "id" : 4,
                "responsibilities" : [
                    "Learnt new technology for this project, which was 8th Wall for the AR experience. I had to learn how to use 8th Wall's powerful features and tools to create an engaging and interactive AR experience for users, which was a great learning experience for me and allowed me to expand my skills and knowledge in AR development.",
                    "Worked closely with the design team to ensure that the AR experience's design was properly implemented and aligned with the client's vision and goals, providing feedback and suggestions to ensure that the final product met their expectations."
                ],
            },
            {
                "id" : 5,
                "responsibilities" : [
                    "We developed with React as the main framework for developing the website, leveraging its powerful features and flexibility to create an engaging and interactive experience for users.",
                ],
            }
        ],
        "experiences" : []
    },
    {
        id: 2,
        title: "YUCATAN i6",
        date: "2024-01-15",
        teaser: "Yucatan i6 was a convention made in Merida, Yucatan by the Goverment to promote the local software and hardware industry.",
        description: "Yucatan i6 was a convention made in Merida, Yucatan by the Goverment to promote the local software and hardware industry. For this event, RCK Games developed an interactive mobile application in Unity and a website for the registration to the events, schedule and speakers as well as the assistance via QR codes.",
        html: 
            `
                <div>The Yucatán i6 Congress is the largest technology and innovation event in southeastern Mexico, organized by Anáhuac Mayab University in conjunction with the state government. It focuses on areas such as artificial intelligence, the aerospace sector, the metaverse, cybersecurity, fintech, and entrepreneurship, attracting thousands of attendees, speakers, and creators.</div>
                <div>RCK Games was approached to work on an app for the event, where attendants could registered themselves on keynotes along with the generation of QR code tickets, see the events schedules and get information of the general event along with a map of the venue.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/yucatan_i6/yucatani6_1.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>Due to our experience and use of Unity's UI/UX system we used it to create a the app in a fast paced development cycle. This was not our first project of this kind, so we already had a well organized work pipeline developed alongside me, our backend developer, our project manager and the UI/UX team from previous project when we were only four members of the team.</div>
                <div>Thus now with the help of my team, that by this time they were ready for making these kinds of projects following our pipeline and standards we started the project's front end and middleware, while the backend development started using Laravel. Assets were rapidly being worked on too.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/yucatan_i6/yucatani6_2.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>The development cycle of this app reflected the refinement we had at RCK Games after some years of developing applications and games. There were not many issues either with the project, client meetings or anything else. IT was just a good project to work on.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/yucatan_i6/yucatani6_3.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>After testing the app and fixing the bugs, we were able to launch the app with a successful campaign for a proper event at the city that got some news coverage.</div>
            `,
        media : [
            {
                "absolute_url" : "/images/projects/yucatan_i6/yucatani6_header.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/yucatan_i6/yucatani6_1.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/yucatan_i6/yucatani6_2.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/yucatan_i6/yucatani6_3.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ],
        "tools" : [
            {
                "id" : 3,
                "responsibilities" : [
                    "Suppervised the git repository for this project, creating and managing branches for my responsibilities, ensuring that my work was properly organized and integrated with the main codebase.",
                    "Collaborated with the client and the design team to ensure that the mobile application's design was properly implemented and aligned with the client's vision and goals, providing feedback and suggestions to ensure that the final product met their expectations.",
                    "Took important decisions regarding the development of the mobile application and communicating them with the client, such as choosing the right technologies and tools for the project, and ensuring that the development process was efficient and effective in delivering a high-quality product to the client."
                ],
            },
            {
                "id" : 7,
                "responsibilities" : [
                    "Used Unity as the main game engine for developing the mobile application, leveraging its powerful features and flexibility to create an engaging and interactive experience for users.",
                ],
            },
                        {
                "id" : 8,
                "responsibilities" : [
                    "Worked closely with the back-end developers to ensure seamless integration between the frontend and backend systems for the mobile application, which included features such as event registration, schedule management, and assistance tracking via QR codes.",
                    "During meetings I payed close attention to the admin website that was being developed for the client to manage the mobile application's content, providing feedback and suggestions to ensure that it met the client's needs and was easy to use for managing the app's content effectively."
                ],
            }
        ],
        "experiences" : []
    },
    {
        id: 3,
        title: "THE NORTH FACE - GLOBAL WARMING SERIES",
        date: "2024-01-15",
        teaser: "This was a website developed for the North Face brand in Mexico by CoolNerdyPeople along with RCK Games. The website was developed using React and Unity WebGL, providing an interactive and engaging experience for users to explore North Face's advertising 'Global Warming Series'.",
        description: "This was a website developed for the North Face brand in Mexico by CoolNerdyPeople along with RCK Games. The website was developed using React and Unity WebGL, providing an interactive and engaging experience for users to explore North Face's advertising 'Global Warming Series'. The website featured a visually stunning design, showcasing North Face's ideas in a unique and immersive way, showcasing 3D models and interactive elements to engage users and promote the brand's message effectively.",
        html: 
            `
                <div>North Face was doing a advertising campaign promoting "clothes for the end of the world". The campaign was called "The Global Warming Series". They developed along with some designers clothes for different natural disasters that could be happeninig to the planet if issues on global warming were not tackled.</div>
                <div>They approached CoolNerdyPeople, and along with RCK Games, wanted us to create a web page that would feature these designs with their 3D models rendered on the web-page and feature a presentation of the planet's enviorments and destruction. Also the 3D models will have some points of interest that if they were clicked they will show in the UI a text box explaning a featuring of the suit.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/north_face/northface_1.webp" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>My team already had experience when doing some web development, but due to time constrains I decided to go for Unity development fot WebGL becuase that was the engine we have worked with the most. There was no time to properly learn about 3D web develepment yet.</div>
                <div>With was in these internal meetings with the team of CoolNerdyPeople where I had to defend the use of the tools at hand, they completly understanded my points that I was able to get across. Thus, we worked on a fully functional interactive simulation using Unity WebGL player that would run on a React web page.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/north_face/northface_2.webp" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>All the assets were given to us by the North Face team and CoolNerdyPeople. We just had to work out the implementation of the UI/UX and make the necessary scripts of managers in C# to get the experience working.</div>
                <div>After that, we worked on a React web page to feature the Unity Player along side some other components and deplyed it. As a team lead I was responsable of code reviewing and make sure the team followed RCK Games conventions that I wrote for the company.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/north_face/northface_3.webp" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>It was a fun experience to get to work with an international brand, and a cool conpcept like this.</div>
            `,
        media : [
            {
                "absolute_url" : "/images/projects/north_face/northface_header.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/north_face/northface_1.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/north_face/northface_2.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/north_face/northface_3.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : "/images/projects/north_face/northface_4.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ],
        "tools" : [
            {
                "id" : 3,
                "responsibilities" : [
                    "As the team lead and senior developer on this project, I was responsible for leading the development of the website and ensuring that the project was completed successfully. Managing the git repository, creating and managing branches for my responsibilities, ensuring that my work was properly organized and integrated with the main codebase.",
                    "I collaborated with the client and the design team to ensure that the website's design was properly implemented and aligned with the client's vision and goals, providing feedback and suggestions to ensure that the final product met their expectations.",
                    "Took important decisions regarding the development of the website and communicating them with the client, such as choosing the right technologies and tools for the project, and ensuring that the development process was efficient and effective in delivering a high-quality product to the client."
                ],
            },
            {
                "id" : 7,
                "responsibilities" : [
                    "This was a learninig experience on how to preoperly pivot decisions during the development of a project. The original plan was to develop the website using three.js but due to time constrians and limitations within the team we decided on a React website with Unity WebGL.",
                    "Using the 3D assets provided by the client, we created a visually stunning design, showcasing North Face's ideas in a unique and immersive way, showcasing 3D models and interactive elements to engage users and promote the brand's message effectively.",
                    "I had to learn how to optimize Unity WebGL builds for web deployment, ensuring that the website ran smoothly and provided a great experience for users across different devices and browsers."
                ],
            },
            {
                "id" : 5,
                "responsibilities" : [
                    "We use React as the main framework for developing the website, leveraging its powerful features and flexibility to create an engaging and interactive experience for users.",
                    "I had to learn how to integrate Unity WebGL builds into a React application, which was a new experience for me and allowed me to expand my skills and knowledge in web development and game development.",
                    "I also had to work closely with the design team to ensure that the website's design was properly implemented and aligned with the client's vision and goals, providing feedback and suggestions to ensure that the final product met their expectations."
                ],
            }
        ],
        "experiences" : []
    },
    {
        id: 4,
        title: "JURASSIC TYCOON",
        date: "2024-01-15",
        teaser: "Jurassic Tycoon was a game developed in Roblox Studio for a Roblox that hunted teams in latin america to develop games for their platform. The game featured a tycoon gameplay where players had to manage their own dinosaur park.",
        description: "Jurassic Tycoon was a game developed in Roblox Studio for a Roblox that hunted teams in latin america to develop games for their platform. The game featured a tycoon gameplay where players had to manage their own dinosaur park, collecting the dinosaurs, building attractions, and managing resources to grow their park and attract more visitors. The game was developed in Roblox Studio, utilizing its powerful tools and features to create an engaging and immersive gaming experience for players.",
        html: 
            `
                <div>At the time, Roblox was looking for game studios that could make a game with Roblox Studio. We pitched ideas for games within RCK Games searching for a game that would peak their interests. After a while we decided to feature "Jurassic Tycoon", a tycoon game where a player can create their own version of a dinosaur park.</div>
                <div>It featured three different enviorments, thus we worked alongside a 3D enviorment artists that had experience with Unity and Git to help us developed this game. I was responsable for the core mechanics and to help me team out learninig a new tool: Roblox Studio.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/jurassic_tycoon/jurassictycoon_1.webp" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>We managed to feature a Zoo-like tycoon experience where the player could have a vehicle and drive around the enviorments searching for fossils to get cash and eventually start their creation for their zoo.</div>
                <div>In order to enter new places the player needed to explore quite a bit of the other enviorments so progression was needed in the game.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/jurassic_tycoon/jurassictycoon_2.webp" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>We developed a lot of sections of the game and leart to code in Lua for this project. As a team lead I waas in charge of reviewing the code, which was more based on following good coding principles and practices because Lua was also new for me. And review and assign tasks that were developed along side my project manager.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/jurassic_tycoon/jurassictycoon_3.webp" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>Sadly, the game was cancelled due to the latinamerican Roblox team that reached to us cancelled the plans and investment.</div>
            `,
        media : [
            {
                "absolute_url" : "/images/projects/jurassic_tycoon/jurassictycoon_header.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/jurassic_tycoon/jurassictycoon_1.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/jurassic_tycoon/jurassictycoon_2.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : "/images/projects/jurassic_tycoon/jurassictycoon_3.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ],
        "tools" : [
            {
                "id" : 3,
                "responsibilities" : [
                    "As team lead and senior developer on this project, I was responsible for leading the development of the game and ensuring that the project was completed successfully. Managing the git repository, creating and managing branches for my responsibilities, ensuring that my work was properly organized and integrated with the main codebase.",
                    "As previous times, I got to teach the other team members how to learn new technologies and tools, in this case it was Roblox Studio, which was a new platform for all of us. I provided guidance and support to junior developers and ensured that the project was on track and aligned with the client's vision and goals.",
                ],
            },
            {
                "id" : 9,
                "responsibilities" : [
                    "It was my first time working with Roblox Studio and using Lua as the programming language for game development. I had to learn how to use Roblox Studio's powerful tools and features to create an engaging and immersive gaming experience for players, which was a great learning experience for me and helped me expand my skills and knowledge in game development.",
                    "I also had to learn how to optimize games for the Roblox platform, which has its own unique requirements and limitations, ensuring that our game ran smoothly and provided a great experience for players on the platform."
                ],
            }
        ],
        "experiences" : []
    },
    {
        id: 5,
        title: "AXESS BY AXE",
        date: "2024-01-15",
        teaser: "Project developed for Unilever's AXE brand in Mexico. The project consisted of a multiplayer online mobile game developed in Unity for the AXE brand.",
        description: "Project developed for Unilever's AXE brand in Mexico. The project consisted of a multiplayer online mobile game developed in Unity for the AXE brand, providing an engaging and interactive experience for users to explore AXE's advertising campaign for their concert 'AXESS'. The app featured a visually stunning design, showcasing AXE's ideas of the venue for their concert in a unique and immersive way, showcasing 3D models, games an online store for avatar customization and interactive elements to engage users and promote the brand's message effectively.",
        html: 
            `
                <div>Univeler's Axe dehodorant brand (named Lynx in several other countries) was organizing a concert in Mexico named "AXE CEREMONIA". They approached CoolNerdyPeople with an idea of making a virtual version of the venue where the players can interact, play games and earn in-game currecny to then exchange it for virtual or real prices at the concert.</div>
                <div>CoolNerdyPeople then approached RCK Games to develop this game. At the time, we didn't had a coding team aside from me and our backend programmer and by the scale of the project we needed more team members. I was in charge of findging and interviewing these candidates. I picked the ones I believed were the most qualified and with the abilities that we were going to need.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/axess_by_axe/axess_1.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>We needed what I like to call a "fixer" and a "detailist", the former is a programmer that dwelves more in complex problems but lacks some game feel finesse and can struggle with following conventions, while the detailist have a good eye for those "game feel" details and thrieves in finding them and applying them. Both can be agreat team while pair programming so I choose programmers that featured this skills. Things I learnt while being the only client-side developer at RCK Games and during the time we had more team members.</div>
                <div>This is one of the projects I have the most pride, becuase the time constrain was only of three months before the concert started their final preparations and we managed to deliver it in 3 and half months. While not being able to finish on time, many things where to take in consideration: there was no actual game design, just ideas in those three months we needed to decide what mini-games to feature on the map of the venue; implement the 2D and 3D assets that were being also made during those three months; learn and test the networking aspect of the game; feature avatar creation and edition, online store, QR creation, backend for administration of products, API consumption and many more features.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/axess_by_axe/axess_2.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>We used Unity for developing this game and with some external recommendation use the plug-in of "Game Creator 2" but because the team had more experience coding than using the in-engine features of the plug-in we decided to not use it for more complicated features like the networking solution, we use Photon for that and while the plug-in featured it we were too slow and I had to take the decision on how to approach this issue.</div>
                <div>It was an arduous work, and the fact that we only took 2 weeks more than needed was a testament of our hard work: it was a recently formed team of junior developers tat I had to review their code, teach them our conventions and processes and feature heavy solution-making and ideation for the game's code as well as the game's design. Again, there was almost nothing.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/axess_by_axe/axess_3.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>I had to push and use all my experience making apps that feature share, QR code generation and core software engieneering and Unity concepts. But we did managed to get it done on time for the concert. The game was featured in some advertisements with content creators and Univeler's AXE Mexico social media posts.</div>
            `,
        media : [
            {
                "absolute_url" : "/images/projects/axess_by_axe/axess_header.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/axess_by_axe/axess_1.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/axess_by_axe/axess_2.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/axess_by_axe/axess_3.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ],
        "tools" : [
            {
                "id" : 3,
                "responsibilities" : [
                    "An important hightlihgt is the time constraint we had for this project, which was one of the tightest deadlines I have ever had to work with. This required us to be extremely efficient and organized in our development process, prioritizing responsibilities and making quick decisions to ensure that we were able to deliver a high-quality product to the client within the given timeframe.",
                    "For this project I had to built a team of developers from scratch, recruiting and hiring developers with the right skills and experience to contribute to the project effectively.",
                    "Taught the new developers how to use the tools and technologies we were using for the project, such as Unity, Git, and the client's custom-built backend in Laravel, ensuring that they were able to contribute to the project effectively and efficiently.",
                    "Managed the development process, providing guidance and support to the team members, ensuring that the project was on track and aligned with the client's vision and goals, and making important decisions regarding the development of the app.",
                    "Took important decisions regarding the development of the app and communicating them with the client, such as choosing the right technologies and tools for the project, and ensuring that the development process was efficient and effective in delivering a high-quality product to the client."
                ],
            },
            {
                "id" : 7,
                "responsibilities" : [
                    "We used Unity as the main game engine along with plugins like Game Creator for quick prototyping and Photon for the multiplayer functionality, leveraging their powerful features and flexibility to create an engaging and interactive experience for users.",
                    "Using the 3D assets provided by the client, we created a visually stunning design, showcasing AXE's ideas in a unique and immersive way, showcasing 3D models, games an online store consumed from a REST API made in Laravel by our backend team along with its admin website for avatar customization and interactive elements to engage users and promote the brand's message effectively.",
                    "I had to learn how to optimize Unity builds for mobile deployment, ensuring that the app ran smoothly and provided a great experience for users across different devices and platforms."
                ],
            },
                        {
                "id" : 8,
                "responsibilities" : [
                    "Had to teach the team how to consume a REST API for the in-app store, which was a new experience for some of the team members and allowed us to integrate the store functionality effectively into the app.",
                    "As the team lead I woked closely with the back-end developers to ensure seamless integration between the frontend and backend systems, especially for the store functionality which was a key feature of the app.",
                    "As well during meetings pay close attention to the admin website that was being developed for the client to manage the app's content, providing feedback and suggestions to ensure that it met the client's needs and was easy to use for managing the app's content effectively."
                ],
            }
        ],
        "experiences" : []
    },
    {
        id: 6,
        title: "TELESUR+",
        date: "2024-01-15",
        teaser: "Telsur is the biggest local television network in the Yucatan peninsula in Mexico. RCK Games developed a mobile application for them in Unity to promote their content and provide an engaging experience for their audience.",
        description: "Telsur is the biggest local television network in the Yucatan peninsula in Mexico. RCK Games developed a mobile application for them in Unity to promote their content and provide an engaging experience for their audience. The app featured the latest news and entertainment content, a share functionality, and a user-friendly interface. The administration of the app was done through a custom-built backend in Laravel, allowing Telesur to easily manage and update their content and engage with their audience effectively.",
        html: 
            `
                <div>Telesur is a local and multiplatform news broadcaster that is part of the Telesur group, offering news, streaming, podcasts and social media featured mostly in the Yucatan peninsula. They are the biggest local source in the region. So when they approached RCK Games to develop an app for them we gladly accepted.</div>
                <div>The client have their requirements plus some ideas of how the UI/UX would look, sadly their ideas were focused more on web UI/UX than on a app. RCK Games' designer worked hard to deliver a good wireframe design plus core concepts that were used later. On the backend we used Laravel and alongside our backend developer we both worked on the design for the API calling and created the documentation and templates of what future works will be done with.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/telesur/telesur_1.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>I was already the only client-side developer at the time and the software team lead, my team consisted of me and our backend developer. It was decided that we would work with Unity to develop the app/ In this case I had to research about push notifications services, and share links in order to get the desired funcitonallity. We used DialyMotion streaming to stream the news videos on the app.</div>
                <div>This was a fun experience for me, because it was my first time working alone on a client-side application, and I did everything I could on that: created organization structures for our scenes in Unity, created documentation of good practices and code conventions, created a Framework inside Unity to help ease and create these types of projects using Unity's UI System.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/telesur/telesur_2.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>With this project, it was the first time I was confident in my abilities as a programmer and used my experience to approach not only this project but future projects.</div>
                <div>We got the push notifications to work as weel as deep linking for the share links, it was a really rich experience and work.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/telesur/telesur_3.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>The app launched succesfully and got updates later down the line, mostly visual upgrades.</div>
            `,
        media : [
            {
                "absolute_url" : "/images/projects/telesur/telesur_header.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/telesur/telesur_1.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/telesur/telesur_2.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/telesur/telesur_3.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ],
        "tools" : [
            {
                "id" : 3,
                "responsibilities" : [
                    "This was the first project I worked as team lead and senior developer at RCK Games, where I was responsible for leading the development of the mobile application and ensuring that the project was completed successfully.",
                    "I collaborated with another senior developer to manage the development team, providing guidance and support to junior developers and ensuring that the project was on track and aligned with the client's vision and goals.",
                ],
            },
            {
                "id" : 7,
                "responsibilities" : [
                    "Using Unity's UI system, we created a user-firendly interface and proper animations to provide an engaging experience for the users, ensuring that the app was visually appealing and easy to navigate.",
                    "We learnt how to use plugins to integrate the app with the client's custom-built backend in Laravel, allowing Telesur to easily manage and update their content and engage with their audience effectively.",
                    "We also integrated a share functionality in the app, allowing users to share content from the app on social media and other platforms, which helped increase engagement and reach for Telesur's content."
                ],
            },
            {
                "id" : 8,
                "responsibilities" : [
                    "As the team lead I woked closely with the back-end developers to ensure seamless integration between the frontend and backend systems.",
                    "As well during meetings pay close attention to the admin website that was being developed for the client to manage the app's content, providing feedback and suggestions to ensure that it met the client's needs and was easy to use for managing the app's content effectively."
                ],
            }
        ],
        "experiences" : []
    },
    {
        id: 7,
        title: "CATFORCE ARENA",
        date: "2024-01-15",
        teaser: "Catforce Arena was a 3DS eshop title developed by RCK Games. The game is a 2D top-down arena shooter where players control a cat that must stop the rise of evil dogs from attaking their island. Different weapons and bosses were featured in the game.",
        description: "Catforce Arena was a 3DS eshop title developed by RCK Games. The game is a 2D top-down arena shooter where players control a cat that must stop the rise of evil dogs from attaking their island. Different weapons and bosses were featured in the game.",
        html: 
            `
                <div>Catforce Arena was a Nintendo 3DS game for the Nintendo eShop. It was developed during the COVID pandemic, but the conception stages were before that. The game was a simple top-down arena shooter were enemies would spawn, and you unlocked waepons to rescue the other cats from evil dog aliens, four worlds with three levels per world, four bosses and a time-attack mode were implemented.</div>
                <div>RCK Games got their hands on a 3DS Development Kit and the objective was simple: Create a small game that will be launched on the eShop. At the time I became the sole software developer for RCK Games so the team was really small: one programmer (me) and two artists, along side the CEO and the Project Manager.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/catforce/catforce_1.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>This was one of the best experiences I had so far, becuase I got my hands on a 3DS use for development, we had to get our certfied Nintendo Accounts in order to get the proper packages that Unity needed to build for the device, read documentation on how to build and the limitations of the hardware. The only version supported at the time was Unity 5 even though better version of the game engine were already available at the time.</div>
                <div>One funny story was our experiments on the limitations of the hardware, were we only load a scene with a big sprite to see what happens, it froze the device. To work with those hardware limitations was no joke. Sound, visual assets and more needed to be tailor made for the hardware.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/catforce/catforce_2.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>As time went on, COVID started, and we started to work from home. In those days the bosses were the sections that took the most time s core mechanics and basic enemies were already implemented. I learnt a lot about finite state machines.</div>
                <div>We used a plug-in for Unity called TopDown Engine by MoreMountains, on a developer's conference in Mexico City we featured a demo of the game and the developer of MoreMountains, Renaud Forestié, congratulated me on running his plug-in on such a strict device. This was of course before the pandemic started, one of the few travels that the whole RCK Games team did.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/catforce/catforce_3.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>Sadly, and I say this with all my heart, the game wasn't able to be published because by the time, even though we finished, our team couldn't get to publish it on time, Nintendo already moved on from the eShop in the 3DS. Nevertheless, this is one of my favorite experiences as a game developer.</div>
            `,
        media : [
            {
                "absolute_url" : "/images/projects/catforce/catforce_header.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/catforce/catforce_1.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/catforce/catforce_2.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : "/images/projects/catforce/catforce_3.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/catforce/catforce_4.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/videos/projects/catforce/catforce_video_1.mp4",
                "type" : "VIDEO",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/videos/projects/catforce/catforce_video_2.mp4",
                "type" : "VIDEO",
                "orientation" : "LANDSCAPE"
            }
        ],
        "tools" : [
            {
                "id" : 3,
                "responsibilities" : [
                    "In this project, I was responsable for the git repository management, creating and managing branches for my responsibilities, ensuring that my work was properly organized and integrated with the main codebase.",
                    "I collaborated closely with the art team to integrate assets into the game, ensuring that the visual elements were properly implemented and aligned with the game's design and vision.",
                ],
            },
            {
                "id" : 7,
                "responsibilities" : [
                    "I was the sole developer working on this project, which was a great opportunity for me to take ownership of the development process and learn through hands-on experience.",
                    "With a team of two artists, I worked closely with them to integrate their assets into the game, ensuring that the visual elements were properly implemented and aligned with the game's design and vision.",
                    "I learnt a lot of how Nintendo games are made, their support through exclusive blogs and how to optimize games for the Nintendo 3DS, which was the platform we were developing for in this project."
                ],
            }
        ],
        "experiences" : []
    },
    {
        id: 8,
        title: "UPP ADVENTURES",
        date: "2024-01-15",
        teaser: "UPP Adventures was a gamefied mobile application developed for the UPP (Univerisidad Privada de la Peninsula) to promote the students assitance to events and its different programs.",
        description: "UPP Adventures was a gamefied mobile application developed for the UPP (Univerisidad Privada de la Peninsula) to promote the students assitance to events and its different programs. The mobile application was developed in Unity and featured a QR generation for scanning assitance and a rewarding and store system to reward students for attending events and participating in different programs offered by the university. The app also included a leaderboard and rewards system to encourage student engagement and foster a sense of community within the university.",
        html: 
            `
                <div>The UPP is a private university located in Merida, Yucatan, Mexico. They had a problem that needed solving: Their students were not attending to extra-curricular events like sports competition or cultural festivals. Thus they approached RCK Games for a solution, we developed and idea of gamified the assistance of the students to those events.</div>
                <div>The idea was simple enough, inspired by the, at the time, craze for gameification we develoed an experience-based system in were a student could earn experience points when assisting to those events. The events would appear on a list on the app, and then if a student wanted to go they "selected" the event and get an assistance QR Code. Then a QR reader would read the QR at the event to get the points. With this points the student could exchange for virtual avatar images or university merchandise.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/upp_adventures/uppadventures_1.jpg" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>The idea was a success, an after creating the client's requirements we started developing the app. We decided to work with Unity as we had experience with it, also the advantage for a small studio was that Unity was one of the game engines that had Android and iOS compability when stuff like React Native or FLutter was not that popular.</div>
                <div>We also started working with a backend developer at RCK Games, and I get to learn how to create, design and call request of consumption for APIs becuase we needed those in order for the client to work.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/upp_adventures/uppadventures_2.jpg" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>The launch of the app was a success with the UPP working with us to create the events and do promotions inside of the school. This was an important moment for the RCK Games team as this was our first success at creating an app for a client.</div>
                <div>The app got updated after that with a 2.0 version that improved Quality of Life and better management and upgraded visuals to a more clean design.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/upp_adventures/uppadventures_3.jpg" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>At the time I was still a junior developer but this was one of the projects where I got to learn a lot.</div>
            `,
        media : [
            {
                "absolute_url" : "/images/projects/upp_adventures/uppadventures_header.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/upp_adventures/uppadventures_1.jpg",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/upp_adventures/uppadventures_2.jpg",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : "/images/projects/upp_adventures/uppadventures_3.jpg",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ],
        "tools" : [
            {
                "id" : 3,
                "responsibilities" : [
                    "I was the junior developer on this project, responsible for the QR generation and assisting in the development of the mobile application and learning from more experienced team members.",
                ],
            },
            {
                "id" : 7,
                "responsibilities" : [
                    "During the development of this project, I had the opportunity to learn how to create a manger for consuming a REST API, which was a great learning experience for me as it allowed me to understand how to work with backend teams and integrate their work into the mobile application effectively.",
                    "I also learnt how to integrate NuGets in Unity to manage third-party libraries and tools, which helped me streamline the development process and ensure that we were using the best tools available for the project."
                ],
            },
            {
                "id" : 8,
                "responsibilities" : [
                    "It was the first time I worked along a backend team to consume a REST API made in Laravelfor the assistance tracking. Learninig the ins and outs of how to consume an API, handle errors and manage data flow between the backend and the mobile application was a great learning experience for me and helped me understand how to work with backend teams effectively in future projects."
                ],
            }
        ],
        "experiences" : []
    },
    {
        id: 9,
        title: "CAMPAMENTO DV",
        date: "2024-01-15",
        teaser: "Campamento DV was a camp for game development organized by RCK Games and later joined by Megalixir Games. Worked along with the IYEM (Emprendeourship Institute of Yucatan) to provide a space for learning and development in the field of game development.",
        description: "Campamento DV was a camp for game development organized by RCK Games and later joined by Megalixir Games. Worked along with the IYEM (Emprendeourship Institute of Yucatan) to provide a space for learning and development in the field of game development, offering keynotes, workshops, lectures, and hands-on activities for participants to enhance their skills and knowledge in the industry.",
        html: 
            `
                <div>Campamento DV was a great start up developed by RCK Games alongside the IYEM (Emprendeourship Institute of Yucatan), as they were finding a way to implement game development into their circle of emprendeourship at a state level. RCK Games already had good relationship with them as we previously worked alongside the city of Merida's goverment at the time.</div>
                <div>Alongside another game studio, Megalixir Games, the team created Campamento DV was a camp for game development. We organized keynotes from developers all around the country, created events and courses on the weekends for people that are interested in Game Development to start their journey into it.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/campamento_dv/campamentodv_1.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>I was selected as one of the teachers for one of this courses, becuase at the time I already had experience working as teacher at Univerisdad Modelo for the course of BDes in Interactive Design (And later on I also became a teacher at the Universidad Anahuac Mayab for their course on BSc in Digital Animation Engieenering).</div>
                <div>I created the keynotes, and a simple project for a 101 course on game development with Unity. People from all ages gathered to learn to create some games. For 3 weeks on Saturdays I gave my course, explained the core concepts of game development oriented at a programmer's level more than a game design or art for games level.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/campamento_dv/campamentodv_2.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>The project I made was a simple enough vertical shooter, where you control a little spaceship and shoot enemies and evade obstacles. The project was made thinking in the best approach to theach core concepts like: Player Controller, Enemy Behaviour, Prefabs, Game Managers, and more.</div>
                <div>Again this course was more focused on the technical side of things for game development, I gave the project and used free to use assets for the creation of the game.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/campamento_dv/campamentodv_3.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>This was a really fun experience. I can say that teaching is one of the things I like to do the most, gave me confidence when talking at public spaces and enriched my knowledge too. This also helped me when teaching new team members and create comprehensive and engaging keynotes. Over the years some students from the multiple universities and spaces I teached created games or joined the indsutry. Funny enough at social events they still call me "teacher".</div>
            `,
        media : [
            {
                "absolute_url" : "/images/projects/campamento_dv/campamentodv_header.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/campamento_dv/campamentodv_1.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : "/images/projects/campamento_dv/campamentodv_2.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
            {
                "absolute_url" : "/images/projects/campamento_dv/campamentodv_3.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ],
        "tools" : [],
        "experiences" : [
            {
                "id" : 2,
                "responsibilities" : [
                    "As a teacher at Campamento DV, I was responsible for teaching programming and game development to students of all ages and skill levels, fostering a supportive and engaging learning environment.",
                    "I tought an intro level course on Unity, covering the basics of game development and programming to help students get started with creating their own games.",
                    "Created a demo game in Unity, a 2D shooter game, to showcase the concepts and techniques taught in the course, providing students with a practical example of how to apply their knowledge and skills in a real-world project."
                ],
            }
        ]
    },
    {
        id: 10,
        title: "LawLers - Super Service",
        date: "2024-01-15",
        teaser: "Mobile videogame developed in Godot for the Restaurant LawLers. The game was designed to offer discounts to users who made purchases in the restaurant's store, providing an engaging and interactive experience for customers while promoting sales and customer loyalty.",
        description: "Mobile videogame developed in Godot for the Restaurant LawLers. The game was designed to offer discounts to users who made purchases in the restaurant's store, providing an engaging and interactive experience for customers while promoting sales and customer loyalty.",
        html: 
            `
                <div>LawLers - Super Service was project where our client contacted us to help them develop a game where LawLers' customers would earn discount coupons after playing some levels of a videogame, the client already had the idea of what type of game they wanted to develop.</div>
                <div>As a request from them, they wanted us to work with Godot, thus we learnt how to use it, after some years developing with Unity the different approach for a Game Engine (Object Oriented instead of Entity Component) was very interesting. At the time Godot was still on its early stages but it had the promise of what it is now, a proper Open Source Object Oriented Game Engine that can compite with others.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/lawlers/lawlers_1.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>I worked along side a freelance developer as a project manager and team lead. I talked with clients on meetings, and worked along side them for the assets deliverables. Guided and suppervised the development on the software side of things, reviewing the tasks I had previously prepared and organized.</div>
                <div>There were no major issues with the development, as the client was very supportive of our work and we did our best to meet their expectations.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/lawlers/lawlers_2.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>At some point, we started having some issues with the timing of the tasks, we managed to go back on track after some changes were done when reviewing the previous sprints.</div>
                <div>We managed to burn more tickets on later stages of the development cycle on later sprints, and got back on track. This was a good learning experience in how to manage a project that became very useful later on in my career.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/lawlers/lawlers_3.png" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>We managed to deliver on time, no major issues. I'm very greatful for the opportunity for this to be one of my first projects as a project manager at RCK Games.</div>
            `,
        media : [
            {
                "absolute_url" : "/images/projects/lawlers/lawlers_header.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/lawlers/lawlers_1.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/lawlers/lawlers_2.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/lawlers/lawlers_3.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ],
        "tools" : [
            {
                "id" : 3,
                "responsibilities" : [
                    "Created and adminsitrated the project's Trello board, ensuring that all responsibilities were properly organized and prioritized.",
                    "Administered the project's GitHub repository, managing branches, pull requests, and code reviews to maintain a clean and efficient codebase.",
                    "Meet clients to gather requirements, provide updates, and ensure that the project was aligned with their vision and goals."
                ],
            },
            {
                "id" : 10,
                "responsibilities" : [
                    "Godot was our main game engine for this project, leveraging its powerful features and flexibility to create an engaging and immersive gaming experience.",
                    "The client provided us with the objective of offering discounts to users who made purchases in their game store, and we implemented this feature using Godot's scripting capabilities.",
                    "Provided the client with the game's design and development progress, ensuring that they were informed and involved throughout the project to ensure that the final product met their expectations and requirements."
                ],
            }
        ],
        "experiences" : []
    },
    {
        id: 11,
        title: "GHOST APOCALYPSE",
        date: "2024-01-15",
        teaser: "Ghost Apocalypse is a mobile game developed in Unity by RCK Games. The game follows the story of two siblings that most stop the rise of an evil ghost along with the ghost of their grandfather.",
        description: "Ghost Apocalypse is a mobile game developed in Unity by RCK Games. The game follows the story of two siblings that most stop the rise of an evil ghost along with the ghost of their grandfather. The gameplay is a tower-defense game where players must strategically place defenses to protect their home from waves of ghostly enemies, utilizing a variety of spells and power-ups to survive the onslaught and uncover the mysteries behind the ghost apocalypse.",
        html: 
            `
                <div>After some years at the university studying my BSc in Software Engieneering I got the opportunity to achieve a personal goal: work at game studio. At the time, at least on my home state, there were no big studios and things were not as easy or streamlined as they are today for indie developers, so if I wanted to work making games it meant to move far from home. When I got the news from a friend that a new game studio was looking for junior programmers I was quite happy, I applied and got the job!</div>
                <div>This was my second time working properly, if my professional practices count. The studio was RCK Games, a small game studio and micro-company (by the standards of management/documentation/company size), they already realsed a game called "Chobi's Candy Quest" for mobile devices, an infinite runner, so now they were looking for a more complete experience.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/ghost_apocalypse/ghostapocalypse_1.webp" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>Ghost Apocalypse was the studio's first try at making a story-driven game. The story is about a pair of siblings that realised that have magical powers, as they can see ghosts. The ghost of their granpa tells them that an evil force is making the ghost go mad and attack the city. It's the job of this trio to fight back!</div>
                <div>The main gameplay was focused on tower-defense mechanics, to spice things up, each character had a skill tree and could cast spells to do area of effect attacks or heal the party. The game featured a heavy difficulty curve, comic-style story telling and a OST. It was realised for Android and iOS devices.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/ghost_apocalypse/ghostapocalypse_2.webp" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>It was developed using Unity, I was in charge of creating the HUD and implement the UI/UX of the game, as well as implementing animations and other assets. The I worked on creating the spells, while the team lead of software development (We were only tow programmers) worked on the tower-defense mechanics, enemy behaviours, game progression and game manager.</div>
                <div>I used this opportunity to learn a lot about coding for games: The behaviour loop of a Game Engine, how to create Behavior Scripts and in general, to use Unity.</div>
                <div style="height: 24rem; position: relative; border-radius: 0.75rem; overflow: hidden; margin-top: 2rem; margin-bottom: 2rem;">
                    <img src="/images/projects/ghost_apocalypse/ghostapocalypse_3.webp" alt="ReCSaM header image" style="width: 100%; height: 100%; object-fit: contain; position: absolute; inset: 0;"/>
                </div>
                <div>It was a fun and great first experience on the work-force, in a sense achieving a goal: work on game.</div>
            `,
        media : [
            {
                "absolute_url" : "/images/projects/ghost_apocalypse/ghostapocalypse_header.png",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/ghost_apocalypse/ghostapocalypse_1.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/ghost_apocalypse/ghostapocalypse_2.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            },
                        {
                "absolute_url" : "/images/projects/ghost_apocalypse/ghostapocalypse_3.webp",
                "type" : "IMAGE",
                "orientation" : "LANDSCAPE"
            }
        ],
        "tools" : [
            {
                "id" : 7,
                "responsibilities" : [
                    "Assisted in the development of the game and learning from more experienced team members.",
                    "Worked on the integration of assets and features into the game, collaborating with artists and designers to ensure that the game's vision was realized effectively.",
                ],
            },
            {
                "id" : 3,
                "responsibilities" : [
                    "Used Git for version control and collaboration on this project, allowing us to manage our codebase effectively and work together seamlessly as a team.",
                    "Created and managing branches for my responsibilities, ensuring that my work was properly organized and integrated with the main codebase.",
                ],
            }
        ],
        "experiences" : []
    }
]

export default projects;