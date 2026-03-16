import React, { useState } from 'react';
import Home from './Home';
import Navigation from './navigation'; // { } 중괄호가 없어야 합니다!

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="pb-20">
      {activeTab === 'home' && <Home />}
      {/* 다른 탭들에 대한 컴포넌트도 여기에 추가될 수 있습니다 */}
      
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
