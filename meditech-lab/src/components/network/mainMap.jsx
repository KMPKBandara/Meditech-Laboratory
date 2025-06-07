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
    <iframe width="720" height="600" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=No:344,Hospital%20Junction,Colombo%20Road,Meditech%20Laboratory%20Rathnapura.+(Rathnapura%20Main%20Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  </div>
);


export default MainMapSection;