import React, { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('산지직송');

  // 샘플 데이터
  const hotShows = [
    { id: 1, title: '오늘만 이 가격! 꿀사과 (특)', price: '15,000원', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400', viewers: '2,189' },
    { id: 2, title: '인증 중고차: 렉서스 ES', price: '35,000,000원', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400', viewers: '1,500' },
  ];

  const products = [
    { id: 101, title: '오늘만 이 가격! 꿀사과 (특)', price: '15,000원', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400', viewers: '2,189' },
    { id: 102, title: '인증 중고차: 렉서스 ES', price: '35,000,000원', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400', viewers: '2,518' },
    { id: 103, title: '인증 중고차: 레너커', price: '30,000,000원', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400', viewers: '2,323' },
    { id: 104, title: '토적 베이커 복아점', price: '10,000원', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', viewers: '1,384' },
  ];

  return (
    <div className="bg-[#f2f2f2] min-h-screen pb-20 font-sans max-w-[480px] mx-auto shadow-2xl overflow-x-hidden relative">
      
      {/* 1. 상단 헤더 */}
      <header className="sticky top-0 z-50 bg-white border-b px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="italic font-black text-xl text-gray-800">TV <span className="text-[#e65100]">MARKET</span></h1>
          <div className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full font-bold">🔥 2,189</div>
          <div className="bg-[#e65100] text-white text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
            <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span> ON-AIR
          </div>
        </div>
        <div className="flex gap-4 text-xl text-gray-600">
          <button>🔍</button>
          <button>🛒</button>
        </div>
      </header>

      {/* 2. HOT 방송 섹션 */}
      <section className="bg-white p-4">
        <h2 className="text-lg font-extrabold mb-4 text-left">지금 가장 HOT한 방송 🔥</h2>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {hotShows.map(show => (
            <div key={show.id} className="min-w-[220px] h-[280px] relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
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
      <nav className="sticky top-14 z-40 bg-white border-b border-t shadow-sm mt-2">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-tight">Category Tabs <span className="font-normal">(Sticky)</span></span>
          <div className="bg-blue-50 text-blue-600 text-[9px] px-2 py-1 rounded-full border border-blue-100 font-bold flex items-center gap-1">
            <span className="text-blue-400 text-xs">✔</span> Integrity Blue 🔥 189
          </div>
        </div>
        <div className="flex px-2 border-t overflow-x-auto no-scrollbar">
          {['내 주변 떨이', '산지직송', '중고명품', '기업신상'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === tab ? 'text-[#e65100] border-b-2 border-[#e65100]' : 'text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* 4. 상품 그리드 (2열 레이아웃) */}
      <div className="grid grid-cols-2 gap-2.5 p-3 bg-white">
        {products.map(product => (
          <div key={product.id} className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm group">
            <img src={product.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute top-2 left-2 bg-[#e65100] text-white text-[8px] px-1.5 py-0.5 rounded font-black">LIVE</div>
            <div className="absolute bottom-3 left-3 text-left w-full pr-4">
              <div className="text-white text-[9px] font-bold mb-1 opacity-90">🔥 {product.viewers}</div>
              <p className="text-white text-[11px] font-bold line-clamp-2 leading-tight">{product.title}</p>
              <p className="text-yellow-400 font-black text-xs mt-0.5">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 5. 흐르는 자막 (애니메이션) */}
      <div className="fixed bottom-[60px] w-full max-w-[480px] bg-black/70 backdrop-blur-md text-white py-2.5 z-40 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-[13px] font-medium flex items-center gap-4">
          <span>🎙️ ...진짜 당도 보장합니다! 무료 배송 맞고요! 오늘만 이 특가! 꿀사과 15,000원에 드립니다! 재고 마감 임박! 지금 주문하세요!</span>
        </div>
      </div>

      {/* 6. 하단 네비게이션 */}
      <footer className="fixed bottom-0 w-full max-w-[480px] bg-white border-t flex justify-around items-center h-[60px] z-50 px-2">
        <button className="flex flex-col items-center text-[#e65100] flex-1">
          <span className="text-xl">🔥</span><span className="text-[10px] font-bold">홈</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 flex-1">
          <span className="text-xl">🔍</span><span className="text-[10px] font-bold">검색</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 flex-1">
          <span className="text-xl">🤍</span><span className="text-[10px] font-bold">관심</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 flex-1">
          <span className="text-xl">👤</span><span className="text-[10px] font-bold">내 방송채널</span>
        </button>
      </footer>

      {/* 스크롤바 숨기기 스타일 */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Home;
