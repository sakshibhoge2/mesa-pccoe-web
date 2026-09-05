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
      "event-02",

    title:
      "ADHYAY",

    date:
      "13th or 14th January 2027",

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
  =======================================================
  */

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

];