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
  title: "Elias Kurgat: Empowering a Gospel Artist & Cancer Survivor",
  subtitle: "PA System & Family Support for a Musical Ministry",
  date: "Nandi Roadshow Event",
  venue: "Nandi County, Kenya",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F3a168f94bcf64e759004341ec3547f18?format=webp&width=800",
  theme: "Hope, Faith & Musical Empowerment for Survivors",
  message:
    "Elias Kurgat's story is one of extraordinary courage. As a gospel artist, cancer survivor, and amputee, he demonstrates that physical challenges cannot silence a spirit devoted to sharing hope through music. In partnership with well-wishers and Pwani Oil, we provided him with professional audio equipment and family support to continue his powerful ministry.",
  itemsNeeded: [
    "Music equipment & amplification systems",
    "Family provisions & groceries",
    "Transportation support",
    "Community sponsorship",
  ],
  contact: "+254794107724",
  paymentLink: "#",
  fullDescription:
    "Elias Kurgat is a gospel artist from Nandi County whose voice carries a message of hope born from his own journey of survival and faith. As both a cancer survivor and an amputee, Elias represents the indomitable human spirit—a person who refuses to be defined by his challenges but instead transforms them into a platform for ministry.\n\nThrough his music and public speaking, Elias shares a powerful testimony of faith, resilience, and hope. His performances inspire communities and challenge us all to recognize the strength within ourselves. Yet, like many artists pursuing ministry in rural Kenya, Elias faced significant barriers—limited access to quality audio equipment that would allow his voice to reach larger audiences and support his family's daily needs.\n\n**A Partnership of Compassion**: The Cheptugeniot Initiative, recognizing Elias's unique calling and platform, came together with well-wishers to provide comprehensive support. We purchased a complete professional public address (PA) system—enabling Elias to amplify his message and reach more people with his gospel ministry. This isn't just equipment; it's an investment in hope itself.\n\n**Community Partnership**: Pwani Oil, who partnered with Berur FM during the Nandi roadshow, demonstrated corporate social responsibility by providing three months of shopping provisions for Elias's family. This support eases the burden of daily needs, allowing Elias to focus fully on his musical calling and ministry.\n\n**More Than Music**: Elias's story challenges our assumptions about disability and ability. Here is a man who lost a limb yet stands tall on stage sharing faith. Here is a cancer survivor whose song is a testimony to God's faithfulness. Every note he sings, every person he touches with his ministry, represents the power of community care and belief in human potential.",
  schedule: [
    {
      time: "Arrival",
      activity: "Community gathering and welcome",
    },
    {
      time: "Opening",
      activity: "Introductions and testimonies from community leaders",
    },
    {
      time: "Main Event",
      activity: "Elias Kurgat's musical performance and faith testimony",
    },
    {
      time: "Celebration",
      activity: "PA system presentation and family support handover",
    },
    {
      time: "Closing",
      activity: "Prayers and community celebration",
    },
  ],
  impactGoals: [
    "Enable Elias to reach larger audiences with his gospel ministry",
    "Support a cancer survivor in pursuing his calling",
    "Demonstrate inclusive community care for people with disabilities",
    "Empower gospel music as a tool for spiritual transformation",
    "Partner with businesses in community development initiatives",
  ],
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
    impact: "Built safe shelter for widow-headed household with disabled child",
    fullDescription:
      "Jane's story is one of courage, vulnerability, and the transformative power of community compassion. As a widow raising a disabled daughter alone, Jane faced daily challenges of providing safe shelter, food, and care for her family in Singorwet.\n\nHer daughter Chepkoech, who developed a condition when she was young, requires special care and a safe, dignified environment. Yet Jane's modest means made it nearly impossible to provide the secure housing her family desperately needed. The family lived in conditions that left them exposed to the elements and vulnerable to further hardship.\n\n**A Community Response**: Word of Jane's struggle reached compassionate well-wishers who believed that every family deserves dignity and safety. They came forward to contribute materials, labor, and resources to build a proper shelter for Jane and Chepkoeth.\n\n**Building Hope**: The construction process became a community endeavor, bringing together neighbors, church leaders, and committed individuals who worked side by side. Materials including bricks, cement, corrugated iron, and other building supplies were gathered and utilized. The shelter rose from the ground, not just as a structure of brick and metal, but as a tangible expression of hope and solidarity.\n\n**A Sacred Dedication**: In a beautiful ceremony, Rev. Caleb, director of AGC Church S. Rift, along with community leaders and well-wishers, gathered at Singorwet to dedicate Jane's new home. The event was marked by prayers for Jane's family, blessings for their future, and a renewed commitment to supporting vulnerable families in the community.\n\n**More Than a House**: For Jane and Chepkoech, this shelter means security, protection from harsh weather, and a dignified space to call home. But it also means something deeper—it means they are not forgotten, that their community cares, and that there are people willing to sacrifice to restore dignity to those facing life's hardest circumstances.",
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
          "I didn't know how I would keep my daughter safe and sheltered. When this community came and built this house, I felt like God was answering my prayers. Now Chepkoeth has a safe place, and I can focus on caring for her without worrying about the rain coming through the roof.",
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
          "Seeing Jane's family get a proper home was beautiful. She's a strong widow caring for her disabled daughter alone. When we came together to build her shelter, we weren't just building a house—we were saying to Jane and Chepkoeth: 'You matter. You are loved. You are part of us.'",
      },
    ],
    longTermImpact:
      "Jane's shelter continues to provide safe housing and security for her family. The house protects Chepkoeth from the elements and provides a dignified space where Jane can offer her daughter proper care. This project demonstrates the lasting impact of shelter provision on vulnerable families and the ongoing commitment of the community to supporting those facing the greatest challenges.",
  },
  {
    id: "gideon-korir-shelter",
    title: "Gideon Korir's House Completion",
    subtitle: "Building Home for a Blind Man in Bomet East",
    date: "Shelter Completion & Handover",
    venue: "Bomet East",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F1835f631eff94aa881ff28f70e5a28ad?format=webp&width=800",
    theme: "Dignity Through Housing: Supporting People with Disabilities",
    description:
      "We built and completed a house for Gideon Korir, a blind man from Bomet East, providing him with safe shelter and restored dignity. The community celebrated the house handover, affirming their commitment to supporting people with disabilities.",
    contact: "+254794107724",
    impact: "Built complete shelter for a blind man in Bomet East",
    fullDescription:
      "Gideon Korir's journey is a powerful testament to the importance of shelter and community support for people facing physical challenges. As a blind man living in Bomet East, Gideon faced extraordinary difficulties in securing safe housing and maintaining independence.\n\nWithout adequate shelter, Gideon's daily life was marked by vulnerability—exposure to harsh weather, difficult living conditions that complicated his navigation and mobility, and the emotional toll of isolation. Despite his disability, Gideon possessed dignity, courage, and a desire to live independently. What he needed was a community willing to stand with him.\n\n**A Building Project of Compassion**: Our organization, alongside community members and well-wishers, came together to build a proper house for Gideon. This wasn't just construction work—it was a declaration that every person, regardless of physical ability, deserves a safe place to call home.\n\n**From Foundation to Completion**: The project involved multiple stages of construction, from laying foundations and building brick walls to installing a solid roof with corrugated iron sheeting. Community members contributed labor, materials including bricks, cement, timber for roofing, and other building supplies. The house rose from the ground as a tangible expression of community solidarity and compassion.\n\n**A Celebration of Dignity**: The house handover ceremony was a significant moment—not just a transfer of property, but a public affirmation that Gideon Korir matters to his community. Leaders, well-wishers, and community members gathered to celebrate the completion of the house and present it to Gideon. The event symbolized a renewed commitment to ensuring that people with disabilities are not left behind.\n\n**Independence & Safety**: For Gideon, this house means independence, safety, and security. It provides a dignified living space designed and built with understanding of his unique needs. Most importantly, it sends a powerful message: that his blindness does not diminish his worth or his right to live with dignity and security.",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fc7756c30b6824ed8b5321c895ea5142e?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F7a0fae4d220649c4a883711af444159f?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fb5484b2f53524efe85a20f79e32f83c1?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F130e7964ced14fceaa89ab7419ec9785?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F28224f897f494a23af67d5c4dd10003b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F9c1f6d83dbf6450da83415f23d12e8d1?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F0a662770892b4c19ba1d1ba834563a28?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F1835f631eff94aa881ff28f70e5a28ad?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Ffaa5f9f8088f46899d3f4e2c0811627e?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F098415ea75864ab4b8dfa46083c3807b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fba47789eded049cfbcc8a8df04894921?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F395a5117df5749f7bf601ff73c3095cc?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F9bde7bc942424891b746a190d3fc46ef?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F513ff44810e04762bb9da4b93c9ccca9?format=webp&width=800",
    ],
    actualImpact: [
      "Provided safe, independent living space for a blind man",
      "Protected Gideon from harsh weather and unsafe living conditions",
      "Affirmed the dignity and worth of people with disabilities",
      "Demonstrated inclusive community care for marginalized members",
      "Created secure foundation for Gideon's independence and autonomy",
      "Inspired community commitment to disability-inclusive development",
      "Showed that physical disability does not diminish human worth or community value",
    ],
    testimonials: [
      {
        name: "Gideon Korir",
        role: "Beneficiary",
        quote:
          "I never thought I would have my own house. Being blind, I felt like my community had forgotten me. But when these people came and built this house for me, I realized I was not forgotten. I have a safe place to call home, and that changes everything. Thank you for giving me back my dignity.",
      },
      {
        name: "Community Leader",
        role: "Local Representative",
        quote:
          "Gideon's house is more than just shelter. It's a statement that in our community, nobody is left behind—not even those with disabilities. Building for Gideon showed our young people what real community care looks like. His house reminds us that every person deserves dignity.",
      },
      {
        name: "Community Member",
        role: "Volunteer & Supporter",
        quote:
          "Working on Gideon's house changed me. I realized how much my sight means to me, and I understood his struggles better. Seeing him happy in his new home, celebrating with us at the handover—that's the whole reason we do this work. Gideon matters, and his house proves it.",
      },
    ],
    longTermImpact:
      "Gideon's house provides him with permanent, safe shelter and a foundation for independent living. More broadly, this project demonstrates the community's commitment to inclusive development and disability rights. Gideon's story serves as an inspiration—showing that with community support, people with disabilities can live with dignity, security, and hope. His house is a standing testimony to the power of compassion.",
  },
  {
    id: "elias-kurgat-empowerment",
    title: "Elias Kurgat: Empowering a Gospel Artist & Cancer Survivor",
    subtitle: "PA System & Family Support for a Musical Ministry",
    date: "Nandi Roadshow Event",
    venue: "Nandi County, Kenya",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F3a168f94bcf64e759004341ec3547f18?format=webp&width=800",
    theme: "Hope, Faith & Musical Empowerment for Survivors",
    description:
      "Elias Kurgat, a gospel artist, cancer survivor, and amputee, was empowered with a professional PA system and family support by the Cheptugeniot Initiative and well-wishers. His powerful ministry of music and testimony continues to inspire communities across Nandi County with messages of faith, resilience, and hope.",
    contact: "+254794107724",
    impact:
      "Provided PA system and family support for a gospel artist cancer survivor",
    fullDescription:
      "Elias Kurgat is a gospel artist from Nandi County whose voice carries a message of hope born from his own journey of survival and faith. As both a cancer survivor and an amputee, Elias represents the indomitable human spirit—a person who refuses to be defined by his challenges but instead transforms them into a platform for ministry.\n\nThrough his music and public speaking, Elias shares a powerful testimony of faith, resilience, and hope. His performances inspire communities and challenge us all to recognize the strength within ourselves. Yet, like many artists pursuing ministry in rural Kenya, Elias faced significant barriers—limited access to quality audio equipment that would allow his voice to reach larger audiences and support his family's daily needs.\n\n**Professional Audio Equipment**: The Cheptugeniot Initiative, recognizing Elias's unique calling and platform, came together with well-wishers to provide comprehensive support. We purchased a complete professional public address (PA) system—enabling Elias to amplify his message and reach more people with his gospel ministry. This isn't just equipment; it's an investment in hope itself. With quality audio equipment, Elias can now perform at larger gatherings, reach people in outdoor settings, and share his testimony with greater impact.\n\n**Corporate Partnership & Family Support**: Pwani Oil, who partnered with Berur FM during the Nandi roadshow, demonstrated corporate social responsibility by providing three months of shopping provisions for Elias's family. This comprehensive support includes essential groceries and household items, easing the burden of daily needs. This allows Elias to focus fully on his musical calling and ministry without the constant worry of providing for his family.\n\n**A Platform of Inspiration**: The roadshow event became a celebration of Elias's journey and resilience. Community members, church leaders, and corporate partners gathered to witness the PA system presentation and family support handover. Elias performed, sharing his testimony and music with the community. The event affirmed that people with disabilities and health challenges are not charity cases—they are valued members of society with gifts to share.\n\n**More Than Music**: Elias's story challenges our assumptions about disability and ability. Here is a man who lost a limb yet stands tall on stage sharing faith. Here is a cancer survivor whose song is a testimony to God's faithfulness. Every note he sings, every person he touches with his ministry, represents the power of community care and belief in human potential.",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fea5973b061574828a6701b97f3c3c41f?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F251079abe3fa4d71ab809edbdc3bc77f?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fbc89e90bd3d04ed599f0323b32b78569?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F3a168f94bcf64e759004341ec3547f18?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F3f06c21e1d4e4c9fb81b6c943b1abd55?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F8c1b913e6ee14f709d0eed20a7fdb2b3?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F1bd64f768c3f41cea511ebd15e4ab318?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F14372a3dcbde4f0fa42fecc14a19843d?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2Fdbd16f2789da4de2956aff98dddac26b?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F89df378751ff48b182e057456337eed6?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F47dc4f5ba2e24fe99f6476cb854bc661?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F4cbc9d3f34954cd192b502d2a01ff142?format=webp&width=800",
      "https://cdn.builder.io/api/v1/image/assets%2F6c62c97f0da04d299dadc1c272b8ab76%2F8977fb6071604672b6a0860d15cd0062?format=webp&width=800",
    ],
    actualImpact: [
      "Provided professional PA system enabling gospel ministry to reach larger audiences",
      "Supported a cancer survivor in pursuing his artistic calling",
      "Provided three months of family support through corporate partnership with Pwani Oil",
      "Demonstrated inclusive community care for people with disabilities and health challenges",
      "Amplified a powerful message of faith, hope, and resilience",
      "Created partnership between NGO, business, and community",
      "Showed that disability does not limit one's ability to minister and inspire",
    ],
    testimonials: [
      {
        name: "Elias Kurgat",
        role: "Gospel Artist & Cancer Survivor",
        quote:
          "When I was sick, I thought my ministry was over. But God sustained me, and now this community has given me wings to fly. This PA system means I can share my testimony with more people. I can tell them that cancer could not kill my spirit, and neither will any challenge. Thank you for believing in my music and my message.",
      },
      {
        name: "Pwani Oil Representative",
        role: "Corporate Partner",
        quote:
          "Corporate social responsibility isn't just about donations—it's about partnering with communities to create lasting change. When we learned about Elias's story, we knew we had to be part of his journey. Supporting his family demonstrates our commitment to meaningful community development.",
      },
      {
        name: "Community Member",
        role: "Nandi County Resident",
        quote:
          "Elias's music has touched so many of us. He's an amputee and a cancer survivor, yet he stands on that stage with more courage than many of us have. When I see him perform with the new PA system, I remember that our challenges don't define us. His faith defines him, and that inspires me every time.",
      },
    ],
    longTermImpact:
      "The professional PA system continues to enable Elias to reach larger audiences with his gospel ministry across Nandi County and beyond. His family's support through Pwani Oil's partnership provides stability, allowing Elias to focus on his calling. Elias's story—of a cancer survivor and amputee using his platform for ministry—serves as ongoing inspiration to his community. His music and testimony challenge societal assumptions about disability and demonstrate the power of community investment in individual potential. Through Elias, we see that resilience, faith, and community support can transform personal tragedy into ministry that uplifts many.",
  },
];
