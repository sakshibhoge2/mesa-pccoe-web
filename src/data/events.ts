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
UPCOMING + CURRENT YEAR PAST EVENTS
*/

export const events: MesaEvent[] = [
  {
    id:
      "event-01",

    title:
      "Teacher's Day Celebration",

    date:
      "7th September",

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
      "An Exclusive interaction with a distinguished guest.",

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
      "Last week of October",

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


  /*
  EXAMPLE CURRENT YEAR PAST EVENT

  {
    id: "past-01",
    title: "EVENT NAME",
    date: "12 AUG 2026",
    location: "PCCOE",
    category: "TECHNICAL EVENT",
    description: "Short description.",
    image: "/assets/events/past/event-01.jpg",
    status: "past",
  },
  */


  {
    id: "past-01",
    title: "MESA INDUCTION",
    date: "12 AUG 2026",
    location: "PCCOE",
    category: "CULTURAL EVENT",
    description: "An induction program for new members of the MESA club, introducing them to the club's activities and goals.",
    image: "/assets/events/past/event-01.jpg",
    status: "past",
  },
  

    {
    id: "past-02",
    title: "ECO-FRIENDLY GANPATI MAKING WORKSHOP",
    date: "12 AUG 2026",
    location: "PCCOE",
    category: "WORKSHOP",
    description: "A workshop focused on creating eco-friendly Ganpati idols, promoting sustainable practices during the festival.",
    image: "/assets/events/past/event-02.jpg",
    status: "past",
  },

];


/*
ONLY MEMORABLE EVENTS FROM OLDER YEARS
*/

export const legacyEvents = [
  {
    id:
      "legacy-01",

    title:
      "PCCOE CHAMPIONS",
  },

  {
    id:
      "legacy-02",

    title:
      "ADHYAY",
  },

  {
    id:
      "legacy-03",

    title:
      "AUTO EXPO",
  },

  {
    id:
      "legacy-04",

    title:
      "UNMILAN",
  },

  {
    id:
      "legacy-05",

    title:
      "TECH FEST",
  },

  {
    id:
      "legacy-05",

    title:
      "SPORTS",
  },

];