import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgramBySlug, getAllProgramSlugs, programs } from "@/lib/programs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramHero from "@/components/program/ProgramHero";
import ProgramDescription from "@/components/program/ProgramDescription";
import ProgramObjectives from "@/components/program/ProgramObjectives";
import ProgramGallery from "@/components/program/ProgramGallery";
import ProgramCTA from "@/components/program/ProgramCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  
  if (!program) {
    return {
      title: "Program Not Found | Mwinja Divine Help Foundation",
    };
  }

  return {
    title: `${program.title} | Mwinja Divine Help Foundation`,
    description: program.shortDescription,
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const relatedPrograms = programs
    .filter((p) => p.id !== program.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProgramHero program={program} />
      <ProgramDescription program={program} />
      <ProgramObjectives program={program} />
      <ProgramGallery program={program} />
      <ProgramCTA program={program} relatedPrograms={relatedPrograms} />
      <Footer />
    </main>
  );
}