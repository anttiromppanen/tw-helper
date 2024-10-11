interface TailwindUrlAndClasses {
  urlToDocs: string;
  classes: string[];
}

/**
 * List of css properties and their corresponding Tailwind classes
 * @description Holds urlToDocs and classes for each css property
 * @returns Returns the Tailwind helper class for css property
 */

export const cssPropertiesDict: Record<string, TailwindUrlAndClasses> = {
  // Layout
  "aspect-ratio": {
    urlToDocs: "https://tailwindcss.com/docs/aspect-ratio",
    classes: ["aspect-auto", "aspect-square", "aspect-video"],
  },
  columns: {
    urlToDocs: "https://tailwindcss.com/docs/columns",
    classes: ["columns-*"],
  },
  "break-after": {
    urlToDocs: "https://tailwindcss.com/docs/break-after",
    classes: ["break-after-*"],
  },
  "break-before": {
    urlToDocs: "https://tailwindcss.com/docs/break-before",
    classes: ["break-before-*"],
  },
  "break-inside": {
    urlToDocs: "https://tailwindcss.com/docs/break-inside",
    classes: ["break-inside-*"],
  },
  "box-decoration-break": {
    urlToDocs: "https://tailwindcss.com/docs/box-decoration-break",
    classes: ["decoration-slice", "decoration-clone"],
  },
  "box-sizing": {
    urlToDocs: "https://tailwindcss.com/docs/box-sizing",
    classes: ["box-border", "box-content"],
  },
  display: {
    urlToDocs: "https://tailwindcss.com/docs/display",
    classes: [
      "block",
      "inline-block",
      "inline",
      "flex",
      "inline-flex",
      "grid",
      "inline-grid",
      "hidden",
      "inline-table",
      "table",
      "table-caption",
      "table-cell",
      "table-column",
      "table-column-group",
      "table-footer-group",
      "table-header-group",
      "table-row-group",
      "table-row",
      "flow-root",
      "contents",
      "list-item",
    ],
  },
  table: {
    urlToDocs: "https://tailwindcss.com/docs/display#table",
    classes: [
      "table",
      "table-caption",
      "table-cell",
      "table-column",
      "table-column-group",
      "table-footer-group",
      "table-header-group",
      "table-row-group",
      "table-row",
    ],
  },
  float: {
    urlToDocs: "https://tailwindcss.com/docs/float",
    classes: [
      "float-start",
      "float-end",
      "float-right",
      "float-left",
      "float-none",
    ],
  },
  clear: {
    urlToDocs: "https://tailwindcss.com/docs/clear",
    classes: [
      "clear-start",
      "clear-end",
      "clear-left",
      "clear-right",
      "clear-both",
      "clear-none",
    ],
  },
  isolation: {
    urlToDocs: "https://tailwindcss.com/docs/isolation",
    classes: ["isolate", "isolation-auto"],
  },
  "object-fit": {
    urlToDocs: "https://tailwindcss.com/docs/object-fit",
    classes: [
      "object-contain",
      "object-cover",
      "object-fill",
      "object-none",
      "object-scale-down",
    ],
  },
  "object-position": {
    urlToDocs: "https://tailwindcss.com/docs/object-position",
    classes: [
      "object-bottom",
      "object-center",
      "object-left",
      "object-left-bottom",
      "object-left-top",
      "object-right",
      "object-right-bottom",
      "object-right-top",
      "object-top",
    ],
  },
  overflow: {
    urlToDocs: "https://tailwindcss.com/docs/overflow",
    classes: ["overflow-*", "overflow-x-*", "overflow-y-*"],
  },
  "overscroll-behavior": {
    urlToDocs: "https://tailwindcss.com/docs/overscroll-behavior",
    classes: [
      "overscroll-auto",
      "overscroll-contain",
      "overscroll-none",
      "overscroll-y-*",
      "overscroll-x-*",
    ],
  },
  position: {
    urlToDocs: "https://tailwindcss.com/docs/position",
    classes: ["static", "fixed", "absolute", "relative", "sticky"],
  },
  visibility: {
    urlToDocs: "https://tailwindcss.com/docs/visibility",
    classes: ["visible", "invisible", "collapse"],
  },
  top: {
    urlToDocs: "https://tailwindcss.com/docs/top-right-bottom-left",
    classes: ["top-*", "inset-*", "inset-y-*"],
  },
  right: {
    urlToDocs: "https://tailwindcss.com/docs/top-right-bottom-left",
    classes: ["right-*", "inset-*", "inset-x-*"],
  },
  bottom: {
    urlToDocs: "https://tailwindcss.com/docs/top-right-bottom-left",
    classes: ["bottom-*", "inset-*", "inset-y-*"],
  },
  left: {
    urlToDocs: "https://tailwindcss.com/docs/top-right-bottom-left",
    classes: ["left-*", "inset-*", "inset-x-*"],
  },
  "z-index": {
    urlToDocs: "https://tailwindcss.com/docs/z-index",
    classes: ["z-*", "-z-*", "z-auto"],
  },

  // Flexbox & Grid
  "flex-basis": {
    urlToDocs: "https://tailwindcss.com/docs/flex-basis",
    classes: ["basis-*"],
  },
  "flex-direction": {
    urlToDocs: "https://tailwindcss.com/docs/flex-direction",
    classes: ["flex-row", "flex-row-reverse", "flex-col", "flex-col-reverse"],
  },
  "flex-wrap": {
    urlToDocs: "https://tailwindcss.com/docs/flex-wrap",
    classes: ["flex-wrap", "flex-wrap-reverse", "flex-nowrap"],
  },
  flex: {
    urlToDocs: "https://tailwindcss.com/docs/flex",
    classes: ["flex-1", "flex-auto", "flex-initial", "flex-none"],
  },
  "flex-grow": {
    urlToDocs: "https://tailwindcss.com/docs/flex-grow",
    classes: ["grow", "grow-0"],
  },
  "flex-shrink": {
    urlToDocs: "https://tailwindcss.com/docs/flex-shrink",
    classes: ["shrink", "shrink-0"],
  },
  order: {
    urlToDocs: "https://tailwindcss.com/docs/order",
    classes: [
      "order-1",
      "order-2",
      "order-3",
      "order-4",
      "order-5",
      "order-6",
      "order-7",
      "order-8",
      "order-9",
      "order-10",
      "order-11",
      "order-12",
      "order-first",
      "order-last",
      "order-none",
    ],
  },
  "grid-template-columns": {
    urlToDocs: "https://tailwindcss.com/docs/grid-template-columns",
    classes: [
      "grid-cols-1",
      "grid-cols-2",
      "grid-cols-3",
      "grid-cols-4",
      "grid-cols-5",
      "grid-cols-6",
      "grid-cols-7",
      "grid-cols-8",
      "grid-cols-9",
      "grid-cols-10",
      "grid-cols-11",
      "grid-cols-12",
      "grid-cols-none",
      "grid-cols-subgrid",
    ],
  },
  "grid-column": {
    urlToDocs: "https://tailwindcss.com/docs/grid-column",
    classes: [
      "col-auto",
      "col-span-1",
      "col-span-2",
      "col-span-3",
      "col-span-4",
      "col-span-5",
      "col-span-6",
      "col-span-7",
      "col-span-8",
      "col-span-9",
      "col-span-10",
      "col-span-11",
      "col-span-12",
      "col-span-full",
    ],
  },
  "grid-column-start": {
    urlToDocs: "https://tailwindcss.com/docs/grid-column",
    classes: [
      "col-start-1",
      "col-start-2",
      "col-start-3",
      "col-start-4",
      "col-start-5",
      "col-start-6",
      "col-start-7",
      "col-start-8",
      "col-start-9",
      "col-start-10",
      "col-start-11",
      "col-start-12",
      "col-start-13",
      "col-start-auto",
    ],
  },
  "grid-column-end": {
    urlToDocs: "https://tailwindcss.com/docs/grid-column",
    classes: [
      "col-end-1",
      "col-end-2",
      "col-end-3",
      "col-end-4",
      "col-end-5",
      "col-end-6",
      "col-end-7",
      "col-end-8",
      "col-end-9",
      "col-end-10",
      "col-end-11",
      "col-end-12",
      "col-end-13",
      "col-end-auto",
    ],
  },
  "grid-template-rows": {
    urlToDocs: "https://tailwindcss.com/docs/grid-template-rows",
    classes: [
      "grid-rows-1",
      "grid-rows-2",
      "grid-rows-3",
      "grid-rows-4",
      "grid-rows-5",
      "grid-rows-6",
      "grid-rows-7",
      "grid-rows-8",
      "grid-rows-9",
      "grid-rows-10",
      "grid-rows-11",
      "grid-rows-12",
      "grid-rows-none",
      "grid-rows-subgrid",
    ],
  },
  "grid-row": {
    urlToDocs: "https://tailwindcss.com/docs/grid-row",
    classes: [
      "row-auto",
      "row-span-1",
      "row-span-2",
      "row-span-3",
      "row-span-4",
      "row-span-5",
      "row-span-6",
      "row-span-7",
      "row-span-8",
      "row-span-9",
      "row-span-10",
      "row-span-11",
      "row-span-12",
      "row-span-full",
    ],
  },
  "grid-row-start": {
    urlToDocs: "https://tailwindcss.com/docs/grid-row",
    classes: [
      "row-start-1",
      "row-start-2",
      "row-start-3",
      "row-start-4",
      "row-start-5",
      "row-start-6",
      "row-start-7",
      "row-start-8",
      "row-start-9",
      "row-start-10",
      "row-start-11",
      "row-start-12",
      "row-start-13",
      "row-start-auto",
    ],
  },
  "grid-row-end": {
    urlToDocs: "https://tailwindcss.com/docs/grid-row",
    classes: [
      "row-end-1",
      "row-end-2",
      "row-end-3",
      "row-end-4",
      "row-end-5",
      "row-end-6",
      "row-end-7",
      "row-end-8",
      "row-end-9",
      "row-end-10",
      "row-end-11",
      "row-end-12",
      "row-end-13",
      "row-end-auto",
    ],
  },
  "grid-auto-flow": {
    urlToDocs: "https://tailwindcss.com/docs/grid-auto-flow",
    classes: [
      "grid-flow-row",
      "grid-flow-col",
      "grid-flow-dense",
      "grid-flow-row-dense",
      "grid-flow-col-dense",
    ],
  },
  "grid-auto-columns": {
    urlToDocs: "https://tailwindcss.com/docs/grid-auto-columns",
    classes: [
      "auto-cols-auto",
      "auto-cols-min",
      "auto-cols-max",
      "auto-cols-fr",
    ],
  },
  "grid-auto-rows": {
    urlToDocs: "https://tailwindcss.com/docs/grid-auto-rows",
    classes: [
      "auto-rows-auto",
      "auto-rows-min",
      "auto-rows-max",
      "auto-rows-fr",
    ],
  },
  gap: {
    urlToDocs: "https://tailwindcss.com/docs/gap",
    classes: ["gap-*", "gap-x-*", "gap-y-*"],
  },
  "justify-content": {
    urlToDocs: "https://tailwindcss.com/docs/justify-content",
    classes: [
      "justify-normal",
      "justify-start",
      "justify-end",
      "justify-center",
      "justify-between",
      "justify-around",
      "justify-evenly",
      "justify-stretch",
    ],
  },
  "justify-items": {
    urlToDocs: "https://tailwindcss.com/docs/justify-items",
    classes: [
      "justify-items-start",
      "justify-items-end",
      "justify-items-center",
      "justify-items-stretch",
    ],
  },
  "justify-self": {
    urlToDocs: "https://tailwindcss.com/docs/justify-self",
    classes: [
      "justify-self-auto",
      "justify-self-start",
      "justify-self-end",
      "justify-self-center",
      "justify-self-stretch",
    ],
  },
  "align-content": {
    urlToDocs: "https://tailwindcss.com/docs/align-content",
    classes: [
      "content-normal",
      "content-center",
      "content-start",
      "content-end",
      "content-between",
      "content-around",
      "content-evenly",
      "content-baseline",
      "content-stretch",
    ],
  },
  "align-items": {
    urlToDocs: "https://tailwindcss.com/docs/align-items",
    classes: [
      "items-start",
      "items-end",
      "items-center",
      "items-baseline",
      "items-stretch",
    ],
  },
  "align-self": {
    urlToDocs: "https://tailwindcss.com/docs/align-self",
    classes: [
      "self-auto",
      "self-start",
      "self-end",
      "self-center",
      "self-stretch",
      "self-baseline",
    ],
  },
  "place-content": {
    urlToDocs: "https://tailwindcss.com/docs/place-content",
    classes: [
      "place-content-center",
      "place-content-start",
      "place-content-end",
      "place-content-between",
      "place-content-around",
      "place-content-evenly",
      "place-content-baseline",
      "place-content-stretch",
    ],
  },
  "place-items": {
    urlToDocs: "https://tailwindcss.com/docs/place-items",
    classes: [
      "place-items-start",
      "place-items-end",
      "place-items-center",
      "place-items-baseline",
      "place-items-stretch",
    ],
  },
  "place-self": {
    urlToDocs: "https://tailwindcss.com/docs/place-self",
    classes: [
      "place-self-auto",
      "place-self-start",
      "place-self-end",
      "place-self-center",
      "place-self-stretch",
    ],
  },

  // Spacing
  padding: {
    urlToDocs: "https://tailwindcss.com/docs/padding",
    classes: [
      "p-*",
      "px-*",
      "py-*",
      "pt-*",
      "pr-*",
      "pb-*",
      "pl-*",
      "ps-*",
      "pe-*",
    ],
  },
  "padding-top": {
    urlToDocs: "https://tailwindcss.com/docs/padding",
    classes: ["pt-*"],
  },
  "padding-right": {
    urlToDocs: "https://tailwindcss.com/docs/padding",
    classes: ["pr-*"],
  },
  "padding-bottom": {
    urlToDocs: "https://tailwindcss.com/docs/padding",
    classes: ["pb-*"],
  },
  "padding-left": {
    urlToDocs: "https://tailwindcss.com/docs/padding",
    classes: ["pl-*"],
  },
  "padding-inline-start": {
    urlToDocs: "https://tailwindcss.com/docs/padding",
    classes: ["ps-*"],
  },
  "padding-inline-end": {
    urlToDocs: "https://tailwindcss.com/docs/padding",
    classes: ["pe-*"],
  },
  margin: {
    urlToDocs: "https://tailwindcss.com/docs/margin",
    classes: [
      "m-*",
      "mx-*",
      "my-*",
      "mt-*",
      "mr-*",
      "mb-*",
      "ml-*",
      "ms-*",
      "me-*",
    ],
  },
  "margin-top": {
    urlToDocs: "https://tailwindcss.com/docs/margin",
    classes: ["mt-*"],
  },
  "margin-right": {
    urlToDocs: "https://tailwindcss.com/docs/margin",
    classes: ["mr-*"],
  },
  "margin-bottom": {
    urlToDocs: "https://tailwindcss.com/docs/margin",
    classes: ["mb-*"],
  },
  "margin-left": {
    urlToDocs: "https://tailwindcss.com/docs/margin",
    classes: ["ml-*"],
  },
  "margin-inline-start": {
    urlToDocs: "https://tailwindcss.com/docs/margin",
    classes: ["ms-*"],
  },
  "margin-inline-end": {
    urlToDocs: "https://tailwindcss.com/docs/margin",
    classes: ["me-*"],
  },

  // Sizing
  width: {
    urlToDocs: "https://tailwindcss.com/docs/width",
    classes: ["w-*", "min-w-*", "max-w-*"],
  },
  "min-width": {
    urlToDocs: "https://tailwindcss.com/docs/min-width",
    classes: ["min-w-*"],
  },
  "max-width": {
    urlToDocs: "https://tailwindcss.com/docs/max-width",
    classes: ["max-w-*"],
  },
  height: {
    urlToDocs: "https://tailwindcss.com/docs/height",
    classes: ["h-*"],
  },
  "min-height": {
    urlToDocs: "https://tailwindcss.com/docs/min-height",
    classes: ["min-h-*"],
  },
  "max-height": {
    urlToDocs: "https://tailwindcss.com/docs/max-height",
    classes: ["max-h-*"],
  },

  // Typography
  "font-family": {
    urlToDocs: "https://tailwindcss.com/docs/font-family",
    classes: ["font-sans", "font-serif", "font-mono"],
  },
  "font-size": {
    urlToDocs: "https://tailwindcss.com/docs/font-size",
    classes: [
      "text-xs",
      "text-sm",
      "text-base",
      "text-lg",
      "text-xl",
      "text-2xl",
      "text-3xl",
      "text-4xl",
      "text-5xl",
      "text-6xl",
      "text-7xl",
      "text-8xl",
      "text-9xl",
    ],
  },
  "font-smoothing": {
    urlToDocs: "https://tailwindcss.com/docs/font-smoothing",
    classes: ["antialiased", "subpixel-antialiased"],
  },
  "font-style": {
    urlToDocs: "https://tailwindcss.com/docs/font-style",
    classes: ["italic", "not-italic"],
  },
  "font-weight": {
    urlToDocs: "https://tailwindcss.com/docs/font-weight",
    classes: [
      "font-thin",
      "font-extralight",
      "font-light",
      "font-normal",
      "font-medium",
      "font-semibold",
      "font-bold",
      "font-extrabold",
      "font-black",
    ],
  },
  "font-variant-numeric": {
    urlToDocs: "https://tailwindcss.com/docs/font-variant-numeric",
    classes: [
      "normal-nums",
      "ordinal",
      "slashed-zero",
      "lining-nums",
      "oldstyle-nums",
      "proportional-nums",
      "tabular-nums",
      "diagonal-fractions",
      "stacked-fractions",
    ],
  },
  "letter-spacing": {
    urlToDocs: "https://tailwindcss.com/docs/letter-spacing",
    classes: [
      "tracking-tighter",
      "tracking-tight",
      "tracking-normal",
      "tracking-wide",
      "tracking-wider",
      "tracking-widest",
    ],
  },
  "line-height": {
    urlToDocs: "https://tailwindcss.com/docs/line-height",
    classes: [
      "leading-3",
      "leading-4",
      "leading-5",
      "leading-6",
      "leading-7",
      "leading-8",
      "leading-9",
      "leading-10",
      "leading-none",
      "leading-tight",
      "leading-snug",
      "leading-normal",
      "leading-relaxed",
      "leading-loose",
    ],
  },
  "list-style-image": {
    urlToDocs: "https://tailwindcss.com/docs/list-style-image",
    classes: ["list-image-*", "list-image-none"],
  },
  "list-style-position": {
    urlToDocs: "https://tailwindcss.com/docs/list-style-position",
    classes: ["list-inside", "list-outside"],
  },
  "list-style-type": {
    urlToDocs: "https://tailwindcss.com/docs/list-style-type",
    classes: ["list-none", "list-disc", "list-decimal"],
  },
  "text-align": {
    urlToDocs: "https://tailwindcss.com/docs/text-align",
    classes: [
      "text-left",
      "text-center",
      "text-right",
      "text-justify",
      "text-start",
      "text-end",
    ],
  },
  "text-color": {
    urlToDocs: "https://tailwindcss.com/docs/text-color",
    classes: ["text-*"],
  },
  "text-decoration": {
    urlToDocs: "https://tailwindcss.com/docs/text-decoration",
    classes: ["underline", "overline", "line-through", "no-underline"],
  },
  "text-decoration-color": {
    urlToDocs: "https://tailwindcss.com/docs/text-decoration-color",
    classes: ["decoration-*"],
  },
  "text-decoration-style": {
    urlToDocs: "https://tailwindcss.com/docs/text-decoration-style",
    classes: [
      "decoration-solid",
      "decoration-double",
      "decoration-dotted",
      "decoration-dashed",
      "decoration-wavy",
    ],
  },
  "text-decoration-thickness": {
    urlToDocs: "https://tailwindcss.com/docs/text-decoration-thickness",
    classes: [
      "decoration-auto",
      "decoration-from-font",
      "decoration-0",
      "decoration-1",
      "decoration-2",
      "decoration-4",
      "decoration-8",
    ],
  },
  "text-underlining-offset": {
    urlToDocs: "https://tailwindcss.com/docs/text-underline-offset",
    classes: [
      "underline-offset-auto",
      "underline-offset-0",
      "underline-offset-1",
      "underline-offset-2",
      "underline-offset-4",
      "underline-offset-8",
    ],
  },
  "text-transform": {
    urlToDocs: "https://tailwindcss.com/docs/text-transform",
    classes: ["uppercase", "lowercase", "capitalize", "normal-case"],
  },
  "text-overflow": {
    urlToDocs: "https://tailwindcss.com/docs/text-overflow",
    classes: ["truncate", "text-ellipsis", "text-clip"],
  },
  "text-wrap": {
    urlToDocs: "https://tailwindcss.com/docs/word-wrap",
    classes: ["text-wrap", "text-nowrap", "text-balance", "text-pretty"],
  },
  "text-indent": {
    urlToDocs: "https://tailwindcss.com/docs/text-indent",
    classes: ["indent-*"],
  },
  "vertical-align": {
    urlToDocs: "https://tailwindcss.com/docs/vertical-align",
    classes: [
      "align-baseline",
      "align-top",
      "align-middle",
      "align-bottom",
      "align-text-top",
      "align-text-bottom",
      "align-sub",
      "align-super",
    ],
  },
  "white-space": {
    urlToDocs: "https://tailwindcss.com/docs/whitespace",
    classes: [
      "whitespace-normal",
      "whitespace-nowrap",
      "whitespace-pre",
      "whitespace-pre-line",
      "whitespace-pre-wrap",
      "whitespace-break-spaces",
    ],
  },
  "word-break": {
    urlToDocs: "https://tailwindcss.com/docs/word-break",
    classes: ["break-normal", "break-all", "break-keep"],
  },
  "overflow-wrap": {
    urlToDocs: "https://tailwindcss.com/docs/word-break",
    classes: ["break-normal", "break-words"],
  },
  hyphens: {
    urlToDocs: "https://tailwindcss.com/docs/hyphens",
    classes: ["hyphens-none", "hyphens-manual", "hyphens-auto"],
  },
  content: {
    urlToDocs: "https://tailwindcss.com/docs/content",
    classes: ["content-*", "content-none"],
  },

  // Backgrounds
  "background-attachment": {
    urlToDocs: "https://tailwindcss.com/docs/background-attachment",
    classes: ["bg-fixed", "bg-local", "bg-scroll"],
  },
  "background-clip": {
    urlToDocs: "https://tailwindcss.com/docs/background-clip",
    classes: [
      "bg-clip-border",
      "bg-clip-padding",
      "bg-clip-content",
      "bg-clip-text",
    ],
  },
  "background-color": {
    urlToDocs: "https://tailwindcss.com/docs/background-color",
    classes: ["bg-*"],
  },
  "background-origin": {
    urlToDocs: "https://tailwindcss.com/docs/background-origin",
    classes: ["bg-origin-border", "bg-origin-padding", "bg-origin-content"],
  },
  "background-position": {
    urlToDocs: "https://tailwindcss.com/docs/background-position",
    classes: [
      "bg-bottom",
      "bg-center",
      "bg-left",
      "bg-left-bottom",
      "bg-left-top",
      "bg-right",
      "bg-right-bottom",
      "bg-right-top",
      "bg-top",
    ],
  },
  "background-repeat": {
    urlToDocs: "https://tailwindcss.com/docs/background-repeat",
    classes: [
      "bg-repeat",
      "bg-no-repeat",
      "bg-repeat-x",
      "bg-repeat-y",
      "bg-repeat-round",
      "bg-repeat-space",
    ],
  },
  "background-size": {
    urlToDocs: "https://tailwindcss.com/docs/background-size",
    classes: ["bg-auto", "bg-cover", "bg-contain"],
  },
  "background-image": {
    urlToDocs: "https://tailwindcss.com/docs/background-image",
    classes: [
      "bg-none",
      "bg-gradient-to-t",
      "bg-gradient-to-tr",
      "bg-gradient-to-r",
      "bg-gradient-to-br",
      "bg-gradient-to-b",
      "bg-gradient-to-bl",
      "bg-gradient-to-l",
      "bg-gradient-to-tl",
    ],
  },

  // Borders
  "border-radius": {
    urlToDocs: "https://tailwindcss.com/docs/border-radius",
    classes: [
      "rounded-*",
      "rounded-t-*",
      "rounded-r-*",
      "rounded-b-*",
      "rounded-l-*",
    ],
  },
  "border-width": {
    urlToDocs: "https://tailwindcss.com/docs/border-width",
    classes: [
      "border",
      "border-*",
      "border-t-*",
      "border-r-*",
      "border-b-*",
      "border-l-*",
    ],
  },
  "border-color": {
    urlToDocs: "https://tailwindcss.com/docs/border-color",
    classes: ["border-*"],
  },
  "border-style": {
    urlToDocs: "https://tailwindcss.com/docs/border-style",
    classes: [
      "border-solid",
      "border-dashed",
      "border-dotted",
      "border-double",
      "border-hidden",
      "border-none",
    ],
  },
  "outline-width": {
    urlToDocs: "https://tailwindcss.com/docs/outline-width",
    classes: ["outline-0", "outline-1", "outline-2", "outline-4", "outline-8"],
  },
  "outline-color": {
    urlToDocs: "https://tailwindcss.com/docs/outline-color",
    classes: ["outline-*"],
  },
  "outline-style": {
    urlToDocs: "https://tailwindcss.com/docs/outline-style",
    classes: [
      "outline-none",
      "outline",
      "outline-dashed",
      "outline-dotted",
      "outline-double",
    ],
  },
  "outline-offset": {
    urlToDocs: "https://tailwindcss.com/docs/outline-offset",
    classes: [
      "outline-offset-0",
      "outline-offset-1",
      "outline-offset-2",
      "outline-offset-4",
      "outline-offset-8",
    ],
  },

  // Effects
  "box-shadow": {
    urlToDocs: "https://tailwindcss.com/docs/box-shadow",
    classes: [
      "shadow-sm",
      "shadow",
      "shadow-md",
      "shadow-lg",
      "shadow-xl",
      "shadow-2xl",
      "shadow-inner",
      "shadow-none",
    ],
  },
  "box-shadow-color": {
    urlToDocs: "https://tailwindcss.com/docs/box-shadow-color",
    classes: ["shadow-*"],
  },
  opacity: {
    urlToDocs: "https://tailwindcss.com/docs/opacity",
    classes: [
      "opacity-0",
      "opacity-5",
      "opacity-10",
      "opacity-15",
      "opacity-20",
      "opacity-25",
      "opacity-30",
      "opacity-35",
      "opacity-40",
      "opacity-45",
      "opacity-50",
      "opacity-55",
      "opacity-60",
      "opacity-65",
      "opacity-70",
      "opacity-75",
      "opacity-80",
      "opacity-85",
      "opacity-90",
      "opacity-95",
      "opacity-100",
    ],
  },
  "mix-blend-mode": {
    urlToDocs: "https://tailwindcss.com/docs/mix-blend-mode",
    classes: [
      "mix-blend-normal",
      "mix-blend-multiply",
      "mix-blend-screen",
      "mix-blend-overlay",
      "mix-blend-darken",
      "mix-blend-lighten",
      "mix-blend-color-dodge",
      "mix-blend-color-burn",
      "mix-blend-hard-light",
      "mix-blend-soft-light",
      "mix-blend-difference",
      "mix-blend-exclusion",
      "mix-blend-hue",
      "mix-blend-saturation",
      "mix-blend-color",
      "mix-blend-luminosity",
      "mix-blend-plus-darker",
      "mix-blend-plus-lighter",
    ],
  },
  "background-blend-mode": {
    urlToDocs: "https://tailwindcss.com/docs/background-blend-mode",
    classes: [
      "bg-blend-normal",
      "bg-blend-multiply",
      "bg-blend-screen",
      "bg-blend-overlay",
      "bg-blend-darken",
      "bg-blend-lighten",
      "bg-blend-color-dodge",
      "bg-blend-color-burn",
      "bg-blend-hard-light",
      "bg-blend-soft-light",
      "bg-blend-difference",
      "bg-blend-exclusion",
      "bg-blend-hue",
      "bg-blend-saturation",
      "bg-blend-color",
      "bg-blend-luminosity",
    ],
  },

  // Filters
  blur: {
    urlToDocs: "https://tailwindcss.com/docs/blur",
    classes: [
      "blur-none",
      "blur-sm",
      "blur",
      "blur-md",
      "blur-lg",
      "blur-xl",
      "blur-2xl",
      "blur-3xl",
    ],
  },
  brightness: {
    urlToDocs: "https://tailwindcss.com/docs/brightness",
    classes: [
      "brightness-0",
      "brightness-50",
      "brightness-75",
      "brightness-100",
      "brightness-105",
      "brightness-110",
      "brightness-125",
      "brightness-150",
      "brightness-200",
    ],
  },
  contrast: {
    urlToDocs: "https://tailwindcss.com/docs/contrast",
    classes: [
      "contrast-0",
      "contrast-50",
      "contrast-75",
      "contrast-100",
      "contrast-125",
      "contrast-150",
      "contrast-200",
    ],
  },
  "drop-shadow": {
    urlToDocs: "https://tailwindcss.com/docs/drop-shadow",
    classes: [
      "drop-shadow-sm",
      "drop-shadow",
      "drop-shadow-md",
      "drop-shadow-lg",
      "drop-shadow-xl",
      "drop-shadow-2xl",
      "drop-shadow-none",
    ],
  },
  grayscale: {
    urlToDocs: "https://tailwindcss.com/docs/grayscale",
    classes: ["grayscale-0", "grayscale"],
  },
  "hue-rotate": {
    urlToDocs: "https://tailwindcss.com/docs/hue-rotate",
    classes: [
      "rotate-0",
      "rotate-15",
      "rotate-30",
      "rotate-60",
      "rotate-90",
      "rotate-180",
    ],
  },
  invert: {
    urlToDocs: "https://tailwindcss.com/docs/invert",
    classes: ["invert-0", "invert"],
  },
  saturate: {
    urlToDocs: "https://tailwindcss.com/docs/saturate",
    classes: [
      "saturate-0",
      "saturate-50",
      "saturate-100",
      "saturate-150",
      "saturate-200",
    ],
  },
  sepia: {
    urlToDocs: "https://tailwindcss.com/docs/sepia",
    classes: ["sepia-0", "sepia"],
  },
  "backdrop-blur": {
    urlToDocs: "https://tailwindcss.com/docs/backdrop-blur",
    classes: [
      "backdrop-blur-none",
      "backdrop-blur-sm",
      "backdrop-blur",
      "backdrop-blur-md",
      "backdrop-blur-lg",
      "backdrop-blur-xl",
      "backdrop-blur-2xl",
      "backdrop-blur-3xl",
    ],
  },
  "backdrop-brightness": {
    urlToDocs: "https://tailwindcss.com/docs/backdrop-brightness",
    classes: [
      "backdrop-brightness-0",
      "backdrop-brightness-50",
      "backdrop-brightness-75",
      "backdrop-brightness-90",
      "backdrop-brightness-100",
      "backdrop-brightness-105",
      "backdrop-brightness-110",
      "backdrop-brightness-125",
      "backdrop-brightness-150",
      "backdrop-brightness-200",
    ],
  },
  "backdrop-contrast": {
    urlToDocs: "https://tailwindcss.com/docs/backdrop-contrast",
    classes: [
      "backdrop-contrast-0",
      "backdrop-contrast-50",
      "backdrop-contrast-75",
      "backdrop-contrast-100",
      "backdrop-contrast-125",
      "backdrop-contrast-150",
      "backdrop-contrast-200",
    ],
  },
  "backdrop-grayscale": {
    urlToDocs: "https://tailwindcss.com/docs/backdrop-grayscale",
    classes: ["backdrop-grayscale-0", "backdrop-grayscale"],
  },
  "backdrop-hue-rotate": {
    urlToDocs: "https://tailwindcss.com/docs/backdrop-hue-rotate",
    classes: [
      "backdrop-rotate-0",
      "backdrop-rotate-15",
      "backdrop-rotate-30",
      "backdrop-rotate-60",
      "backdrop-rotate-90",
      "backdrop-rotate-180",
    ],
  },
  "backdrop-invert": {
    urlToDocs: "https://tailwindcss.com/docs/backdrop-invert",
    classes: ["backdrop-invert-0", "backdrop-invert"],
  },
  "backdrop-opacity": {
    urlToDocs: "https://tailwindcss.com/docs/backdrop-opacity",
    classes: [
      "backdrop-opacity-0",
      "backdrop-opacity-5",
      "backdrop-opacity-10",
      "backdrop-opacity-15",
      "backdrop-opacity-20",
      "backdrop-opacity-25",
      "backdrop-opacity-30",
      "backdrop-opacity-35",
      "backdrop-opacity-40",
      "backdrop-opacity-45",
      "backdrop-opacity-50",
      "backdrop-opacity-55",
      "backdrop-opacity-60",
      "backdrop-opacity-65",
      "backdrop-opacity-70",
      "backdrop-opacity-75",
      "backdrop-opacity-80",
      "backdrop-opacity-85",
      "backdrop-opacity-90",
      "backdrop-opacity-95",
      "backdrop-opacity-100",
    ],
  },
  "backdrop-saturate": {
    urlToDocs: "https://tailwindcss.com/docs/backdrop-saturate",
    classes: [
      "backdrop-saturate-0",
      "backdrop-saturate-50",
      "backdrop-saturate-100",
      "backdrop-saturate-150",
      "backdrop-saturate-200",
    ],
  },
  "backdrop-sepia": {
    urlToDocs: "https://tailwindcss.com/docs/backdrop-sepia",
    classes: ["backdrop-sepia-0", "backdrop-sepia"],
  },

  // Tables
  "border-collapse": {
    urlToDocs: "https://tailwindcss.com/docs/border-collapse",
    classes: ["border-collapse", "border-separate"],
  },
  "border-spacing": {
    urlToDocs: "https://tailwindcss.com/docs/border-spacing",
    classes: ["border-spacing-*"],
  },
  "table-layout": {
    urlToDocs: "https://tailwindcss.com/docs/table-layout",
    classes: ["table-auto", "table-fixed"],
  },
  "caption-side": {
    urlToDocs: "https://tailwindcss.com/docs/caption-side",
    classes: ["caption-top", "caption-bottom"],
  },

  // Transitions & Animation
  "transition-property": {
    urlToDocs: "https://tailwindcss.com/docs/transition-property",
    classes: [
      "transition-none",
      "transition-all",
      "transition-colors",
      "transition-opacity",
      "transition-shadow",
      "transition-transform",
    ],
  },
  "transition-duration": {
    urlToDocs: "https://tailwindcss.com/docs/transition-duration",
    classes: [
      "duration-0",
      "duration-75",
      "duration-100",
      "duration-150",
      "duration-200",
      "duration-300",
      "duration-500",
      "duration-700",
      "duration-1000",
    ],
  },
  "transition-timing-function": {
    urlToDocs: "https://tailwindcss.com/docs/transition-timing-function",
    classes: ["ease-linear", "ease-in", "ease-out", "ease-in-out"],
  },
  "transition-delay": {
    urlToDocs: "https://tailwindcss.com/docs/transition-delay",
    classes: [
      "delay-75",
      "delay-100",
      "delay-150",
      "delay-200",
      "delay-300",
      "delay-500",
      "delay-700",
      "delay-1000",
    ],
  },
  animation: {
    urlToDocs: "https://tailwindcss.com/docs/animation",
    classes: [
      "animate-none",
      "animate-spin",
      "animate-ping",
      "animate-pulse",
      "animate-bounce",
    ],
  },

  // Transforms
  scale: {
    urlToDocs: "https://tailwindcss.com/docs/scale",
    classes: [
      "scale-0",
      "scale-50",
      "scale-75",
      "scale-90",
      "scale-95",
      "scale-100",
      "scale-105",
      "scale-110",
      "scale-125",
      "scale-150",
      "scale-x-*",
      "scale-y-*",
    ],
  },
  rotate: {
    urlToDocs: "https://tailwindcss.com/docs/rotate",
    classes: [
      "rotate-0",
      "rotate-1",
      "rotate-2",
      "rotate-3",
      "rotate-6",
      "rotate-12",
      "rotate-45",
      "rotate-90",
      "rotate-180",
    ],
  },
  translate: {
    urlToDocs: "https://tailwindcss.com/docs/translate",
    classes: ["translate-x-*", "translate-y-*"],
  },
  skew: {
    urlToDocs: "https://tailwindcss.com/docs/skew",
    classes: ["skew-x-*", "skew-y-*"],
  },
  "transform-origin": {
    urlToDocs: "https://tailwindcss.com/docs/transform-origin",
    classes: [
      "origin-center",
      "origin-top",
      "origin-top-right",
      "origin-right",
      "origin-bottom-right",
      "origin-bottom",
      "origin-bottom-left",
      "origin-left",
      "origin-top-left",
    ],
  },

  // Interactivity
  "accent-color": {
    urlToDocs: "https://tailwindcss.com/docs/accent-color",
    classes: ["accent-*"],
  },
  appearance: {
    urlToDocs: "https://tailwindcss.com/docs/appearance",
    classes: ["appearance-none", "appearance-auto"],
  },
  cursor: {
    urlToDocs: "https://tailwindcss.com/docs/cursor",
    classes: ["cursor-*"],
  },
  "caret-color": {
    urlToDocs: "https://tailwindcss.com/docs/caret-color",
    classes: ["caret-*"],
  },
  "pointer-events": {
    urlToDocs: "https://tailwindcss.com/docs/pointer-events",
    classes: ["pointer-events-none", "pointer-events-auto"],
  },
  resize: {
    urlToDocs: "https://tailwindcss.com/docs/resize",
    classes: ["resize-none", "resize-y", "resize-x", "resize"],
  },
  "scroll-behavior": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-behavior",
    classes: ["scroll-auto", "scroll-smooth"],
  },
  "scroll-margin": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-margin",
    classes: ["scroll-m-*"],
  },
  "scroll-margin-top": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-margin",
    classes: ["scroll-mt-*"],
  },
  "scroll-margin-right": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-margin",
    classes: ["scroll-mr-*"],
  },
  "scroll-margin-bottom": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-margin",
    classes: ["scroll-mb-*"],
  },
  "scroll-margin-left": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-margin",
    classes: ["scroll-ml-*"],
  },
  "scroll-margin-inline-start": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-margin",
    classes: ["scroll-ms-*"],
  },
  "scroll-margin-inline-end": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-margin",
    classes: ["scroll-me-*"],
  },
  "scroll-padding": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-padding",
    classes: ["scroll-p-*"],
  },
  "scroll-padding-top": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-padding",
    classes: ["scroll-pt-*"],
  },
  "scroll-padding-right": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-padding",
    classes: ["scroll-pr-*"],
  },
  "scroll-padding-bottom": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-padding",
    classes: ["scroll-pb-*"],
  },
  "scroll-padding-left": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-padding",
    classes: ["scroll-pl-*"],
  },
  "scroll-padding-inline-start": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-padding",
    classes: ["scroll-ps-*"],
  },
  "scroll-padding-inline-end": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-padding",
    classes: ["scroll-pe-*"],
  },
  "scroll-snap-align": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-snap-align",
    classes: ["snap-start", "snap-end", "snap-center", "snap-align-none"],
  },
  "scroll-snap-stop": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-snap-stop",
    classes: ["snap-normal", "snap-always"],
  },
  "scroll-snap-type": {
    urlToDocs: "https://tailwindcss.com/docs/scroll-snap-type",
    classes: [
      "snap-none",
      "snap-x",
      "snap-y",
      "snap-both",
      "snap-mandatory",
      "snap-proximity",
    ],
  },
  "touch-action": {
    urlToDocs: "https://tailwindcss.com/docs/touch-action",
    classes: [
      "touch-auto",
      "touch-none",
      "touch-pan-x",
      "touch-pan-left",
      "touch-pan-right",
      "touch-pan-y",
      "touch-pan-up",
      "touch-pan-down",
      "touch-pinch-zoom",
      "touch-manipulation",
    ],
  },
  "user-select": {
    urlToDocs: "https://tailwindcss.com/docs/user-select",
    classes: ["select-none", "select-text", "select-all", "select-auto"],
  },
  "will-change": {
    urlToDocs: "https://tailwindcss.com/docs/will-change",
    classes: [
      "will-change-auto",
      "will-change-scroll",
      "will-change-contents",
      "will-change-transform",
    ],
  },

  // SVG
  fill: {
    urlToDocs: "https://tailwindcss.com/docs/fill",
    classes: ["fill-*"],
  },
  stroke: {
    urlToDocs: "https://tailwindcss.com/docs/stroke",
    classes: ["stroke-*"],
  },
  "stroke-width": {
    urlToDocs: "https://tailwindcss.com/docs/stroke-width",
    classes: ["stroke-0", "stroke-1", "stroke-2"],
  },

  // Accessibility
  "forced-color-adjust": {
    urlToDocs: "https://tailwindcss.com/docs/forced-color-adjust",
    classes: ["forced-color-adjust-auto", "forced-color-adjust-none"],
  },
};
