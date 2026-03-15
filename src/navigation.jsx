const Navigation = ({ activeTab }) => (
  <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around py-3 text-[10px] text-gray-400 z-50">
    <button className={activeTab === 'home' ? 'text-orange-500 font-bold' : ''}>홈</button>
    <button className={activeTab === 'search' ? 'text-orange-500 font-bold' : ''}>검색</button>
    <button className={activeTab === 'wish' ? 'text-orange-500 font-bold' : ''}>관심</button>
    <button className={activeTab === 'channel' ? 'text-orange-500 font-bold' : ''}>내 방송채널</button>
  </nav>
);
