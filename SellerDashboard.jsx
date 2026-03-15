export const Dashboard = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-6">판매 통계</h2>
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-white p-4 rounded-xl border">
        <p className="text-xs text-gray-400">누적 조회수</p>
        <p className="text-lg font-bold">12,482회</p>
      </div>
      <div className="bg-white p-4 rounded-xl border">
        <p className="text-xs text-gray-400">구매 전환율</p>
        <p className="text-lg font-bold text-green-500">4.8%</p>
      </div>
    </div>
    <div className="bg-gray-100 p-4 rounded-xl">
      <h4 className="text-sm font-bold mb-2">AI 하이라이트 리포트</h4>
      <p className="text-xs text-gray-500 leading-relaxed">
        "상세 설명 구간(오디오 가중치)에서 이탈률이 가장 낮았습니다. 다음 방송에서도 음성 설명을 강화해 보세요."
      </p>
    </div>
  </div>
);
