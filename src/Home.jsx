import React from 'react';

const Home = () => {
  // 샘플 데이터 (이미지 포함)
  const categories = ["내 주변 떨이", "산지직송", "중고명품", "기업신상"];
  const liveItems = [
    { id: 1, title: "오늘만 이 가격! 꿀사과 (특)", price: "15,000원", viewers: "2,189", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6?w=400" },
    { id: 2, title: "인증 중고차: 렉서스 ES", price: "35,000,000원", viewers: "1,500", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400" }
  ];
  const gridItems = [
    { id: 3, title: "토적 배이커 복아점", price: "10,000원", viewers: "1,384", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200" },
    { id: 4, title: "인증 중고차: 레너커", price: "30,000원", viewers: "2,323", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200" },
    { id: 5, title: "제철 완두콩 1kg", price: "12,000원", viewers: "2,223", img: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=200" },
    { id: 6, title: "무지 긴 유기농 당근", price: "7,000원", viewers: "2,287", img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200" }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-24 font-sans text-gray-900">
      {/* 1. Header */}
      <div className="flex items-center justify-between px-4 py-3 sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-2">
          <span className="text-orange-600 font-black text-xl italic">TV MARKET</span>
          <span className="bg-gray-100 text-[10px] px-2 py-0.5 rounded-full font-bold">🔥 2,189</span>
          <span className="bg-orange-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">● ON-AIR</span>
        </div>
        <div className="flex space-x-3 text-xl">
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </div>

      {/* 2. Top Live Section */}
      <div className="px-4 mt-2">
        <h2 className="font-bold text-lg mb-3">지금 가장 HOT한 방송 🔥</h2>
        <div className="flex space-x-3 overflow-x-auto no-scrollbar">
          {liveItems.map(item => (
            <div key={item.id} className="relative min-w-[240px] h-64 rounded-2xl overflow-hidden shadow-lg">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-orange-600 text-white text-[10px] px-2 py-0.5 rounded flex items-center">
                LIVE <span className="ml-1 opacity-80">| 📶</span>
              </div>
              <div className="absolute top-3 right-3 bg-black/40 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">
                🔥 {item.viewers}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-sm font-bold truncate">{item.title}</p>
                <p className="text-xs opacity-90">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Category Tabs */}
      <div className="flex justify-between px-4 py-6 border-b border-gray-100">
        {categories.map((cat, idx) => (
          <button key={idx} className={`text-sm font-bold ${idx === 1 ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-400'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* 4. Product Grid */}
      <div className="grid grid-cols-2 gap-3 p-4">
        {gridItems.map(item => (
          <div key={item.id} className="relative rounded-xl overflow-hidden shadow-sm bg-gray-50">
            <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
            <div className="absolute top-2 left-2 bg-orange-600 text-white text-[8px] px-1.5 py-0.5 rounded">LIVE</div>
            <div className="p-2">
              <p className="text-[10px] text-gray-500 flex items-center">🔥 {item.viewers}</p>
              <h3 className="text-xs font-bold truncate mt-1">{item.title}</h3>
              <p className="text-xs font-black mt-0.5">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Live Ticker (Floating) */}
      <div className="fixed bottom-20 left-4 right-4 bg-black/70 backdrop-blur-md text-white py-2 px-4 rounded-full text-[10px] flex items-center shadow-2xl">
        <span className="mr-2">📶</span> ...진짜 당도 보장합니다! 무료 배송 맞고요!...
      </div>
    </div>
  );
};

export default Home;

