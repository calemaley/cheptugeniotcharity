export interface FeaturedEvent {
  title: string;
  subtitle: string;
  date: string;
  venue: string;
  image: string;
  theme: string;
  message: string;
  itemsNeeded: string[];
  contact: string;
  paymentLink: string;
  fullDescription: string;
  schedule: Array<{ time: string; activity: string }>;
  impactGoals: string[];
}

export const featuredEvent: FeaturedEvent = {
  title: "Upcoming Featured Program",
  subtitle: "Coming Soon",
  date: "TBD",
  venue: "TBD",
  image: "https://via.placeholder.com/800x600?text=Featured+Program+Coming+Soon",
  theme: "Building a Better Future Together",
  message: "Stay tuned for our next featured program announcement!",
  itemsNeeded: [],
  contact: "+254794107724",
  paymentLink: "#",
  fullDescription:
    "We're preparing exciting new programs to serve our communities. Check back soon for details about our upcoming initiatives and how you can get involved!",
  schedule: [],
  impactGoals: [],
};

// For homepage - recent programs (showing the featured event)
export const recentPrograms: Array<{
  image: string;
  title: string;
  description: string;
  date: string;
  venue: string;
}> = [];

// Past Projects Data
export const pastProjects = [
  {
    id: "kimuchul-compassion",
    title: "Kimuchul Compassion Project",
    subtitle: "Shelter Building & Posho Mill Empowerment for Simion Kosgei",
    date: "Community Visit & Support",
    venue: "Kimuchul, Bomet East",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F848107ce81d740708b42e9235664131b?format=webp&width=800",
    theme: "Compassion in Action: Building Shelter, Restoring Dignity",
    description:
      "A heartfelt journey to visit Simion Kosgei, a community member fighting cancer, where our team built a shelter for his family and provided a posho mill to empower the community.",
    contact: "+254794107724",
    impact: "Supported multiple family members and community members with housing and livelihood",
    fullDescription:
      "The Kimuchul Compassion Project began with a simple yet profound mission: to visit Simion Kosgei at his home in Kimuchul, Bomet East, and discover how we could truly make a difference in his life and his community.\n\nLed by Pastor Terer and guided by the spirit of compassion, our team traveled to meet Simion, a courageous individual battling cancer. Upon visiting, we witnessed the challenging living conditions and realized the urgent need for intervention.\n\nWhat started as a visit transformed into a comprehensive community project. We immediately began construction of a sturdy shelter for Simion's family, providing them with safe housing. Recognizing that true empowerment goes beyond shelter, we further blessed the community by providing a posho mill—a vital livelihood tool that would help many families grind maize and earn income.\n\nThis project exemplifies our belief that compassion is not just about meeting immediate physical needs, but about restoring dignity and creating sustainable pathways to self-sufficiency. Every nail hammered, every brick laid, and every community member trained represents our commitment to standing with those who face life's greatest challenges.",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F848107ce81d740708b42e9235664131b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fe9cd6cc95b064d8aa023370a139977fe?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fe2518ea9393d438cbd6e02a827736b48?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F037fe95482f1418a8c90ab8590c0e061?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F0167b0d41c9343ffb7ceb1c9e10ffae3?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fac0aaa33dc6f43cfb9cdfeef6fb41fd6?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F9061ac48d1f84d64a301fda74ead6f72?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F412a664934a94854835ab1477f45a10f?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fa5ca1d327a914234a1dd72e48975f1c5?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fff43f9560f584552a38db16c02d3f26a?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fad0959cefa48458f8a6bc77b29543ec0?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F0d8bf18ea18049f2850ca398fee12ed8?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F73fbf79b9de84140b588ba281280fa14?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F801fd446dd7b4542b52c129804cb2acf?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F3f50349f8bc84803b3614f6d31636659?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F33094b08fc1f49efa1abd9a8a9c5071b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fd454d49eef814244830a8c32b8006dca?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F19354574dc7342ed9af34f6b2c7fac6f?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F8d2eed29e0ac46a7832f6e6fe3c7f3db?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F613ab0c5d635487ab1eec3faacdbe9b5?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F8024ab0669de4b9384d29e572d396c71?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F3f8c04c7a69f4cd6898a68f8395056fc?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fffd97988ccd24721a8360526b3b76b63?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F8ccc42a7c0fd402abe8e4b962b730aab?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F91f699697a3b46dbab8c973c92cf17c0?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F0457c270bb5e4698b9653f934de36ed7?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F649e36f6036745c6a6f46c766ae1664d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F40ef2b6aedcb4a47b40e734a568830ff?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F130a610f237a4b0e89eaa3bc68f0aa2f?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fafbdf32bc3324c86947604c1fe7e4af2?format=webp&width=800",
    ],
    actualImpact: [
      "Provided safe shelter for Simion's family members",
      "Delivered posho mill for community livelihood empowerment",
      "Supported many families with grinding capabilities and income generation",
      "Demonstrated compassion and solidarity with those fighting health challenges",
      "Strengthened community bonds through collaborative action",
    ],
    testimonials: [
      {
        name: "Pastor Terer",
        role: "Community Leader",
        quote:
          "When we arrived at Simion's home, we saw not just a man fighting illness, but a family in need of hope. Building this shelter and providing the posho mill gave them back their dignity. It reminded us why we do this work.",
      },
      {
        name: "Community Member",
        role: "Local Resident",
        quote:
          "The posho mill has changed everything for us. Families can now grind maize affordably and earn income. But more than that, we felt the love and compassion from the Cheptugeniot team. They didn't just build a shelter; they built our hope.",
      },
      {
        name: "Simion's Family",
        role: "Direct Beneficiary",
        quote:
          "When they arrived, we thought it would be just a visit. Instead, they stayed and worked alongside us, building our home with their own hands. That kind of love cannot be forgotten. God bless them.",
      },
    ],
    longTermImpact:
      "The shelter continues to provide safe housing for the family, protecting them from the elements. The posho mill remains a vital community asset, enabling multiple families to earn sustainable income while serving the broader community's milling needs.",
  },
];
