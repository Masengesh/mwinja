import Image from "next/image";

interface ProgramCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
  id?: string;
}

export default function ProgramCard({ image, title, description, link = "#", id }: ProgramCardProps) {
  return (
    <a
      href={link}
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
      id={id}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <h3 className="font-jost text-primary-blue text-lg font-bold mb-2 italic">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </a>
  );
}
