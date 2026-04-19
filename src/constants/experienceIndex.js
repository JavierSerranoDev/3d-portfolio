const expCards = [
    {
        id : 8,
        type : "DEVELOPMENT",
        title : "Virtual Moon",
        description : "",
        logoPath : `${import.meta.env.BASE_URL}images/experiences/virtual_moon/Icono@4x.png`,
        imgPath : `${import.meta.env.BASE_URL}images/experiences/virtual_moon/Logo-Horizontal.png`,
        color : "#D7F876",
        date : "From 2025-09-15 to 2026-05-05",
        review: "During my time studying for my MSc in Computer Science for Games Programming at the University of Hull, I had the opportunity to work on the Virtual Moon project, a VR simulation experience where, using real moon data from NASA, users can explore the moon's surface and learn about its features and history.",
        responsibilities : [
            "Worked as a SCRUM Master for a while, and realiced PRINCE2 project management methodologies to ensure the successful delivery of the project.",
            "Helped developed the event system using Scriptable Objects in Unity, UI/UX design and implementation and a props spawning system using object pooling to optimize performance.",
            "Ensured communication with the stakeholders and ensuring that the project met their expectations."
        ]
    },
    {
        id : 7,
        type : "DEVELOPMENT",
        title : "ReCSaM - Freelance Software Developer",
        description : "",
        logoPath : `${import.meta.env.BASE_URL}images/experiences/clijutey/Icono@4x.png`,
        imgPath : `${import.meta.env.BASE_URL}images/experiences/clijutey/Logo-Horizontal.png`,
        color : "#731A0D",
        date : "2025-01-01 - 2025-04-30",
        review: "I was hired as a freelance software developer at CLIJUTEY to develop a mobile application for the ReCSaM project, which is a tool to help psychologists and specialists to keep tracking of their patients.",
        responsibilities : [
            "Wrote client's requirements and created a software architecture for the mobile application, which was developed using Unity and C#.",
            "Created a new team for this project from scratch, created the UI/UX design along with the clients requirements.",
            "Launched, deployed, maintained and updated the existing software applications."        ]
    },
    {
        id : 6,
        type : "DEVELOPMENT",
        title : "Cool Nerdy People - Freelance Software Developer",
        description : "",
        logoPath : `${import.meta.env.BASE_URL}images/experiences/cool_nerdy_people/Icono@4x.png`,
        imgPath : `${import.meta.env.BASE_URL}images/experiences/cool_nerdy_people/Logo-Horizontal.png`,
        color : "#75FAA3",
        date : "From 2025-09-30 to 2025-11-30",
        review: "I was hired as a freelance software developer at Cool Nerdy People in order to help them with the transition of development teams.",
        responsibilities : [
            "Supported and maintained various software applications for their different clients.",
            "Collaborated with the design team to create user-friendly interfaces and implemented responsive design principles."
        ]
    },
    {
        id : 5,
        type : "EDUCATION",
        title : "Campamento DV",
        description : "",
        logoPath : `${import.meta.env.BASE_URL}images/experiences/campamento_dv/Icono@4x.png`,
        imgPath : `${import.meta.env.BASE_URL}images/experiences/campamento_dv/Logo-Horizontal.png`,
        color : "#FF62C9",
        date : "From 2024-04-01 to 2024-04-30",
        review: " I was hired as a lectuerer Campamento DV was a camp for game development organized by RCK Games, IYEM (Emprendeourship Institute of Yucatan) and later joined by Megalixir Games. Provided a space for learning and development in the field of game development.",
        responsibilities : [
            "Created lectures and a core project about develeping games with Unity for Campamento DV.",
            "Offered keynotes, workshops, lectures, and hands-on activities for participants to enhance their skills and knowledge in the industry.",
        ]
    },  
    {
        id : 4,
        type : "DEVELOPMENT",
        title : "RCK Games' Software Development Team Lead",
        description : "",
        logoPath : `${import.meta.env.BASE_URL}images/experiences/rck_games/Icono@4x.png`,
        imgPath : `${import.meta.env.BASE_URL}images/experiences/rck_games/Logo-Horizontal.png`,
        color : "#272F36",
        date : "From 2023-01-01 to 2025-09-30",
        review: "Took on a leadership role in managing the software development team and overseeing the development of multiple projects. Created a new team and mentored junior developers and provided technical guidance to ensure the quality and efficiency of the development process.",
        responsibilities : [
            "Took on a leadership role in managing the software development team and overseeing the development of multiple projects.",
            "Created a new team and mentored junior developers and provided technical guidance to ensure the quality and efficiency of the development process.",
            "Collaborated heavely with client meetings, requirements gathering, project management, and team coordination to ensure the successful delivery of projects on time and within budget."
        ]
    },
    {
        id : 3,
        type : "EDUCATION",
        title : "Universidad Anahuac Mayab",
        description : "",
        logoPath : `${import.meta.env.BASE_URL}images/experiences/anahuac/Icono.svg`,
        imgPath : `${import.meta.env.BASE_URL}images/experiences/anahuac/Logo-Horizontal.png`,
        color : "#ff5900",
        date : "From 2022-08-01 to 2025-09-30",
        review: "I was hired as a teacher for the BSc in Digital Animation Engineering at Universidad Anahuac Mayab, for the modules of 'Game Engines I', 'Game Engines II', 'Programming for Games' and 'Practicum for Video Games'.",
        responsibilities : [
            "Created the course content, preparing the lectures and assignments, and evaluating the students' performance. I also provided feedback and support to the students throughout the course.",
            "Students under my guidance were able to develop their skills in game engines, programming for games, and practicum for video games, and many of them went to join international companies and teams in video game development.",
            "Contributed to the education and growth of the students by creating supportive and engaging learning enviorments like creating an exposition with industry professionals."
        ]
    },
    {
        id : 2,
        type : "DEVELOPMENT",
        title : "RCK Games' Senior Software Developer",
        description : "",
        logoPath : `${import.meta.env.BASE_URL}images/experiences/rck_games/Icono@4x.png`,
        imgPath : `${import.meta.env.BASE_URL}images/experiences/rck_games/Logo-Horizontal.png`,
        color : "#272F36",
        date : "From 2021-01-01 to 2023-01-01",
        review: "After some years of experience and growth at RCK Games, I was promoted to Senior Software Developer, where I took on more complex projects and led the development of several successful mobile applications.",
        responsibilities : [
            "Created the software architecture and implemented REST API consumption for the games and mobile apps, which allowed us to create more robust and scalable applications.",
            "Collaborated with cross-functional teams to define client requirements, design features, and implement innovative solutions."
        ]
    },
    {
        id : 1,
        type : "EDUCATION",
        title : "Universidad Modelo",
        description : "",
        logoPath : `${import.meta.env.BASE_URL}images/experiences/modelo/Icono@4x.png`,
        imgPath : `${import.meta.env.BASE_URL}images/experiences/modelo/Logo-Horizontal.png`,
        color : "#061f57",
        date : "From 2019-08-01 to 2021-12-31",
        review: "I was hired as a teacher for the BDes in Interactive Design at Universidad Modelo, for the modules of 'Design of Educational Vide Games', 'Augmented Reality' and 'Design of Objects of Digital Learning'.",
        responsibilities : [
            "Created the course content, preparing the lectures and assignments, and evaluating the students' performance. I also provided feedback and support to the students throughout the course.",
            "Students under my guidance were able to develop their skills in game design, augmented reality, and digital learning, and many of them went on to create impressive projects and portfolios."
        ]
    },
    {
        id : 0,
        type : "DEVELOPMENT",
        title : "RCK Games' Junior Software Developer",
        description : "",
        logoPath : `${import.meta.env.BASE_URL}images/experiences/rck_games/Icono@4x.png`,
        imgPath : `${import.meta.env.BASE_URL}images/experiences/rck_games/Logo-Horizontal.png`,
        color : "#272F36",
        date : "From 2016-07-01 to 2021-01-01",
        review: "I was hired as a Junior Software Developer at RCK Games, a video game development company based in Yucatan, Mexico. I worked on various projects and games, contributing to the development process and learning from the experienced team at RCK Games.",
        responsibilities : [
            "Implemented the UI and UX design of the games, creating intuitive and visually appealing interfaces for the players.",
            "Created software architectures and REST API consumption for the games and mobile apps."
        ]
    }
]

export {
  expCards
};
