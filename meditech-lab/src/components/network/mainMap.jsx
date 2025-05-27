const MainMapSection = () => (
  <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-5 border border-white/50">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
        Find us on the map
      </h2>
      <p className="text-lg text-blue-800 max-w-1xl mx-auto">
        Our flagship laboratory in Balangoda serves as the heart of our network. 
        Explore individual branches for specific locations and services.
      </p>
    </div>
    <div className="flex justify-center">
      <div className="rounded-xl overflow-hidden shadow-5xl ring-1 ring-black/5" style={{ width: '100%', maxWidth: '500px', height: '400px' }}>
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?width=800&height=450&hl=en&q=Meditech%20Laboratory%20Balangoda&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          title="Meditech Laboratory Map"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
);


export default MainMapSection;