import "./PuzzleLayout.scss"; // 스타일 파일 변경

import React from "react";

const PuzzleLayout = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">이미지 1</div>
      <div className="grid-item">이미지 2</div>
      <div className="grid-item">이미지 3</div>
      <div className="grid-item">이미지 4</div>
    </div>
  );
};

export default PuzzleLayout;

// export const PuzzleLayout = () => {
//   const items = Array.from({ length: 30 }, (_, i) => i + 1);
//   const positions = [] as any;

//   // 겹치지 않도록 위치 계산
//   for (let i = 0; i < 30; i++) {
//     const l = -45;
//     const t = -40;

//     positions.push({
//       left: `${l + 32 * (i % 5)}%`,
//       top: `${t + 36 * Math.floor(i / 5)}%`,
//     });
//   }

//   return (
//     <div style={{ width: "2270px", height: "100vh" }}>
//       <ul>
//         {items.map((item, index) => {
//           const position = positions[index];
//           return (
//             <li
//               key={index}
//               style={{
//                 position: "absolute",
//                 width: "30%", // 적절한 크기로 조정
//                 height: "30vh",
//                 background: "#fff",
//                 left: position.left,
//                 top: position.top,
//                 transition: "all 0.3s ease-in-out",
//               }}
//             >
//               <a href="javascript:;">
//                 <span>{item}번 객체</span>
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export const PuzzleLayout = () => {
//   const items = Array.from({ length: 30 }, (_, i) => i + 1);
//   const positions = [] as any;

//   // 겹치지 않도록 위치 계산
//   for (let i = 0; i < 30; i++) {
//     const l = -45;
//     const t = -40;

//     positions.push({
//       left: `${l + 32 * (i % 5)}%`,
//       top: `${t + 36 * Math.floor(i / 5)}%`,
//     });
//   }

//   return (
//     <div style={{ width: "2270px", height: "100vh" }}>
//       <ul>
//         {items.map((item, index) => {
//           const position = positions[index];
//           return (
//             <li
//               key={index}
//               style={{
//                 position: "absolute",
//                 width: "30%", // 적절한 크기로 조정
//                 height: "30vh",
//                 background: "#fff",
//                 left: position.left,
//                 top: position.top,
//                 transition: "all 0.3s ease-in-out",
//               }}
//             >
//               <a href="javascript:;">
//                 <span>{item}번 객체</span>
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
