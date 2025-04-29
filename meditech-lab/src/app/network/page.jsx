import React from "react";

const branches = [
  {
    name: "Balangoda (Main Branch)",
    address: "No. 123 Main Street, Balangoda, Sri Lanka",
    phone: "+94 45 222 3344",
    email: "balangoda@meditech.lk",
    collectionCenters: [
      {
        name: "Imbulpe Collection Center",
        address: "No. 10, Imbulpe Road, Balangoda",
      },
      {
        name: "Pambahinna Collection Center",
        address: "No. 22, Pambahinna Junction, Balangoda",
      },
    ],
  },
  {
    name: "Rathnapura Branch",
    address: "No. 456 Gem Street, Rathnapura, Sri Lanka",
    phone: "+94 45 223 4455",
    email: "rathnapura@meditech.lk",
    collectionCenters: [
      {
        name: "Kuruwita Collection Center",
        address: "No. 5, Main Road, Kuruwita",
      },
      {
        name: "Eheliyagoda Collection Center",
        address: "No. 8, Temple Road, Eheliyagoda",
      },
    ],
  },
  {
    name: "Welimada Branch",
    address: "No. 789 Hill Street, Welimada, Sri Lanka",
    phone: "+94 52 224 5566",
    email: "welimada@meditech.lk",
    collectionCenters: [
      {
        name: "Uva-Paranagama Collection Center",
        address: "No. 3, Station Road, Uva-Paranagama",
      },
      {
        name: "Hali-Ela Collection Center",
        address: "No. 6, Market Road, Hali-Ela",
      },
    ],
  },
  {
    name: "Kalawana Branch",
    address: "No. 321 River Road, Kalawana, Sri Lanka",
    phone: "+94 45 225 6677",
    email: "kalawana@meditech.lk",
    collectionCenters: [
      {
        name: "Nivitigala Collection Center",
        address: "No. 7, School Lane, Nivitigala",
      },
      {
        name: "Ayagama Collection Center",
        address: "No. 9, Bazaar Street, Ayagama",
      },
    ],
  },
];

const LaboratoryNetwork = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Laboratory Network
      </h1>
      <p className="text-center text-gray-600 mb-12">
        MediTech Laboratory operates a network of branches and collection
        centers across Sri Lanka to provide accessible and reliable diagnostic
        services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {branches.map((branch, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {branch.name}
            </h2>
            <p className="text-gray-700 mb-1">
              <strong>Address:</strong> {branch.address}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Phone:</strong> {branch.phone}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> {branch.email}
            </p>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Collection Centers:
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {branch.collectionCenters.map((center, idx) => (
                <li key={idx}>
                  <strong>{center.name}:</strong> {center.address}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Find Us on the Map
        </h2>
        <div className="flex justify-center">
          <iframe
            width="520"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=520&height=400&hl=en&q=Meditech%20Laboratory%20Balangoda&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            title="Meditech Laboratory Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LaboratoryNetwork;
