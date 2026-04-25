import { Program } from "@/lib/programs";

interface ProgramDescriptionProps {
  program: Program;
}

export default function ProgramDescription({ program }: ProgramDescriptionProps) {
  return (
    <div className="space-y-6">
      {program.sections && program.sections.length > 0 ? (
    // 🔥 NEW UI (CARD-BASED)
    <div className="grid md:grid-cols-2 gap-6">
      {program.sections.map((section, index) => (
        <div
          key={index}
          className={`p-6 rounded-2xl bg-white shadow-md border border-gray-100 transition-all duration-700 hover:shadow-xl opacity-100 translate-y-0`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
              {section.icon}
            </div>
            <h3 className="text-lg font-semibold text-dark-navy">
              {section.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {section.description}
          </p>

          {/* Items */}
          <ul className="space-y-2">
            {section.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="text-primary-blue mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ) : (
    // ⚠️ FALLBACK (OLD TEXT SYSTEM)
      program.fullDescription?.split("\n\n").map((paragraph, index) => (
        <p
          key={index}
          className={`text-gray-600 text-lg leading-relaxed transition-all duration-700 opacity-100 translate-y-0`}
          style={{ transitionDelay: `${(index + 1) * 150}ms` }}
        >
        {paragraph}
      </p>
    ))
  )}

  {/* Decorative quote */}
    <div
      className={`mt-4 p-8 bg-light-blue rounded-2xl border-l-4 border-primary-blue transition-all duration-700 opacity-100 translate-y-0`}
      style={{ transitionDelay: "600ms" }}
    >
    <p className="text-dark-navy italic text-lg font-medium">
      "Your Support helps to transform lives. From education to health care, every contribution moves us one step closer"
    </p>
    <p className="text-gray-500 mt-2 text-sm">
      — protect and love, care and support vulnerable people
    </p>
  </div>
</div>
  );
}