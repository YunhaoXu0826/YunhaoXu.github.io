import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Intern',
      company: 'Ocean Reviver',
      location: 'Irvine, CA',
      period: 'Jun 2025 - Aug 2025',
      responsibilities: [
        'Analyzed Direct Lithium Extraction (DLE) technologies and datasets using Python/Excel to evaluate Li selectivity and recovery rates',
        'Worked on quantum computing fundamentals (qubits, gates) and optimized quantum models using NumPy/Matplotlib',
      ],
    },
    {
      role: 'R&D Intern',
      company: 'Shanghai Chest Medical Devices Co.',
      location: 'Shanghai',
      period: 'Jul 2024 - Aug 2024',
      responsibilities: [
        'Created 2D/3D CAD drawings for medical devices and packaging',
        'Analyzed 150+ test samples using Python to identify quality trends, reducing data processing time by 40%',
        'Applied root cause analysis to resolve manufacturing issues, reducing retesting by 25%',
      ],
    },
  ];

  return (
    <section id="experience" className="mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-gray-300">
        Professional Experience
      </h2>

      <div className="space-y-6 md:space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="mb-3 md:mb-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                {exp.role}
              </h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-red-700 font-medium mb-2 text-sm md:text-base">
                <span className="flex items-center gap-1">
                  <Briefcase size={14} className="md:w-4 md:h-4" />
                  {exp.company}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="md:w-3.5 md:h-3.5" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} className="md:w-3.5 md:h-3.5" />
                  {exp.period}
                </span>
              </div>
            </div>

            <ul className="space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-700 text-sm md:text-base pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-700 before:font-bold before:text-lg">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


