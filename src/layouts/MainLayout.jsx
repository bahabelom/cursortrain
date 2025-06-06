import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-500 to-purple-600 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-white/5 backdrop-blur-md py-8">
        <div className="container mx-auto px-4 text-center text-blue-100">
          <p>© 2024 Bahabelom G. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 