import Image from "next/image";
import Link from "next/link";

interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <div className="font-jost text-4xl md:text-5xl font-bold text-primary-blue mb-2">
        {number}
      </div>
      <div className="text-gray-600 text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
