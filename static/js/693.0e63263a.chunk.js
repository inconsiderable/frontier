/*! For license information please see 693.0e63263a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[693],{5693:(e,t,s)=>{s.r(t),s.d(t,{startFocusVisible:()=>r});const o="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let t=[],s=!0;const r=e?e.shadowRoot:document,c=e||document.body,i=e=>{t.forEach((e=>e.classList.remove(o))),e.forEach((e=>e.classList.add(o))),t=e},d=()=>{s=!1,i([])},a=e=>{s=n.includes(e.key),s||i([])},u=e=>{if(s&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains("ion-focusable")));i(t)}},v=()=>{r.activeElement===c&&i([])};r.addEventListener("keydown",a),r.addEventListener("focusin",u),r.addEventListener("focusout",v),r.addEventListener("touchstart",d,{passive:!0}),r.addEventListener("mousedown",d);return{destroy:()=>{r.removeEventListener("keydown",a),r.removeEventListener("focusin",u),r.removeEventListener("focusout",v),r.removeEventListener("touchstart",d),r.removeEventListener("mousedown",d)},setFocus:i}}}}]);