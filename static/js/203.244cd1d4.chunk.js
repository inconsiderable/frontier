"use strict";(self.webpackChunkissues=self.webpackChunkissues||[]).push([[203],{1203:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return a}});var r=n(226),i=n(3696),u=n(3613),a=function(e,t,n,a,c){var o=e.ownerDocument.defaultView,s=(0,i.i)(e),f=function(e){return s?-e.deltaX:e.deltaX};return(0,u.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(n){return s=(0,i.i)(e),function(e){var t=e.startX;return s?t>=o.innerWidth-50:t<=50}(n)&&t()},onStart:n,onMove:function(e){var t=f(e)/o.innerWidth;a(t)},onEnd:function(e){var t=f(e),n=o.innerWidth,i=t/n,u=function(e){return s?-e.velocityX:e.velocityX}(e),a=u>=0&&(u>.2||t>n/2),h=(a?1-i:i)*n,l=0;if(h>5){var d=h/Math.abs(u);l=Math.min(d,540)}c(a,i<=0?.01:(0,r.l)(0,i,.9999),l)}})}}}]);