import React, { useState } from 'react';
import Home from './Home';
import Navigation from './navigation';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {activeTab === 'home' && <Home />}
      {/* 탭 전환에 따른 다른 컴포넌트들을 여기에 추가하세요 */}
      
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
