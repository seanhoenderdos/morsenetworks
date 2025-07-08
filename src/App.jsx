import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navigation';
import RightSidebar from './components/rightSidebar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <div className="w-full h-full py-16 overflow-none">
        <Navbar />
        <Hero onCheckEligibility={openSidebar} />
        <RightSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </div>
    </>
  );
};

export default App;
