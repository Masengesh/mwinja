import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Users, Sparkles, ArrowRight, MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Mwinja Divine Help Foundation",
  description: "Learn about Mwinja Divine Help Foundation, a Refugee-Led organization committed to improving living conditions through education, health, and sustainable development in Uganda.",
};

const timeline = [
  {
    year: "2023",
    title: "The Beginning",
    description: "Mwinja Divine Help Foundation was founded in Kampala, Uganda, by refugees who understood firsthand the challenges faced by displaced communities.",
  },
  {
    year: "2024",
    title: "First Programs",
    description: "We launched our first education and livelihood programs, reaching over 500 beneficiaries in Rubaga Division and surrounding communities.",
  },
  {
    year: "2025",
    title: "Growth & Recognition",
    description: "Registered with Uganda NGO Bureau, expanded our team, and established partnerships with local organizations and international agencies.",
  },
  {
    year: "2026",
    title: "Scaling Impact",
    description: "Today we serve thousands of refugees and host community members, with programs spanning education, health, economic empowerment, and community development.",
  },
];

const values = [
  { icon: <Heart className="w-6 h-6" />, title: "Compassion", description: "Treating every individual with kindness, empathy, and understanding" },
  { icon: <Users className="w-6 h-6" />, title: "Empowerment", description: "Enabling individuals to take control of their own futures" },
  { icon: <Eye className="w-6 h-6" />, title: "Inclusivity", description: "Creating welcoming spaces for all, regardless of background" },
  { icon: <Target className="w-6 h-6" />, title: "Sustainability", description: "Focusing on long-term solutions that benefit future generations" },
  { icon: <Eye className="w-6 h-6" />, title: "Respect & Dignity", description: "Honoring the inherent worth of every person regardless of status" },
  { icon: <Eye className="w-6 h-6" />, title: "Collaboration", description: "Working together with communities and partners for shared goals" },
  { icon: <Eye className="w-6 h-6" />, title: "Advocacy", description: "Championing the rights and needs of refugees and marginalized groups" },
  { icon: <Eye className="w-6 h-6" />, title: "Cultural Sensitivity", description: "Respecting and integrating diverse cultural backgrounds" },
];

