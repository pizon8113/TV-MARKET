import React, { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('산지직송');

  // 데이터 구성 (아이디 값 중복 주의)
  const hotShows = [
    { id: 1, title: '오늘만 이 가격! 꿀사과 (특) 5kg', price: '15,000원', viewers: '2,189', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500' },
    { id: 2, title: '인증 중고차: 렉서스 ES', price: '35,000,000원', viewers: '2,518', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500' },
  ];

  const categoryData = {
    '내 주변 떨이': [
      { id: 101, title: '토적 베이커 복아점 세트', price: '10,000원', viewers: '1,384', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400' },
    ],
    '산지직송': [
      { id: 102, title: '오늘만 이 가격! 꿀사과 (특) 5kg', price: '15,000원', viewers: '2,189', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400' },
      { id: 103, title: '제주 황금향 5kg 신선 박스', price: '28,000원', viewers: '1,638', img: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=400' },
      { id: 104, title: '논산 딸기 2kg 산지직송', price: '30,000원', viewers: '2,307', img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400' },
      { id: 105, title: '국내산 유기농 당근 2kg', price: '12,000원', viewers: '2,306', img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400' },
    ],
    '중고명품': [
      { id: 106, title: '인증 중고차: 렉서스 ES 300h', price: '35,000,000원', viewers: '2,518', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400' },
    ],
    '기업신상': []
  };

  return (
    <div className="bg-[#f2f2f2] min-h-screen pb-40 font-sans max-w-[480px] mx-auto shadow-2xl relative overflow-x-hidden">
      
      {/* 1. 상단 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="italic font-black text-xl text-gray-900">TV <span className="text-[#e65100]">MARKET</span></h1>
          <div className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full font-bold">🔥 2,189</div>
          <div className="bg-[#e65100] text-white text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> ON-AIR
          </div>
        </div>
        <div className="flex gap-4 text-xl">🔍 🛒</div>
      </header>

      {/* 2. 상단 HOT 방송 (가로 스크롤) */}
      <section className="bg-white p-4">
        <h2 className="text-lg font-extrabold mb-4 text-left">지금 가장 HOT한 방송 🔥</h2>
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {hotShows.map(show => (
            <div key={show.id} className="min-w-[240px] h-[320px] relative rounded-2xl overflow-hidden shadow-lg shrink-0">
              <img src={show.img} className="w-full h-full object-cover" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 flex gap-1">
                <span className="bg-[#e65100] text-white text-[9px] px-2 py-0.5 rounded font-bold">LIVE</span>
                <span className="bg-black/40 text-white text-[9px] px-2 py-0.5 rounded font-bold">🔥 {show.viewers}</span>
              </div>
              <div className="absolute bottom-4 left-4 text-left">
                <p className="text-white text-sm font-bold leading-tight mb-1">{show.title}</p>
                <p className="text-yellow-400 font-black text-base">{show.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 카테고리 탭 (Sticky) */}
      <nav className="sticky top-14 z-40 bg-white border-b mt-2 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-50/50">
          <span className="text-[10px] text-gray-400 font-bold uppercase">Category Tabs (Sticky)</span>
          <div className="text-blue-600 text-[9px] font-bold flex items-center gap-1">
            <span className="bg-blue-600 text-white rounded-full w-3 h-3 flex items-center justify-center text-[7px]">✔</span> Integrity Blue 🔥 189
          </div>
        </div>
        <div className="flex overflow-x-auto no-scrollbar border-t">
          {Object.keys(categoryData).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[100px] py-3 text-sm font-bold transition-all ${
                activeTab === tab ? 'text-[#e65100] border-b-2 border-[#e65100]' : 'text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* 4. [핵심수정] 하단 상품 그리드 (2열 레이아웃) */}
      <div className="grid grid-cols-2 gap-3 p-3 bg-white">
        {categoryData[activeTab]?.map(product => (
          <div key={product.id} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-gray-100">
            <img src={product.img} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute top-2 left-2 bg-[#e65100] text-white text-[8px] px-1.5 py-0.5 rounded font-black">LIVE</div>
            <div className="absolute bottom-3 left-3 text-left w-full pr-4">
              <div className="text-white text-[9px] font-bold mb-0.5">🔥 {product.viewers}</div>
              <p className="text-white text-[10px] font-bold line-clamp-2 leading-tight h-7">{product.title}</p>
              <p className="text-yellow-400 font-black text-[11px] mt-0.5">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 5. 흐르는 자막 바 (네비바 바로 위) */}
      <div className="fixed bottom-[70px] w-full max-w-[480px] bg-black/70 backdrop-blur-md text-white py-2 z-40 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-[12px] font-medium">
           🎙️ ...진짜 당도 보장합니다! 무료 배송 맞고요! 오늘만 이 특가! 꿀사과 15,000원에 드립니다! 재고 마감 임박! 🎙️ ...진짜 당도 보장합니다! 무료 배송 맞고요! 
        </div>
      </div>

      {/* 6. [핵심수정] 하단 네비게이션 (그림자 및 높이 보강) */}
      <footer className="fixed bottom-0 w-full max-w-[480px] bg-white border-t flex justify-around items-center h-[70px] z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <button className="flex flex-col items-center text-[#e65100] flex-1">
          <span className="text-2xl mb-1">🔥</span><span className="text-[10px] font-bold">홈</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 flex-1">
          <span className="text-2xl mb-1">🔍</span><span className="text-[10px] font-bold">검색</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 flex-1">
          <span className="text-2xl mb-1">🤍</span><span className="text-[10px] font-bold">관심</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 flex-1">
          <span className="text-2xl mb-1">👤</span><span className="text-[10px] font-bold">내 방송채널</span>
        </button>
      </footer>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Home;
