import React, { useState } from 'react';
import Home from './Home';
import Search from './Search';      // S 대문자 확인
import Wishlist from './Wishlist';  // W 대문자 확인
import MyChannel from './MyChannel'; // M, C 대문자 확인
import Navigation from './navigation'; // n 소문자 확인

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'search': return <Search />;
      case 'wish': return <Wishlist />;
      case 'channel': return <MyChannel />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {renderContent()}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
