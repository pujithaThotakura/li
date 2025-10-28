import { useState } from "react";

export const useZoom = () => {
  const [zoomLevel, setZoomLevel] = useState<"day" | "week" | "month">("day");

  const zoomIn = () => {
    setZoomLevel((prev) => (prev === "month" ? "week" : "day"));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => (prev === "day" ? "week" : "month"));
  };

  const pixelsPerDay =
    zoomLevel === "day" ? 40 : zoomLevel === "week" ? 80 : 120;

  return {
    zoomLevel,
    zoomIn,
    zoomOut,
    pixelsPerDay,
  };
};
