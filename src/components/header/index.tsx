"use client";
import { useEffect } from "react";


export default function Header() {

  let scrollInit = 0;
useEffect(()=>{
  window.addEventListener('scroll', ()=> {
      let scrollTop = window.scrollY;
      console.log(scrollTop)
  })
})
  return(
    <div className="w-full p-4 bg-blue shadow-sm flex items-center">
      <p className="ml-4 text-white text-lg font-bold">ANOTA AI</p>
    </div>
  )
}