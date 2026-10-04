export type FacultyMember = {
  id: string;
  name: string;
  designation: string;
  image: string;
  position?: string;
};

export const facultyMembers: FacultyMember[] = [
  {
    id: "dean-sdw",

    name: "Dr. P. A. Deshmukh",

    designation:
      "DEAN — STUDENT DEVELOPMENT & WELFARE",

    image:
      "https://res.cloudinary.com/dejkj4mzq/image/upload/v1790509585/dean-sdw.avif",

    position: "50% 18%",
  },

  {
    id: "hod",

    name: "Dr. P.R. Kale",

    designation:
      "HEAD OF DEPARTMENT",

    image:
      "https://res.cloudinary.com/dejkj4mzq/image/upload/v1790509585/hod.webp",

    position: "50% 18%",
  },

  {
    id: "mesa-faculty",

    name: "Mr. Shriyash S. Shinde",

    designation:
      "FACULTY INCHARGE — MESA",

    image:
      "https://res.cloudinary.com/dejkj4mzq/image/upload/v1790509586/mesa-faculty.jpg",

    position: "50% 18%",
  },
];