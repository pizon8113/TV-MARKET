export const MyChannel = () => (
  <div className="bg-gray-50 min-h-screen pb-20">
    <div className="bg-white p-6 border-b flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">김</div>
      <div>
        <h2 className="font-bold text-lg">김씨네 농장</h2>
        <p className="text-xs text-gray-400">무결성 인증 활성화 중</p>
      </div>
    </div>
    {/* 대역폭 확장 부스터 (특허 핵심 UI) */}
    <div className="m-4 p-4 bg-orange-600 rounded-xl text-white">
      <p className="text-sm font-bold mb-1">⚡️ 현재 대역폭 가동률 120%</p>
      <p className="text-xs opacity-80 mb-3">결제 시 노출 시간 30분 연장 및 고화질 송출</p>
      <button className="w-full bg-white text-orange-600 py-2 rounded-lg font-bold text-sm">부스터 결제하기</button>
    </div>
  </div>
);
