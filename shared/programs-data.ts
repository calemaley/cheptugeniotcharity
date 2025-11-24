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
    id: "ndurio-empowerment",
    title: "Ndurio Empowerment Program",
    subtitle: "Supporting Beatrice & Education for Sharon",
    date: "Community Outreach",
    venue: "Ndurio, Nandi County",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F446187bd305645d09718fd415677140e?format=webp&width=800",
    theme: "Empowerment Through Livelihood & Education",
    description:
      "Ndurio Nandi county empowered Beatrice, who is facing a liver condition, with a posho mill. Well-wishers sponsored education for her children, with Sharon receiving sponsorship at AIC Chebisas Girls.",
    contact: "+254794107724",
    impact:
      "Provided livelihood support and sponsored children's education transition from day school to boarding",
    fullDescription:
      "The Ndurio Empowerment Program represents a community-wide effort to support Beatrice and her family during challenging times. Beatrice, a courageous member of the Ndurio community in Nandi County, has been battling a liver condition while trying to provide for her children.\n\nRecognizing both the immediate need for livelihood support and the long-term importance of education, our community came together with a comprehensive approach:\n\n**Livelihood Empowerment**: We provided Beatrice with a posho mill—a transformative tool that enables her family to generate sustainable income while serving the broader community's milling needs. This allows Beatrice to maintain her dignity through productive work, even while managing her health challenges.\n\n**Educational Excellence**: Through the generosity of well-wishers, we were able to sponsor education for Beatrice's children. Most significantly, her daughter Sharon received a full sponsorship to attend AIC Chebisas Girls—moving from day school to boarding school. This opportunity transforms Sharon's future and demonstrates to the entire community that education is within reach for all children, regardless of their family's circumstances.\n\n**Community Solidarity**: This program showcases the power of community members coming together to lift one another up, proving that when we act collectively with compassion, we can overcome even the most difficult circumstances.",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fe38958e325ba48ddae4ca5785cbbb571?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F69cec449841a4759a2d5a08d1903af88?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F6d7b2c5482e94ed2a5e8983181829b60?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F403cf8151f784a3bad6678beffdd271c?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F446187bd305645d09718fd415677140e?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fe924c9d145de4c2c9d225cf963d4894b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fc05c4e01155d4d91b9d0ffd3aa8ac205?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F960cc9326d904f139e5281816dab161a?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fe087f44689a0433aa179ff70c7e444a4?format=webp&width=800",
    ],
    actualImpact: [
      "Provided posho mill for Beatrice's livelihood empowerment",
      "Sponsored Sharon's education at AIC Chebisas Girls boarding school",
      "Created sustainable income opportunity for the family",
      "Enabled transition from day school to boarding for Sharon",
      "Demonstrated community-wide support and solidarity",
      "Inspired other families in the community about educational opportunities",
    ],
    testimonials: [
      {
        name: "Beatrice",
        role: "Direct Beneficiary",
        quote:
          "When I was struggling with my health, I thought my children's future was lost. But this community came together. The posho mill gives me purpose and income, and Sharon at boarding school gives me hope. Thank you for believing in us.",
      },
      {
        name: "Sharon",
        role: "Student at AIC Chebisas Girls",
        quote:
          "I never thought I would get to boarding school. My mother was sick and things were difficult. But the sponsors believed in me. Now I'm in AIC Chebisas Girls and I'm working hard to make my mother proud.",
      },
      {
        name: "Community Member",
        role: "Local Resident",
        quote:
          "Watching what happened for Beatrice and Sharon inspired us all. It shows that when we work together, we can help each other overcome even the biggest challenges. The posho mill serves our whole community now.",
      },
    ],
    longTermImpact:
      "The posho mill has become a vital community asset, providing Beatrice's family with sustainable income while serving many families in Ndurio. Sharon's success at AIC Chebisas Girls opens pathways for other children in the community. This program demonstrates the transformative power of combining livelihood support with educational opportunity.",
  },
  {
    id: "sharon-university-journey",
    title: "Sharon's University Journey",
    subtitle: "Farewell & Prayers for Kibabii University",
    date: "10th August",
    venue: "Community Gathering",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F6a58651bbfff4c34a388dcd1f198c415?format=webp&width=800",
    theme: "Education as Transformation: Sharon's Path to Excellence",
    description:
      "A joyful farewell and prayer gathering for Sharon as she embarks on her Bachelor of Education degree at Kibabii University, celebrating her achievement and inspiring the community.",
    contact: "+254794107724",
    impact:
      "Celebrated Sharon's educational achievement and inspired community members about the power of education",
    fullDescription:
      "On 10th August, our community came together to celebrate a remarkable milestone—Sharon's admission to Kibabii University to pursue a Bachelor of Education degree.\n\nThis gathering was more than just a farewell; it was a celebration of hope, determination, and the transformative power of education. Sharon's journey from day school to boarding school at AIC Chebisas Girls, and now to university, represents the dreams we hold for every child in our community.\n\nThe event brought together family members, community leaders, and well-wishers who gathered to offer prayers, blessings, and encouragement as Sharon embarked on this exciting new chapter. There were words of wisdom shared about the responsibility that comes with education, the importance of working hard, and returning to serve the community.\n\nSharon's success is a testament to the power of community support. It shows that when we invest in our children's education, we invest in the future of our entire community. Her journey from a child whose mother was struggling with health challenges to a university student is a story of resilience, hope, and the life-changing impact of educational opportunity.\n\nAs Sharon moves forward to study Education, we are confident that she will become an excellent educator and community leader, bringing positive change to many lives.",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F6a58651bbfff4c34a388dcd1f198c415?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F139ee449bddf495fbd5d7465d0b100bb?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F47060f010d034119a8fd45a2ba55a642?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fe9424666b15447e2b885883679b9344c?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F85d94c28ba8b4e9991c9aafb003be957?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fd1fce74bea774b449d0617e4539f454b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F6c0df51d38ae44149123c0d5dae024b4?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F967f6d1f56de4b70a22d539e8b124c2e?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F575928e5d7964acea29ac34ee987c3ac?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F5a932236e0b84d00a27747caf58c8fa9?format=webp&width=800",
    ],
    actualImpact: [
      "Celebrated Sharon's admission to Kibabii University for Bachelor of Education",
      "Brought community together for prayers and blessings for Sharon's future",
      "Demonstrated the impact of educational investment and community support",
      "Inspired other young people in the community about university opportunities",
      "Recognized the journey from challenge to triumph",
      "Showed the importance of community involvement in educational milestones",
    ],
    testimonials: [
      {
        name: "Sharon",
        role: "University Student, Kibabii University",
        quote:
          "The prayers and blessings from my community on that day gave me strength and confidence. I am going to Kibabii University to study Education so I can return and teach our children. I am grateful for everyone who supported me.",
      },
      {
        name: "Community Elder",
        role: "Local Leader",
        quote:
          "Seeing Sharon move from being a child whose mother was struggling to a university student is a miracle. This is what happens when a community comes together with love and purpose. Sharon, go and excel!",
      },
      {
        name: "Family Member",
        role: "Sharon's Relative",
        quote:
          "We prayed for this day. Watching Sharon go to university brings joy to her mother's heart and hope to our entire family. The community's support made this possible.",
      },
    ],
    longTermImpact:
      "Sharon's enrollment at Kibabii University represents a significant achievement not just for her, but for her entire community. Her success story will inspire other children to pursue higher education. As she studies to become an educator, Sharon is positioned to return to her community as a teacher and leader, creating a multiplier effect of positive change for generations to come.",
  },
];
