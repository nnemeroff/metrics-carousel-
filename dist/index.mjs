// src/index.tsx
import { useEffect, useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const numSlides = useMemo(() => {
    return items.length > 0 ? Math.ceil(items.length / itemsPerSlide) : 1;
  }, [items.length, itemsPerSlide]);
  useEffect(() => {
    if (numSlides <= 1) return;
    const id = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % numSlides);
    }, autoRotateMs);
    return () => window.clearInterval(id);
  }, [numSlides, autoRotateMs]);
  const goToSlide = (index) => setCurrentSlide(index);
  return /* @__PURE__ */ jsx("div", { className: className != null ? className : "", children: /* @__PURE__ */ jsx("div", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    heading && /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: heading }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex transition-transform duration-500 ease-in-out",
          style: { transform: `translateX(-${currentSlide * 100}%)` },
          children: Array.from({ length: numSlides }).map((_, slideIndex) => /* @__PURE__ */ jsx("div", { className: "w-full flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 ${itemsPerSlide === 2 ? "md:grid-cols-2" : ""} ${itemsPerSlide === 3 ? "md:grid-cols-3" : ""} ${itemsPerSlide === 4 ? "md:grid-cols-4" : ""} gap-6`, children: items.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((it) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2", style: { fontSize: "14px" }, children: it.title }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2 mb-3", children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-gray-900", style: { fontSize: `${valueFontSizePx}px` }, dangerouslySetInnerHTML: { __html: it.value } }),
              it.trend && it.trendValue && /* @__PURE__ */ jsxs("span", { className: `text-sm font-medium ${getTrendColor(it.trend)}`, children: [
                getTrendIcon(it.trend),
                " ",
                it.trendValue.replace(/^[+-]/, "")
              ] })
            ] }),
            it.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: it.description })
          ] }, it.id)) }) }, slideIndex))
        }
      ) }),
      numSlides > 1 && /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-6 gap-2", children: Array.from({ length: numSlides }).map((_, idx) => /* @__PURE__ */ jsx(
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
export {
  KeyMetricsCarousel,
  index_default as default
};
//# sourceMappingURL=index.mjs.map