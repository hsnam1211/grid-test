import "./MoveScreen.scss"; // CSS 파일 import

import React, { useEffect, useRef, useState } from "react";

import PuzzleLayout from "../PuzzleLayout/PuzzleLayout";
import { gsap } from "gsap";

const MoveScreen = () => {
  const wrapRef = useRef<any>(null);

  useEffect(() => {
    const range = 50; // 화면밖 범위
    // const test_range = 200; // 화면밖 범위
    const handleMouseMove = (e: any) => {
      positionChange(e);
    };

    console.log(`wrapRef.current.offsetWidth: ${wrapRef.current.offsetWidth}`);
    console.log(
      `wrapRef.current.offsetHeight: ${wrapRef.current.offsetHeight}`
    );

    // const offsetWidth = 2100;
    // const offsetHeight = 1364;
    const offsetWidth = wrapRef.current.offsetWidth;
    const offsetHeight = wrapRef.current.offsetHeight;
    const positionChange = (e: any) => {
      console.log(
        `wrapRef.current.offsetWidth: ${wrapRef.current.offsetWidth}`
      );
      console.log(
        `wrapRef.current.offsetHeight: ${wrapRef.current.offsetHeight}`
      );
      console.log(`x: ${e.pageX}`); // 마우스 좌표
      console.log(`y: ${e.pageY}`); // 마우스 좌표

      if (!wrapRef.current) return;
      const centerX = e.pageX - offsetWidth / 2;
      const centerY = e.pageY - offsetHeight / 2;
      console.log(`centerX: ${centerX}`); // 마우스 좌표
      console.log(`centerY: ${centerY}`); // 마우스 좌표

      // const percentX = centerX / offsetWidth;
      // const percentY = centerY / offsetHeight;
      const percentX = (centerX / offsetWidth) * range;
      const percentY = (centerY / offsetHeight) * range;

      console.log(percentX);
      gsap.to(".screen_area", {
        left: -percentX + "%",
        top: -percentY + "%",
        duration: 2,
      });
    };

    const wrapElement = wrapRef.current;
    wrapElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      wrapElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, [wrapRef]);

  return (
    <div id="wrap" ref={wrapRef}>
      <div className="screen_area">
        <PuzzleLayout />
      </div>
    </div>
  );
};

export default MoveScreen;
