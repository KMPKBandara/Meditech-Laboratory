import React from "react";

const BalangodaBranch = () => {
  const centers = [
    {
      id: 1,
      address: "No. 123 Main Street, Balangoda, Sri Lanka",
      phone: "+94 45 222 3344",
      email: "balangoda@meditech.lk",
    },
    {
      id: 2,
      address: "No. 456 Lake Road, Balangoda, Sri Lanka",
      phone: "+94 45 222 5566",
      email: "center2@meditech.lk",
    },
    {
      id: 3,
      address: "No. 789 Hill Avenue, Balangoda, Sri Lanka",
      phone: "+94 45 222 7788",
      email: "center3@meditech.lk",
    },
  ];

  return (
    <div className="bg-white text-center">
      {/* Branch Title */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Balangoda Branch</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
          Welcome to our Balangoda branch. We are dedicated to providing
          accurate, reliable, and timely diagnostic services in the region.
        </p>

        {/* Google Map & Collection Centers */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-6xl mx-auto mt-12">
          {/* Google Map */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="400"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              className="rounded-2xl"
              src="https://maps.google.com/maps?width=720&height=600&hl=en&q=No.%20123%20Main%20Street,%20Balangoda,%20Sri%20Lanka+(Meditech%20Laboratary%20Balangoda)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
          </div>

          {/* Collection Centers */}
          <div className="bg-blue-50 w-full md:w-1/2 p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Collection Centers</h3>
            <div className="space-y-5 text-left">
              {centers.map((center) => (
                <div key={center.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
                  <p className="text-gray-800 mb-1">
                    <strong>{center.id < 10 ? `0${center.id}` : center.id}) Address:</strong> {center.address}
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone:</strong> {center.phone}
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong> {center.email}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-gray-50 py-12 mt-16">
        <h3 className="text-2xl font-semibold text-blue-800 mb-6">Need Assistance?</h3>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          If you have any questions about our services or collection centers in Balangoda, feel free to reach out to us via phone or email.
        </p>
      </section>
    </div>
  );
};

export default BalangodaBranch;
