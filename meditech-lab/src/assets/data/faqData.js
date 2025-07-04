const faq = {
  // Greetings
  hi: "Hello! Welcome to Meditech Laboratory. I'm here to help you with all your lab service needs. How can I assist you today?",
  hello:
    "Hi there! Thank you for choosing Meditech Laboratory. Feel free to ask me about our services, locations, or test reports.",

  // Services and Tests
  "what tests do you offer?":
    "We offer a comprehensive range of laboratory tests including:\n\n• Blood Tests (CBC, Lipid Profile, Liver Function, Kidney Function)\n• Urine Tests (Complete Urine Analysis, Microalbumin)\n• COVID-19 Tests (RT-PCR, Rapid Antigen)\n• Diabetes Tests (HbA1c, Fasting Glucose, OGTT)\n• Thyroid Function Tests\n• Cardiac Markers\n• Hormone Tests\n• Pregnancy Tests\n• STD Screening\n• Cancer Markers\n\nFor a complete test listing, please visit our website or contact any of our branches.",

  "blood tests":
    "Our blood test services include:\n\n• Complete Blood Count (CBC)\n• Lipid Profile\n• Liver Function Tests (LFT)\n• Kidney Function Tests (KFT)\n• Blood Sugar Tests\n• Thyroid Function Tests\n• Vitamin D, B12 Tests\n• Iron Studies\n• Cardiac Risk Assessment\n\nAll blood tests are processed with state-of-the-art equipment ensuring accurate results.",

  "covid test":
    "We offer comprehensive COVID-19 testing:\n\n• RT-PCR Test (Gold standard, results in 24 hours)\n• Rapid Antigen Test (Results in 30 minutes)\n• COVID-19 Antibody Test\n\nAll tests follow WHO guidelines. Home collection available for PCR tests.",

  "diabetes test":
    "Our diabetes screening includes:\n\n• Fasting Blood Sugar\n• Random Blood Sugar\n• HbA1c (3-month average)\n• Oral Glucose Tolerance Test (OGTT)\n• Urine Glucose\n\nRegular monitoring packages available for diabetic patients.",

  // Report Related
  "how do i download my report?":
    "To download your test report:\n\n1. Visit our website's 'Report Download' section\n2. Enter your Reference Number (found on your receipt)\n3. Enter your Passcode (usually your mobile number)\n4. Click 'Download Report'\n\nIf you face any issues, contact our customer support at 0771-234-567.",

  "when will my report be ready?":
    "Report delivery times:\n\n• Routine Tests: 24-48 hours\n• COVID-19 RT-PCR: 24 hours\n• COVID-19 Rapid Test: 30 minutes\n• Special Tests: 3-5 working days\n• Biopsy Reports: 7-10 working days\n\nYou'll receive an SMS notification when your report is ready.",

  "report not ready":
    "If your report is delayed:\n\n1. Check if the expected time has passed\n2. Verify your reference number\n3. Contact the branch where you gave the sample\n4. Our team will provide you with an update\n\nSome complex tests may take additional time for accuracy.",

  // Branches and Locations
  "branch locations":
    "Meditech Laboratory has 4 main branches:\n\n🏥 **Balangoda Branch**\n📍 123 Main Street, Balangoda\n📞 045-222-8888\n\n🏥 **Ratnapura Branch**\n📍 456 Gem City Road, Ratnapura\n📞 045-333-9999\n\n🏥 **Kalawana Branch**\n📍 789 Hill Country Ave, Kalawana\n📞 045-444-0000\n\n🏥 **Welimada Branch**\n📍 321 Uva Province St, Welimada\n📞 045-555-1111",

  "balangoda branch":
    "**Balangoda Branch Details:**\n\n📍 Address: 123 Main Street, Balangoda 70100\n📞 Phone: 045-222-8888\n⏰ Hours: Monday-Saturday 7:00 AM - 7:00 PM\n🏠 Home Collection: Available\n\n**Collecting Centers:**\n• Balangoda Hospital Collection Point\n• Pelmadulla Health Center\n• Embilipitiya Sub-branch\n• Kuruwita Collection Point",

  "ratnapura branch":
    "**Ratnapura Branch Details:**\n\n📍 Address: 456 Gem City Road, Ratnapura 70000\n📞 Phone: 045-333-9999\n⏰ Hours: Monday-Saturday 6:30 AM - 8:00 PM\n🏠 Home Collection: Available\n\n**Collecting Centers:**\n• Ratnapura General Hospital\n• Eheliyagoda Health Center\n• Avissawella Sub-branch\n• Kiriella Collection Point\n• Godakawela Health Unit",

  "kalawana branch":
    "**Kalawana Branch Details:**\n\n📍 Address: 789 Hill Country Avenue, Kalawana 70450\n📞 Phone: 045-444-0000\n⏰ Hours: Monday-Saturday 7:30 AM - 6:30 PM\n🏠 Home Collection: Available\n\n**Collecting Centers:**\n• Kalawana District Hospital\n• Palindanuwara Health Center\n• Kolonna Collection Point\n• Nivitigala Health Unit",

  "welimada branch":
    "**Welimada Branch Details:**\n\n📍 Address: 321 Uva Province Street, Welimada 90200\n📞 Phone: 045-555-1111\n⏰ Hours: Monday-Saturday 7:00 AM - 7:00 PM\n🏠 Home Collection: Available\n\n**Collecting Centers:**\n• Welimada Base Hospital\n• Bandarawela Collection Point\n• Haputale Health Center\n• Diyatalawa Medical Unit\n• Ella Tourist Collection Point",

  // Opening Hours
  "opening hours":
    "Our operating hours:\n\n🕐 **Main Branches:**\nMonday - Saturday: 6:30 AM - 8:00 PM\nSunday: 8:00 AM - 2:00 PM (Emergency only)\n\n🕐 **Collection Centers:**\nMonday - Saturday: 7:00 AM - 6:00 PM\nSunday: Closed\n\n⚡ **24/7 Emergency Services** available at Ratnapura branch.",

  "sunday hours":
    "Sunday Services:\n\n• Main branches: Emergency services only (8:00 AM - 2:00 PM)\n• Collection centers: Closed\n• Home collection: Available for urgent cases\n• Ratnapura branch: 24/7 emergency services\n\nFor Sunday appointments, call ahead to confirm availability.",

  // Home Collection
  "home collection":
    "**Home Sample Collection Service:**\n\n✅ Available in all branch areas\n🚗 Free service for orders above Rs. 2,000\n⏰ Time slots: 7:00 AM - 5:00 PM\n📅 Advance booking required\n💳 Payment: Cash or online\n\n**To book:**\n1. Call your nearest branch\n2. Provide your address and preferred time\n3. Our trained phlebotomist will visit\n\n**Service areas:** 15km radius from each branch.",

  "home collection charges":
    "Home Collection Charges:\n\n• Orders above Rs. 2,000: FREE\n• Orders Rs. 1,000-2,000: Rs. 300\n• Orders below Rs. 1,000: Rs. 500\n• Emergency home visits: Rs. 800\n• Sunday/Holiday visits: Rs. 1,000\n\nCharges may vary based on distance from branch.",

  // Pricing and Packages
  "test prices":
    "We offer competitive pricing for all tests:\n\n💰 **Popular Test Packages:**\n• Basic Health Checkup: Rs. 3,500\n• Comprehensive Health Package: Rs. 8,500\n• Diabetes Monitoring: Rs. 2,200\n• Lipid Profile: Rs. 1,800\n• Thyroid Package: Rs. 2,800\n\nFor detailed pricing, visit our website or contact any branch.",

  "health packages":
    "**Comprehensive Health Packages:**\n\n🩺 **Basic Package (Rs. 3,500):**\n• CBC, Blood Sugar, Lipid Profile, Liver Function\n\n🩺 **Premium Package (Rs. 8,500):**\n• 35+ tests including cardiac markers, vitamins\n\n🩺 **Executive Package (Rs. 12,000):**\n• 50+ tests + ECG + consultation\n\n🩺 **Senior Citizen Package (Rs. 6,500):**\n• Age-specific health screening\n\nAll packages include free home collection.",

  // Contact Information
  contact:
    "**Contact Meditech Laboratory:**\n\n📞 **Customer Support:** 0771-234-567\n📧 **Email:** support@meditechlab.lk\n🌐 **Website:** www.meditechlab.lk\n💬 **WhatsApp:** 0771-234-567\n\n**Head Office:**\n📍 Ratnapura Branch\n📞 045-333-9999\n\n**Emergency Hotline:** 0771-999-888 (24/7)",

  "customer support":
    "Our customer support team is here to help:\n\n📞 **Phone:** 0771-234-567 (24/7)\n📧 **Email:** support@meditechlab.lk\n💬 **WhatsApp:** 0771-234-567\n⏰ **Live Chat:** 8:00 AM - 8:00 PM\n\n**For urgent queries:**\n📞 Emergency Hotline: 0771-999-888\n\nOur team responds within 30 minutes during business hours.",

  // Payment and Insurance
  "payment methods":
    "We accept multiple payment options:\n\n💳 **Accepted Payments:**\n• Cash\n• Credit/Debit Cards (Visa, Master)\n• Bank Transfers\n• Mobile Payments (eZ Cash, mCash)\n• Insurance Claims\n\n💡 **Easy Payment Plans:**\n• Corporate account facilities\n• Monthly billing for regular customers\n• Online payment portal available",

  insurance:
    "Insurance and Corporate Services:\n\n🏥 **Accepted Insurance:**\n• National Insurance Trust Fund\n• Ceylinco Healthcare\n• AIA Insurance\n• Allianz Healthcare\n• Union Assurance\n\n🏢 **Corporate Packages:**\n• Employee health screening\n• Bulk testing discounts\n• On-site collection services\n• Customized health packages",

  // Quality and Accreditation
  quality:
    "Quality Assurance at Meditech Laboratory:\n\n🏆 **Certifications:**\n• ISO 15189:2012 Certified\n• College of American Pathologists (CAP) Accredited\n• Sri Lanka Accreditation Board (SLAB) Approved\n\n✅ **Quality Features:**\n• State-of-the-art equipment\n• Trained laboratory technicians\n• Regular quality control checks\n• Quick turnaround times\n• Accurate and reliable results",

  // Emergency Services
  emergency:
    "Emergency Laboratory Services:\n\n🚨 **24/7 Emergency Services:**\n• Available at Ratnapura branch\n• Critical test processing\n• Emergency home collection\n• Immediate result delivery\n\n**Emergency Contact:** 0771-999-888\n\n**Services include:**\n• Cardiac markers\n• Emergency blood work\n• Toxicology screening\n• Urgent COVID-19 testing",

  // Common Closings
  "thank you":
    "You're very welcome! Thank you for choosing Meditech Laboratory. If you have any more questions about our services, don't hesitate to ask. We're here to serve you better! 😊",
  thanks:
    "My pleasure! Meditech Laboratory is committed to providing you with the best service. Feel free to reach out anytime you need assistance with lab services or have questions.",
  bye: "Goodbye! Thank you for contacting Meditech Laboratory. Have a wonderful day, and remember - we're here whenever you need reliable lab services! 👋",
  goodbye:
    "Take care! Thank you for choosing Meditech Laboratory. We look forward to serving you again soon. Stay healthy! 🌟",
};
export default faq;
