import { LucideIcon, BookOpen, TrendingUp, Users, Heart, Leaf, Scale, GraduationCap, DollarSign, Utensils, Droplets, Sparkles, Target, CheckCircle, HeartHandshake, Award } from "lucide-react";

export interface Program {
  id: string;
  slug: string;
  icon: React.ReactNode;
  image: string;
  gallery: string[];
  title: string;
  shortDescription: string;
  fullDescription: string;
  objectives: string[];
  impact: ImpactStats;
  color: string;
  secondaryColor: string;
}

export interface ImpactStats {
  peopleHelped: string;
  beneficiaries: string;
  projects: string;
  communities: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export const programs: Program[] = [
  {
    id: "education",
    slug: slugify("Education Programs"),
    icon: <GraduationCap className="w-8 h-8" />,
    image: "https://ext.same-assets.com/922964245/84962539.jpeg",
    gallery: [
      "https://ext.same-assets.com/922964245/84962539.jpeg",
      "https://ext.same-assets.com/922964245/2606823118.jpeg",
      "https://ext.same-assets.com/922964245/3347159728.jpeg",
      "https://ext.same-assets.com/922964245/496075394.jpeg",
    ],
    title: "Education Programs",
    shortDescription: "Opening doors to learning for vulnerable children and youth.",
    fullDescription: `Our education programs are at the heart of our mission to create lasting change in refugee and host communities in Uganda. We believe that education is the most powerful tool for breaking the cycle of poverty and building a brighter future.

Every child deserves access to quality education, yet thousands of refugee children in Uganda face significant barriers to learning. Through our comprehensive education initiatives, we provide school fee support, scholastic materials, tutoring, and after-school programs that enable children to attend school and succeed academically.

Our approach goes beyond simply paying school fees. We work closely with schools, communities, and families to create a supportive environment for learning. Our after-school programs provide remedial tutoring, mentorship, and life skills training that help students develop both academically and personally.

We also invest in teacher training and school infrastructure improvements, recognizing that quality education requires well-trained teachers and adequate learning facilities. By partnering with local schools, we help build capacity and ensure sustainable education outcomes.`,
    objectives: [
      "Increase school enrollment and attendance rates among refugee and host community children",
      "Provide scholastic materials, uniforms, and essential learning resources",
      "Offer after-school tutoring and mentorship programs",
      "Support teacher training and school infrastructure improvements",
    ],
    impact: {
      peopleHelped: "1,500+",
      beneficiaries: "2,500+",
      projects: "12",
      communities: "25+",
    },
    color: "bg-primary-blue",
    secondaryColor: "text-primary-blue",
  },
  {
    id: "economic",
    slug: slugify("Economic Empowerment"),
    icon: <DollarSign className="w-8 h-8" />,
    image: "https://ext.same-assets.com/922964245/2606823118.jpeg",
    gallery: [
      "https://ext.same-assets.com/922964245/2606823118.jpeg",
      "https://ext.same-assets.com/922964245/3893045342.jpeg",
      "https://ext.same-assets.com/922964245/3980788437.jpeg",
      "https://ext.same-assets.com/922964245/4234630857.jpeg",
    ],
    title: "Economic Empowerment",
    shortDescription: "Building sustainable incomes and financial independence.",
    fullDescription: `Economic empowerment is essential for helping refugees and vulnerable community members achieve self-sufficiency and dignity. Our economic empowerment programs provide comprehensive support to help individuals and families build sustainable livelihoods.

We offer business skills training that covers everything from basic entrepreneurship principles to advanced business management. Our financial literacy programs teach critical skills like budgeting, saving, and managing credit responsibly.

For those ready to start or expand their businesses, we provide seed funding through our microfinance initiatives. We also connect entrepreneurs with markets and business networks that can help their enterprises grow.

Our approach recognizes that economic empowerment requires more than just financial support. We provide ongoing mentorship and business development services to help our beneficiaries navigate challenges and maximize their success. Whether someone wants to start a small shop, launch a service business, or expand an existing enterprise, we provide the tools and support they need to succeed.`,
    objectives: [
      "Provide comprehensive business skills training",
      "Offer seed funding and microfinance opportunities",
      "Promote financial literacy and money management",
      "Create employment opportunities through business incubation",
    ],
    impact: {
      peopleHelped: "500+",
      beneficiaries: "800+",
      projects: "8",
      communities: "15+",
    },
    color: "bg-green-600",
    secondaryColor: "text-green-600",
  },
  {
    id: "livelihoods",
    slug: slugify("Urban Refugee Livelihoods"),
    icon: <Users className="w-8 h-8" />,
    image: "https://ext.same-assets.com/922964245/496075394.jpeg",
    gallery: [
      "https://ext.same-assets.com/922964245/496075394.jpeg",
      "https://ext.same-assets.com/922964245/3347159728.jpeg",
      "https://ext.same-assets.com/922964245/84962539.jpeg",
      "https://ext.same-assets.com/922964245/2606823118.jpeg",
    ],
    title: "Urban Refugee Livelihoods",
    shortDescription: "Empowering refugees to build independent lives in urban areas.",
    fullDescription: `Urban refugees in Kampala face unique challenges as they navigate life in an unfamiliar city, often without family support networks or local connections. Our Urban Refugee Livelihoods program specifically addresses these challenges, helping refugees build sustainable lives in urban areas.

We provide skills training in high-demand sectors, from tailoring and carpentry to hospitality and information technology. Our job placement services connect trained refugees with employers who value their skills and contributions.

For those who prefer entrepreneurship, our small business incubation program provides training, mentorship, and seed capital to help refugees launch successful enterprises. We also help refugees navigate the complex process of registering businesses and accessing local markets.

Our program emphasizes community building and peer support, recognizing that refugees often thrive when they have connections to others who understand their experiences. Through networking events and community gatherings, we help refugees build relationships that support their economic and social integration.`,
    objectives: [
      "Provide vocational skills training in high-demand sectors",
      "Offer job placement and employment matching services",
      "Support small business incubation and development",
      "Facilitate networking with local businesses and communities",
    ],
    impact: {
      peopleHelped: "300+",
      beneficiaries: "450+",
      projects: "6",
      communities: "10+",
    },
    color: "bg-orange-600",
    secondaryColor: "text-orange-600",
  },
  {
    id: "skills",
    slug: slugify("Skills Development"),
    icon: <TrendingUp className="w-8 h-8" />,
    image: "https://ext.same-assets.com/922964245/3347159728.jpeg",
    gallery: [
      "https://ext.same-assets.com/922964245/3347159728.jpeg",
      "https://ext.same-assets.com/922964245/3246824778.jpeg",
      "https://ext.same-assets.com/922964245/3980788437.jpeg",
      "https://ext.same-assets.com/922964245/496075394.jpeg",
    ],
    title: "Skills Development",
    shortDescription: "Practical vocational training for self-reliance.",
    fullDescription: `Our Skills Development programs equip youth and adults with practical vocational skills that lead to sustainable employment or self-employment. We believe that practical skills are key to economic independence and personal dignity.

We offer training in a variety of trades, including tailoring, carpentry, mobile phone repair, electrical work, and hospitality. Our programs combine hands-on practical training with theoretical knowledge, ensuring graduates are well-prepared for the workforce.

All our training programs include certification and competency testing, giving graduates credentials that employers recognize and respect. We also provide tool provision for graduates who complete our programs, giving them everything they need to start working immediately.

Our strong relationships with local employers mean that our graduates have excellent job placement opportunities. We work closely with businesses across various sectors to understand their hiring needs and match our training accordingly.`,
    objectives: [
      "Provide comprehensive vocational skills training",
      "Offer certification and competency testing",
      "Supply tools and equipment to graduates",
      "Link graduates with employment opportunities",
    ],
    impact: {
      peopleHelped: "200+",
      beneficiaries: "300+",
      projects: "5",
      communities: "8+",
    },
    color: "bg-indigo-600",
    secondaryColor: "text-indigo-600",
  },
  {
    id: "financial",
    slug: slugify("Financial Inclusion"),
    icon: <BookOpen className="w-8 h-8" />,
    image: "https://ext.same-assets.com/922964245/4234630857.jpeg",
    gallery: [
      "https://ext.same-assets.com/922964245/4234630857.jpeg",
      "https://ext.same-assets.com/922964245/2606823118.jpeg",
      "https://ext.same-assets.com/922964245/3893045342.jpeg",
      "https://ext.same-assets.com/922964245/496075394.jpeg",
    ],
    title: "Financial Inclusion",
    shortDescription: "Building financial resilience through savings and access to credit.",
    fullDescription: `Financial inclusion is fundamental to sustainable development. Our Financial Inclusion programs help refugees and host community members develop financial literacy, build savings, and access credit for productive purposes.

We establish and support Village Savings and Loan Association (VSLA) groups, which are community-based financial institutions that provide members with a safe place to save and access small loans. These groups have proven incredibly effective in helping low-income households build financial resilience.

Our financial literacy training covers topics like budgeting, saving, borrowing responsibly, and managing debt. We help program participants understand how to use financial services effectively and avoid common pitfalls that can lead to financial difficulties.

Through our cooperative models, we help community members pool resources and access larger loans for significant investments like starting businesses or paying for education. These cooperatives also provide peer support and accountability that helps members stay committed to their financial goals.`,
    objectives: [
      "Establish and support community savings groups",
      "Provide comprehensive financial literacy training",
      "Facilitate access to microcredit and loans",
      "Promote cooperative economics and collective enterprise",
    ],
    impact: {
      peopleHelped: "50+",
      beneficiaries: "1,200+",
      projects: "15",
      communities: "30+",
    },
    color: "bg-teal-600",
    secondaryColor: "text-teal-600",
  },
  {
    id: "rights",
    slug: slugify("Rights & Advocacy"),
    icon: <Scale className="w-8 h-8" />,
    image: "https://ext.same-assets.com/922964245/294679151.jpeg",
    gallery: [
      "https://ext.same-assets.com/922964245/294679151.jpeg",
      "https://ext.same-assets.com/922964245/496075394.jpeg",
      "https://ext.same-assets.com/922964245/84962539.jpeg",
      "https://ext.same-assets.com/922964245/2606823118.jpeg",
    ],
    title: "Rights & Advocacy",
    shortDescription: "Defending the rights of refugees and marginalized groups.",
    fullDescription: `Our Rights & Advocacy program is dedicated to defending and promoting the rights of refugees and other marginalized groups in Uganda. We believe that knowledge of rights is the first step toward protecting them.

We conduct comprehensive rights awareness campaigns that inform refugees about their legal rights, including the right to work, access services, and move freely. These campaigns use accessible language and culturally appropriate materials to ensure understanding across diverse communities.

For refugees facing legal challenges, we provide referrals to legal aid organizations and pro bono lawyers who can offer professional support. We also work with community leaders and refugee advocates to build local capacity for rights education and protection.

Our advocacy work extends to policy engagement, where we advocate for refugee-friendly policies at local and national levels. We work with government agencies, international organizations, and other stakeholders to ensure that refugee voices are heard in decisions that affect their lives.`,
    objectives: [
      "Conduct rights awareness and education campaigns",
      "Provide legal support referrals and assistance",
      "Engage in community advocacy and mobilization",
      "Participate in policy engagement and dialogue",
    ],
    impact: {
      peopleHelped: "5,000+",
      beneficiaries: "7,500+",
      projects: "10",
      communities: "40+",
    },
    color: "bg-purple-600",
    secondaryColor: "text-purple-600",
  },
  {
    id: "agriculture",
    slug: slugify("Agriculture Programs"),
    icon: <Leaf className="w-8 h-8" />,
    image: "https://ext.same-assets.com/922964245/4290276478.jpeg",
    gallery: [
      "https://ext.same-assets.com/922964245/4290276478.jpeg",
      "https://ext.same-assets.com/922964245/3893045342.jpeg",
      "https://ext.same-assets.com/922964245/3016221291.jpeg",
      "https://ext.same-assets.com/922964245/2606823118.jpeg",
    ],
    title: "Agriculture Programs",
    shortDescription: "Sustainable farming for food security and income.",
    fullDescription: `Our Agriculture Programs support refugee and host community farmers with training, resources, and market access to improve food security and household incomes. Agriculture remains a vital source of livelihood for many refugees in Uganda.

We provide comprehensive agricultural training that covers modern farming techniques, crop management, and sustainable practices. Our extension workers work directly with farmers in their fields, providing hands-on guidance and support.

We also supply seeds, tools, and other inputs that farmers need to succeed. Our community gardening projects create spaces where refugees can grow vegetables for their families, improving nutrition and reducing food expenses.

Market linkage is another crucial component of our agriculture program. We help farmers access markets where they can sell their surplus production, turning their farming activities into sustainable income generators.`,
    objectives: [
      "Provide agricultural training and extension services",
      "Supply inputs including seeds, tools, and fertilizers",
      "Implement community gardening projects",
      "Facilitate market access and linkages",
    ],
    impact: {
      peopleHelped: "150+",
      beneficiaries: "600+",
      projects: "8",
      communities: "12+",
    },
    color: "bg-emerald-600",
    secondaryColor: "text-emerald-600",
  },
  {
    id: "bakery",
    slug: slugify("Bakery & Culinary"),
    icon: <Utensils className="w-8 h-8" />,
    image: "https://ext.same-assets.com/922964245/3980788437.jpeg",
    gallery: [
      "https://ext.same-assets.com/922964245/3980788437.jpeg",
      "https://ext.same-assets.com/922964245/3347159728.jpeg",
      "https://ext.same-assets.com/922964245/3246824778.jpeg",
      "https://ext.same-assets.com/922964245/496075394.jpeg",
    ],
    title: "Bakery & Culinary",
    shortDescription: "Skills for the food industry.",
    fullDescription: `Our Bakery and Culinary program provides professional training in food preparation and baking, opening doors to employment in the thriving hospitality sector and entrepreneurship opportunities.

We train individuals in professional baking techniques, from bread and pastries to cakes and confections. Our curriculum covers food safety, kitchen management, and business aspects of running a food enterprise.

All graduates receive food safety certification that is recognized by employers throughout Uganda. This credential significantly enhances their employment prospects and credibility as food professionals.

We provide job placement support, connecting our graduates with hotels, restaurants, bakeries, and catering companies. For those who prefer entrepreneurship, we offer business development support to help them start their own bakeries or food businesses.`,
    objectives: [
      "Provide professional baking and culinary training",
      "Offer food safety certification",
      "Support job placement in the hospitality sector",
      "Assist with enterprise development and startup",
    ],
    impact: {
      peopleHelped: "75+",
      beneficiaries: "100+",
      projects: "3",
      communities: "5+",
    },
    color: "bg-amber-600",
    secondaryColor: "text-amber-600",
  },
  {
    id: "aquaculture",
    slug: slugify("Fish Farming"),
    icon: <Droplets className="w-8 h-8" />,
    image: "https://ext.same-assets.com/922964245/3016221291.jpeg",
    gallery: [
      "https://ext.same-assets.com/922964245/3016221291.jpeg",
      "https://ext.same-assets.com/922964245/4290276478.jpeg",
      "https://ext.same-assets.com/922964245/3893045342.jpeg",
      "https://ext.same-assets.com/922964245/2606823118.jpeg",
    ],
    title: "Fish Farming",
    shortDescription: "Sustainable aquaculture for nutrition and income.",
    fullDescription: `Our Fish Farming program promotes aquaculture as a sustainable source of protein and income for refugee and host community households. Fish farming is particularly well-suited to Uganda's climate and offers excellent nutritional and economic benefits.

We provide comprehensive training in fish farming techniques, from pond construction and management to fish health and feeding practices. Our training is hands-on, allowing participants to learn by doing.

We support program participants with pond construction and fingerling provision, giving them everything they need to start their fish farms. Our extension services provide ongoing support to help farmers overcome challenges and maximize their yields.

We also help fish farmers access markets where they can sell their produce. Whether to local markets, restaurants, or individuals, we connect farmers with buyers who appreciate fresh, locally-grown fish.`,
    objectives: [
      "Provide fish farming training and technical support",
      "Support pond construction and management",
      "Supply fingerlings and fish feed",
      "Facilitate market access for fish products",
    ],
    impact: {
      peopleHelped: "25+",
      beneficiaries: "125+",
      projects: "4",
      communities: "6+",
    },
    color: "bg-cyan-600",
    secondaryColor: "text-cyan-600",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getAllProgramSlugs(): string[] {
  return programs.map((p) => p.slug);
}