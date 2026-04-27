import { BookOpen, TrendingUp, Users, Heart, Leaf, Scale, GraduationCap, DollarSign, Utensils, Droplets, Sparkles, Target, CheckCircle, HeartHandshake, Award, Scissors, Briefcase, LandPlot, PiggyBank, Gavel, Tractor, ChefHat, Music, Dumbbell, Brain, Eye, Shirt, Wrench, BookOpenCheck, HandHeart, Trees, Factory, Theater, Palette, Salad } from "lucide-react";

export interface Activity {
  icon: string; // 🔥 allows real icons instead of string mapping
  title: string;
  description: string;
  frequency: string;
}

export interface ProgramSection {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
}

export interface Program {
  id: string;
  slug: string;
  icon: React.ReactNode;
  image: string;
  gallery: string[];

  title: string;
  shortDescription: string;

  fullDescription?: string;

  // ✅ NEW (main UI driver)
  sections: ProgramSection[];

  objectives: string[];
  activities: Activity[];
  impact: ImpactStats;

  color: string;
  secondaryColor: string;
}

export interface ImpactStats {
  peopleHelped: string;
  beneficiaries: string;
  projects: string;
  communities: string;

  // optional future expansion
  volunteers?: string;
  partners?: string;
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
    shortDescription:
      "Empowering refugees through adult literacy, vocational training, and capacity building.",

    fullDescription: `Our Education Programs are designed to empower refugees and host communities through knowledge, skills, and capacity building. We believe education is the foundation for long-term self-reliance and dignity.

Adult Literacy & Language  
We support refugees facing language barriers by offering English training that improves communication and employment opportunities.

• Functional English for daily communication  
• Business English for entrepreneurship
• French Language 
• Digital literacy skills  
• Cultural integration support  

Vocational Skills Training  
We equip learners with practical skills that can be used to create jobs or start small businesses.

• Computer & IT skills  
• Tailoring and fashion design  
• Hairdressing and beauty therapy  
• Makeup and personal styling  
• Entrepreneurship development  

Capacity Building  
We strengthen individuals and organizations through leadership and management training.

• Project management  
• Financial reporting  
• Proposal writing & fundraising  
• Governance & leadership  
• Monitoring & evaluation (M&E)  

    These programs are designed to create independence, opportunity, and long-term impact in communities.`,

    sections: [
      {
        title: "Adult Literacy & Language",
        description: "English training for communication and employment",
        items: ["Functional English", "Business English", "Digital literacy", "French Language ", "Cultural integration"],
        icon: <BookOpenCheck className="w-6 h-6" />,
      },
      {
        title: "Vocational Skills Training",
        description: "Practical skills for job creation and business",
        items: ["Computer & IT", "Tailoring & fashion", "Hairdressing & beauty", "Entrepreneurship"],
        icon: <Scissors className="w-6 h-6" />,
      },
      {
        title: "Capacity Building",
        description: "Leadership and management training",
        items: ["Project management", "Financial reporting", "Fundraising", "Governance & leadership", "M&E"],
        icon: <Award className="w-6 h-6" />,
      },
    ],

    objectives: [
      "Increase access to education and skills training",
      "Improve literacy and communication skills",
      "Support vocational and technical training",
      "Strengthen leadership and organizational capacity",
    ],

