const testCategories = [
  {
    title: "Hematology",
    tests: [
      {
        name: "Full Blood Count (FBC) Complete Blood Count (CBC)",
        description:
          "Full Blood Count (FBC), or Complete Blood Count (CBC), is a common laboratory test that measures the cells in a person's blood, including red blood cells, white blood cells, and platelets. It is used to evaluate overall health, detect disorders like anemia and infection, and monitor treatment",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Erythrocyte Sedimentation Rate (ESR)",
        description:
          "The Erythrocyte Sedimentation Rate (ESR) test is a blood test that measures how quickly red blood cells settle to the bottom of a test tube, acting as a non-specific indicator of inflammation, infection, or cancers in the body. A faster settling rate indicates higher inflammation, which helps doctors detect, diagnose, and monitor conditions like arthritis, lupus, or vasculitis.",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "PT INR",
        description:
          "PT/INR test measures how long it takes for a person's blood to form a clot, specifically checking the function of clotting factors produced by the liver. It is primarily used to monitor patients on blood thinners like Warfarin (Coumadin) and to diagnose bleeding disorders or liver issues",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
    ],
  },
  {
    title: "Biochemistry",
    tests: [
      {
        name: "Fasting Blood Sugar (FBS)",
        description:
          "A fasting blood sugar test (or fasting plasma glucose) measures the amount of glucose (sugar) in your blood after you haven't eaten for 8-12 hours, typically overnight. It is a safe and common diagnostic tool to check for diabetes, prediabetes, or gestational diabetes",
        fasting: true,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "Fasting is required.",
        duration: "Same Day",
      },
      {
        name: "Lipid Profile",
        description:
          'lipid profile (or lipid panel) is a blood test that measures the levels of fats—specifically cholesterol and triglycerides—in your blood to assess your risk of cardiovascular disease, heart attack, and stroke. It evaluates "good" and "bad" cholesterol to identify potential plaque buildup in arteries.',
        fasting: true,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "Fasting is required.",
        duration: "Same Day",
      },
      {
        name: "Thyroid-Stimulating Hormone (TSH)",
        description:
          "TSH stands for Thyroid-Stimulating Hormone (also known as thyrotropin), a hormone produced by the pituitary gland that regulates the thyroid gland's production of metabolism-controlling hormones (T3 and T4). A TSH blood test measures this hormone to check for hypothyroidism (high TSH, low thyroid function) or hyperthyroidism (low TSH, high thyroid function).",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Free T4",
        description:
          "Free T4 (free thyroxine) is a blood test measuring the amount of active, unbound thyroxine hormone available for your body’s tissues to use, indicating how well the thyroid gland is functioning. It is considered more accurate than total T4 because it only measures the active hormone, not the portion bound to proteins",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "SGOT / AST",
        description:
          "SGOT (Serum Glutamic-Oxaloacetic Transaminase), now commonly referred to as AST (Aspartate Aminotransferase), is an enzyme found primarily in the liver, but also in muscles, heart, and kidneys. A blood test measures its levels to detect cell damage—specifically liver disease, hepatitis, or heart/muscle injury—as damaged cells release the enzyme into the bloodstream.",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "SGPT / ALT",
        description:
          "SGPT test (Serum Glutamic Pyruvic Transaminase) measures the level of the enzyme ALT (alanine aminotransferase) in the blood to evaluate liver health. It acts as a key indicator of liver damage; elevated levels indicate inflammation or injury, as this enzyme leaks from liver cells into the bloodstream when damaged",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Blood Urea &BUN",
        description:
          "Blood Urea Nitrogen (BUN) test measures the amount of nitrogen in the blood that comes from the waste product urea, which is produced when the liver breaks down proteins. It is a primary diagnostic tool used to evaluate kidney function, detect renal disease, or monitor dehydration.",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Creatinine with GFR",
        description:
          "Creatinine with GFR test is a blood test that measures the levels of creatinine (a muscle waste product) to estimate how efficiently your kidneys are filtering waste, known as the estimated Glomerular Filtration Rate (eGFR). It is a primary diagnostic tool to detect early kidney damage, monitor Chronic Kidney Disease (CKD), and ensure medication safety",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Serum Electrolyte (SE)",
        description:
          "Electrolyte test (often a serum electrolyte panel) measures the levels of key minerals like sodium, potassium, chloride to identify imbalances that cause dehydration, kidney disease, or heart issues. It helps monitor for symptoms like dizziness, cramping, or confusion.",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "C-reactive protein (CRP)",
        description:
          "C-reactive protein (CRP) test is a blood test that measures the level of inflammation in your body by identifying a specific protein produced by the liver. It acts as a rapid, general indicator of acute infections (like bacteria), chronic inflammatory conditions (such as rheumatoid arthritis), or tissue injury, often rising before symptoms like fever or pain appear.",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "HBA1C",
        description:
          "HbA1c test (glycated hemoglobin) is a blood test that measures your average blood sugar levels over the past 2–3 months. It is primarily used to diagnose prediabetes and Type 2 diabetes, and to monitor blood glucose management in people with diabetes by measuring sugar attached to red blood cells.",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Urine Microalbumin/Creatinine ratio (UMA)",
        description:
          "A microalbumin urine test (or urine albumin-to-creatinine ratio, ACR) detects tiny amounts of the protein albumin leaking into urine, serving as an early indicator of kidney disease or damage, often in diabetic or hypertensive patients. It finds damage too subtle for standard dipstick tests. It is used to screen for early diabetic nephropathy, monitor kidney health, and assess cardiovascular risk.",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Urine",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Post Postprandial Blood Sugar (PPBS)",
        description:
          "PPBS (Postprandial Blood Sugar) test measures glucose levels in the blood exactly two hours after a meal to evaluate how the body processes sugar. It is essential for diagnosing or managing Type 1, Type 2, and gestational diabetes by detecting high glucose levels that often peak after eating",
        fasting: true,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "Fasting is required.",
        duration: "Same Day",
      },
      {
        name: "Random Blood Sugar (RBS)",
        description:
          "Random Blood Sugar (RBS) test measures the concentration of glucose in the bloodstream at any given time, regardless of when the person last ate. It is a quick, non-fasting screening tool used to detect hyperglycemia (high blood sugar), hypoglycemia (low blood sugar), and to diagnose diabetes mellitus in symptomatic individuals.",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Albumin (Serum)",
        description:
          "Serum Abumin test measures the level of albumin, a vital protein produced by the liver, in the liquid portion of your blood. It helps evaluate liver and kidney function, nutritional status, and fluid balance.",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Alkaline Phosphatase (ALP)",
        description:
          "Alkaline Phosphatase (ALP) is an enzyme found throughout the body, predominantly in the liver, bones, and bile ducts. An ALP blood test measures this enzyme’s levels to help screen for or monitor liver disease, bone disorders, or blockages in the bile ducts",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Amylase",
        description:
          "Amylase test measures the levels of the enzyme amylase in your blood or urine. Produced primarily by the pancreas and salivary glands, amylase helps break down carbohydrates. The test is most frequently used to diagnose and monitor pancreatic disorders like acute or chronic pancreatitis",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Billirubin (Total)",
        description:
          "Total serum bilirubin measures the combined amount of unconjugated and conjugated bilirubin in the blood to assess liver health, evaluate jaundice, and diagnose liver/bile duct diseases",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Direct Bilirubin",
        description:
          "Direct bilirubin (conjugated bilirubin) is a water-soluble form of bilirubin processed by the liver, acting as a key marker for liver function and bile duct health.",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Indirect Bilirubin",
        description:
          "Indirect and direct bilirubin are the two main forms measured in a bilirubin blood test to assess liver function and red blood cell health",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Total Calcium",
        description:
          'Total Calcium test measures all the calcium in your blood, including both the calcium attached to proteins (like albumin) and the "free" (ionized) calcium. It is a routine blood draw used to screen for or monitor conditions affecting the bones, kidneys, thyroid, and parathyroid glands',
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Ionized Calcium",
        description:
          'Ionized calcium test measures the amount of "free" or unbound calcium in your blood. Because it is not attached to proteins like albumin, this active form of calcium is immediately available for your body to use in muscle contractions, nerve signaling, and blood clotting.',
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Corrected Calcium",
        description:
          "Corrected calcium is a calculated blood test that estimates your true, biologically active calcium level by adjusting for abnormal levels of albumin (a blood protein). Because about half of your blood calcium binds to proteins, fluctuations in albumin can falsely skew standard calcium results",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Total Cholesterol",
        description:
          'Total cholesterol is the overall measurement of all cholesterol types in your blood—including LDL ("bad") and HDL ("good"")—used to assess heart disease risk. A healthy total cholesterol level for adults is generally under 200 mg/dL. High levels (240+ mg/dL) increase plaque buildup, elevating stroke and heart attack risk',
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "CPK (Creatine Phosphokinase)",
        description:
          "CPK (Creatine Phosphokinase) test is a blood draw that measures the level of the CPK enzyme in your blood. This enzyme is primarily found in your heart, brain, and skeletal muscles. When these tissues are damaged or stressed, they leak CPK into your bloodstream",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Gamma-Glutamyl Transferase (GGT)",
        description:
          "Gamma-glutamyl transferase (GGT) test is a blood test that measures the amount of GGT enzyme in your blood. It is primarily used by doctors to help diagnose or monitor diseases of the liver and bile ducts",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Glucose Challenge Test (GCT)",
        description:
          "The Glucose Challenge Test (GCT) is a screening for gestational diabetes (GDM) usually performed between 24 and 28 weeks of pregnancy. It involves drinking a sugary solution, followed by a blood test one hour later to measure how your body processes sugar, generally without requiring fasting",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Phosphorus (Phosphate)",
        description:
          "Phosphorus (phosphate) test measures the amount of the mineral phosphorus in your blood or urine. It is primarily used to diagnose or monitor kidney, bone, and parathyroid gland disorders, as well as to investigate abnormal calcium levels or vitamin D deficiencies",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation:
          "Fasting is generally not required, but your doctor may advise you to avoid certain foods (like cola or chocolate) beforehand",
        duration: "Same Day",
      },
      {
        name: "LDH ( Lactate Dehydrogenase)",
        description:
          "LDH most commonly refers to Lactate Dehydrogenase, a vital enzyme found in nearly all body tissues. An LDH blood test measures this enzyme to identify and monitor the severity of tissue damage, liver disease, or certain cancers",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Liver Function Test (LFT)",
        description:
          "Liver function tests (LFTs) are a group of blood tests used to measure specific enzymes, proteins, and substances (such as bilirubin) produced or excreted by your liver. They help detect damage, diagnose disease, and monitor liver health",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Magnesium (Mg2+)",
        description:
          "Magnesium is an essential mineral responsible for over 300 biochemical reactions in the body. It regulates muscle and nerve function, blood pressure, and blood sugar levels. It is also critical for energy production, protein synthesis, and bone development",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Oral Glucose Tolerance Test (OGTT)",
        description:
          "Oral Glucose Tolerance Test (OGTT) measures how your body processes sugar. It is primarily used to diagnose type 2 diabetes, prediabetes, and gestational diabetes (diabetes during pregnancy). The procedure involves drinking a glucose-rich solution and having your blood drawn at timed intervals",
        fasting: true,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "Fasting is required.",
        duration: "Same Day",
      },
      {
        name: "Renal Function Test (RFT or KFT",
        description:
          "Renal Function Test (RFT or KFT) is a group of blood tests used to evaluate how well your kidneys filter waste, manage fluids, and balance electrolytes. It is essential for detecting kidney disease early, monitoring chronic conditions like diabetes or high blood pressure, and evaluating renal function",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Serum Protein",
        description:
          "Serum Protein test measures the total amount of protein (albumin and globulin) in your blood to evaluate overall health, nutritional status, and kidney or liver function. It is often used to diagnose infections, autoimmune disorders, and bone marrow diseases, typically requiring a simple blood draw with no special preparation",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Uric Acid",
        description:
          "Uric acid test measures the amount of uric acid—a waste product from the breakdown of purines in your cells and food—in your blood or urine. Doctors primarily use it to diagnose or monitor gout, investigate kidney stones, and track patients undergoing cancer treatments",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Blood / Urine",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Urine Albumin",
        description:
          "Urine albumin (albuminuria) is a condition where a blood protein called albumin leaks into the urine, acting as a key early indicator of kidney damage or disease, often before symptoms arise",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Urine",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Urine Protein Creatinine Ratio (UPCR)",
        description:
          "Urine Protein Creatinine Ratio (UPCR) test measures the amount of protein leaking into urine relative to creatinine, acting as a quick alternative to 24-hour urine collection to assess kidney damage",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Urine",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Urine hCG",
        description:
          'Urine hCG test is a quick, qualitative home or lab test that detects human chorionic gonadotropin (hCG)—the "pregnancy hormone"—in your urine',
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Urine",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "SFA (Seminal Fluid Analysis)",
        description:
          "SFA (Seminal Fluid Analysis) test, also known as a semen analysis, evaluates male fertility by measuring sperm count, motility (movement), and morphology (shape). It is also used to confirm the success of a vasectomy",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Seminal Fluid",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Urine Sugar",
        description:
          "Urine sugar (glycosuria) occurs when glucose levels in the urine exceed normal limits, often signaling high blood sugar (diabetes) or kidney issues",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Urine",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
    ],
  },
  {
    title: "Clinical Pathology",
    tests: [
      {
        name: "Urine Full Report (UFR)",
        description:
          "Urine Full Report (UFR), or urinalysis, is a common, non-invasive diagnostic test evaluating urine’s physical, chemical, and microscopic properties. It checks for kidney disease, infections (UTIs), liver issues, and diabetes. The analysis consists of visual inspection, dipstick chemical testing, and microscopic examination of sediment.",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Urine",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
      {
        name: "Stool Full Report (SFR)",
        description:
          'A "Stool Full Report" or Comprehensive Stool Analysis is a diagnostic laboratory test that examines a fecal sample for physical, chemical, and microscopic signs of disease. It helps identify infections (bacteria, parasites, viruses), inflammation, digestive issues, and hidden bleeding, aiding doctors in diagnosing chronic diarrhea, IBD, or cancers.',
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Stool",
        preparation: "No special preparation required.",
        duration: "Same Day",
      },
    ],
  },
  {
    title: "Microbiology",
    tests: [
      {
        name: "Urine Culture & ABST",
        description:
          "Urine Culture & ABST (Antibiotic Susceptibility Testing) is a laboratory test used to diagnose a urinary tract infection (UTI) and determine the exact antibiotic needed to treat it. It identifies the specific bacteria causing the infection and tests which medications will effectively kill them",
        fasting: false,
        ageLimit: "No age limit",
        sampleType: "Urine",
        preparation: "No special preparation required.",
        duration: "2 - 3 Days",
      },
    ],
  },
];

export default testCategories;
