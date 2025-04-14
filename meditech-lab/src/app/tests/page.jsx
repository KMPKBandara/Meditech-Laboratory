import React from "react";

const testCategories = [
  {
    title: "Haematology",
    tests: [
      "Full Blood Count (FBC)",
      "Erythrocyte Sedimentation Rate (ESR)",
      "Coagulation Profile (PT/INR, APTT)",
      "D-Dimer",
      "Hemoglobin Estimation",
    ],
  },
  {
    title: "Biochemistry",
    tests: [
      "Fasting Blood Sugar (FBS)",
      "Random Blood Sugar (RBS)",
      "Liver Function Tests (LFT)",
      "Renal Function Tests (RFT)",
      "Lipid Profile",
      "Electrolyte Panel",
    ],
  },
  {
    title: "Endocrinology",
    tests: [
      "Thyroid Function Tests (T3, T4, TSH)",
      "HbA1c",
      "Insulin Levels",
      "Cortisol Levels",
    ],
  },
  {
    title: "Immunology & Serology",
    tests: [
      "C-Reactive Protein (CRP)",
      "Rheumatoid Factor (RF)",
      "Hepatitis B Surface Antigen (HBsAg)",
      "HIV Antibody Test",
      "Dengue NS1 Antigen",
    ],
  },
  {
    title: "Microbiology",
    tests: [
      "Blood Culture",
      "Urine Culture",
      "Sputum Culture",
      "Stool Culture",
      "Wound Swab Culture",
    ],
  },
  {
    title: "Molecular Diagnostics",
    tests: [
      "COVID-19 PCR Test",
      "Hepatitis B DNA PCR",
      "HIV RNA PCR",
      "Tuberculosis PCR",
    ],
  },
  {
    title: "Histopathology",
    tests: [
      "Tissue Biopsy Examination",
      "Pap Smear",
      "Fine Needle Aspiration Cytology (FNAC)",
    ],
  },
  {
    title: "Urine & Stool Analysis",
    tests: [
      "Routine Urine Analysis",
      "Urine Microalbumin",
      "Stool Occult Blood Test",
      "Stool Routine Examination",
    ],
  },
  {
    title: "Special Tests",
    tests: [
      "Electrocardiogram (ECG)",
      "Chest X-Ray",
      "Ultrasound Scan",
      "CT Scan",
    ],
  },
];

const Tests = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Diagnostic Test Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                {category.title}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {category.tests.map((test, idx) => (
                  <li key={idx}>{test}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tests;
