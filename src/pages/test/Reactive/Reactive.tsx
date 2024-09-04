import "./Reactive.scss";

import MoveScreen from "./MoveScreen/MoveScreen";
import React from "react";

const Reactive = () => {
  return (
    <div className="container">
      {/* <header className="header">헤더</header> */}
      {/* <nav className="nav">네비게이션</nav> */}
      <main className="main">
        <div style={{ position: "relative" }}>
          <div
            style={{
              top: 0,
              left: 0,
              zIndex: 3,
              height: "100vh",
              width: "100%",
              background: "#00000080",
              position: "absolute",
              pointerEvents: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="move_screen_text" style={{ color: "" }}>
              빠르고 쉬운 브랜드 마케팅 스타일메이트
            </h1>
          </div>
          <MoveScreen />
        </div>
        <div style={{ height: 1000 }}></div> {/* 이 div를 main 안으로 이동 */}
        <div style={{ height: 1000 }}></div> {/* 이 div를 main 안으로 이동 */}
        <div style={{ height: 1000 }}></div> {/* 이 div를 main 안으로 이동 */}
        <div style={{ height: 1000 }}></div> {/* 이 div를 main 안으로 이동 */}
        <div style={{ height: 1000 }}></div> {/* 이 div를 main 안으로 이동 */}
      </main>
      <aside className="aside">사이드바</aside>
      <footer className="footer">푸터</footer>
    </div>
  );
};

export default Reactive;
