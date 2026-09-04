export type FacultyMember = {
  id: string;
  name: string;
  designation: string;
  image: string;
  position?: string;
};

export const facultyMembers: FacultyMember[] = [
  {
    id:
      "dean-sdw",

    name:
      "Dr. P. A. Deshmukh",

    designation:
      "DEAN — STUDENT DEVELOPMENT & WELFARE",

    image:
      "/assets/about/dean-sdw.jpg",

    position:
      "50% 18%",
  },

  {
    id:
      "hod",

    name:
      "Dr. P.R. Kale",

    designation:
      "HEAD OF DEPARTMENT",

    image:
      "/assets/about/hod.jpg",

    position:
      "50% 18%",
  },

  {
    id:
      "mesa-faculty",

    name:
      "Mr. Shriyash S. Shinde",

    designation:
      "FACULTY INCHARGE — MESA",

    image:
      "/assets/about/mesa-faculty.jpg",

    position:
      "50% 18%",
  },
];