import "./PuzzleLayout.scss";

import React from "react";

const FirstGrid = ({ heightList }: any) => {
  return (
    <div className="grid-container">
      {heightList.map((h: number) => (
        <div className="grid-item" style={{ height: `${h}px` }}></div>
      ))}
    </div>
  );
};

const SecondGrid = () => {
  return (
    <div className="new-grid-container">
      {/* 첫 번째 줄 */}
      <div
        className="second-grid-item"
        style={{ height: "304px", gridColumn: "span 2" }}
      >
        이미지 3
      </div>

      {/* 두 번째 줄 */}
      <div className="second-grid-item" style={{ height: "336px" }}>
        이미지 1
      </div>
      <div className="second-grid-item" style={{ height: "336px" }}>
        이미지 2
      </div>
      {/* 세 번째 줄 */}
      <div
        className="second-grid-item"
        style={{ height: "304px", gridColumn: "span 2" }}
      >
        이미지 3
      </div>
      {/* 네 번째 줄 */}
      <div className="second-grid-item" style={{ height: "240px" }}>
        이미지 4
      </div>
      <div className="second-grid-item" style={{ height: "240px" }}>
        이미지 5
      </div>
    </div>
  );
};
const ThirdGrid = () => {
  return (
    <div className="new-grid-container">
      {/* 첫 번째 줄 */}
      <div className="third-grid-item" style={{ height: "336px" }}>
        이미지 1
      </div>
      <div className="third-grid-item" style={{ height: "336px" }}>
        이미지 2
      </div>
      {/* 두 번째 줄 */}
      <div
        className="third-grid-item"
        style={{ height: "304px", gridColumn: "span 2" }}
      >
        이미지 3
      </div>
      {/* 세 번째 줄 */}
      <div className="third-grid-item" style={{ height: "240px" }}>
        이미지 4
      </div>
      <div className="third-grid-item" style={{ height: "240px" }}>
        이미지 5
      </div>
      {/* 네 번째 줄 */}
      <div
        className="third-grid-item"
        style={{ height: "304px", gridColumn: "span 2" }}
      >
        이미지 6
      </div>
    </div>
  );
};

const PuzzleLayout = () => {
  const heigthList1 = [360, 240, 360];
  const heigthList2 = [360, 360, 360];
  return (
    <div className="puzzle-layout">
      <div className="layout">
        <FirstGrid heightList={heigthList1} />
        <SecondGrid />
        <FirstGrid heightList={heigthList2} />
        <ThirdGrid />
        <FirstGrid heightList={heigthList2} />
      </div>
    </div>
  );
};

export default PuzzleLayout;
