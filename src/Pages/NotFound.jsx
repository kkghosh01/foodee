import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-[#ff7426]">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-2 bg-[#ff7426] text-white rounded-full hover:bg-[#e06320] transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
