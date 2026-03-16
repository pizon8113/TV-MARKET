import React, { useState } from 'react';
import Home from './Home';
import Search from './Search';
import Wishlist from './Wishlist';
import MyChannel from './MyChannel';
import Navigation from './navigation';

function App() {
  // 현재 어떤 탭이 선택되었는지 저장하는 상태 (기본값: 'home')
  const [activeTab, setActiveTab] = useState('home');

  // activeTab 값에 따라 실제 보여줄 컴포넌트를 결정하는 함수
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'search':
        return <Search />;
      case 'wish':
        return <Wishlist />;
      case 'channel':
        return <MyChannel />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="pb-20"> {/* 네비게이션 바 높이만큼 하단 여백 확보 */}
      {/* 1. 선택된 탭에 맞는 화면을 보여줌 */}
      {renderContent()}

      {/* 2. 하단 네비게이션 바 (상태값과 변경 함수를 전달) */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
