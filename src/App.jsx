import React, { useState } from 'react';
import Home from './Home';
import Search from './Search';      // 대문자 S 확인
import Wishlist from './Wishlist';  // 대문자 W 확인
import MyChannel from './MyChannel'; // 대문자 M, C 확인
import Navigation from './navigation.jsx'; // 소문자 n 확인

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
      {/* Navigation에 필수 데이터 전달 */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
