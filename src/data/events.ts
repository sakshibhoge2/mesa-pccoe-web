export type EventStatus =
  | "upcoming"
  | "past";


export type MesaEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  image: string;
  status: EventStatus;
};


export type LegacyEvent = {
  id: string;
  title: string;
  year: string;
};


/*
=========================================================
UPCOMING + CURRENT YEAR PAST EVENTS
=========================================================
*/

export const events: MesaEvent[] = [

  /*
  =======================================================
  UPCOMING EVENTS
  =======================================================
  */

  {
    id:
      "event-01",

    title:
      "Teacher's Day Celebration",

    date:
      "7th September 2026",

    location:
      "Seminar Hall, 9th Building",

    category:
      "CULTURAL EVENT",

    description:
      "Celebrating the contributions of teachers and educators in shaping the future of students.",

    image:
      "/assets/events/upcoming/upcoming-01.jpg",

    status:
      "upcoming",
  },


  {
    id:
      "event-04",

    title:
      "TECH FEST",

    date:
      "8th & 9th October 2026",

    location:
      "PCCOE",

    category:
      "TECHNICAL EVENT",

    description:
      "A technical festival bringing together innovation, engineering, creativity and practical problem-solving.",

    image:
      "/assets/events/upcoming/tech-fest.jpeg",

    status:
      "upcoming",
  },


  {
    id:
      "event-05",

    title:
      "SPORTS",

    date:
      "1st week of October 2026",

    location:
      "PCCOE",

    category:
      "SPORTS EVENT",

    description:
      "A series of sporting activities encouraging teamwork, participation, fitness and healthy competition among students.",

    image:
      "/assets/events/upcoming/sports-fest.jpeg",

    status:
      "upcoming",
  },


  {
    id:
      "event-03",

    title:
      "UNMILAN",

    date:
      "Last week of October 2026",

    location:
      "PCCOE",

    category:
      "CULTURAL EVENT",

    description:
      "A motivating session by inspiring women.",

    image:
      "/assets/events/upcoming/upcoming-03.jpg",

    status:
      "upcoming",
  },


  {
    id:
      "event-06",

    title:
      "COMPANY TALK / WORKSHOP",

    date:
      "Last week of October 2026",

    location:
      "PCCOE",

    category:
      "WORKSHOP",

    description:
      "An industry-oriented session providing students with practical insights, professional exposure and knowledge from industry experts.",

    image:
      "/assets/events/upcoming/training-workshop.jpeg",

    status:
      "upcoming",
  },


  {
    id:
      "event-02",

    title:
      "ADHYAY",

    date:
      "2nd week of February 2027",

    location:
      "PCCOE",

    category:
      "CULTURAL EVENT",

    description:
      "An exclusive interaction with a distinguished guest.",

    image:
      "/assets/events/upcoming/upcoming-02.jpg",

    status:
      "upcoming",
  },


  {
    id:
      "event-07",

    title:
      "PCCOE CHAMPIONS",

    date:
      "February – March 2027",

    location:
      "PCCOE",

    category:
      "SPORTS EVENT",

    description:
      "An inter-collegiate sporting event bringing students together through competition, teamwork and sportsmanship.",

    image:
      "/assets/events/upcoming/pccoe-champions.jpg",

    status:
      "upcoming",
  },


  {
    id:
      "event-08",

    title:
      "B-TECH FAREWELL",

    date:
      "Mid April 2027",

    location:
      "PCCOE",

    category:
      "CULTURAL EVENT",

    description:
      "A farewell celebration dedicated to the graduating B-Tech students, marking the end of their journey at PCCOE.",

    image:
      "/assets/events/upcoming/farewell.jpeg",

    status:
      "upcoming",
  },


  /*
  =======================================================
  PAST EVENTS
  NEWEST FIRST
  =======================================================
  */


  /* =====================================================
     2026
  ===================================================== */

  {
    id:
      "past-01",

    title:
      "MESA INDUCTION",

    date:
      "12 AUG 2026",

    location:
      "PCCOE",

    category:
      "CULTURAL EVENT",

    description:
      "An induction program for new members of the MESA club, introducing them to the club's activities and goals.",

    image:
      "/assets/events/past/event-01.jpg",

    status:
      "past",
  },


  {
    id:
      "past-02",

    title:
      "ECO-FRIENDLY GANPATI MAKING WORKSHOP",

    date:
      "AUGUST 2026",

    location:
      "PCCOE",

    category:
      "WORKSHOP",

    description:
      "A workshop focused on creating eco-friendly Ganpati idols, promoting sustainable practices during the festival.",

    image:
      "/assets/events/past/event-02.jpg",

    status:
      "past",
  },


  /* =====================================================
     2025
  ===================================================== */


  {
    id:
      "past-03",

    title:
      "UNMILAN 2025",

    date:
      "11th & 12th October 2025",

    location:
      "PCCOE",

    category:
      "CULTURAL EVENT",

    description:
      "A two-day MESA event focused on awareness, empowerment, women's health, safety, personality development and life skills.",

    image:
      "/assets/events/past/unmilan-2025.jpg",

    status:
      "past",
  },


  {
    id:
      "past-04",

    title:
      "SPARKFEST",

    date:
      "25th & 27th September 2025",

    location:
      "PCCOE",

    category:
      "TECHNICAL FEST",

    description:
      "A technical and non-technical fest organised on the occasion of Engineer's Day featuring engineering challenges, competitions and practical problem-solving activities.",

    image:
      "/assets/events/past/sparkfest-2025.jpg",

    status:
      "past",
  },


  {
    id:
      "past-05",

    title:
      "GAUNTLET RUN",

    date:
      "25th & 27th September 2025",

    location:
      "PCCOE",

    category:
      "TECHNICAL EVENT",

    description:
      "A multi-round competition featuring an aptitude test, campus-wide story hunt and a final hands-on mechanical assembly challenge.",

    image:
      "/assets/events/past/gauntlet-run-2025.jpg",

    status:
      "past",
  },


  {
    id:
      "past-06",

    title:
      "MECH TROUBLESHOOT",

    date:
      "25th September 2025",

    location:
      "PCCOE",

    category:
      "TECHNICAL EVENT",

    description:
      "An interdisciplinary troubleshooting competition testing aptitude, analytical thinking, coding and engineering problem-solving skills.",

    image:
      "/assets/events/past/mech-troubleshoot-2025.jpg",

    status:
      "past",
  },


  {
    id:
      "past-07",

    title:
      "VISIONARY TALK",

    date:
      "19th September 2025",

    location:
      "PCCOE",

    category:
      "INDUSTRY INTERACTION",

    description:
      "An industry-focused session guiding students on automotive engineering, innovation, career readiness and emerging technologies.",

    image:
      "/assets/events/past/visionary-talk-2025.jpg",

    status:
      "past",
  },


  {
    id:
      "past-08",

    title:
      "TEACHER'S DAY CELEBRATION 2025",

    date:
      "4th September 2025",

    location:
      "PCCOE",

    category:
      "CULTURAL EVENT",

    description:
      "A Teacher's Day celebration featuring faculty felicitation, customised portraits and interactive activities between students and teachers.",

    image:
      "/assets/events/past/teachers-day-2025.jpg",

    status:
      "past",
  },


  {
    id:
      "past-09",

    title:
      "MESA INDUCTION CEREMONY 2025",

    date:
      "12th August 2025",

    location:
      "PCCOE",

    category:
      "CULTURAL EVENT",

    description:
      "The formal induction ceremony welcoming the new MESA core team through introductions, badge felicitation, oath-taking and interaction with faculty.",

    image:
      "/assets/events/past/mesa-induction-2025.jpg",

    status:
      "past",
  },

];


/*
=========================================================
ONLY MEMORABLE EVENTS FROM OLDER YEARS
=========================================================
*/

export const legacyEvents = [

  {
    id:
      1,

    title:
      "PCCOE CHAMPIONS",

    image:
      "/assets/events/legacy/pccoe-champions.jpg",
  },


  {
    id:
      2,

    title:
      "ADHYAY",

    image:
      "/assets/events/legacy/adhyay.jpg",
  },


  {
    id:
      3,

    title:
      "UNMILAN",

    image:
      "/assets/events/legacy/unmilan.jpg",
  },


  {
    id:
      4,

    title:
      "TECH FEST",

    image:
      "/assets/events/legacy/techfest.jpg",
  },


  {
    id:
      5,

    title:
      "AUTO EXPO",

    image:
      "/assets/events/legacy/auto-expo.jpg",
  },


  {
    id:
      6,

    title:
      "SPORTS",

    image:
      "/assets/events/legacy/football.jpg",
  },

];