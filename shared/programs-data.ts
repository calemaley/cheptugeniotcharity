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
  image:
    "https://via.placeholder.com/800x600?text=Featured+Program+Coming+Soon",
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
    impact:
      "Supported multiple family members and community members with housing and livelihood",
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
  {
    id: "beatrice-hope",
    title: "Beatrice's Hope Initiative",
    subtitle: "Healthcare, Livelihood & Education in Ndurio, Nandi County",
    date: "Community Support Program",
    venue: "Ndurio, Nandi County",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fbacc5d597a1944f8b8b2046c88adbd91?format=webp&width=800",
    theme: "Healthcare, Livelihood & Education",
    description:
      "Supporting Beatrice, a community member facing health challenges, with a posho mill for livelihood and sponsoring her children's education at AIC Chebisas Girls.",
    contact: "+254794107724",
    impact:
      "Supported Beatrice's family with livelihood tools and educational opportunities for children",
    fullDescription:
      "Beatrice's Hope Initiative represents our commitment to holistic community support. When we learned about Beatrice's struggle with a liver condition in Ndurio, Nandi County, we knew we had to act comprehensively.\n\nThis initiative combines three essential pillars of support:\n\n**Healthcare & Dignity**: Recognizing Beatrice's health challenges, we provided compassionate support and resources to help her maintain dignity during her health journey.\n\n**Livelihood Empowerment**: We delivered a posho mill to Beatrice's family, providing a sustainable income-generating opportunity. This tool enables her family to serve their community while securing their economic future.\n\n**Educational Excellence**: Perhaps most importantly, we sponsored her children's education. Her daughter Sharon received a sponsorship to attend AIC Chebisas Girls as a boarding student—a life-changing opportunity that transforms not just one child, but an entire family's trajectory.\n\nThis project demonstrates that true compassion isn't one-dimensional. It addresses immediate needs while creating sustainable pathways for long-term improvement. By supporting Beatrice, we're investing in her children's futures and her family's independence.",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fd595719c8b7441488efe432bd1b6d3b8?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fcfac217e8cd845bda27f802cc23151a5?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fbacc5d597a1944f8b8b2046c88adbd91?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fec9b1e2dcbcd49058f03b833bf31e90c?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F57692a20cf1c4ccbb2b5b113ce7d9a07?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F2f7dded273d646958b91ea75fa2faa34?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F01a507c8cbf4418cb457e4ff2c6256de?format=webp&width=800",
    ],
    actualImpact: [
      "Provided posho mill for Beatrice's family livelihood empowerment",
      "Sponsored Sharon's education at AIC Chebisas Girls as a boarding student",
      "Supported multiple children in accessing quality education",
      "Created sustainable income generation for the family",
      "Demonstrated integrated support addressing health, livelihood, and education",
    ],
    testimonials: [
      {
        name: "Beatrice",
        role: "Direct Beneficiary",
        quote:
          "I was struggling with my health and worried about my children's future. When the Cheptugeniot team arrived, they didn't just give charity—they gave hope. The posho mill gives our family dignity through work, and knowing Sharon is in school learning, I can focus on getting better.",
      },
      {
        name: "Sharon",
        role: "Student at AIC Chebisas Girls",
        quote:
          "My mother's illness scared me, but this sponsorship showed me that someone believes in me. I'm grateful to be at AIC Chebisas Girls. I want to finish school and come back to help my mother and my community.",
      },
      {
        name: "Community Leader",
        role: "Local Representative",
        quote:
          "Beatrice's Hope Initiative shows real understanding of what families need. It's not just about giving something today—it's about building a foundation for tomorrow. The posho mill serves many families now, and Sharon's success will inspire other children to pursue education.",
      },
    ],
    longTermImpact:
      "The posho mill continues to provide Beatrice's family with sustainable income and serves multiple community families needing milling services. Sharon's education at AIC Chebisas Girls positions her as a future leader and role model for her community. This initiative demonstrates how targeted support across multiple life areas creates transformational change.",
  },
  {
    id: "sharon-university-journey",
    title: "Sharon's University Journey",
    subtitle: "Farewell & Celebration as Sharon Joins KIBABII University",
    date: "University Milestone Celebration",
    venue: "KIBABII University, Bungoma",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fde43de8f422640ee8813f1bac93605cb?format=webp&width=800",
    theme: "The Beginning of Excellence",
    description:
      "A joyful farewell and prayer ceremony celebrating Sharon's admission to KIBABII University to pursue a Bachelor of Education degree—a testament to the power of educational sponsorship.",
    contact: "+254794107724",
    impact:
      "Celebrated Sharon's university admission and prepared her for higher education journey",
    fullDescription:
      "Sharon's University Journey marks a pivotal moment in a young woman's life and in the Cheptugeniot Initiative's ongoing commitment to education. This event celebrated Sharon's admission to KIBABII University to pursue a Bachelor of Education degree—a remarkable achievement made possible through the educational sponsorship initiated during the Beatrice's Hope Initiative.\n\nThe farewell and prayers ceremony brought together family, community members, and supporters to:\n\n**Celebrate Excellence**: Recognition of Sharon's hard work and academic achievement in completing her secondary education at AIC Chebisas Girls as a sponsored boarding student.\n\n**Spiritual Preparation**: Community prayers and blessings for Sharon's university journey, her success in her education, and her future as an educator.\n\n**Family Support**: Emotional and spiritual support from her mother Beatrice and extended family, demonstrating how one family's transformation inspires an entire community.\n\n**Vision Building**: Encouraging Sharon to see herself not just as a beneficiary, but as a future educator and leader who will serve her community.\n\n**Hope Multiplication**: Showing other young people in the community that education sponsorship creates real, tangible pathways to tertiary education and professional careers.\n\nThis celebration is more than a farewell—it's a declaration that investment in one child's education creates ripples of hope and possibility for an entire generation. Sharon's journey at KIBABII University represents the fruits of compassionate action and the power of believing in a young person's potential.",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Faf660d1e88964a2e9297c8cee3de5322?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fb91d80d451a34ff1a55e0c6aadb9e64b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F8e2622cb97ab48ceb0f17ea02ebefda9?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F8d21679aebe74762b6dcd1edac65a813?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fc222ad9e71fd4ce596dd577a3e80b412?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F3424045806fe4cb29a9bf6c9dd117321?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F460a461017af42eeb7bb007d65b13342?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2Fde43de8f422640ee8813f1bac93605cb?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F48b4db1218394ef19b9cee690695888b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F0e24137099894f6597047d75b3c07500%2F9d14f26f0247487c8503df3b206e8d2c?format=webp&width=800",
    ],
    actualImpact: [
      "Celebrated Sharon's successful completion of secondary education with sponsorship",
      "Facilitated Sharon's admission to KIBABII University for Bachelor of Education degree",
      "Provided community prayers and spiritual preparation for university journey",
      "Strengthened family bonds through celebration of educational achievement",
      "Inspired other young people in the community to pursue higher education",
      "Demonstrated the long-term impact of educational sponsorship programs",
    ],
    testimonials: [
      {
        name: "Sharon",
        role: "University Student at KIBABII",
        quote:
          "The farewell ceremony was emotional and beautiful. Seeing my mother smile and pray for me, surrounded by people who believed in me—it confirmed that I must work hard and become an excellent educator. I want to return to my community as a teacher and inspire the next generation like I was inspired.",
      },
      {
        name: "Beatrice",
        role: "Sharon's Mother",
        quote:
          "I never thought my daughter would reach university. When she was sponsored to AIC Chebisas Girls, I was grateful. But seeing her now heading to KIBABII University to study education—I can't even find words. This is what happens when someone believes in you. My daughter will change lives as a teacher.",
      },
      {
        name: "Community Member",
        role: "Celebration Attendee",
        quote:
          "Sharon's journey gives hope to all our children. She came from a family struggling with health and poverty, and now she's going to university. If we invest in our young people's education, they will become our future leaders and teachers. This celebration is a reminder of what's possible.",
      },
    ],
    longTermImpact:
      "Sharon is now pursuing a Bachelor of Education degree at KIBABII University, positioning herself to become an educator and community leader. Her success serves as a visible testimony to the transformational power of educational sponsorship and continues to inspire her family members, siblings, and community peers to pursue educational excellence. Upon graduation, Sharon will have the knowledge and credentials to teach and uplift her community.",
  },
];
