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
  {
    id: "jane-shelter-project",
    title: "Jane's Shelter Initiative",
    subtitle: "Building Hope for a Widow and Her Disabled Child",
    date: "2023",
    venue: "Singorwet",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F72206cf17956498489cd23662dcc1778?format=webp&width=800",
    theme: "Shelter, Dignity & Community Care",
    description:
      "Jane, a widow caring for her disabled daughter Chepkoech, received a new shelter built by compassionate well-wishers. Rev Caleb and Simion Titany visited to celebrate this life-changing gift in 2023.",
    contact: "+254794107724",
    impact:
      "Provided safe shelter for vulnerable widow and disabled child, restoring dignity and security",
    fullDescription:
      "Jane's story is one of resilience, pain, and ultimately, grace. As a widow, Jane faces the daily challenges of single parenthood while caring for her daughter Chepkoech, who developed a condition while still young that has left her with significant disabilities. Managing both the emotional weight of loss and the physical demands of caring for a disabled child has been an overwhelming burden.\n\nFor too long, Jane's family lived in inadequate shelter—unsafe, exposed to the elements, and a constant reminder of their vulnerability. But in 2023, a remarkable community response transformed their lives.\n\nWell-wishers came forward with resources and labor. Community members worked tirelessly to construct a proper shelter for Jane's family—a safe haven built with brick, proper roofing, and sturdy materials. It was not just the physical structure that changed; it was Jane's sense of hope and dignity.\n\nRev Caleb, Director of the Agc Church in South Rift, and Simion Titany made a special visit to Jane's home at Singorwet to see the family and celebrate their new beginning. Their visit represented more than charity—it was a declaration to Jane that she was seen, valued, and cared for by her community.\n\nThis shelter project demonstrates that true compassion shows up. It comes with willing hands, generous hearts, and the presence of leaders who know that everyone deserves safe shelter and dignity. Jane's story is a testament to the power of community coming together to lift up its most vulnerable members.",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F72206cf17956498489cd23662dcc1778?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F40db8620a4ad4c7fae4bbffde982981c?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F98a0d0d56f2f48478313341fcd660c85?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F187c1f9a216c4ec39910acb126303b64?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F0ddaa3c9125d4750bcf4d3ceed4407c0?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F33c56a5c395b4532ae6582648dcd153e?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fe2b9ede08099401da526e8d62c38e13b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F6b4f8bd8dafb4fc48fccf8886e17df96?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F32a256aeab0441a0be06a099c6fc821a?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fd07f2d5eac304519a3b2aa2943d55b7a?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F87fe3635655b4047af27d8a5bba8e201?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fdab350cb6fec4fbb97cd1c3bb65dfeba?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fe23ff48c9ab6496e9dac4fb006c8c56f?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F5eb882ddfd6b4a8693f9f1987f34a4f1?format=webp&width=800",
    ],
    actualImpact: [
      "Provided safe, adequate shelter for vulnerable widow and disabled child",
      "Restored dignity and security to Jane's family",
      "Demonstrated community solidarity with vulnerable populations",
      "Ensured protection from harsh weather and unsafe living conditions",
      "Recognized the needs of caregivers of disabled children",
      "Showed leadership commitment through visits and support",
    ],
    testimonials: [
      {
        name: "Jane",
        role: "Direct Beneficiary",
        quote:
          "When I was widowed, I thought life was over. Caring for my daughter alone, without a safe home... I was losing hope. But when this community came together to build this shelter, they gave me back my dignity. Now I have a safe place for my daughter, and I can breathe again.",
      },
      {
        name: "Rev Caleb",
        role: "Director, Agc Church South Rift",
        quote:
          "Jane's situation broke my heart. A widow caring for a disabled child, living in an unsafe shelter—this is exactly why we exist as a church community. When I visited after the shelter was built, I saw tears of joy. That's the impact of genuine care.",
      },
      {
        name: "Simion Titany",
        role: "Community Leader",
        quote:
          "Visiting Jane's home to see her new shelter was humbling. She welcomed us with such gratitude. This project shows that our community hasn't forgotten her. This is what we're called to do—lift up the vulnerable.",
      },
      {
        name: "Community Member",
        role: "Well-wisher",
        quote:
          "Building Jane's shelter taught me about real giving. It wasn't about charity from far away—it was about neighbors caring for neighbors. Every brick laid was a declaration that Jane matters to us.",
      },
    ],
    longTermImpact:
      "Jane's shelter provides her family with safe, secure housing and protection from the elements. The experience of community care has restored her hope and sense of belonging. The project demonstrates the importance of supporting caregivers of disabled children—a often-overlooked vulnerable population. For Chepkoech, a safe home provides stability critical to her wellbeing. This initiative shows that widows and families with disabilities deserve not just sympathy, but concrete support and community investment.",
  },
  {
    id: "gideon-korir-house",
    title: "Gideon Korir's Home",
    subtitle: "Building Dignity for a Blind Man in Bomet East",
    date: "Community Housing Project",
    venue: "Bomet East",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fd370567394b84b789bd3feda7bd42d43?format=webp&width=800",
    theme: "Accessibility, Inclusion & Community Care",
    description:
      "Gideon Korir, a blind man from Bomet East, received the gift of a home built by compassionate community members who recognized his need for safe, accessible shelter.",
    contact: "+254794107724",
    impact:
      "Provided safe, accessible housing for a blind community member, transforming his living situation",
    fullDescription:
      "Gideon Korir's story is one of resilience and the transformative power of inclusion. Living with blindness in Bomet East, Gideon faced daily challenges that extended far beyond what sighted individuals might recognize. Safe shelter—a home designed with his accessibility needs in mind—was not a luxury but a necessity.\n\nFor too long, Gideon lived without adequate housing. The lack of safe, accessible shelter compounded the challenges he already faced as a blind person in a community that may not fully understand his needs. But the community of Bomet East stepped forward.\n\nWell-wishers and community members came together with a singular purpose: to build Gideon a home. This was more than just construction work—it was a declaration that Gideon's life matters, that he belongs in his community, and that accessibility and inclusion are not afterthoughts but essential values.\n\nThe house built for Gideon is a home designed with care and intention. Community members donated labor, materials, and expertise. The construction process itself became a powerful statement: when we see someone in need, we respond not with pity but with action and dignity.\n\nGideon's new home provides him with:\n- Safe, secure shelter from harsh weather\n- An environment designed with accessibility in mind\n- Reduced daily risks and hazards\n- A space that is truly his own\n- Recognition that he is valued by his community\n\nThis project reminds us that inclusion means seeing people with disabilities not as charity cases but as community members whose dignity and comfort matter just as much as anyone else's.",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fd370567394b84b789bd3feda7bd42d43?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F1eec42f470ed467c9ff5180e7fca3fb0?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fea1ac701f5f044e0827d680ed1084a00?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F05a8dda9ccb1494ab4de515bc3996a25?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F252d2a5c2e404d43979376aedd768dbc?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F78f330c927e045fda070f598a3b85637?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F4298fd3e891e412786985dbd004576ae?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F6c741989068947e49c17575b205061cf?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F1b0846c2c9274e9fba7a52d70f4a97df?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F3d905f359cc64a0685af1958d06b66c2?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F430c77784213405cb4db96c29d0b1d31?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F531626d1ebc54fe2b48dc39219945a52?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F85c5b98c27ad4607bb8416af5826b6e5?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F3871ebbd977d4bc1aa6fc199adca8c25?format=webp&width=800",
    ],
    actualImpact: [
      "Provided safe, accessible housing for a blind community member",
      "Created a home designed with accessibility needs in mind",
      "Demonstrated community commitment to inclusion",
      "Recognized the dignity and value of persons with disabilities",
      "Reduced daily risks and hazards for Gideon",
      "Provided security, privacy, and independence",
      "Showed that accessibility matters in community care",
    ],
    testimonials: [
      {
        name: "Gideon Korir",
        role: "Direct Beneficiary",
        quote:
          "I never thought I would have a home like this. When I was living in unsafe conditions, I felt forgotten. But this community came together and said I matter. Now I have a home that is safe, that I can navigate, that is truly mine. I am grateful beyond words.",
      },
      {
        name: "Community Leader",
        role: "Local Representative",
        quote:
          "Building Gideon's house taught us about real inclusion. It's not about treating people with disabilities as charity cases. It's about recognizing that everyone deserves safe shelter and dignity. Gideon's home is a symbol of what our community values.",
      },
      {
        name: "Community Member",
        role: "Project Participant",
        quote:
          "Working on Gideon's house changed my perspective. I realized that accessibility isn't something extra—it's fundamental. Every person, regardless of ability, deserves a safe place to live. This project made our community stronger.",
      },
      {
        name: "Volunteer Builder",
        role: "Construction Team",
        quote:
          "When we started building, we thought about what Gideon would need to feel safe and independent. We built with care and intention. Seeing Gideon's joy when he first walked through his new home—that's why we do this work.",
      },
    ],
    longTermImpact:
      "Gideon's home provides him with safe, secure shelter specifically designed for his accessibility needs. The house protects him from the elements and reduces daily hazards. Most importantly, it sends a powerful message: people with disabilities are valued members of the community who deserve dignified, accessible housing. This project demonstrates that inclusion requires intentional action and investment. Gideon's home will serve him for years to come, providing stability and security that was previously impossible.",
  },
  {
    id: "elias-kurgat-empowerment",
    title: "Elias Kurgat's Empowerment Initiative",
    subtitle: "Public Address System & Community Support for a Cancer Survivor",
    date: "2023",
    venue: "Nandi County",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F282a44ccd5f747f0b7e8b4f16e76b39f?format=webp&width=800",
    theme: "Hope, Recovery & Community Support for Survivors",
    description:
      "Elias Kurgat, a cancer survivor and amputee from Nandi County, received a public address system to support his livelihood. Pwani Oil sponsored three months of groceries for his family, demonstrating comprehensive community care.",
    contact: "+254794107724",
    impact:
      "Provided livelihood tool and essential support for cancer survivor and amputee, enabling economic activity and family sustenance",
    fullDescription:
      "Elias Kurgat's story is one of extraordinary resilience in the face of life's harshest challenges. As a cancer survivor and amputee in Nandi County, Elias has navigated not just the physical and emotional toll of cancer and limb loss, but also the economic struggles that follow when a person's ability to work is fundamentally altered.\n\nCancer is devastating enough—the physical pain, the emotional trauma, the loss of independence. But for Elias, survival brought a new set of challenges. As an amputee, the traditional pathways to earning income were closed to him. He faced the double burden of recovery and survival, not knowing how he would provide for his family.\n\nBut the community of Nandi County, alongside compassionate partners, recognized Elias's need and responded with purpose. A public address system was delivered to him—a tool that would enable him to engage in economic activity suited to his abilities and circumstances. This wasn't just charity; it was recognition that Elias still has gifts to give, skills to offer, and the capacity to contribute.\n\nBeyond the PA system, Pwani Oil stepped forward with three months of groceries for Elias's family. This comprehensive support addressed immediate survival needs while Elias adapted to his new reality and built a sustainable income path.\n\nElias's story reminds us that survivors deserve more than medical care—they deserve community support, livelihood opportunities, and the dignity of being able to provide for their families. When we invest in survivors, we invest in restoration and hope.",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F282a44ccd5f747f0b7e8b4f16e76b39f?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fde1eacfb8fe047f8969ad9a91710c720?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fb9ad0c21260548669ecfc7631f66cd76?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F0c4f84ed0258429586c65699a8da3c51?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F5bc9a82768314b19b05e7d8e5ff8dda4?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fa7dd2fbece3040c59de5fd36451f6c25?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F93f51108792840afa9199f3c2c0bbfff?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fc963629711c7444fa7c4bf38d78f88ad?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fc2c45ed5677e4ddf9d55f6eea6b99236?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fffe8388a4a0e44809d4b4afd6d5cb6ba?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F942ae380aad3439d910faedaba6f66e0?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fd13e407813c84df9b4c0e232f3c2913a?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F2a995cdcba574e1e81cef3223610ac61?format=webp&width=800",
    ],
    actualImpact: [
      "Provided public address system for livelihood and community engagement",
      "Enabled economic activity for cancer survivor and amputee",
      "Sponsored three months of groceries for family sustenance",
      "Demonstrated comprehensive community support for survivors",
      "Recognized dignity and capacity of persons with disabilities",
      "Combined immediate relief with long-term livelihood opportunity",
      "Showed corporate responsibility through Pwani Oil partnership",
    ],
    testimonials: [
      {
        name: "Elias Kurgat",
        role: "Cancer Survivor & Amputee",
        quote:
          "Cancer took my health. Amputation took my mobility. But this community showed me I still have a future. The PA system gives me a way to work again, and the three months of groceries gave my family breathing room. I am grateful and hopeful again.",
      },
      {
        name: "Community Leader",
        role: "Local Representative",
        quote:
          "Elias's situation could have been the end of his story. But we chose differently. By providing him with tools and support, we said: You still belong. You still matter. Your life has value. That's what this project represents.",
      },
      {
        name: "Pwani Oil Representative",
        role: "Corporate Partner",
        quote:
          "Supporting Elias and his family aligned perfectly with our commitment to community care. Cancer survivors and persons with disabilities often face barriers that society creates. We're honored to be part of removing those barriers.",
      },
      {
        name: "Well-wisher",
        role: "Community Member",
        quote:
          "Seeing Elias receive the PA system and the groceries was moving. It shows that when someone faces catastrophic illness and disability, our community steps up. We don't abandon our own.",
      },
    ],
    longTermImpact:
      "The public address system provides Elias with a sustainable income pathway suited to his current abilities and circumstances. The three-month grocery sponsorship addressed immediate family needs, allowing Elias to focus on recovery and adaptation. This comprehensive approach—combining livelihood tools with essential support—demonstrates that true community care for cancer survivors and persons with disabilities requires multifaceted intervention. Elias's recovery journey is ongoing, but he now has tools, hope, and community backing to rebuild his life with dignity.",
  },
];
