!function(){"use strict";var e,t={86:function(){var e=window.wp.blocks,t=window.wp.element,i=window.wp.blockEditor,n=window.wp.components;window.React,(0,e.registerBlockType)("depicter/slider",{edit:function(e){let{attributes:r,setAttributes:l}=e;const d=(0,i.useBlockProps)();function c(e){window.fetch(window.depicterSliders.ajax_url+"?action=depicter/document/status&ID="+e,{method:"GET",headers:{"Content-Type":"text/html","X-DEPICTER-CSRF":window.depicterSliders.token}}).then((e=>e.json())).then((function(e){let t=document.getElementById("dep-publish-slider-btn");void 0===e.status||"publish"!=e.status?t.removeAttribute("disabled"):t.setAttribute("disabled",!0)})).catch((function(){}))}return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.InspectorControls,{key:"setting"},(0,t.createElement)(n.Panel,{header:"Depicter"},(0,t.createElement)(n.PanelBody,{title:"Depicter Settings",initialOpen:!0},(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.SelectControl,{id:"dep-slider-list",label:"Slider",value:r.id,options:depicterSliders.list,onChange:function(e){l({id:Number(e)}),c(e)}})),(0,t.createElement)(n.PanelRow,{className:"sliderBtns"},(0,t.createElement)(n.Button,{variant:"primary",id:"dep-publish-slider-btn",onClick:function(){let e=document.getElementById("dep-slider-list").value,t=document.getElementById("dep-publish-slider-btn");t.setAttribute("disabled",!0),t.classList.add("is-busy");var i=new FormData;i.append("ID",e),i.append("status","published"),window.fetch(window.depicterSliders.ajax_url+"?action=depicter/document/store",{method:"post",body:i,headers:{"X-DEPICTER-CSRF":window.depicterSliders.token}}).then((e=>e.json())).then((i=>{if(i.hits){c(e);var n=document.querySelector(".depicter-notice-wrapper");n&&n.remove(),t.classList.remove("is-busy")}})).catch((e=>{console.error(e)}))}},depicterSliders.publish_text),(0,t.createElement)(n.Button,{variant:"secondary",onClick:function(){let e=document.getElementById("dep-slider-list").value,t=window.depicterSliders.editor_url.replace("document=1","document="+e);window.open(t)}},depicterSliders.edit_text))))),(0,t.createElement)("div",d,(0,t.createElement)("div",{className:"dep-widget-wrapper"},(0,t.createElement)("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS40LjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBzdHlsZT0iIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MXtmaWxsOiMyNjVGRkY7fQ0KCS5zdDJ7ZmlsbDojRkZEMzAwO30NCgkuc3Qze2ZpbGw6I0ZGRTk4MDt9DQo8L3N0eWxlPg0KPGcgaWQ9ImRlcGljdGVyX2xvZ290eXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY1IC0zODYuOTk0KSI+DQoJPHBhdGggaWQ9IlJlY3RhbmdsZV83NzkiIGNsYXNzPSJzdDEiIGQ9Ik0yMzkuNSw1NDcuN2wxMTQuMi0xMTQuMmwwLDBsMTQ0LjgsMTQ0LjhsMCwwTDM1My4xLDcyMy41bDAsMEwyMzkuNSw2MDkuOQ0KCQlDMjIyLjMsNTkyLjcsMjIyLjMsNTY0LjksMjM5LjUsNTQ3Ljd6Ii8+DQoJPHBhdGggaWQ9IlJlY3RhbmdsZV83ODAiIGNsYXNzPSJzdDIiIGQ9Ik0yMDcuMiw0NzdsNDMuNS00My41bDAsMGwxNDQuOCwxNDQuOGwwLDBMMjUwLjEsNzIzLjVsMCwwbC00Mi45LTQyLjkNCgkJQzE1MC45LDYyNC40LDE1MC45LDUzMy4yLDIwNy4yLDQ3N3oiLz4NCgk8cGF0aCBpZD0iSW50ZXJzZWN0aW9uXzIyIiBjbGFzcz0ic3QzIiBkPSJNMjY3LjgsNjM4LjJjLTMyLjgtMzIuOC0zMi44LTg2LDAtMTE4LjhjMCwwLDAsMCwwLDBsMzQuNC0zNC40bDkzLjMsOTMuM0wzMDEuNiw2NzINCgkJTDI2Ny44LDYzOC4yeiIvPg0KPC9nPg0KPC9zdmc+DQo=",alt:"logo"}),(0,t.createElement)("span",null," ",function(e){let t=null;return e&&(t=depicterSliders.list.map((function(t){return t.value==e?t.label:null}))),t||"Select slider from list"}(r.id)," "))))}})}},i={};function n(e){var r=i[e];if(void 0!==r)return r.exports;var l=i[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=function(t,i,r,l){if(!i){var d=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],l=e[u][2];for(var c=!0,s=0;s<i.length;s++)(!1&l||d>=l)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(c=!1,l<d&&(d=l));if(c){e.splice(u--,1);var o=r();void 0!==o&&(t=o)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[i,r,l]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,l,d=i[0],c=i[1],s=i[2],o=0;if(d.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var u=s(n)}for(t&&t(i);o<d.length;o++)l=d[o],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},i=self.webpackChunkdepicter=self.webpackChunkdepicter||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var r=n.O(void 0,[431],(function(){return n(86)}));r=n.O(r)}();