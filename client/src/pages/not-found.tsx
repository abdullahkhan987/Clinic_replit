import { Link } from "wouter";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
          <p className="mt-4 text-lg text-gray-600">Page Not Found</p>
          <Link href="/">
            <a className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
              Go to Homepage
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;