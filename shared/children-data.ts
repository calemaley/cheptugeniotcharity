export interface Child {
  id: string;
  name: string;
  age: number;
  location: string;
  school: string;
  grade: string;
  story: string;
  needs: string[];
  image: string;
  monthlyNeed: number;
  sponsored: boolean;
  interests: string[];
  family: string;
  achievements?: string[];
  dreamJob: string;
}

export const allChildren: Child[] = [
  {
    id: "maria-001",
    name: "Kevin Gitonga",
    age: 8,
    location: "Nyanza County, Kenya",
    school: "Mwanza Primary School",
    grade: "Standard 3",
    story:
      "Maria loves mathematics and dreams of becoming a teacher. She walks 5km to school daily and helps her mother with farming after classes. Despite the long journey, she never misses a day and always has a bright smile.",
    needs: ["School fees", "Uniforms", "Books", "Lunch program"],
    image: "/children/child-1.jpg",
    monthlyNeed: 6075, // 45 USD converted to KES (45 * 135)
    sponsored: false,
    interests: ["Mathematics", "Reading", "Farming"],
    family: "Lives with mother and 2 siblings",
    achievements: [
      "Top in class mathematics",
      "Perfect attendance",
      "School prefect",
    ],
    dreamJob: "Teacher",
  },
  {
    id: "david-002",
    name: "David Kimaro",
    age: 12,
    location: "Rift Valley, Kenya",
    school: "Arusha Community Secondary",
    grade: "Form 1",
    story:
      "David is passionate about science and wants to become a doctor. His father is a subsistence farmer and struggles to pay school fees. David studies by candlelight and helps with farming before school.",
    needs: [
      "School fees",
      "Science books",
      "Laboratory equipment",
      "Transport",
    ],
    image: "/children/child-2.jpg",
    monthlyNeed: 8775, // 65 USD converted to KES (65 * 135)
    sponsored: false,
    interests: ["Biology", "Chemistry", "Football"],
    family: "Lives with father and 3 siblings",
    achievements: [
      "Science fair winner",
      "Football team captain",
      "Community volunteer",
    ],
    dreamJob: "Doctor",
  },
  {
    id: "grace-003",
    name: "Grace Mtema",
    age: 15,
    location: "Central Kenya",
    school: "Dodoma Girls Education Center",
    grade: "Form 3",
    story:
      "Grace excels in her studies and wants to become an engineer. She comes from a single-parent household and needs support to continue her education. She tutors younger students in her free time.",
    needs: ["School fees", "Textbooks", "Computer training", "Mentorship"],
    image: "/children/child-3.jpg",
    monthlyNeed: 10125, // 75 USD converted to KES (75 * 135)
    sponsored: false,
    interests: ["Mathematics", "Physics", "Technology"],
    family: "Lives with grandmother and 1 sibling",
    achievements: [
      "Regional math champion",
      "Peer tutor",
      "Technology club leader",
    ],
    dreamJob: "Engineer",
  },
  {
    id: "john-004",
    name: "John Massawe",
    age: 10,
    location: "Eastern Kenya",
    school: "Kilimanjaro Primary School",
    grade: "Standard 5",
    story:
      "John is a bright student who loves to read. His parents work as casual laborers and cannot afford his educational expenses consistently. He has read every book in his small school library twice.",
    needs: [
      "School fees",
      "Reading materials",
      "Uniform",
      "Nutritional support",
    ],
    image: "/children/child-4.jpg",
    monthlyNeed: 6750, // 50 USD converted to KES (50 * 135)
    sponsored: false,
    interests: ["Reading", "Writing", "History"],
    family: "Lives with both parents and 4 siblings",
    achievements: [
      "Reading champion",
      "Story writing contest winner",
      "Library assistant",
    ],
    dreamJob: "Writer",
  },
];
