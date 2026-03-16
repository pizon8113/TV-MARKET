import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around py-3 text-[10px] text-gray-400 z-50">
      <button 
        className={activeTab === 'home' ? 'text-orange-500 font-bold' : ''} 
        onClick={() => setActiveTab('home')}
      >
        홈
      </button>
      <button 
        className={activeTab === 'search' ? 'text-orange-500 font-bold' : ''} 
        onClick={() => setActiveTab('search')}
      >
        검색
      </button>
      <button 
        className={activeTab === 'wish' ? 'text-orange-500 font-bold' : ''} 
        onClick={() => setActiveTab('wish')}
      >
        관심
      </button>
      <button 
        className={activeTab === 'channel' ? 'text-orange-500 font-bold' : ''} 
        onClick={() => setActiveTab('channel')}
      >
        내 방송채널
      </button>
    </nav>
  );
};

// 이 아랫줄이 없으면 배포가 실패합니다.
export default Navigation;
