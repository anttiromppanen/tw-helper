#!/bin/env node
var C=(s=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(s,{get:(o,t)=>(typeof require<"u"?require:o)[t]}):s)(function(s){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+s+'" is not supported')});import{Command as Z}from"commander";import{Command as G}from"commander";var v={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"};import j from"chalk";function b(s){console.error(`
${j.bold.red("Error:")} ${s}
`)}function i(s){console.log(j.bold.cyan(`
${s}
`))}function S(){b("CSS property not found in Tailwind CSS. Try different keyword (i.e. scale instead of transform-scale, or a more high level keyword display insted of inline-block).")}import*as f from"fs";import*as O from"vm";import U from"path";function H(s,o){let t;for(let e of s){let c=U.resolve(process.cwd(),e);if(f.existsSync(c)){t=c;break}}try{return f.readFileSync(t,"utf8")}catch{b(o),process.exit(1)}}function h(s){let t=H(s?[s]:["tailwind.config.json","tailwind.config.js","tailwind.config.ts","tailwind.config.cjs","tailwind.config.mjs"],"Could not locate Tailwind config file. If it is not in the root directory, please provide a custom path with the -c flag");if(t.startsWith("{"))return JSON.parse(t).theme;let e=t.replace(/export default/,"module.exports ="),c={module:{exports:{}},require:C};new O.Script(e).runInNewContext(c);let l=c.module.exports;return l.theme?l.theme:{}}function z(s){let o=h(s),t=o.hasOwnProperty("colors")&&o.colors,e=o.extend?.hasOwnProperty("colors")&&o.extend.colors;return{overrideColors:t,extendColors:e}}import d from"chalk";import W from"cli-table3";import A from"chalk";import R from"color";function M(s){if(s.includes("var"))return s;try{return R(s).hex()}catch{return b(`Unsupported color format detected: ${s}`),null}}function F(s,o){try{let t=M(s);return A.hex(t)(o)}catch{return A.gray(o)}}function g(s,o){let t=s.toString().split(`
`),e=o.toString().split(`
`),c=t.length<e.length,a="",l=Math.max(t.length,e.length);for(let r=0;r<l;r++){let n=t[r]||"",u=e[r]||"";c?a+=u+"   "+n+`
`:a+=n+"   "+u+`
`}return{output:a,tablePlacesSwapped:c}}function p(s,o,t,e,c){let a=(r,n)=>e?F(n,r):d.gray(r),l=new W({head:[d.bold.cyan(o),d.bold.cyan(t)],style:{border:[],compact:!0},colWidths:c||[20,20]});return s.forEach(([r,n])=>{if(typeof n=="object"){l.push([d.gray(r),""]);let u=Object.entries(n);for(let[E,D]of u)l.push([a(`  \u2500 ${E}`,D),d.gray(D)])}else l.push([a(r,n),d.gray(n)])}),l.toString()}function $(){let s=h(),o=s.hasOwnProperty("extend")&&s.extend,t=o.hasOwnProperty("screens"),e=Object.entries(v),c=p(e,"Name","Size");if(!t)return c;let a=o.screens,l=Object.entries(a),r=p(l,"Name","Size");return{defaultBreakpointsTable:c,userBreakpointsTable:r}}function w(){let s=$();if(typeof s=="string"){i("Default Tailwind CSS breakpoints"),console.log(s+`
`);return}let{defaultBreakpointsTable:o,userBreakpointsTable:t}=s,{output:e,tablePlacesSwapped:c}=g(o,t);c?i(" User-defined breakpoints"+" ".repeat(22)+"Default Tailwind CSS breakpoints"):i(" Default Tailwind CSS breakpoints"+" ".repeat(14)+"User-defined breakpoints"),console.log(e)}var K=new G("breakpoints").description("Print all default breakpoints in Tailwind CSS").action(()=>w()),_=K;import{Command as q}from"commander";import V from"cli-table3";import L from"chalk";var y={"aspect-ratio":{urlToDocs:"https://tailwindcss.com/docs/aspect-ratio",classes:["aspect-auto","aspect-square","aspect-video"]},columns:{urlToDocs:"https://tailwindcss.com/docs/columns",classes:["columns-*"]},"break-after":{urlToDocs:"https://tailwindcss.com/docs/break-after",classes:["break-after-*"]},"break-before":{urlToDocs:"https://tailwindcss.com/docs/break-before",classes:["break-before-*"]},"break-inside":{urlToDocs:"https://tailwindcss.com/docs/break-inside",classes:["break-inside-*"]},"box-decoration-break":{urlToDocs:"https://tailwindcss.com/docs/box-decoration-break",classes:["decoration-slice","decoration-clone"]},"box-sizing":{urlToDocs:"https://tailwindcss.com/docs/box-sizing",classes:["box-border","box-content"]},display:{urlToDocs:"https://tailwindcss.com/docs/display",classes:["block","inline-block","inline","flex","inline-flex","grid","inline-grid","hidden","inline-table","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","contents","list-item"]},table:{urlToDocs:"https://tailwindcss.com/docs/display#table",classes:["table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row"]},float:{urlToDocs:"https://tailwindcss.com/docs/float",classes:["float-start","float-end","float-right","float-left","float-none"]},clear:{urlToDocs:"https://tailwindcss.com/docs/clear",classes:["clear-start","clear-end","clear-left","clear-right","clear-both","clear-none"]},isolation:{urlToDocs:"https://tailwindcss.com/docs/isolation",classes:["isolate","isolation-auto"]},"object-fit":{urlToDocs:"https://tailwindcss.com/docs/object-fit",classes:["object-contain","object-cover","object-fill","object-none","object-scale-down"]},"object-position":{urlToDocs:"https://tailwindcss.com/docs/object-position",classes:["object-bottom","object-center","object-left","object-left-bottom","object-left-top","object-right","object-right-bottom","object-right-top","object-top"]},overflow:{urlToDocs:"https://tailwindcss.com/docs/overflow",classes:["overflow-*","overflow-x-*","overflow-y-*"]},"overscroll-behavior":{urlToDocs:"https://tailwindcss.com/docs/overscroll-behavior",classes:["overscroll-auto","overscroll-contain","overscroll-none","overscroll-y-*","overscroll-x-*"]},position:{urlToDocs:"https://tailwindcss.com/docs/position",classes:["static","fixed","absolute","relative","sticky"]},visibility:{urlToDocs:"https://tailwindcss.com/docs/visibility",classes:["visible","invisible","collapse"]},top:{urlToDocs:"https://tailwindcss.com/docs/top-right-bottom-left",classes:["top-*","inset-*","inset-y-*"]},right:{urlToDocs:"https://tailwindcss.com/docs/top-right-bottom-left",classes:["right-*","inset-*","inset-x-*"]},bottom:{urlToDocs:"https://tailwindcss.com/docs/top-right-bottom-left",classes:["bottom-*","inset-*","inset-y-*"]},left:{urlToDocs:"https://tailwindcss.com/docs/top-right-bottom-left",classes:["left-*","inset-*","inset-x-*"]},"z-index":{urlToDocs:"https://tailwindcss.com/docs/z-index",classes:["z-*","-z-*","z-auto"]},"flex-basis":{urlToDocs:"https://tailwindcss.com/docs/flex-basis",classes:["basis-*"]},"flex-direction":{urlToDocs:"https://tailwindcss.com/docs/flex-direction",classes:["flex-row","flex-row-reverse","flex-col","flex-col-reverse"]},"flex-wrap":{urlToDocs:"https://tailwindcss.com/docs/flex-wrap",classes:["flex-wrap","flex-wrap-reverse","flex-nowrap"]},flex:{urlToDocs:"https://tailwindcss.com/docs/flex",classes:["flex-1","flex-auto","flex-initial","flex-none"]},"flex-grow":{urlToDocs:"https://tailwindcss.com/docs/flex-grow",classes:["grow","grow-0"]},"flex-shrink":{urlToDocs:"https://tailwindcss.com/docs/flex-shrink",classes:["shrink","shrink-0"]},order:{urlToDocs:"https://tailwindcss.com/docs/order",classes:["order-1","order-2","order-3","order-4","order-5","order-6","order-7","order-8","order-9","order-10","order-11","order-12","order-first","order-last","order-none"]},"grid-template-columns":{urlToDocs:"https://tailwindcss.com/docs/grid-template-columns",classes:["grid-cols-1","grid-cols-2","grid-cols-3","grid-cols-4","grid-cols-5","grid-cols-6","grid-cols-7","grid-cols-8","grid-cols-9","grid-cols-10","grid-cols-11","grid-cols-12","grid-cols-none","grid-cols-subgrid"]},"grid-column":{urlToDocs:"https://tailwindcss.com/docs/grid-column",classes:["col-auto","col-span-1","col-span-2","col-span-3","col-span-4","col-span-5","col-span-6","col-span-7","col-span-8","col-span-9","col-span-10","col-span-11","col-span-12","col-span-full"]},"grid-column-start":{urlToDocs:"https://tailwindcss.com/docs/grid-column",classes:["col-start-1","col-start-2","col-start-3","col-start-4","col-start-5","col-start-6","col-start-7","col-start-8","col-start-9","col-start-10","col-start-11","col-start-12","col-start-13","col-start-auto"]},"grid-column-end":{urlToDocs:"https://tailwindcss.com/docs/grid-column",classes:["col-end-1","col-end-2","col-end-3","col-end-4","col-end-5","col-end-6","col-end-7","col-end-8","col-end-9","col-end-10","col-end-11","col-end-12","col-end-13","col-end-auto"]},"grid-template-rows":{urlToDocs:"https://tailwindcss.com/docs/grid-template-rows",classes:["grid-rows-1","grid-rows-2","grid-rows-3","grid-rows-4","grid-rows-5","grid-rows-6","grid-rows-7","grid-rows-8","grid-rows-9","grid-rows-10","grid-rows-11","grid-rows-12","grid-rows-none","grid-rows-subgrid"]},"grid-row":{urlToDocs:"https://tailwindcss.com/docs/grid-row",classes:["row-auto","row-span-1","row-span-2","row-span-3","row-span-4","row-span-5","row-span-6","row-span-7","row-span-8","row-span-9","row-span-10","row-span-11","row-span-12","row-span-full"]},"grid-row-start":{urlToDocs:"https://tailwindcss.com/docs/grid-row",classes:["row-start-1","row-start-2","row-start-3","row-start-4","row-start-5","row-start-6","row-start-7","row-start-8","row-start-9","row-start-10","row-start-11","row-start-12","row-start-13","row-start-auto"]},"grid-row-end":{urlToDocs:"https://tailwindcss.com/docs/grid-row",classes:["row-end-1","row-end-2","row-end-3","row-end-4","row-end-5","row-end-6","row-end-7","row-end-8","row-end-9","row-end-10","row-end-11","row-end-12","row-end-13","row-end-auto"]},"grid-auto-flow":{urlToDocs:"https://tailwindcss.com/docs/grid-auto-flow",classes:["grid-flow-row","grid-flow-col","grid-flow-dense","grid-flow-row-dense","grid-flow-col-dense"]},"grid-auto-columns":{urlToDocs:"https://tailwindcss.com/docs/grid-auto-columns",classes:["auto-cols-auto","auto-cols-min","auto-cols-max","auto-cols-fr"]},"grid-auto-rows":{urlToDocs:"https://tailwindcss.com/docs/grid-auto-rows",classes:["auto-rows-auto","auto-rows-min","auto-rows-max","auto-rows-fr"]},gap:{urlToDocs:"https://tailwindcss.com/docs/gap",classes:["gap-*","gap-x-*","gap-y-*"]},"justify-content":{urlToDocs:"https://tailwindcss.com/docs/justify-content",classes:["justify-normal","justify-start","justify-end","justify-center","justify-between","justify-around","justify-evenly","justify-stretch"]},"justify-items":{urlToDocs:"https://tailwindcss.com/docs/justify-items",classes:["justify-items-start","justify-items-end","justify-items-center","justify-items-stretch"]},"justify-self":{urlToDocs:"https://tailwindcss.com/docs/justify-self",classes:["justify-self-auto","justify-self-start","justify-self-end","justify-self-center","justify-self-stretch"]},"align-content":{urlToDocs:"https://tailwindcss.com/docs/align-content",classes:["content-normal","content-center","content-start","content-end","content-between","content-around","content-evenly","content-baseline","content-stretch"]},"align-items":{urlToDocs:"https://tailwindcss.com/docs/align-items",classes:["items-start","items-end","items-center","items-baseline","items-stretch"]},"align-self":{urlToDocs:"https://tailwindcss.com/docs/align-self",classes:["self-auto","self-start","self-end","self-center","self-stretch","self-baseline"]},"place-content":{urlToDocs:"https://tailwindcss.com/docs/place-content",classes:["place-content-center","place-content-start","place-content-end","place-content-between","place-content-around","place-content-evenly","place-content-baseline","place-content-stretch"]},"place-items":{urlToDocs:"https://tailwindcss.com/docs/place-items",classes:["place-items-start","place-items-end","place-items-center","place-items-baseline","place-items-stretch"]},"place-self":{urlToDocs:"https://tailwindcss.com/docs/place-self",classes:["place-self-auto","place-self-start","place-self-end","place-self-center","place-self-stretch"]},padding:{urlToDocs:"https://tailwindcss.com/docs/padding",classes:["p-*","px-*","py-*","pt-*","pr-*","pb-*","pl-*","ps-*","pe-*"]},"padding-top":{urlToDocs:"https://tailwindcss.com/docs/padding",classes:["pt-*"]},"padding-right":{urlToDocs:"https://tailwindcss.com/docs/padding",classes:["pr-*"]},"padding-bottom":{urlToDocs:"https://tailwindcss.com/docs/padding",classes:["pb-*"]},"padding-left":{urlToDocs:"https://tailwindcss.com/docs/padding",classes:["pl-*"]},"padding-inline-start":{urlToDocs:"https://tailwindcss.com/docs/padding",classes:["ps-*"]},"padding-inline-end":{urlToDocs:"https://tailwindcss.com/docs/padding",classes:["pe-*"]},margin:{urlToDocs:"https://tailwindcss.com/docs/margin",classes:["m-*","mx-*","my-*","mt-*","mr-*","mb-*","ml-*","ms-*","me-*"]},"margin-top":{urlToDocs:"https://tailwindcss.com/docs/margin",classes:["mt-*"]},"margin-right":{urlToDocs:"https://tailwindcss.com/docs/margin",classes:["mr-*"]},"margin-bottom":{urlToDocs:"https://tailwindcss.com/docs/margin",classes:["mb-*"]},"margin-left":{urlToDocs:"https://tailwindcss.com/docs/margin",classes:["ml-*"]},"margin-inline-start":{urlToDocs:"https://tailwindcss.com/docs/margin",classes:["ms-*"]},"margin-inline-end":{urlToDocs:"https://tailwindcss.com/docs/margin",classes:["me-*"]},width:{urlToDocs:"https://tailwindcss.com/docs/width",classes:["w-*","min-w-*","max-w-*"]},"min-width":{urlToDocs:"https://tailwindcss.com/docs/min-width",classes:["min-w-*"]},"max-width":{urlToDocs:"https://tailwindcss.com/docs/max-width",classes:["max-w-*"]},height:{urlToDocs:"https://tailwindcss.com/docs/height",classes:["h-*"]},"min-height":{urlToDocs:"https://tailwindcss.com/docs/min-height",classes:["min-h-*"]},"max-height":{urlToDocs:"https://tailwindcss.com/docs/max-height",classes:["max-h-*"]},"font-family":{urlToDocs:"https://tailwindcss.com/docs/font-family",classes:["font-sans","font-serif","font-mono"]},"font-size":{urlToDocs:"https://tailwindcss.com/docs/font-size",classes:["text-xs","text-sm","text-base","text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl","text-6xl","text-7xl","text-8xl","text-9xl"]},"font-smoothing":{urlToDocs:"https://tailwindcss.com/docs/font-smoothing",classes:["antialiased","subpixel-antialiased"]},"font-style":{urlToDocs:"https://tailwindcss.com/docs/font-style",classes:["italic","not-italic"]},"font-weight":{urlToDocs:"https://tailwindcss.com/docs/font-weight",classes:["font-thin","font-extralight","font-light","font-normal","font-medium","font-semibold","font-bold","font-extrabold","font-black"]},"font-variant-numeric":{urlToDocs:"https://tailwindcss.com/docs/font-variant-numeric",classes:["normal-nums","ordinal","slashed-zero","lining-nums","oldstyle-nums","proportional-nums","tabular-nums","diagonal-fractions","stacked-fractions"]},"letter-spacing":{urlToDocs:"https://tailwindcss.com/docs/letter-spacing",classes:["tracking-tighter","tracking-tight","tracking-normal","tracking-wide","tracking-wider","tracking-widest"]},"line-height":{urlToDocs:"https://tailwindcss.com/docs/line-height",classes:["leading-3","leading-4","leading-5","leading-6","leading-7","leading-8","leading-9","leading-10","leading-none","leading-tight","leading-snug","leading-normal","leading-relaxed","leading-loose"]},"list-style-image":{urlToDocs:"https://tailwindcss.com/docs/list-style-image",classes:["list-image-*","list-image-none"]},"list-style-position":{urlToDocs:"https://tailwindcss.com/docs/list-style-position",classes:["list-inside","list-outside"]},"list-style-type":{urlToDocs:"https://tailwindcss.com/docs/list-style-type",classes:["list-none","list-disc","list-decimal"]},"text-align":{urlToDocs:"https://tailwindcss.com/docs/text-align",classes:["text-left","text-center","text-right","text-justify","text-start","text-end"]},"text-color":{urlToDocs:"https://tailwindcss.com/docs/text-color",classes:["text-*"]},"text-decoration":{urlToDocs:"https://tailwindcss.com/docs/text-decoration",classes:["underline","overline","line-through","no-underline"]},"text-decoration-color":{urlToDocs:"https://tailwindcss.com/docs/text-decoration-color",classes:["decoration-*"]},"text-decoration-style":{urlToDocs:"https://tailwindcss.com/docs/text-decoration-style",classes:["decoration-solid","decoration-double","decoration-dotted","decoration-dashed","decoration-wavy"]},"text-decoration-thickness":{urlToDocs:"https://tailwindcss.com/docs/text-decoration-thickness",classes:["decoration-auto","decoration-from-font","decoration-0","decoration-1","decoration-2","decoration-4","decoration-8"]},"text-underlining-offset":{urlToDocs:"https://tailwindcss.com/docs/text-underline-offset",classes:["underline-offset-auto","underline-offset-0","underline-offset-1","underline-offset-2","underline-offset-4","underline-offset-8"]},"text-transform":{urlToDocs:"https://tailwindcss.com/docs/text-transform",classes:["uppercase","lowercase","capitalize","normal-case"]},"text-overflow":{urlToDocs:"https://tailwindcss.com/docs/text-overflow",classes:["truncate","text-ellipsis","text-clip"]},"text-wrap":{urlToDocs:"https://tailwindcss.com/docs/word-wrap",classes:["text-wrap","text-nowrap","text-balance","text-pretty"]},"text-indent":{urlToDocs:"https://tailwindcss.com/docs/text-indent",classes:["indent-*"]},"vertical-align":{urlToDocs:"https://tailwindcss.com/docs/vertical-align",classes:["align-baseline","align-top","align-middle","align-bottom","align-text-top","align-text-bottom","align-sub","align-super"]},"white-space":{urlToDocs:"https://tailwindcss.com/docs/whitespace",classes:["whitespace-normal","whitespace-nowrap","whitespace-pre","whitespace-pre-line","whitespace-pre-wrap","whitespace-break-spaces"]},"word-break":{urlToDocs:"https://tailwindcss.com/docs/word-break",classes:["break-normal","break-all","break-keep"]},"overflow-wrap":{urlToDocs:"https://tailwindcss.com/docs/word-break",classes:["break-normal","break-words"]},hyphens:{urlToDocs:"https://tailwindcss.com/docs/hyphens",classes:["hyphens-none","hyphens-manual","hyphens-auto"]},content:{urlToDocs:"https://tailwindcss.com/docs/content",classes:["content-*","content-none"]},"background-attachment":{urlToDocs:"https://tailwindcss.com/docs/background-attachment",classes:["bg-fixed","bg-local","bg-scroll"]},"background-clip":{urlToDocs:"https://tailwindcss.com/docs/background-clip",classes:["bg-clip-border","bg-clip-padding","bg-clip-content","bg-clip-text"]},"background-color":{urlToDocs:"https://tailwindcss.com/docs/background-color",classes:["bg-*"]},"background-origin":{urlToDocs:"https://tailwindcss.com/docs/background-origin",classes:["bg-origin-border","bg-origin-padding","bg-origin-content"]},"background-position":{urlToDocs:"https://tailwindcss.com/docs/background-position",classes:["bg-bottom","bg-center","bg-left","bg-left-bottom","bg-left-top","bg-right","bg-right-bottom","bg-right-top","bg-top"]},"background-repeat":{urlToDocs:"https://tailwindcss.com/docs/background-repeat",classes:["bg-repeat","bg-no-repeat","bg-repeat-x","bg-repeat-y","bg-repeat-round","bg-repeat-space"]},"background-size":{urlToDocs:"https://tailwindcss.com/docs/background-size",classes:["bg-auto","bg-cover","bg-contain"]},"background-image":{urlToDocs:"https://tailwindcss.com/docs/background-image",classes:["bg-none","bg-gradient-to-t","bg-gradient-to-tr","bg-gradient-to-r","bg-gradient-to-br","bg-gradient-to-b","bg-gradient-to-bl","bg-gradient-to-l","bg-gradient-to-tl"]},border:{urlToDocs:"https://tailwindcss.com/docs/border-width",classes:["border","border-*"]},"border-top":{urlToDocs:"https://tailwindcss.com/docs/border-width",classes:["border-t","border-t-*"]},"border-right":{urlToDocs:"https://tailwindcss.com/docs/border-width",classes:["border-r","border-r-*"]},"border-bottom":{urlToDocs:"https://tailwindcss.com/docs/border-width",classes:["border-b","border-b-*"]},"border-left":{urlToDocs:"https://tailwindcss.com/docs/border-width",classes:["border-l","border-l-*"]},"border-radius":{urlToDocs:"https://tailwindcss.com/docs/border-radius",classes:["rounded-*","rounded-t-*","rounded-r-*","rounded-b-*","rounded-l-*"]},"border-width":{urlToDocs:"https://tailwindcss.com/docs/border-width",classes:["border","border-*","border-t-*","border-r-*","border-b-*","border-l-*"]},"border-color":{urlToDocs:"https://tailwindcss.com/docs/border-color",classes:["border-*"]},"border-style":{urlToDocs:"https://tailwindcss.com/docs/border-style",classes:["border-solid","border-dashed","border-dotted","border-double","border-hidden","border-none"]},"outline-width":{urlToDocs:"https://tailwindcss.com/docs/outline-width",classes:["outline-0","outline-1","outline-2","outline-4","outline-8"]},"outline-color":{urlToDocs:"https://tailwindcss.com/docs/outline-color",classes:["outline-*"]},"outline-style":{urlToDocs:"https://tailwindcss.com/docs/outline-style",classes:["outline-none","outline","outline-dashed","outline-dotted","outline-double"]},"outline-offset":{urlToDocs:"https://tailwindcss.com/docs/outline-offset",classes:["outline-offset-0","outline-offset-1","outline-offset-2","outline-offset-4","outline-offset-8"]},"box-shadow":{urlToDocs:"https://tailwindcss.com/docs/box-shadow",classes:["shadow-sm","shadow","shadow-md","shadow-lg","shadow-xl","shadow-2xl","shadow-inner","shadow-none"]},"box-shadow-color":{urlToDocs:"https://tailwindcss.com/docs/box-shadow-color",classes:["shadow-*"]},opacity:{urlToDocs:"https://tailwindcss.com/docs/opacity",classes:["opacity-0","opacity-5","opacity-10","opacity-15","opacity-20","opacity-25","opacity-30","opacity-35","opacity-40","opacity-45","opacity-50","opacity-55","opacity-60","opacity-65","opacity-70","opacity-75","opacity-80","opacity-85","opacity-90","opacity-95","opacity-100"]},"mix-blend-mode":{urlToDocs:"https://tailwindcss.com/docs/mix-blend-mode",classes:["mix-blend-normal","mix-blend-multiply","mix-blend-screen","mix-blend-overlay","mix-blend-darken","mix-blend-lighten","mix-blend-color-dodge","mix-blend-color-burn","mix-blend-hard-light","mix-blend-soft-light","mix-blend-difference","mix-blend-exclusion","mix-blend-hue","mix-blend-saturation","mix-blend-color","mix-blend-luminosity","mix-blend-plus-darker","mix-blend-plus-lighter"]},"background-blend-mode":{urlToDocs:"https://tailwindcss.com/docs/background-blend-mode",classes:["bg-blend-normal","bg-blend-multiply","bg-blend-screen","bg-blend-overlay","bg-blend-darken","bg-blend-lighten","bg-blend-color-dodge","bg-blend-color-burn","bg-blend-hard-light","bg-blend-soft-light","bg-blend-difference","bg-blend-exclusion","bg-blend-hue","bg-blend-saturation","bg-blend-color","bg-blend-luminosity"]},blur:{urlToDocs:"https://tailwindcss.com/docs/blur",classes:["blur-none","blur-sm","blur","blur-md","blur-lg","blur-xl","blur-2xl","blur-3xl"]},brightness:{urlToDocs:"https://tailwindcss.com/docs/brightness",classes:["brightness-0","brightness-50","brightness-75","brightness-100","brightness-105","brightness-110","brightness-125","brightness-150","brightness-200"]},contrast:{urlToDocs:"https://tailwindcss.com/docs/contrast",classes:["contrast-0","contrast-50","contrast-75","contrast-100","contrast-125","contrast-150","contrast-200"]},"drop-shadow":{urlToDocs:"https://tailwindcss.com/docs/drop-shadow",classes:["drop-shadow-sm","drop-shadow","drop-shadow-md","drop-shadow-lg","drop-shadow-xl","drop-shadow-2xl","drop-shadow-none"]},grayscale:{urlToDocs:"https://tailwindcss.com/docs/grayscale",classes:["grayscale-0","grayscale"]},"hue-rotate":{urlToDocs:"https://tailwindcss.com/docs/hue-rotate",classes:["rotate-0","rotate-15","rotate-30","rotate-60","rotate-90","rotate-180"]},invert:{urlToDocs:"https://tailwindcss.com/docs/invert",classes:["invert-0","invert"]},saturate:{urlToDocs:"https://tailwindcss.com/docs/saturate",classes:["saturate-0","saturate-50","saturate-100","saturate-150","saturate-200"]},sepia:{urlToDocs:"https://tailwindcss.com/docs/sepia",classes:["sepia-0","sepia"]},"backdrop-blur":{urlToDocs:"https://tailwindcss.com/docs/backdrop-blur",classes:["backdrop-blur-none","backdrop-blur-sm","backdrop-blur","backdrop-blur-md","backdrop-blur-lg","backdrop-blur-xl","backdrop-blur-2xl","backdrop-blur-3xl"]},"backdrop-brightness":{urlToDocs:"https://tailwindcss.com/docs/backdrop-brightness",classes:["backdrop-brightness-0","backdrop-brightness-50","backdrop-brightness-75","backdrop-brightness-90","backdrop-brightness-100","backdrop-brightness-105","backdrop-brightness-110","backdrop-brightness-125","backdrop-brightness-150","backdrop-brightness-200"]},"backdrop-contrast":{urlToDocs:"https://tailwindcss.com/docs/backdrop-contrast",classes:["backdrop-contrast-0","backdrop-contrast-50","backdrop-contrast-75","backdrop-contrast-100","backdrop-contrast-125","backdrop-contrast-150","backdrop-contrast-200"]},"backdrop-grayscale":{urlToDocs:"https://tailwindcss.com/docs/backdrop-grayscale",classes:["backdrop-grayscale-0","backdrop-grayscale"]},"backdrop-hue-rotate":{urlToDocs:"https://tailwindcss.com/docs/backdrop-hue-rotate",classes:["backdrop-rotate-0","backdrop-rotate-15","backdrop-rotate-30","backdrop-rotate-60","backdrop-rotate-90","backdrop-rotate-180"]},"backdrop-invert":{urlToDocs:"https://tailwindcss.com/docs/backdrop-invert",classes:["backdrop-invert-0","backdrop-invert"]},"backdrop-opacity":{urlToDocs:"https://tailwindcss.com/docs/backdrop-opacity",classes:["backdrop-opacity-0","backdrop-opacity-5","backdrop-opacity-10","backdrop-opacity-15","backdrop-opacity-20","backdrop-opacity-25","backdrop-opacity-30","backdrop-opacity-35","backdrop-opacity-40","backdrop-opacity-45","backdrop-opacity-50","backdrop-opacity-55","backdrop-opacity-60","backdrop-opacity-65","backdrop-opacity-70","backdrop-opacity-75","backdrop-opacity-80","backdrop-opacity-85","backdrop-opacity-90","backdrop-opacity-95","backdrop-opacity-100"]},"backdrop-saturate":{urlToDocs:"https://tailwindcss.com/docs/backdrop-saturate",classes:["backdrop-saturate-0","backdrop-saturate-50","backdrop-saturate-100","backdrop-saturate-150","backdrop-saturate-200"]},"backdrop-sepia":{urlToDocs:"https://tailwindcss.com/docs/backdrop-sepia",classes:["backdrop-sepia-0","backdrop-sepia"]},"border-collapse":{urlToDocs:"https://tailwindcss.com/docs/border-collapse",classes:["border-collapse","border-separate"]},"border-spacing":{urlToDocs:"https://tailwindcss.com/docs/border-spacing",classes:["border-spacing-*"]},"table-layout":{urlToDocs:"https://tailwindcss.com/docs/table-layout",classes:["table-auto","table-fixed"]},"caption-side":{urlToDocs:"https://tailwindcss.com/docs/caption-side",classes:["caption-top","caption-bottom"]},"transition-property":{urlToDocs:"https://tailwindcss.com/docs/transition-property",classes:["transition-none","transition-all","transition-colors","transition-opacity","transition-shadow","transition-transform"]},"transition-duration":{urlToDocs:"https://tailwindcss.com/docs/transition-duration",classes:["duration-0","duration-75","duration-100","duration-150","duration-200","duration-300","duration-500","duration-700","duration-1000"]},"transition-timing-function":{urlToDocs:"https://tailwindcss.com/docs/transition-timing-function",classes:["ease-linear","ease-in","ease-out","ease-in-out"]},"transition-delay":{urlToDocs:"https://tailwindcss.com/docs/transition-delay",classes:["delay-75","delay-100","delay-150","delay-200","delay-300","delay-500","delay-700","delay-1000"]},animation:{urlToDocs:"https://tailwindcss.com/docs/animation",classes:["animate-none","animate-spin","animate-ping","animate-pulse","animate-bounce"]},scale:{urlToDocs:"https://tailwindcss.com/docs/scale",classes:["scale-0","scale-50","scale-75","scale-90","scale-95","scale-100","scale-105","scale-110","scale-125","scale-150","scale-x-*","scale-y-*"]},rotate:{urlToDocs:"https://tailwindcss.com/docs/rotate",classes:["rotate-0","rotate-1","rotate-2","rotate-3","rotate-6","rotate-12","rotate-45","rotate-90","rotate-180"]},translate:{urlToDocs:"https://tailwindcss.com/docs/translate",classes:["translate-x-*","translate-y-*"]},skew:{urlToDocs:"https://tailwindcss.com/docs/skew",classes:["skew-x-*","skew-y-*"]},"transform-origin":{urlToDocs:"https://tailwindcss.com/docs/transform-origin",classes:["origin-center","origin-top","origin-top-right","origin-right","origin-bottom-right","origin-bottom","origin-bottom-left","origin-left","origin-top-left"]},"accent-color":{urlToDocs:"https://tailwindcss.com/docs/accent-color",classes:["accent-*"]},appearance:{urlToDocs:"https://tailwindcss.com/docs/appearance",classes:["appearance-none","appearance-auto"]},cursor:{urlToDocs:"https://tailwindcss.com/docs/cursor",classes:["cursor-*"]},"caret-color":{urlToDocs:"https://tailwindcss.com/docs/caret-color",classes:["caret-*"]},"pointer-events":{urlToDocs:"https://tailwindcss.com/docs/pointer-events",classes:["pointer-events-none","pointer-events-auto"]},resize:{urlToDocs:"https://tailwindcss.com/docs/resize",classes:["resize-none","resize-y","resize-x","resize"]},"scroll-behavior":{urlToDocs:"https://tailwindcss.com/docs/scroll-behavior",classes:["scroll-auto","scroll-smooth"]},"scroll-margin":{urlToDocs:"https://tailwindcss.com/docs/scroll-margin",classes:["scroll-m-*"]},"scroll-margin-top":{urlToDocs:"https://tailwindcss.com/docs/scroll-margin",classes:["scroll-mt-*"]},"scroll-margin-right":{urlToDocs:"https://tailwindcss.com/docs/scroll-margin",classes:["scroll-mr-*"]},"scroll-margin-bottom":{urlToDocs:"https://tailwindcss.com/docs/scroll-margin",classes:["scroll-mb-*"]},"scroll-margin-left":{urlToDocs:"https://tailwindcss.com/docs/scroll-margin",classes:["scroll-ml-*"]},"scroll-margin-inline-start":{urlToDocs:"https://tailwindcss.com/docs/scroll-margin",classes:["scroll-ms-*"]},"scroll-margin-inline-end":{urlToDocs:"https://tailwindcss.com/docs/scroll-margin",classes:["scroll-me-*"]},"scroll-padding":{urlToDocs:"https://tailwindcss.com/docs/scroll-padding",classes:["scroll-p-*"]},"scroll-padding-top":{urlToDocs:"https://tailwindcss.com/docs/scroll-padding",classes:["scroll-pt-*"]},"scroll-padding-right":{urlToDocs:"https://tailwindcss.com/docs/scroll-padding",classes:["scroll-pr-*"]},"scroll-padding-bottom":{urlToDocs:"https://tailwindcss.com/docs/scroll-padding",classes:["scroll-pb-*"]},"scroll-padding-left":{urlToDocs:"https://tailwindcss.com/docs/scroll-padding",classes:["scroll-pl-*"]},"scroll-padding-inline-start":{urlToDocs:"https://tailwindcss.com/docs/scroll-padding",classes:["scroll-ps-*"]},"scroll-padding-inline-end":{urlToDocs:"https://tailwindcss.com/docs/scroll-padding",classes:["scroll-pe-*"]},"scroll-snap-align":{urlToDocs:"https://tailwindcss.com/docs/scroll-snap-align",classes:["snap-start","snap-end","snap-center","snap-align-none"]},"scroll-snap-stop":{urlToDocs:"https://tailwindcss.com/docs/scroll-snap-stop",classes:["snap-normal","snap-always"]},"scroll-snap-type":{urlToDocs:"https://tailwindcss.com/docs/scroll-snap-type",classes:["snap-none","snap-x","snap-y","snap-both","snap-mandatory","snap-proximity"]},"touch-action":{urlToDocs:"https://tailwindcss.com/docs/touch-action",classes:["touch-auto","touch-none","touch-pan-x","touch-pan-left","touch-pan-right","touch-pan-y","touch-pan-up","touch-pan-down","touch-pinch-zoom","touch-manipulation"]},"user-select":{urlToDocs:"https://tailwindcss.com/docs/user-select",classes:["select-none","select-text","select-all","select-auto"]},"will-change":{urlToDocs:"https://tailwindcss.com/docs/will-change",classes:["will-change-auto","will-change-scroll","will-change-contents","will-change-transform"]},fill:{urlToDocs:"https://tailwindcss.com/docs/fill",classes:["fill-*"]},stroke:{urlToDocs:"https://tailwindcss.com/docs/stroke",classes:["stroke-*"]},"stroke-width":{urlToDocs:"https://tailwindcss.com/docs/stroke-width",classes:["stroke-0","stroke-1","stroke-2"]},"forced-color-adjust":{urlToDocs:"https://tailwindcss.com/docs/forced-color-adjust",classes:["forced-color-adjust-auto","forced-color-adjust-none"]}};function T(s){if(!y.hasOwnProperty(s)){S();return}let o=new V({colWidths:[20,50]}),{urlToDocs:t,classes:e}=y[s];o.push({Documentation:L.cyan(t)},{Classes:L.gray(e.join(`
`))}),console.log(""),console.log(o.toString()),console.log("")}var J=new q("css").description("Print Tailwind helper tied to a css property").argument("<property>","CSS property to retrieve Tailwind helper for (e.g. css margin-top)").action(s=>T(s)),I=J;import{Command as X}from"commander";import x from"chalk";import Q from"cli-table3";var N={slate:{"slate-50":"#f8fafc","slate-100":"#f1f5f9","slate-200":"#e2e8f0","slate-300":"#cbd5e1","slate-400":"#94a3b8","slate-500":"#64748b","slate-600":"#475569","slate-700":"#334155","slate-800":"#1e293b","slate-900":"#0f172a",slate:"#64748b"},gray:{"gray-50":"#f9fafb","gray-100":"#f3f4f6","gray-200":"#e5e7eb","gray-300":"#d1d5db","gray-400":"#9ca3af","gray-500":"#6b7280","gray-600":"#4b5563","gray-700":"#374151","gray-800":"#1f2937","gray-900":"#111827",gray:"#6b7280"},zinc:{"zinc-50":"#fafafa","zinc-100":"#f4f4f5","zinc-200":"#e4e4e7","zinc-300":"#d4d4d8","zinc-400":"#a1a1aa","zinc-500":"#71717a","zinc-600":"#52525b","zinc-700":"#3f3f46","zinc-800":"#27272a","zinc-900":"#18181b",zinc:"#71717a"},neutral:{"neutral-50":"#fafafa","neutral-100":"#f5f5f5","neutral-200":"#e5e5e5","neutral-300":"#d4d4d4","neutral-400":"#a3a3a3","neutral-500":"#737373","neutral-600":"#525252","neutral-700":"#404040","neutral-800":"#262626","neutral-900":"#171717",neutral:"#737373"},stone:{"stone-50":"#fafaf9","stone-100":"#f5f5f4","stone-200":"#e7e5e4","stone-300":"#d6d3d1","stone-400":"#a8a29e","stone-500":"#78716c","stone-600":"#57534e","stone-700":"#44403c","stone-800":"#292524","stone-900":"#1c1917",stone:"#78716c"},red:{"red-50":"#fef2f2","red-100":"#fee2e2","red-200":"#fecaca","red-300":"#fca5a5","red-400":"#f87171","red-500":"#ef4444","red-600":"#dc2626","red-700":"#b91c1c","red-800":"#991b1b","red-900":"#7f1d1d",red:"#ef4444"},orange:{"orange-50":"#fff7ed","orange-100":"#ffedd5","orange-200":"#fed7aa","orange-300":"#fdba74","orange-400":"#fb923c","orange-500":"#f97316","orange-600":"#ea580c","orange-700":"#c2410c","orange-800":"#9a3412","orange-900":"#7c2d12",orange:"#f97316"},amber:{"amber-50":"#fffbeb","amber-100":"#fef3c7","amber-200":"#fde68a","amber-300":"#fcd34d","amber-400":"#fbbf24","amber-500":"#f59e0b","amber-600":"#d97706","amber-700":"#b45309","amber-800":"#92400e","amber-900":"#78350f",amber:"#f59e0b"},yellow:{"yellow-50":"#fefce8","yellow-100":"#fef9c3","yellow-200":"#fef08a","yellow-300":"#fde047","yellow-400":"#facc15","yellow-500":"#eab308","yellow-600":"#ca8a04","yellow-700":"#a16207","yellow-800":"#854d0e","yellow-900":"#713f12",yellow:"#eab308"},lime:{"lime-50":"#f7fee7","lime-100":"#ecfccb","lime-200":"#d9f99d","lime-300":"#bef264","lime-400":"#a3e635","lime-500":"#84cc16","lime-600":"#65a30d","lime-700":"#4d7c0f","lime-800":"#3f6212","lime-900":"#365314",lime:"#84cc16"},green:{"green-50":"#f0fdf4","green-100":"#dcfce7","green-200":"#bbf7d0","green-300":"#86efac","green-400":"#4ade80","green-500":"#22c55e","green-600":"#16a34a","green-700":"#15803d","green-800":"#166534","green-900":"#14532d",green:"#22c55e"},emerald:{"emerald-50":"#ecfdf5","emerald-100":"#d1fae5","emerald-200":"#a7f3d0","emerald-300":"#6ee7b7","emerald-400":"#34d399","emerald-500":"#10b981","emerald-600":"#059669","emerald-700":"#047857","emerald-800":"#065f46","emerald-900":"#064e3b",emerald:"#10b981"},teal:{"teal-50":"#f0fdfa","teal-100":"#ccfbf1","teal-200":"#99f6e4","teal-300":"#5eead4","teal-400":"#2dd4bf","teal-500":"#14b8a6","teal-600":"#0d9488","teal-700":"#0f766e","teal-800":"#115e59","teal-900":"#134e4a",teal:"#14b8a6"},cyan:{"cyan-50":"#e0f7fa","cyan-100":"#b2ebf2","cyan-200":"#80deea","cyan-300":"#4dd0e1","cyan-400":"#26c6da","cyan-500":"#00bcd4","cyan-600":"#00acc1","cyan-700":"#0097a7","cyan-800":"#00838f","cyan-900":"#006064",cyan:"#00bcd4"},sky:{"sky-50":"#f0f9ff","sky-100":"#e0f2fe","sky-200":"#bae6fd","sky-300":"#7dd3fc","sky-400":"#38bdf8","sky-500":"#0ea5e9","sky-600":"#0284c7","sky-700":"#0369a1","sky-800":"#075985","sky-900":"#0c4a6e",sky:"#0ea5e9"},blue:{"blue-50":"#eff6ff","blue-100":"#dbeafe","blue-200":"#bfdbfe","blue-300":"#93c5fd","blue-400":"#60a5fa","blue-500":"#3b82f6","blue-600":"#2563eb","blue-700":"#1d4ed8","blue-800":"#1e40af","blue-900":"#1e3a8a",blue:"#3b82f6"},indigo:{"indigo-50":"#eef2ff","indigo-100":"#e0e7ff","indigo-200":"#c7d2fe","indigo-300":"#a5b4fc","indigo-400":"#818cf8","indigo-500":"#6366f1","indigo-600":"#4f46e5","indigo-700":"#4338ca","indigo-800":"#3730a3","indigo-900":"#312e81",indigo:"#6366f1"},violet:{"violet-50":"#f3ebff","violet-100":"#ede9fe","violet-200":"#ddd6fe","violet-300":"#c4b5fd","violet-400":"#a78bfa","violet-500":"#8b5cf6","violet-600":"#7c3aed","violet-700":"#6d28d9","violet-800":"#5b21b6","violet-900":"#4c1d95",violet:"#8b5cf6"},purple:{"purple-50":"#faf5ff","purple-100":"#f3e8ff","purple-200":"#e9d5ff","purple-300":"#d8b4fe","purple-400":"#c084fc","purple-500":"#a855f7","purple-600":"#9333ea","purple-700":"#7e22ce","purple-800":"#6b21a8","purple-900":"#581c87",purple:"#a855f7"},fuchsia:{"fuchsia-50":"#fdf4ff","fuchsia-100":"#fae8ff","fuchsia-200":"#f5d0fe","fuchsia-300":"#f0abfc","fuchsia-400":"#e879f9","fuchsia-500":"#d946ef","fuchsia-600":"#c026d3","fuchsia-700":"#a21caf","fuchsia-800":"#86198f","fuchsia-900":"#701a75",fuchsia:"#d946ef"},pink:{"pink-50":"#fdf2f8","pink-100":"#fce7f3","pink-200":"#fbcfe8","pink-300":"#f9a8d4","pink-400":"#f472b6","pink-500":"#ec4899","pink-600":"#db2777","pink-700":"#be185d","pink-800":"#9d174d","pink-900":"#831843",pink:"#ec4899"},rose:{"rose-50":"#fff1f2","rose-100":"#ffe4e6","rose-200":"#fecdd3","rose-300":"#fda4af","rose-400":"#fb7185","rose-500":"#f43f5e","rose-600":"#e11d48","rose-700":"#be123c","rose-800":"#9f1239","rose-900":"#881337",rose:"#f43f5e"}};function k(){let s=Object.entries(N);i("Tailwind CSS global colors, ranging from 50 to 900 in numeric scale");for(let[o,t]of s){let e=Object.values(t),c=e.pop(),a=new Q({head:[`${x.bgHex(c)("  ")} ${x.white(o)}`],colWidths:[31]}),l=e.map(r=>`${x.bgHex(r)("  ")}`).join(" ");a.push([l]),console.log(a.toString()),console.log("")}}function P(s){let{extendColors:o,overrideColors:t}=z(s);if(!o&&!t){i("No user-defined colors found in the Tailwind config file");return}let e=Object.entries(o),c=Object.entries(t),a=p(e,"Name","Color",!0,[20,30]),l=p(c,"Name","Color",!0,[20,30]);if(!o){i("theme.colors object"),console.log(l+`
`);return}if(!t){i("theme.extend.colors object"),console.log(a+`
`);return}let{output:r,tablePlacesSwapped:n}=g(a,l);n?i("Overridden colors (theme.colors)"+" ".repeat(25)+"Extended colors (theme.extend.colors)"):i("Extended colors (theme.extend.colors)"+" ".repeat(20)+"Overridden colors (theme.colors)"),console.log(r),console.log("")}var Y=new X("colors").description("List all colors for the Tailwind CSS project").option("-d, --default","List the default color palette in Tailwind CSS").option("-c, --config <path>","Provide a custom Tailwind config file path").action(s=>{if(s.hasOwnProperty("default")){k();return}P(s.config)}),B=Y;var m=new Z;function ss(){m.name("tw-helper").description("A CLI tool providing useful helper functions for developers using Tailwind CSS").version("1.0.0"),m.addCommand(B),m.addCommand(_),m.addCommand(I),m.parse()}ss();