    activities: [
      { icon: "BookOpenCheck", title: "English Literacy", description: "Daily communication skills", frequency: "Daily" },
      { icon: "Briefcase", title: "Business English", description: "Professional communication", frequency: "Weekly" },
      { icon: "Users", title: "Digital Skills", description: "Computer literacy training", frequency: "Bi-weekly" },
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
    id: "economic empowerment",
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

    fullDescription: `Our Economic Empowerment program helps individuals and families achieve financial independence through skills, training, and business support.

Livelihood Development  
Food insecurity among refugee households worsened dramatically from 37% in 2022 to 68% in 2023. With only 25% of required livelihood funding available in 2024, Mwinja Devine Help Foundation Ltd addresses this gap through comprehensive economic empowerment programs.

• Vocational skills training and certification
• Business development and entrepreneurship
• Microfinance access and financial literacy
• Market linkages and value chain development
• Cooperative formation and management





Economic Challenges  

• Food Insecurity (2023): 68%  
• Skills Gap: 36.8% unskilled  
• Livelihood Funding Gap: 75%  


Mentorship & Growth  
We provide continuous support to ensure long-term success.

• Business coaching  
• Market linkages  
    • Enterprise development  
    • Growth monitoring`,

    sections: [
      {
        title: "Business Skills Training",
        description: "Practical entrepreneurship knowledge",
        items: ["Business planning", "Marketing strategies", "Customer management", "Record keeping"],
        icon: <Briefcase className="w-6 h-6" />,
      },
      {
        title: "Financial Support & Access",
        description: "Support for small businesses and income generation",
        items: ["Savings groups", "Microfinance access", "Seed funding", "Investment guidance"],
        icon: <PiggyBank className="w-6 h-6" />,
      },
      {
        title: "Mentorship & Growth",
        description: "Continuous support for long-term success",
        items: ["Business coaching", "Market linkages", "Enterprise development", "Growth monitoring"],
        icon: <TrendingUp className="w-6 h-6" />,
      },
    ],

    objectives: [
      "Promote financial independence",
      "Support small business creation",
      "Improve financial literacy",
      "Increase employment opportunities",
    ],

    activities: [
      { icon: "Briefcase", title: "Business Training", description: "Entrepreneurship skills", frequency: "Weekly" },
      { icon: "PiggyBank", title: "Savings Groups", description: "Community savings support", frequency: "Weekly" },
      { icon: "TrendingUp", title: "Business Mentorship", description: "Growth support", frequency: "Bi-weekly" },
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
    id: "Urban Refugee livelihoods",
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
    shortDescription: "Empowering refugees to build independent urban lives.",

    fullDescription: `This program supports refugees living in urban areas to build sustainable livelihoods and integrate into city life.

Urban Refugee Livelihoods

• The 2024 Urban Livelihoods Assessment in Kampala revealed that 36.8% of respondents have not acquired any skills since leaving formal education, resulting in limited employability. Key barriers identified include low- income levels, lack of access to credit, language barriers, and discrimination. 

• Women particularly struggle with limited access to financial resources, competition from male-dominated businesses, and harassment. Urban refugees face unique challenges including limited funding, insufficient livelihood opportunities, and lack of academic credential recognition. 
`,

    objectives: [
      "Improve urban employment opportunities",
      "Support entrepreneurship",
      "Provide vocational training",
      "Strengthen social integration",
    ],

    activities: [
      { icon: "Briefcase", title: "Job Placement", description: "Employment support", frequency: "Monthly" },
      { icon: "Users", title: "Networking", description: "Community connections", frequency: "Monthly" },
      { icon: "TrendingUp", title: "Business Support", description: "Startup guidance", frequency: "Ongoing" },
    ],

    impact: {
      peopleHelped: "300+",
      beneficiaries: "450+",
      projects: "6",
      communities: "10+",
    },

    sections: [
      {
        title: "Skills Development",
        description: "Practical training for urban job markets",
        items: ["Tailoring and crafts", "Hospitality training", "IT and digital skills", "Trade skills"],
        icon: <Scissors className="w-6 h-6" />,
      },
      {
        title: "Job Placement",
        description: "Connecting trained individuals with employers",
        items: ["Job matching", "CV preparation", "Interview coaching", "Employer networking"],
        icon: <Briefcase className="w-6 h-6" />,
      },
      {
        title: "Entrepreneurship Support",
        description: "Help starting and growing businesses",
        items: ["Startup training", "Business registration support", "Seed capital access", "Market linkage"],
        icon: <TrendingUp className="w-6 h-6" />,
      },
    ],

    color: "bg-orange-600",
    secondaryColor: "text-orange-600",
  },

  {
    id: "skills developments programs",
    slug: slugify("Skills Development"),
    icon: <TrendingUp className="w-8 h-8" />,
    image: "https://ext.same-assets.com/922964245/3347159728.jpeg",
    gallery: [],
    title: "Skills Development",
    shortDescription: "Practical vocational training for self-reliance.",

    fullDescription: `Our Skills Development program provides hands-on vocational training that prepares individuals for employment and self-employment.

Technical Training  
We offer practical skills for job readiness.

• Tailoring & Fashion: Textile industry, self-employment  
• Hairdressing: Beauty sector, salon ownership  
• Computer/IT Skills: Digital economy, office work  
• Makeup Artistry: Events industry, freelance

Employment Support  
We help graduates transition into work.

• Certification  
• Tool provision  
• Job placement  
• Apprenticeships`,

    objectives: [],
    activities: [],
    impact: { peopleHelped: "", beneficiaries: "", projects: "", communities: "" },

    sections: [
      {
        title: "Vocational Training",
        description: "Hands-on skills for employment",
        items: ["Tailoring", "Hairdressing", "Electrical work", "Mobile repair"],
        icon: <Wrench className="w-6 h-6" />,
      },
      {
        title: "Employment Support",
        description: "Graduate transition assistance",
        items: ["Certification", "Tool provision", "Job placement", "Apprenticeships"],
        icon: <Briefcase className="w-6 h-6" />,
      },
    ],

    color: "bg-indigo-600",
    secondaryColor: "text-indigo-600",
  },

  {
    id: "financial programs",
    slug: slugify("Financial Inclusion"),
    icon: <BookOpen className="w-8 h-8" />,
    image: "",
    gallery: [],
    title: "Financial Inclusion",
    shortDescription: "Savings, credit and financial literacy.",

    fullDescription: `Our Financial Inclusion program helps communities access savings, credit, and financial education.


Savings Groups  
We support community financial systems.

• Village Savings & Loan Associations (VSLAs)  
• Loan access  
• Financial security  

Financial Inclusion  
We teach money management skills.

• Budgeting  
• Saving strategies  
• Debt management  
• Credit use`,

    objectives: [],
    activities: [],
    impact: { peopleHelped: "", beneficiaries: "", projects: "", communities: "" },

    sections: [
      {
        title: "Savings Groups",
        description: "Community financial systems",
        items: ["VSLA groups", "Savings culture", "Loan access", "Financial security"],
        icon: <PiggyBank className="w-6 h-6" />,
      },
      {
        title: "Financial Education",
        description: "Money management skills",
        items: ["Budgeting", "Saving strategies", "Debt management", "Credit use"],
        icon: <DollarSign className="w-6 h-6" />,
      },
    ],

    color: "bg-teal-600",
    secondaryColor: "text-teal-600",
  },

  {
    id: "refugee rights advocacy",
    slug: slugify("Rights & Advocacy"),
    icon: <Scale className="w-8 h-8" />,
    image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1776548109/7_cs9yi6.jpg",
    gallery: [],
    title: "Rights & Advocacy",
    shortDescription: "Protecting human rights and dignity.",

    fullDescription: `We promote and protect human rights through education, advocacy, and legal awareness.

Rights-Based Approach  
Uganda’s progressive refugee policy—anchored in the 2006 Refugee Act and 2010 Regulations—provides freedom of movement, right to work, establish businesses, own property, and access national services including education and health. Mwinja Devine Help Foundation Ltd advocates to ensure these rights translate into lived reality

• Legal awareness and rights education  
• Documentation support and advocacy  
• Policy engagement with local authorities
• Community representation in coordination forums
• Anti-discrimination campaigns

Social Inclusion
we promotes peaceful coexistence between refugees and host communities through joint programming, cultural exchange, and shared resource management. Our 70/30 targeting ensures host communities benefit alongside refugees.

• Host-refugee joint activities  
• Interfaith dialogue initiatives 
• Youth leadership development
• Community conflict resolution

Advocacy  
We amplify community voices.

• Policy engagement  
• Community mobilization  
• Legal referrals`,

    objectives: [],
    activities: [],
    impact: { peopleHelped: "", beneficiaries: "", projects: "", communities: "" },

    sections: [
      {
        title: "Rights Awareness",
        description: "Educating communities about their rights",
        items: ["Legal rights education", "Work rights", "Protection services"],
        icon: <Gavel className="w-6 h-6" />,
      },
      {
        title: "Advocacy",
        description: "Amplifying community voices",
        items: ["Policy engagement", "Community mobilization", "Legal referrals"],
        icon: <Users className="w-6 h-6" />,
      },
    ],

    color: "bg-purple-600",
    secondaryColor: "text-purple-600",
  },

  {
  id: "sporting-artistic",
  slug: slugify("Sporting and Artistic"),
  icon: <Award className="w-8 h-8" />,
  image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1777224200/WhatsApp_Image_2026-04-24_at_11.30.05_g6bpii.jpg",
  gallery: [ "",
    "https://res.cloudinary.com/dbllxptl8/image/upload/v1777224201/WhatsApp_Image_2026-04-24_at_11.30.07_2_q2k4gn.jpg",
    "https://res.cloudinary.com/dbllxptl8/image/upload/v1777224200/WhatsApp_Image_2026-04-24_at_11.30.06_2_rwhgte.jpg",
    "https://res.cloudinary.com/dbllxptl8/image/upload/v1777224200/WhatsApp_Image_2026-04-24_at_11.30.06_egqcfm.jpg",
   ],
  title: "Sporting and Artistic",
  shortDescription:
    "Promoting sports, creativity, and youth talent development for community well-being.",

  fullDescription: `Our Sporting and Artistic program promotes physical health, creativity, and social cohesion among youth and communities.

Through sports and arts, we create safe spaces where young people can develop talent, build confidence, and strengthen teamwork skills.

This program is also a tool for peacebuilding, inclusion, and youth empowerment across refugee and host communities.

Sports Development  
We organize structured sports activities that promote discipline, teamwork, and physical health.

• Football, volleyball, and athletics tournaments  
• Youth sports leagues and competitions  
• Physical fitness and wellness training  
• Community sports events and outreach  

Creative Arts Development  
We support artistic expression and cultural creativity among youth.

• Music, dance, and drama training  
• Visual arts and crafts workshops  
• Talent shows and cultural festivals  
• Creative expression for healing and confidence building  

Community Engagement  
We use sports and arts to strengthen unity and inclusion.

• Inter-community tournaments  
• Cultural exchange events  
• Youth leadership through sports  
• Peacebuilding activities`,

  objectives: [],
  activities: [],
  impact: {
    peopleHelped: "",
    beneficiaries: "",
    projects: "",
    communities: "",
  },

  sections: [
    {
      title: "Sports Development",
      description: "Promoting physical health and teamwork",
      items: [
        "Football & volleyball",
        "Athletics training",
        "Youth competitions",
        "Fitness programs",
      ],
      icon: <Dumbbell className="w-6 h-6" />,
    },
    {
      title: "Creative Arts",
      description: "Developing artistic and cultural talent",
      items: [
        "Music & dance",
        "Drama & theater",
        "Visual arts",
        "Talent shows",
      ],
      icon: <Music className="w-6 h-6" />,
    },
    {
      title: "Community Engagement",
      description: "Building unity through sports and arts",
      items: [
        "Cultural events",
        "Peacebuilding activities",
        "Youth leadership",
        "Inter-community events",
      ],
      icon: <Users className="w-6 h-6" />,
    },
  ],

  color: "bg-rose-600",
  secondaryColor: "text-rose-600",
},

{
  id: "mental-health-disability",
  slug: slugify("Mental Health and Disability Support"),
  icon: <HeartHandshake className="w-8 h-8" />,
  image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1777224201/WhatsApp_Image_2026-04-24_at_11.04.28_lh6bq3.jpg",
  gallery: [],
  title: "Mental Health and Disability Support",
  shortDescription:
    "Providing psychosocial support and promoting inclusion for vulnerable groups.",

  fullDescription: `Our Mental Health and Disability Support program promotes emotional well-being, psychosocial healing, and inclusion for persons with disabilities.

We address trauma, stress, stigma, and exclusion by creating safe, supportive community systems.

Mental Health Support  
We provide structured psychosocial and emotional care services.

• Individual and group counseling  
• Trauma healing sessions  
• Stress management support  
• Community mental health awareness  

Disability Inclusion  
We promote equal participation and accessibility for persons with disabilities.

• Disability assessments and referrals  
• Assistive device support  
• Inclusive education advocacy  
• Accessibility awareness campaigns  

Community Healing & Awareness  
We reduce stigma and promote understanding in communities.

• Anti-stigma campaigns  
• Peer support groups  
• Community dialogue forums  
• Family support sessions`,

  objectives: [],
  activities: [],
  impact: {
    peopleHelped: "",
    beneficiaries: "",
    projects: "",
    communities: "",
  },

  sections: [
    {
      title: "Mental Health Support",
      description: "Psychosocial healing and counseling",
      items: [
        "Counseling sessions",
        "Trauma healing",
        "Stress management",
        "Support groups",
      ],
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Disability Inclusion",
      description: "Supporting persons with disabilities",
      items: [
        "Accessibility support",
        "Assistive devices",
        "Inclusive education",
        "Advocacy programs",
      ],
      icon: <Eye className="w-6 h-6" />,
    },
    {
      title: "Community Awareness",
      description: "Reducing stigma and promoting inclusion",
      items: [
        "Anti-stigma campaigns",
        "Community dialogues",
        "Family support",
        "Peer groups",
      ],
      icon: <HandHeart className="w-6 h-6" />,
    },
  ],

  color: "bg-pink-600",
  secondaryColor: "text-pink-600",
},

{
  id: "culinary-art",
  slug: slugify("Culinary Art"),
  icon: <Utensils className="w-8 h-8" />,
  image: "https://ext.same-assets.com/922964245/3980788437.jpeg",
  gallery: ["https://ext.same-assets.com/922964245/4234630857.jpeg",
    "https://ext.same-assets.com/922964245/3980788437.jpeg",
   ],
  title: "Culinary Art",
  shortDescription:
    "Training in cooking skills, food safety, and culinary entrepreneurship.",

  fullDescription: `Our Culinary Art program develops professional cooking skills and supports food-based entrepreneurship.

We empower participants to turn cooking skills into sustainable livelihoods in the hospitality and food industry.

Culinary Training  
We provide hands-on cooking and baking skills development.

• Professional cooking techniques  
• Baking and pastry training  
• Food presentation and hygiene  
• Kitchen management skills  

Food Entrepreneurship  
We support participants in building food businesses.

• Catering business training  
• Small restaurant startup support  
• Food packaging and branding  
• Market access and sales skills  

Cultural Food Heritage  
We preserve and promote traditional food knowledge.

• Traditional recipe training  
• Cultural food festivals  
• Community cooking events  
• Nutrition awareness`,

  objectives: [],
  activities: [],
  impact: {
    peopleHelped: "",
    beneficiaries: "",
    projects: "",
    communities: "",
  },

  sections: [
    {
      title: "Culinary Training",
      description: "Professional cooking and baking skills",
      items: [
        "Cooking techniques",
        "Baking & pastries",
        "Food hygiene",
        "Kitchen management",
      ],
      icon: <ChefHat className="w-6 h-6" />,
    },
    {
      title: "Food Business",
      description: "Supporting culinary entrepreneurship",
      items: [
        "Catering business",
        "Restaurant startup",
        "Food packaging",
        "Market access",
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "Cultural Food Heritage",
      description: "Preserving traditional food knowledge",
      items: [
        "Traditional recipes",
        "Food festivals",
        "Community cooking",
        "Nutrition awareness",
      ],
      icon: <Salad className="w-6 h-6" />,
    },
  ],

  color: "bg-yellow-600",
  secondaryColor: "text-yellow-600",
},

{
  id: "agriculture",
  slug: slugify("Agriculture Programs"),
  icon: <Leaf className="w-8 h-8" />,
  image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1776560303/team_lr9k0j.jpg",
  gallery: ["https://res.cloudinary.com/dbllxptl8/image/upload/v1776880422/team_y1mtwu.jpg",
      "https://res.cloudinary.com/dbllxptl8/image/upload/v1776560302/WhatsApp_Image_2026-04-18_at_18.13.58_whs68x.jpg",
      "https://res.cloudinary.com/dbllxptl8/image/upload/v1776560302/cbg2_d5maaf.jpg",
      "https://res.cloudinary.com/dbllxptl8/image/upload/v1776548109/7_cs9yi6.jpg", ],
  title: "Agriculture Programs",
  shortDescription:
    "Supporting sustainable farming, food security, and rural livelihoods.",

  fullDescription: `Our Agriculture Program supports farmers with training, inputs, and market access to improve food security and income generation.

We promote modern and sustainable farming techniques that strengthen resilience against climate and economic challenges.

Sustainable Farming  
We train farmers in improved agricultural practices.

• Modern farming techniques  
• Climate-smart agriculture  
• Crop and livestock management  
• Soil and water conservation  

Food Security Support  
We strengthen household and community food production.

• Kitchen gardens  
• Seed distribution support  
• Nutrition-sensitive farming  
• Post-harvest handling  

Market & Livelihoods  
We help farmers connect to markets and income opportunities.

• Market linkage support  
• Cooperative farming groups  
• Value addition training  
• Agricultural entrepreneurship`,

  objectives: [],
  activities: [],
  impact: {
    peopleHelped: "",
    beneficiaries: "",
    projects: "",
    communities: "",
  },

  sections: [
    {
      title: "Sustainable Farming",
      description: "Improving agricultural productivity",
      items: [
        "Climate-smart agriculture",
        "Crop management",
        "Soil conservation",
        "Livestock farming",
      ],
      icon: <Tractor className="w-6 h-6" />,
    },
    {
      title: "Food Security",
      description: "Improving household nutrition",
      items: [
        "Kitchen gardens",
        "Seed support",
        "Nutrition farming",
        "Harvest storage",
      ],
      icon: <Trees className="w-6 h-6" />,
    },
    {
      title: "Market Access",
      description: "Connecting farmers to markets",
      items: [
        "Market linkages",
        "Cooperatives",
        "Value addition",
        "Agri-business",
      ],
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ],

  color: "bg-emerald-600",
  secondaryColor: "text-emerald-600",
},
{
  id: "fishing-program",
  slug: slugify("Fishing Program"),
  icon: <Droplets className="w-8 h-8" />,
  image: "",
  gallery: [
    "",
  ],
  title: "Fishing Program",
  shortDescription: "Promoting sustainable fishing practices and aquaculture for food security and income generation.",
  fullDescription: `Our Fishing Program supports sustainable fishing practices and aquaculture development to improve food security, nutrition, and livelihoods for refugee and host communities.

Sustainable Aquaculture
We promote environmentally responsible fish farming techniques that can be practiced at small scale.

• Pond construction and management
• Fish breeding and hatchery techniques
• Feed formulation and management
• Water quality monitoring
• Harvest and post-harvest handling

Capture Fisheries Support
We support traditional fishing communities with resources and training for sustainable practices.

• Sustainable fishing techniques
• Equipment maintenance and repair
• Safety training and life-saving equipment
• Fish processing and preservation
• Market access and value addition

Training and Capacity Building
We provide comprehensive training to build skills in fisheries and aquaculture.

• Technical training in aquaculture and fisheries
• Business skills for fish farming enterprises
• Environmental stewardship and conservation
• Community organizing and cooperative development

These activities aim to reduce pressure on natural fish stocks while providing reliable sources of protein and income.`,
  sections: [
    {
      title: "Sustainable Aquaculture",
      description: "Environmentally responsible fish farming",
      items: ["Pond construction", "Fish breeding", "Feed management", "Water quality", "Harvest handling"],
      icon: <Trees className="w-6 h-6" />,
    },
    {
      title: "Capture Fisheries Support",
      description: "Supporting traditional fishing communities",
      items: ["Sustainable techniques", "Equipment support", "Safety training", "Processing", "Market access"],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "Training and Capacity Building",
      description: "Building skills in fisheries and aquaculture",
      items: ["Technical training", "Business skills", "Environmental stewardship", "Community organizing"],
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ],
  objectives: [
    "Promote sustainable fishing and aquaculture practices",
    "Improve food security and nutrition",
    "Generate income through fisheries-related activities",
    "Protect aquatic ecosystems and biodiversity",
    "Build capacity for sustainable resource management",
  ],
  activities: [
    { icon: "Droplets", title: "Fish Farming", description: "Sustainable aquaculture training", frequency: "Weekly" },
    { icon: "Briefcase", title: "Fishing Equipment Support", description: "Tools and maintenance training", frequency: "Bi-weekly" },
    { icon: "GraduationCap", title: "Fisheries Business Training", description: "Entrepreneurship in aquaculture", frequency: "Monthly" },
    { icon: "Users", title: "Community Fishing Cooperatives", description: "Organizing and managing fishing groups", frequency: "Ongoing" },
  ],
  impact: {
    peopleHelped: "800+",
    beneficiaries: "1,200+",
    projects: "10",
    communities: "15+",
  },
  color: "bg-cyan-600",
  secondaryColor: "text-cyan-600",
}
];


export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getAllProgramSlugs(): string[] {
  return programs.map((p) => p.slug);
}