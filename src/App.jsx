import React, { useState } from 'react';
import Home from './Home';
import Search from './Search';      // 대문자 S
import Wishlist from './Wishlist';  // 대문자 W
import MyChannel from './MyChannel'; // 대문자 M
import Navigation from './Navigation'; // 대문자 N (1단계에서 바꾼 이름)

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
