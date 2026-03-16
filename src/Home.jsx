import React from 'react';

const Home = () => {
  const liveItems = [
    { id: 1, title: "오늘만 이 가격! 꿀사과 (특)", price: "15,000원", viewers: "2,189", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?w=400" },
    { id: 2, title: "인증 중고차: 렉서스 ES", price: "35,000,000원", viewers: "1,500", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400" }
  ];

  const products = [
    { id: 3, title: "토적 배이커 복아점", price: "10,000원", viewers: "1,384", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200" },
    { id: 4, title: "인증 중고차: 레너커", price: "30,000원", viewers: "2,323", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200" },
    { id: 5, title: "제철 완두콩 1kg", price: "12,000원", viewers: "2,223", img: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=200" },
    { id: 6, title: "무지 긴 유기농 당근", price: "7,000원", viewers: "2,287", img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200" }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-24 shadow-2xl">
      {/* 상단 네비게이션 */}
      <div className="flex items-center justify-between px-4 py-4 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-orange-600 font-black text-xl italic">TV MARKET</span>
          <div className="bg-orange-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">● ON-AIR</div>
        </div>
        <div className="flex gap-4 text-xl"><span>🔍</span><span>🛒</span></div>
      </div>

      {/* 가로 스크롤 라이브 영역 */}
      <div className="px-4 mb-6">
        <h2 className="font-extrabold text-lg mb-4 text-gray-800">지금 가장 HOT한 방송 🔥</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
          {liveItems.map(item => (
            <div key={item.id} className="relative min-w-[260px] h-64 rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img src={item.img} className="w-full h-full object-cover" alt="" />
              <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] px-2 py-1 rounded-lg font-bold">LIVE</div>
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-full font-bold">🔥 {item.viewers}</div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <p className="text-white font-bold text-sm mb-1">{item.title}</p>
                <p className="text-orange-400 font-black text-base">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 카테고리 탭 */}
      <div className="flex justify-around px-4 py-2 border-b border-gray-100 mb-4 sticky top-[60px] bg-white z-40">
        {["내 주변", "산지직송", "중고명품", "기업신상"].map((cat, i) => (
          <span key={i} className={`text-sm font-bold pb-2 ${i === 1 ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-400'}`}>{cat}</span>
        ))}
      </div>

      {/* 하단 2열 그리드 */}
      <div className="grid grid-cols-2 gap-3 px-4">
        {products.map(item => (
          <div key={item.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="relative">
              <img src={item.img} className="w-full h-40 object-cover" alt="" />
              <div className="absolute top-2 left-2 bg-orange-600 text-white text-[8px] px-1.5 py-0.5 rounded-md font-bold">LIVE</div>
            </div>
            <div className="p-3">
              <div className="flex items-center text-gray-400 text-[9px] mb-1">🔥 {item.viewers}</div>
              <h3 className="text-xs font-bold text-gray-800 truncate mb-1">{item.title}</h3>
              <p className="text-sm font-black text-gray-900">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
