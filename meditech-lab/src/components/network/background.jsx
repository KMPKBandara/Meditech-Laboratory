const BackgroundElements = () => (
  <div className="fixed inset-0  overflow-hidden pointer-events-none ">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/10 rounded-full blur-3xl animate-pulse "></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-100/10 rounded-full blur-3xl animate-pulse delay-500"></div>
  </div>
);

export default BackgroundElements;

  
