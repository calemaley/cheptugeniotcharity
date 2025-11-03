export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  likes?: number;
  tags?: string[];
}

export const featuredPost: BlogPost = {
  id: "building-stronger-communities",
  title: "Building Stronger Communities: The Cheptugeniot Initiative Journey",
  excerpt:
    "From humble beginnings to transforming lives across Kenya, discover how Cheptugeniot Initiative is creating lasting change through education, community empowerment, and sustainable development programs.",
  content: [
    "In the heart of Kenya, where vibrant communities thrive with resilience and hope, the Cheptugeniot Initiative has been quietly making a profound difference in the lives of children and families. What started as a vision to bridge educational gaps has evolved into a comprehensive movement focused on building stronger, more self-reliant communities.",

    "Our journey began with a simple observation: every child, regardless of their circumstances, deserves access to quality education and the opportunity to reach their full potential. But we quickly realized that education alone wasn't enough. True transformation requires a holistic approach that addresses not just academic needs, but also health, nutrition, family support, and community infrastructure.",

    "Through our community-centered programs, we've witnessed remarkable stories of transformation. Children who once walked barefoot to school now confidently pursue their dreams with proper uniforms and books. Families who struggled to afford a single meal a day now have access to nutrition programs that ensure children can focus on learning. Communities that lacked basic infrastructure are now coming together to build classrooms, water wells, and health facilities.",

    "One of our most impactful programs focuses on empowering local volunteers and community leaders. We believe that sustainable change comes from within communities themselves. By training and supporting local volunteers, we're creating a ripple effect of positive change that extends far beyond our direct programs. These community champions understand local needs, speak the language of their neighbors, and can implement solutions that truly resonate.",

    "Education remains at the core of everything we do. We support children from primary school through secondary education, ensuring they have the resources, mentorship, and encouragement needed to excel. But education in the Cheptugeniot Initiative goes beyond the classroom walls—we teach life skills, leadership, and the value of giving back to one's community.",

    "Perhaps what makes our approach unique is our commitment to listening. We don't impose solutions from outside; we work hand-in-hand with communities to identify their priorities and co-create programs that address their specific challenges. This participatory approach ensures that every initiative we launch has deep community buy-in and long-term sustainability.",

    "As we look to the future, we're excited about expanding our reach while maintaining our grassroots connection. Every new community we serve, every child we support, and every volunteer we train adds to a growing network of positive change. Together, we're not just building schools or providing resources—we're building a legacy of empowered communities that will continue to thrive for generations to come.",

    "The Cheptugeniot Initiative is more than an organization; it's a movement of hope, powered by the collective belief that every child matters, every community can thrive, and together, we can create a brighter future for all.",
  ],
  image: "/children/blog.jpg",
  category: "Inspiration",
  author: "Vivian Kurui",
  date: "January 22, 2025",
  readTime: "6 min read",
  slug: "building-stronger-communities-cheptugeniot-journey",
  likes: 42,
  tags: ["community", "education", "empowerment", "sustainable development", "volunteer", "kenya", "transformation"],
};

// For homepage - recent blogs (showing the main featured post)
export const recentBlogs = [
  {
    id: featuredPost.id,
    image: featuredPost.image,
    category: featuredPost.category,
    date: featuredPost.date,
    title: featuredPost.title,
    snippet: featuredPost.excerpt,
    author: featuredPost.author,
    slug: featuredPost.slug,
  },
];
