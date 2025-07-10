const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="flex space-x-2 loader-dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Loader;
