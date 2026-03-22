import React, { useState, useEffect, useRef } from 'react';

// 데이터 정의
const TAB_DATA = {
  '내 주변 떨이': [
    { id: 101, title: '오늘 마감! 수제 피자 2판', price: '12,000원', viewers: 987, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80' },
    { id: 102, title: '샐러드 전문점 마감 할인 세트', price: '5,900원', viewers: 543, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80' },
  ],
  '산지직송': [
    { id: 201, title: '오늘만 이 가격! 꿀사과 (특) 5kg', price: '15,000원', viewers: 2189, img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?w=400&q=80' },
    { id: 202, title: '제주 황금향 5kg 신선 박스', price: '28,000원', viewers: 1654, img: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=400&q=80' },
  ],
  '중고명품': [
    { id: 301, title: '샤넬 클래식 플랩 M 블랙 카비어', price: '8,500,000원', viewers: 4102, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80' },
  ],
  '기업신상': [
    { id: 401, title: '삼성 갤럭시 S25 Ultra 티타늄 블랙', price: '1,299,000원', viewers: 5301, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80' },
  ],
};

const TABS = Object.keys(TAB_DATA);

const Home = () => {
  const [activeTab, setActiveTab] = useState('산지직송');
  const [viewers, setViewers] = useState(2189);

  return (
    <div className="bg-[#f2f2f2] min-h-screen pb-24 font-sans max-w-[480px] mx-auto shadow-xl">
      {/* 1. 헤더 */}
      <header className="sticky top-0 z-50 flex items-center gap-2 px-4 bg-white border-b border-gray-100 h-[54px]">
        <h1 className="italic font-black text-xl tracking-tight select-none">
          <span className="text-gray-900">TV</span>
          <span className="text-[#e65100]"> MARKET</span>
        </h1>
        <span className="bg-gray-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0">
          🔥 {viewers.toLocaleString()}
        </span>
        <span className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
          ON-AIR
        </span>
      </header>

      {/* 2. HOT 방송 섹션 (간소화) */}
      <section className="bg-white py-4 px-4">
        <h2 className="text-[17px] font-extrabold text-gray-900 mb-3 text-left">지금 가장 HOT한 방송 🔥</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {TAB_DATA['산지직송'].slice(0, 3).map(item => (
            <div key={item.id} className="min-w-[200px] h-[280px] relative rounded-2xl overflow-hidden shadow-lg">
              <img src={item.img} className="w-full h-full object-cover" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-3 text-left">
                <p className="text-white text-xs font-bold line-clamp-2">{item.title}</p>
                <p className="text-yellow-400 font-black text-sm">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 카테고리 탭 (Sticky) */}
      <nav className="sticky top-[54px] z-40 bg-white border-b overflow-x-auto flex no-scrollbar">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-all ${
              activeTab === tab ? 'text-[#e65100] border-[#e65100] font-bold' : 'text-gray-400 border-transparent'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* 4. 상품 그리드 (2열) */}
      <div className="grid grid-cols-2 gap-3 p-3">
        {TAB_DATA[activeTab].map(item => (
          <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm active:scale-95 transition-transform">
            <div className="relative aspect-square">
              <img src={item.img} className="w-full h-full object-cover" alt="" />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded font-bold">LIVE</div>
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded-full">🔥 {item.viewers}</div>
            </div>
            <div className="p-2 text-left">
              <p className="text-[11px] font-bold line-clamp-2 h-[32px]">{item.title}</p>
              <p className="text-[#e65100] font-black text-xs mt-1">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 5. 자막 바 (고정) */}
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-black/80 backdrop-blur-sm text-white text-[11px] py-2 overflow-hidden z-40">
        <div className="whitespace-nowrap animate-marquee px-4">
          진짜 당도 보장합니다! 무료 배송 맞고요! 오늘만 이 특가! 꿀사과 15,000원에 드립니다! 재고 마감 임박!
        </div>
      </div>

      {/* 6. 하단 네비게이션 */}
      <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white border-t flex justify-around py-2 z-50">
        <button className="flex flex-col items-center text-[#e65100]"><span className="text-xl">🔥</span><span className="text-[10px] font-bold">홈</span></button>
        <button className="flex flex-col items-center text-gray-400"><span className="text-xl">🔍</span><span className="text-[10px]">검색</span></button>
        <button className="flex flex-col items-center text-gray-400"><span className="text-xl">🤍</span><span className="text-[10px]">관심</span></button>
        <button className="flex flex-col items-center text-gray-400"><span className="text-xl">👤</span><span className="text-[10px]">마이</span></button>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
