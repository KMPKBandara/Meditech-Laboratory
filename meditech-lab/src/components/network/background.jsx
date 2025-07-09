const BackgroundElements = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {/* Circle 1 */}
    <div className="
      absolute 
      top-1/4 left-1/4 
      w-40 h-40 sm:w-64 sm:h-64
      bg-blue-100/10 rounded-full blur-3xl animate-pulse
    "></div>

    {/* Circle 2 */}
    <div className="
      absolute 
      bottom-1/4 right-1/4 
      w-64 h-64 sm:w-96 sm:h-96
      bg-blue-100/10 rounded-full blur-3xl animate-pulse delay-1000
    "></div>

    {/* Circle 3 */}
    <div className="
      absolute 
      top-1/2 right-1/3 
      w-32 h-32 sm:w-48 sm:h-48
      bg-blue-100/10 rounded-full blur-3xl animate-pulse delay-500
    "></div>
  </div>
);

export default BackgroundElements;
