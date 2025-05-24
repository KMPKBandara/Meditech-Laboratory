/*const testCategories = [
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

export default testCategories;

const testCategories = [
  {
    title: "Haematology",
    tests: [
      {
        name: "Full Blood Count (FBC)",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "No specific preparation required.",
        duration: "Same day",
      },
      {
        name: "Erythrocyte Sedimentation Rate (ESR)",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "Avoid physical exertion before test.",
        duration: "Same day",
      },
    ],
  },
  {
    title: "Biochemistry",
    tests: [
      {
        name: "Fasting Blood Sugar (FBS)",
        fasting: true,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "Fasting for 8–12 hours is required.",
        duration: "Same day",
      },
      {
        name: "Lipid Profile",
        fasting: true,
        ageLimit: "Adults",
        sampleType: "Blood",
        preparation: "Fasting for 9–12 hours is recommended.",
        duration: "Same day",
      },
    ],
  },
  {
    title: "Endocrinology",
    tests: [
      {
        name: "Thyroid Function Tests (T3, T4, TSH)",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "1-2 days",
      },
      {
        name: "HbA1c",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "No fasting required.",
        duration: "Same day",
      },
    ],
  },
  {
    title: "Immunology & Serology",
    tests: [
      {
        name: "HIV Antibody Test",
        fasting: false,
        ageLimit: "18+",
        sampleType: "Blood",
        preparation: "Counseling might be provided before testing.",
        duration: "1-2 days",
      },
      {
        name: "Dengue NS1 Antigen",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "No special preparation needed.",
        duration: "Same day",
      },
    ],
  },
  {
    title: "Microbiology",
    tests: [
      {
        name: "Urine Culture",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Urine",
        preparation: "Collect midstream urine sample.",
        duration: "2-3 days",
      },
      {
        name: "Stool Culture",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Stool",
        preparation: "Collect fresh stool sample in a clean container.",
        duration: "2-3 days",
      },
    ],
  },
];

export default testCategories;*/
const testCategories = [
  {
    title: "Haematology",
    tests: [
      {
        name: "Full Blood Count (FBC)",
        description:
          "Evaluates overall health and detects a wide range of disorders, including anemia and infection.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "No specific preparation required.",
        duration: "Same day",
      },
      {
        name: "Erythrocyte Sedimentation Rate (ESR)",
        description: "Measures inflammation in the body.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "Avoid physical exertion before test.",
        duration: "Same day",
      },
      {
        name: "Coagulation Profile (PT/INR, APTT)",
        description:
          "Checks blood clotting ability to assess bleeding disorders.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "Avoid anticoagulant medications if advised.",
        duration: "Same day",
      },
      {
        name: "D-Dimer",
        description:
          "Used to rule out the presence of an inappropriate blood clot.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "No preparation required.",
        duration: "Same day",
      },
      {
        name: "Hemoglobin Estimation",
        description: "Measures the amount of hemoglobin to check for anemia.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "No special preparation.",
        duration: "Same day",
      },
      {
        name: "Platelet Count",
        description: "Determines the number of platelets in the blood.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "No specific preparation needed.",
        duration: "Same day",
      },
      {
        name: "Reticulocyte Count",
        description:
          "Measures immature red blood cells to assess bone marrow function.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "None.",
        duration: "Same day",
      },
      {
        name: "Peripheral Blood Smear",
        description:
          "Examines blood cells under a microscope for abnormalities.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "No preparation required.",
        duration: "1 day",
      },
      {
        name: "Bone Marrow Aspiration",
        description: "Checks bone marrow for blood disorders.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Bone marrow",
        preparation: "Procedure preparation as directed by physician.",
        duration: "2-3 days",
      },
      {
        name: "White Blood Cell Count",
        description:
          "Counts white blood cells to detect infection or immune disorders.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "None.",
        duration: "Same day",
      },
    ],
  },
  {
    title: "Biochemistry",
    tests: [
      {
        name: "Fasting Blood Sugar (FBS)",
        description:
          "Measures blood sugar levels after fasting to diagnose diabetes.",
        fasting: true,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "Fasting for 8–12 hours is required.",
        duration: "Same day",
      },
      {
        name: "Lipid Profile",
        description: "Assesses cholesterol levels and risk of heart disease.",
        fasting: true,
        ageLimit: "Adults",
        sampleType: "Blood",
        preparation: "Fasting for 9–12 hours is recommended.",
        duration: "Same day",
      },
      {
        name: "Liver Function Tests (LFT)",
        description: "Evaluates liver health and function.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "No preparation needed.",
        duration: "Same day",
      },
      {
        name: "Renal Function Tests (RFT)",
        description: "Assesses kidney function and detects kidney disease.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "Drink water before test.",
        duration: "Same day",
      },
      {
        name: "Electrolyte Panel",
        description:
          "Measures electrolyte levels for fluid balance and metabolism.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "No specific preparation required.",
        duration: "Same day",
      },
      {
        name: "Calcium Test",
        description:
          "Checks calcium levels to assess bone health and kidney function.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "Avoid calcium supplements before test.",
        duration: "Same day",
      },
      {
        name: "Uric Acid Test",
        description: "Measures uric acid levels to diagnose gout.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "Avoid purine-rich foods before test.",
        duration: "Same day",
      },
      {
        name: "Total Protein Test",
        description:
          "Measures total protein levels to assess nutrition and kidney function.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "None.",
        duration: "Same day",
      },
      {
        name: "Albumin Test",
        description:
          "Measures albumin levels to evaluate liver and kidney health.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "No preparation needed.",
        duration: "Same day",
      },
      {
        name: "Bilirubin Test",
        description: "Assesses liver function and detects jaundice.",
        fasting: false,
        ageLimit: "All ages",
        sampleType: "Blood",
        preparation: "Avoid alcohol before test.",
        duration: "Same day",
      },
    ],
  },
];

export default testCategories;
