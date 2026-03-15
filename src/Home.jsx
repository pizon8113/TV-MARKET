export const Home = () => (
  <div className="pb-16">
    <header className="p-4 flex justify-between items-center">
      <h1 className="text-orange-500 font-bold text-xl">TV MARKET</h1>
      <div className="flex gap-4"><SearchIcon /><CartIcon /></div>
    </header>
    
    {/* 카테고리 탭 (라인형 디자인) */}
    <div className="flex border-b overflow-x-auto whitespace-nowrap scrollbar-hide">
      {["내 주변 떨이", "산지직송", "중고명품", "기업신상"].map((tab, i) => (
        <button key={i} className={`px-4 py-2 text-sm ${i===1 ? 'border-b-2 border-orange-500 text-orange-500 font-bold' : 'text-gray-500'}`}>
          {tab}
        </button>
      ))}
    </div>

    {/* 메인 숏폼 카드 */}
    <div className="p-4 grid grid-cols-1 gap-4">
      <div className="relative aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden">
        <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <BadgeCheck size={14} /> Integrity Blue
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="font-bold text-lg">오늘만 이 가격! 꿀사과</p>
          <p className="text-orange-400">15,000원</p>
        </div>
      </div>
    </div>
  </div>
);
