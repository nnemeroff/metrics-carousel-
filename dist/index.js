"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  KeyMetricsCarousel: () => KeyMetricsCarousel,
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function getTrendIcon(trend) {
  if (trend === "up") return "\u2197";
  if (trend === "down") return "\u2198";
  return "";
}
function getTrendColor(trend) {
  if (trend === "up") return "text-green-600";
  if (trend === "down") return "text-red-600";
  return "text-gray-600";
}
var KeyMetricsCarousel = ({
  items,
  itemsPerSlide = 3,
  autoRotateMs = 7e3,
  heading = "Key Commission Insights",
  className,
  valueFontSizePx = 30
}) => {
  const [currentSlide, setCurrentSlide] = (0, import_react.useState)(0);
  const numSlides = (0, import_react.useMemo)(() => {
    return items.length > 0 ? Math.ceil(items.length / itemsPerSlide) : 1;
  }, [items.length, itemsPerSlide]);
  (0, import_react.useEffect)(() => {
    if (numSlides <= 1) return;
    const id = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % numSlides);
    }, autoRotateMs);
    return () => window.clearInterval(id);
  }, [numSlides, autoRotateMs]);
  const goToSlide = (index) => setCurrentSlide(index);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: className != null ? className : "", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-white shadow-sm", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    heading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: heading }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: "flex transition-transform duration-500 ease-in-out",
          style: { transform: `translateX(-${currentSlide * 100}%)` },
          children: Array.from({ length: numSlides }).map((_, slideIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `grid grid-cols-1 ${itemsPerSlide === 2 ? "md:grid-cols-2" : ""} ${itemsPerSlide === 3 ? "md:grid-cols-3" : ""} ${itemsPerSlide === 4 ? "md:grid-cols-4" : ""} gap-6`, children: items.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2", style: { fontSize: "14px" }, children: it.title }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-baseline gap-2 mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-bold text-gray-900", style: { fontSize: `${valueFontSizePx}px` }, dangerouslySetInnerHTML: { __html: it.value } }),
              it.trend && it.trendValue && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: `text-sm font-medium ${getTrendColor(it.trend)}`, children: [
                getTrendIcon(it.trend),
                " ",
                it.trendValue.replace(/^[+-]/, "")
              ] })
            ] }),
            it.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-gray-600", children: it.description })
          ] }, it.id)) }) }, slideIndex))
        }
      ) }),
      numSlides > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex justify-center mt-6 gap-2", children: Array.from({ length: numSlides }).map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          onClick: () => goToSlide(idx),
          className: `w-2 h-2 rounded-full transition-colors ${currentSlide === idx ? "bg-blue-600" : "bg-gray-300"}`,
          "aria-label": `Go to slide ${idx + 1}`
        },
        idx
      )) })
    ] })
  ] }) }) });
};
var index_default = KeyMetricsCarousel;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  KeyMetricsCarousel
});
//# sourceMappingURL=index.js.map