const team = [
  { name: "Okovunimali Mwinja Vasco", role: "Executive Director", image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1776962851/ceo-mwinja_nfvco9.jpg", bio: "Founded MDHF after her own refugee journey, dedicated to empowering displaced communities." },
  { name: "Emile Amisi", role: "Program Manager", image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1776880421/WhatsApp_Image_2026-04-18_at_13.42.31_zt86hj.jpg", bio: " experience in community development and humanitarian work." },
  { name: "Gracia Rutebuka", role: "Education Lead", image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1776880419/2_v0ipvn.jpg", bio: "Passionate about education access for refugee children and youth." },
  { name: "Ombeni nyarugeta", role: "Livelihoods Coordinator", image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1776880424/WhatsApp_Image_2026-04-18_at_18.16.22_rnwfvy.jpg", bio: "Expert in vocational training and small business development." },
  { name: "xxxxxxxxxx", role: "xxxxxxxxx", image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1776880423/WhatsApp_Image_2026-04-18_at_15.51.08_stysxd.jpg" },
  { name: "xxxxxxxxxx", role: "xxxxxxxxx", image: "https://res.cloudinary.com/dbllxptl8/image/upload/v1776560304/WhatsApp_Image_2026-04-18_at_18.25.28_nosore.jpg" },

];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://ext.same-assets.com/922964245/3478060187.jpeg')" }}>
        <div className="absolute inset-0 bg-primary-blue/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-flex items-center gap-2 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Story, Our Mission
          </span>
          <h1 className="font-jost text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Driven by lived experience, united by purpose — empowering refugees and host communities to build dignified, sustainable futures.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/922964245/3478060187.jpeg"
                alt="Mwinja Divine Help Foundation team"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-dark-navy text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">Since 2023</p>
                <p className="text-sm opacity-90">Serving Communities</p>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
                Who We Are
              </span>
              <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-dark-navy mb-6 leading-tight">
                Mwinja Divine Help Foundation
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We are a <strong className="text-dark-navy">Refugee-Led Organization</strong> founded in Kampala, Uganda, born from the lived experiences of those who have directly faced the challenges of displacement.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our founders understand intimately the struggles faced by refugees and host communities — the daily fight for education, healthcare, employment, and dignity. This understanding drives everything we do.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are committed to creating sustainable pathways out of poverty through education, economic empowerment, and community development — ensuring that every individual has the opportunity to thrive.
              </p>

              <div className="flex flex-wrap gap-8 text-center border-t border-gray-200 pt-8">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary-blue">5,000+</p>
                  <p className="text-gray-600 text-sm">Beneficiaries</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary-blue">15</p>
                   <p className="text-gray-600 text-sm">Projects</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary-blue">25+</p>
                  <p className="text-gray-600 text-sm">Communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Timeline */}
      <section className="py-20 lg:py-28 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
              <Calendar className="w-4 h-4" />
              Our Journey
            </span>
            <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-dark-navy">
              Our Story
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-blue/20 transform -translate-x-1/2" />
            
            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="lg:w-1/2 lg:pr-16 lg:text-right">
                    <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? '' : 'lg:ml-auto'}`}>
                      <span className="inline-block px-3 py-1 bg-primary-blue text-white text-sm font-bold rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-jost text-xl font-bold text-dark-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-blue rounded-full border-4 border-white shadow-lg z-10" />
                  
                  <div className="lg:w-1/2 lg:pl-16">
                    <div className={`lg:ml-auto ${index % 2 === 0 ? 'lg:ml-auto' : ''}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
              What Drives Us
            </span>
            <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-dark-navy">
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-light-blue hover:bg-primary-blue/5 transition-colors">
                <div className="w-14 h-14 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-blue">
                  {value.icon}
                </div>
                <h3 className="font-jost text-xl font-bold text-dark-navy mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-dark-navy text-white p-8 rounded-2xl">
              <h3 className="font-jost text-2xl font-bold mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary-blue" />
                Our Vision
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                To create a world where refugees and low-income host communities are socially and economically empowered and actively participate in community development.
              </p>
            </div>
            <div className="bg-primary-blue text-white p-8 rounded-2xl">
              <h3 className="font-jost text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-white" />
                Our Mission
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                1. Promote emotional healing and mental well-being by creating safe and supportive spaces for individuals experiencing trauma and depression, encouraging reflection, exploring diverse paths to healing, and fostering personal growth, resilience, and hope.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                2. Educate and guide vulnerable people to access humanitarian services for their psychosocial, legal and judicial wellbeing.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                3. Bring vulnerable individuals together and encourage them to engage socially and participle in community initiatives.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                4. Create a world where every individual can cultivate harmony, peace and love, especially toward vulnerable person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
              Our Leadership
            </span>
            <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-dark-navy">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Dedicated professionals with shared lived experience and commitment to serving our communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-jost text-lg font-bold text-dark-navy">{member.name}</h3>
                  <p className="text-primary-blue text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 lg:py-28 bg-dark-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-primary-blue font-semibold text-sm uppercase tracking-wider mb-4">
                Why We Exist
              </span>
              <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                A Crisis Demands<br />a Response
              </h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Uganda hosts Africa's largest refugee population — over 1.96 million people forced to flee their homes due to conflict, violence, and persecution.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                In Kampala alone, over 157,000 refugees face daily challenges: limited access to education, scarce livelihood opportunities, inadequate healthcare, and the constant struggle for dignity and self-reliance.
              </p>
              <p className="text-white/90 text-lg font-medium leading-relaxed">
                We exist because no one should have to choose between safety and opportunity. We exist because refugees deserve a chance to not just survive — but to thrive.
              </p>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/922964245/3893045342.jpeg"
                alt="Community meeting"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-blue rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-blue/30 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-28 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-jost text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Whether you have resources, skills, or simply the desire to make a difference, there is a place for you in our work. Together, we can build futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-accent-gold hover:bg-accent-gold-dark text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-dark-navy font-bold px-8 py-4 rounded-full transition-colors"
            >
              Get Involved
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}