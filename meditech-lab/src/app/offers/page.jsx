export default function OffersPage() {
  const branchOffers = [
    {
      branchName: "Balangoda Branch",
      location: "Kalthota Road, Balagahamula, Balangoda",
      phone: "0452288388 / 0715179093",
      offers: [
        {
          id: 1,
          title: "Complete Health Checkup Package",
          originalPrice: "Rs. 8,500",
          discountPrice: "Rs. 6,500",
          discount: "25% OFF",
          tests: [
            "CBC (Complete Blood Count)",
            "Lipid Profile",
            "Liver Function Tests",
            "Kidney Function Tests",
          ],
          validUntil: "Dec 31, 2024",
          imageUrl: "/api/placeholder/300/200",
        },
        {
          id: 2,
          title: "Diabetes Screening Package",
          originalPrice: "Rs. 3,500",
          discountPrice: "Rs. 2,800",
          discount: "20% OFF",
          tests: ["HbA1c", "Fasting Glucose", "Random Sugar", "Urine Analysis"],
          validUntil: "Dec 31, 2024",
          imageUrl: "/api/placeholder/300/200",
        },
      ],
    },
    {
      branchName: "Rathnapura Branch",
      location: "Hospital Junction, Colombo Road, Rathnapura",
      phone: "045 222 6446 / 071 155 6446",
      offers: [
        {
          id: 3,
          title: "Cardiac Risk Assessment",
          originalPrice: "Rs. 4,500",
          discountPrice: "Rs. 3,500",
          discount: "22% OFF",
          tests: [
            "ECG",
            "Cardiac Enzymes",
            "Cholesterol Profile",
            "Blood Pressure monitoring",
          ],
          validUntil: "Dec 31, 2024",
          imageUrl: "/api/placeholder/300/200",
        },
        {
          id: 4,
          title: "Women's Health Package",
          originalPrice: "Rs. 6,000",
          discountPrice: "Rs. 4,800",
          discount: "20% OFF",
          tests: [
            "Hormonal tests",
            "Thyroid function",
            "Vitamin D",
            "Iron studies",
          ],
          validUntil: "Dec 31, 2024",
          imageUrl: "/api/placeholder/300/200",
        },
      ],
    },
    {
      branchName: "Welimada Branch",
      location: "Hill Street, Welimada",
      phone: "+94 52 224 5566",
      offers: [
        {
          id: 5,
          title: "Senior Citizen Health Package",
          originalPrice: "Rs. 7,500",
          discountPrice: "Rs. 6,000",
          discount: "20% OFF",
          tests: [
            "Bone density",
            "Vitamin levels",
            "Organ functions",
            "Blood pressure check",
          ],
          validUntil: "Dec 31, 2024",
          imageUrl: "/api/placeholder/300/200",
        },
        {
          id: 6,
          title: "Family Health Screening",
          originalPrice: "Rs. 12,000",
          discountPrice: "Rs. 9,500",
          discount: "21% OFF",
          tests: [
            "Basic CBC",
            "Sugar levels",
            "Blood pressure",
            "Urine analysis",
          ],
          validUntil: "Dec 31, 2024",
          imageUrl: "/api/placeholder/300/200",
        },
      ],
    },
    {
      branchName: "Kalawana Branch",
      location: "Hospital Road, Kalawana",
      phone: "0452255370 / 0717647460",
      offers: [
        {
          id: 7,
          title: "Liver Function Complete",
          originalPrice: "Rs. 3,200",
          discountPrice: "Rs. 2,500",
          discount: "22% OFF",
          tests: ["SGPT", "SGOT", "Bilirubin", "Protein levels"],
          validUntil: "Dec 31, 2024",
          imageUrl: "/api/placeholder/300/200",
        },
        {
          id: 8,
          title: "Kidney Health Package",
          originalPrice: "Rs. 4,000",
          discountPrice: "Rs. 3,200",
          discount: "20% OFF",
          tests: ["Creatinine", "Urea", "Urine analysis", "Protein in urine"],
          validUntil: "Dec 31, 2024",
          imageUrl: "/api/placeholder/300/200",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Special Offers & Health Packages
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take advantage of our exclusive health packages and discounted rates
            across all branches
          </p>
        </div>
      </section>

      {/* Offers by Branch */}
      {branchOffers.map((branch, branchIndex) => (
        <section key={branchIndex} className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Branch Header */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-blue-800 mb-2">
                    {branch.branchName}
                  </h2>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">📍 Address:</span>{" "}
                    {branch.location}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">📞 Phone:</span>{" "}
                    {branch.phone}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {branch.offers.length} Special Offers Available
                  </span>
                </div>
              </div>
            </div>

            {/* Offers Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {branch.offers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  {/* Offer Image */}
                  <div className="relative h-48 bg-gradient-to-r from-blue-100 to-blue-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white text-2xl">🏥</span>
                        </div>
                        <p className="text-blue-800 font-medium">
                          Health Package
                        </p>
                      </div>
                    </div>
                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {offer.discount}
                    </div>
                  </div>

                  {/* Offer Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-3">
                      {offer.title}
                    </h3>

                    {/* Tests Included */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Tests Included:
                      </p>
                      <ul className="space-y-1">
                        {offer.tests.map((test, testIndex) => (
                          <li
                            key={testIndex}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <span className="text-blue-600 font-bold mr-2">
                              ✓
                            </span>
                            {test}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-blue-600">
                          {offer.discountPrice}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          {offer.originalPrice}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Valid until</p>
                        <p className="text-sm font-medium text-red-600">
                          {offer.validUntil}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Follow Us for the Latest Updates
          </h2>
          <p className="text-gray-600 mb-6">
            Follow us on Facebook and WhatsApp for the latest updates and health
            tips.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://www.facebook.com/share/19uAnmVHso/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors font-medium"
            >
              👍 Facebook
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vb6N0fa3GJOvjfwpI421"
              className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
