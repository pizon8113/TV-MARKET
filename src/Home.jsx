import React from 'react';

const Home = () => {
  // 샘플 데이터 (나중에 DB와 연결하세요)
  const products = [
    { id: 1, title: "오늘만 이 가격! 꿀사과 (특)", price: "15,000", viewers: "2,189", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?w=400" },
    { id: 2, title: "인증 중고차: 렉서스 ES", price: "35,000,000", viewers: "2,518", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400" },
    { id: 3, title: "인증 중고차: 레너커", price: "30,000,000", viewers: "2,323", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" },
    { id: 4, title: "토적 베이커 복아점", price: "10,000", viewers: "1,384", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
  ];

  return (
    <div className="bg-[#f2f2f2] min-h-screen pb-24 font-sans text-[#1a1a1a]">
      {/* 1. 최상단 헤더 */}
      <header className="flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <h1 className="text-[#e65100] font-black text-xl italic tracking-tighter">TV MARKET</h1>
          <div className="flex items-center bg-[#1a1a1a] text-white text-[10px] px-2 py-0.5 rounded-full gap-1">
            <span className="text-orange-500">🔥</span> 2,189
          </div>
          <div className="bg-[#b71c1c] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
            ● ON-AIR
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-xl">🔍</button>
          <button className="text-xl">🛒</button>
        </div>
      </header>

      {/* 2. 타이틀 섹션 */}
      <div className="px-4 py-4">
        <h2 className="text-lg font-bold flex items-center gap-1">
          지금 가장 HOT한 방송 🔥
        </h2>
      </div>

      {/* 3. 카테고리 탭 (Sticky) */}
      <nav className="flex justify-around bg-white border-b sticky top-[52px] z-40 py-3 text-sm font-bold text-gray-500">
        <button className="text-gray-400">내 주변 떨이</button>
        <button className="text-[#e65100] border-b-2 border-[#e65100] pb-1">산지직송</button>
        <button className="text-gray-400">중고명품</button>
        <button className="text-gray-400">기업신상</button>
      </nav>

      {/* 4. 상품 그리드 */}
      <div className="grid grid-cols-2 gap-3 p-3">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm relative">
            {/* LIVE 배지 */}
            <div className="absolute top-2 left-2 bg-[#e65100]/90 text-white text-[9px] px-2 py-0.5 rounded flex items-center gap-1 z-10 font-bold">
              LIVE <span className="w-1 h-1 bg-white rounded-full animate-ping"></span>
            </div>
            
            {/* 이미지 섹션 */}
            <div className="h-40 bg-gray-200">
              <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
            </div>

            {/* 정보 섹션 */}
            <div className="p-2 bg-black/80 text-white">
              <div className="flex items-center gap-1 text-[10px] opacity-80">
                🔥 {item.viewers}
              </div>
              <h3 className="text-xs font-medium mt-1 line-clamp-2 min-h-[32px]">
                {item.title}
              </h3>
              <p className="text-sm font-bold mt-1">{item.price}원</p>
            </div>
          </div>
        ))}
      </div>

      {/* 5. 하단 고정 네비게이션 */}
      <footer className="fixed bottom-0 w-full bg-white border-t flex justify-around py-2 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <button className="flex flex-col items-center text-[#e65100]">
          <span className="text-xl">🔥</span>
          <span className="text-[10px] font-bold">홈</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <span className="text-xl">🔍</span>
          <span className="text-[10px]">검색</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <span className="text-xl">🤍</span>
          <span className="text-[10px]">관심</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <span className="text-xl">👤</span>
          <span className="text-[10px]">내 방송채널</span>
        </button>
      </footer>
    </div>
  );
};

export default Home;

