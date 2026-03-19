import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-20 font-sans">
      {/* 상단바 */}
      <header className="flex items-center justify-between p-4 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <h1 className="text-orange-600 font-black text-xl italic">TV MARKET</h1>
          <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">🔥 2,189</span>
          <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">● ON-AIR</span>
        </div>
      </header>

      {/* 카테고리 */}
      <nav className="flex justify-around bg-white border-b py-3 text-sm font-bold text-gray-500">
        <button className="text-orange-600 border-b-2 border-orange-600 pb-1">산지직송</button>
        <button>내 주변 떨이</button>
        <button>중고명품</button>
      </nav>

      {/* 메인 타이틀 */}
      <div className="p-4"><h2 className="text-lg font-bold">지금 가장 HOT한 방송 🔥</h2></div>

      {/* 상품 카드 (예시 하나만 넣었습니다) */}
      <div className="p-3">
        <div className="bg-white rounded-2xl overflow-hidden shadow-md relative w-full">
          <div className="absolute top-2 left-2 bg-orange-600 text-white text-[10px] px-2 py-1 rounded font-bold z-10">LIVE</div>
          <img src="https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?w=800" className="w-full h-64 object-cover" />
          <div className="p-3 bg-black/80 text-white">
            <div className="text-[10px] opacity-70">🔥 2,189명 시청 중</div>
            <h3 className="font-bold mt-1">오늘만 이 가격! 꿀사과 (특)</h3>
            <p className="text-orange-500 font-black text-lg">15,000원</p>
          </div>
        </div>
      </div>

      {/* 하단 탭바 */}
      <footer className="fixed bottom-0 w-full bg-white border-t flex justify-around py-3 shadow-lg">
        <button className="flex flex-col items-center text-orange-600"><span className="text-xl">🔥</span><span className="text-[10px]">홈</span></button>
        <button className="flex flex-col items-center text-gray-400"><span className="text-xl">🔍</span><span className="text-[10px]">검색</span></button>
        <button className="flex flex-col items-center text-gray-400"><span className="text-xl">👤</span><span className="text-[10px]">마이</span></button>
      </footer>
    </div>
  );
};

export default Home;
