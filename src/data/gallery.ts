export type GalleryCategory =
  | "EVENTS"
  | "WORKSHOPS"
  | "COMPETITIONS"
  | "TEAM";


export type GalleryImage = {


  src: string;

  title: string;

  category: GalleryCategory;

};


export const galleryImages = [
  {
    title: "Event Photo 01",
    src: "/assets/gallery/events/event-01.jpg",
    category: "EVENTS",
  },

  {
    title: "Event Photo 02",
    src: "/assets/gallery/events/event-02.jpg",
    category: "EVENTS",
  },

  {
    title: "Event Photo 03",
    src: "/assets/gallery/events/event-03.jpg",
    category: "EVENTS",
  },

  {
    title: "Event Photo 04",
    src: "/assets/gallery/events/event-04.jpg",
    category: "EVENTS",
  },

  {
    title: "Event Photo 05",
    src: "/assets/gallery/events/event-05.jpg",
    category: "EVENTS",
  },

  {
    title: "Workshop Photo 01",
    src: "/assets/gallery/workshops/workshop-01.jpg",
    category: "WORKSHOPS",
  },

  {
    title: "Workshop Photo 02",
    src: "/assets/gallery/workshops/workshop-02.jpg",
    category: "WORKSHOPS",
  },


  {
    title: "Competition Photo 01",
    src: "/assets/gallery/competitions/competition-01.jpg",
    category: "COMPETITIONS",
  },

  {
    title: "Competition Photo 02",
    src: "/assets/gallery/competitions/competition-02.jpg",
    category: "COMPETITIONS",
  },

  {
    title: "Competition Photo 03",
    src: "/assets/gallery/competitions/competition-03.jpg",
    category: "COMPETITIONS",
  },

  {
    title: "Competition Photo 04",
    src: "/assets/gallery/competitions/competition-04.jpg",
    category: "COMPETITIONS",
  },

  {
    title: "Team Photo 01",
    src: "/assets/gallery/team/team-01.jpg",
    category: "TEAM",
  },

  {
    title: "Team Photo 02",
    src: "/assets/gallery/team/team-02.jpg",
    category: "TEAM",
  },

  {
    title: "Team Photo 03",
    src: "/assets/gallery/team/team-03.jpg",
    category: "TEAM",
  },

  
];