import { Code, Microscope, Award } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Data',
      icon: <Code size={24} className="text-red-700" />,
      skills: [
        'Python (Pandas, NumPy, Matplotlib)',
        'SQL',
        'Tableau',
        'JMP',
        'MATLAB',
        'ANSYS',
        'CAD',
        'Finite Element Analysis (FEA)',
      ],
    },
    {
      title: 'Materials Science',
      icon: <Microscope size={24} className="text-red-700" />,
      skills: [
        'Polymer Synthesis',
        'Characterization (TEM, SEM, DSC)',
        '3D Printing',
        'Failure Analysis',
        'Rheology',
        'Wet Lab Experience',
      ],
    },
    {
      title: 'Certifications',
      icon: <Award size={24} className="text-red-700" />,
      skills: [
        'Six Sigma White Belt',
        'Design of Experiments (JMP)',
        'NVIDIA Data Science Workflows',
      ],
    },
  ];

  return (
    <section id="skills" className="mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-gray-300">
        Technical Skills
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <span className="text-red-700">{category.icon}</span>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {category.title}
              </h3>
            </div>

            <ul className="space-y-2">
              {category.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="text-gray-700 text-sm md:text-base pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-red-700 before:font-bold before:text-lg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


