import { FlaskConical, Calendar, Building } from 'lucide-react';

export default function Research() {
  const projects = [
    {
      title: 'ML-Based Prediction of Mechanical Properties in Polymer-Grafted Nanoparticles',
      institution: 'Carnegie Mellon University',
      period: 'Aug 2025 - Present',
      description:
        'Developing machine learning models to predict mechanical properties of polymer-grafted nanoparticles from molecular structure parameters.',
      highlights: [
        'Developed 8 regression models (XGBoost, Random Forest, Gradient Boosting, etc.) to predict Young\'s modulus from molecular structure',
        'Implemented hyperparameter optimization and cross-validation techniques to improve model accuracy',
        'Created automated scripts for model benchmarking and publication-ready visualization',
      ],
      tags: ['Machine Learning', 'Python', 'XGBoost', 'Polymers', 'Materials Modeling'],
    },
    {
      title: 'Role of Hyperuniformity in Self-Healing Hybrid Materials',
      institution: 'Carnegie Mellon University',
      period: 'Aug 2024 - Aug 2025',
      description:
        'Investigating the correlation between hyperuniformity and self-healing properties in hybrid nanocomposite materials.',
      highlights: [
        'Optimized thin-film coating processes (spin-coating) and performed TEM analysis',
        'Quantified hyperuniformity using Python/MATLAB algorithms',
        'Manuscript in preparation',
      ],
      tags: ['TEM', 'Python', 'MATLAB', 'Thin Films', 'Nanocomposites'],
    },
    {
      title: 'Water-Based Acrylate Pressure-Sensitive Adhesives',
      institution: 'Shanghai Institute of Technology',
      period: 'Jan 2024 - Jun 2024',
      description:
        'Synthesis and characterization of waterborne acrylic pressure-sensitive adhesives for sustainable applications.',
      highlights: [
        'Synthesized waterborne acrylic PSAs via suspension polymerization',
        'Characterized properties including peel strength, shear adhesion, and tack',
        'Visualized structure-property relationships using Tableau',
      ],
      tags: ['Polymer Synthesis', 'Characterization', 'Tableau', 'Adhesives'],
    },
  ];

  return (
    <section id="research" className="mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-gray-300">
        Research & Projects
      </h2>

      <div className="space-y-6 md:space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 md:p-6 border-b border-gray-300">
              <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-2 md:mb-3 leading-snug">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-700">
                <span className="flex items-center gap-1">
                  <Building size={14} />
                  {project.institution}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {project.period}
                </span>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-3 md:mb-4">
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <FlaskConical size={16} className="text-red-700 md:w-[18px] md:h-[18px]" />
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 text-sm md:text-base pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-red-700 before:font-bold"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 md:px-3 py-0.5 md:py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


