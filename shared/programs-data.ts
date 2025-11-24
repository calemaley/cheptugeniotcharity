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
    id: "sharon-kibabii-farewell",
    title: "Sharon's University Farewell & Prayers",
    subtitle: "Farewell Celebration & Prayers for KIBABII University Journey",
    date: "10th August 2024",
    venue: "KIBABII University Main Campus, Bungoma",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fcbdba87acb194f4db1a1717bf50aaed7?format=webp&width=800",
    theme: "Celebrating Educational Success & New Beginnings",
    description:
      "On 10th August 2024, we gathered for a memorable farewell and prayers for Sharon as she joined KIBABII University to pursue a Bachelor of Education degree—a testament to the transformative power of education and community support.",
    contact: "+254794107724",
    impact:
      "Celebrated Sharon's educational achievement and prayed for her success at university",
    fullDescription:
      "On the 10th of August 2024, our community came together for a truly special and emotional occasion—a farewell celebration and prayer session for Sharon as she embarked on her university journey at KIBABII University, Bungoma.\n\nThis event represented a milestone not just for Sharon, but for her entire family and our community. After years of dedicated sponsorship and support, Sharon had successfully completed her secondary education and earned admission to KIBABII University to study Bachelor of Education—a path that will eventually allow her to give back to her community as an educator.\n\n**A Community Milestone**: The gathering brought together family members, friends, community leaders, and supporters who had been part of Sharon's educational journey. It was a time to celebrate her achievement, acknowledge the sacrifice of her mother Beatrice and the broader community, and recognize how far Sharon had come.\n\n**Prayers & Blessings**: The event was deeply spiritual in nature, with prayers and blessings offered for Sharon's success at university. Community leaders and pastors prayed for her academic excellence, personal growth, and safe return to serve her community as an educated woman.\n\n**A New Chapter**: As Sharon stepped into this new chapter at KIBABII University, the community's support didn't diminish—instead, it transformed into prayers, encouragement, and continued investment in her future. This farewell was not an ending, but a beautiful beginning of a new season of growth and opportunity.\n\n**The Bigger Picture**: Sharon's journey represents what becomes possible when a community invests in education. From day school sponsorship to boarding school support, and now to university—this is the trajectory of transformation that we believe in and work toward for every child in our care.",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fcbdba87acb194f4db1a1717bf50aaed7?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fc6be16c21ce342bfa7710378c7bea79f?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Ff0ffabb36fa5470bbea21308a709468d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fbc5ce0fef387410ab62f8807566680ba?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F07cdcb03492b4b349f521a4352b244cc?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F7d3d3eaf1adf4f9cab1e48780086c14c?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fd37e552c828f4d0a8b2537b8040cd2f3?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Feabf4d6cd33244fdb2ed9d02cc191c3d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F00dea15dfd374e40b978eb07a12b2898?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F0a3c669ad4694bd59db830bacb499729?format=webp&width=800",
    ],
    actualImpact: [
      "Celebrated Sharon's successful transition to university education",
      "Brought together community, family, and supporters for prayers and blessing",
      "Strengthened community bonds through shared celebration of achievement",
      "Demonstrated the fruit of years of educational sponsorship investment",
      "Inspired other young people in the community about educational possibilities",
      "Affirmed commitment to supporting Sharon through her university journey",
    ],
    testimonials: [
      {
        name: "Sharon",
        role: "KIBABII University Student",
        quote:
          "This farewell meant so much to me. Seeing my community come together to pray for me and celebrate my achievement was overwhelming. I know that even though I'm now at university, my community is still with me. This motivates me to work hard and make you all proud.",
      },
      {
        name: "Beatrice",
        role: "Sharon's Mother",
        quote:
          "As I watched my daughter step into university, my heart was full of gratitude. From struggling to pay for school fees to seeing her graduate secondary school and now enter university—this journey has been amazing. The community's support hasn't just changed Sharon's life; it has changed our entire family's future.",
      },
      {
        name: "Community Leader",
        role: "Local Pastor",
        quote:
          "Witnessing Sharon's journey from day school to boarding school to university has been a privilege. This farewell was our opportunity to bless her and commit to praying for her success. Sharon represents what education can do—not just for one person, but for an entire community's future.",
      },
    ],
    longTermImpact:
      "Sharon's successful admission to KIBABII University to study Bachelor of Education opens doors for both her personal future and her community's future. As an educated woman returning to serve her community as a teacher, Sharon will become a role model and mentor for the next generation. Her journey demonstrates the transformative power of educational sponsorship and community investment in young people.",
  },
  {
    id: "jane-shelter-singorwet",
    title: "Jane's Shelter & House Dedication",
    subtitle: "Providing Safe Housing for a Widow & Her Disabled Child",
    date: "2023",
    venue: "Singorwet",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Feffeb03f25094afb82063eb09efe1659?format=webp&width=800",
    theme: "Shelter, Dignity & Care for Vulnerable Families",
    description:
      "In 2023, well-wishers came together to build a safe shelter for Jane, a widow caring for her disabled daughter Chepkoech. Rev. Caleb and community leaders dedicated the house, offering prayers and support for the family.",
    contact: "+254794107724",
    impact:
      "Built safe shelter for widow-headed household with disabled child",
    fullDescription:
      "Jane's story is one of courage, vulnerability, and the transformative power of community compassion. As a widow raising a disabled daughter alone, Jane faced daily challenges of providing safe shelter, food, and care for her family in Singorwet.\n\nHer daughter Chepkoech, who developed a condition when she was young, requires special care and a safe, dignified environment. Yet Jane's modest means made it nearly impossible to provide the secure housing her family desperately needed. The family lived in conditions that left them exposed to the elements and vulnerable to further hardship.\n\n**A Community Response**: Word of Jane's struggle reached compassionate well-wishers who believed that every family deserves dignity and safety. They came forward to contribute materials, labor, and resources to build a proper shelter for Jane and Chepkoech.\n\n**Building Hope**: The construction process became a community endeavor, bringing together neighbors, church leaders, and committed individuals who worked side by side. Materials including bricks, cement, corrugated iron, and other building supplies were gathered and utilized. The shelter rose from the ground, not just as a structure of brick and metal, but as a tangible expression of hope and solidarity.\n\n**A Sacred Dedication**: In a beautiful ceremony, Rev. Caleb, director of AGC Church S. Rift, along with community leaders and well-wishers, gathered at Singorwet to dedicate Jane's new home. The event was marked by prayers for Jane's family, blessings for their future, and a renewed commitment to supporting vulnerable families in the community.\n\n**More Than a House**: For Jane and Chepkoech, this shelter means security, protection from harsh weather, and a dignified space to call home. But it also means something deeper—it means they are not forgotten, that their community cares, and that there are people willing to sacrifice to restore dignity to those facing life's hardest circumstances.",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fd3a70de1cc6f4a4483f9bb3726ae8555?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F7aa11c9636594517a92479bd4facaea0?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F4f1eceefceee46bfad7718964d2180ba?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F6d65c1f4bcde4c4cacc5ebfb618dcd98?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fc70867817dfb41da8349ccf525e54d5d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F14d39f4490214be5a5e4210469eaa37c?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F64db7ca8045c456dbfbc4e33692008f8?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F34eabeb6b3b84e6891b65e7e82f6e4e7?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Ff958293a810f4a34bba7928a4745bf2f?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Feffeb03f25094afb82063eb09efe1659?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fdbb8dae58567402e9f6968af7d7b8a3b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F450af2bedf444cffbae455b9b629871a?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Ffef88fc4204b497d830f5024bd75f360?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F368baf77b2304bedad3d73e88670a0ca?format=webp&width=800",
    ],
    actualImpact: [
      "Provided safe, dignified shelter for a widow and her disabled child",
      "Protected vulnerable family from exposure to harsh weather",
      "Demonstrated community solidarity with most vulnerable households",
      "Created secure space for Chepkoech to receive care with dignity",
      "Strengthened Jane's ability to focus on caregiving",
      "Inspired other community members to support vulnerable families",
      "Affirmed the value and dignity of every person, regardless of circumstance",
    ],
    testimonials: [
      {
        name: "Jane",
        role: "Widow & Beneficiary",
        quote:
          "I didn't know how I would keep my daughter safe and sheltered. When this community came and built this house, I felt like God was answering my prayers. Now Chepkoech has a safe place, and I can focus on caring for her without worrying about the rain coming through the roof.",
      },
      {
        name: "Rev. Caleb",
        role: "Director, AGC Church S. Rift",
        quote:
          "When we visited Jane and saw her living conditions, we knew we had to act. Building this shelter was an act of faith and compassion. In dedicating this house, we dedicated ourselves to standing with the most vulnerable in our community. Jane's story is a reminder of why we do this work.",
      },
      {
        name: "Community Member",
        role: "Local Resident",
        quote:
          "Seeing Jane's family get a proper home was beautiful. She's a strong widow caring for her disabled daughter alone. When we came together to build her shelter, we weren't just building a house—we were saying to Jane and Chepkoech: 'You matter. You are loved. You are part of us.'",
      },
    ],
    longTermImpact:
      "Jane's shelter continues to provide safe housing and security for her family. The house protects Chepkoech from the elements and provides a dignified space where Jane can offer her daughter proper care. This project demonstrates the lasting impact of shelter provision on vulnerable families and the ongoing commitment of the community to supporting those facing the greatest challenges.",
  },
];
