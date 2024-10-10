"use client";
import { useEffect } from "react";
export default function Header() {

  let scrollInit = 0;
useEffect(()=>{
  window.addEventListener('scroll', ()=> {
      let scrollTop = window.scrollY;
      // 61 quando passa do header
  })
})
  return(
    <div className="w-full p-4 h-14 mb-10 bg-purple shadow-sm flex items-center">
      <p className="ml-4 text-white text-lg font-bold">PEDE AÍ</p>
    </div>
  )
}