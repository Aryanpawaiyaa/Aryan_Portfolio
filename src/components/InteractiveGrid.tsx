import React, { useEffect, useRef } from "react";

interface InteractiveGridProps {
  showGrid?: boolean;
  showDots?: boolean;
  glowStrength?: number;
  accentColor?: "white" | "amber" | "emerald" | "violet";
  themeMode?: "dark" | "light";
}

export default function InteractiveGrid({
  showGrid = true,
  showDots = true,
  glowStrength = 0.4,
  accentColor = "white",
  themeMode = "dark",
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const step = 45; // grid spacing
    const warpRadius = 220; // radius of distortion
    const maxWarpShift = 14; // max shift in pixels

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      let accentRgb = themeMode === "light" ? "15, 23, 42" : "255, 255, 255";
      if (accentColor === "amber") accentRgb = "245, 158, 11";
      else if (accentColor === "emerald") accentRgb = themeMode === "light" ? "5, 150, 105" : "16, 185, 129";
      else if (accentColor === "violet") accentRgb = themeMode === "light" ? "124, 58, 237" : "139, 92, 246";

      const opMultiplier = themeMode === "light" ? 3.5 : 1;

      // 1. Draw subtle interactive spotlight radial glow around the cursor
      if (mouse.x !== -1000 && mouse.y !== -1000 && glowStrength > 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          320
        );
        gradient.addColorStop(0, `rgba(${accentRgb}, ${0.08 * glowStrength * opMultiplier})`);
        gradient.addColorStop(0.4, `rgba(${accentRgb}, ${0.025 * glowStrength * opMultiplier})`);
        gradient.addColorStop(1, `rgba(${accentRgb}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 320, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw vertical and horizontal grid lines with 3D lens warping
      if (showGrid) {
        ctx.strokeStyle = `rgba(${accentRgb}, ${0.015 * opMultiplier})`;
        ctx.lineWidth = 1;

        // Draw vertical warped lines
        for (let x = 0; x < width + step; x += step) {
          ctx.beginPath();
          let first = true;
          // Sample points along the line for smooth curvature
          for (let y = 0; y <= height + 20; y += 20) {
            let px = x;
            let py = y;

            if (mouse.x !== -1000 && mouse.y !== -1000) {
              const dx = mouse.x - x;
              const dy = mouse.y - y;
              const dist = Math.hypot(dx, dy);

              if (dist < warpRadius) {
                // Cosine distribution for smooth warp boundary
                const force = (1 + Math.cos((dist * Math.PI) / warpRadius)) / 2;
                const shift = force * force * maxWarpShift;
                // Push line point away from mouse
                px -= (dx / dist) * shift;
              }
            }

            if (first) {
              ctx.moveTo(px, py);
              first = false;
            } else {
              ctx.lineTo(px, py);
            }
          }
          ctx.stroke();
        }

        // Draw horizontal warped lines
        for (let y = 0; y < height + step; y += step) {
          ctx.beginPath();
          let first = true;
          for (let x = 0; x <= width + 20; x += 20) {
            let px = x;
            let py = y;

            if (mouse.x !== -1000 && mouse.y !== -1000) {
              const dx = mouse.x - x;
              const dy = mouse.y - y;
              const dist = Math.hypot(dx, dy);

              if (dist < warpRadius) {
                const force = (1 + Math.cos((dist * Math.PI) / warpRadius)) / 2;
                const shift = force * force * maxWarpShift;
                // Push line point away from mouse
                py -= (dy / dist) * shift;
              }
            }

            if (first) {
              ctx.moveTo(px, py);
              first = false;
            } else {
              ctx.lineTo(px, py);
            }
          }
          ctx.stroke();
        }
      }

      // 3. Draw intersection dots with cursor proximity highlighting & warping
      if (showDots) {
        for (let x = 0; x < width + step; x += step) {
          for (let y = 0; y < height + step; y += step) {
            let px = x;
            let py = y;

            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const distance = Math.hypot(dx, dy);

            let dotSize = 1;
            let opacity = 0.05 * opMultiplier;

            if (distance < warpRadius) {
              const factor = (warpRadius - distance) / warpRadius;
              dotSize = 1 + factor * 2.2;
              opacity = 0.05 * opMultiplier + factor * 0.35;

              // Distort dot position identically to the lines
              const force = (1 + Math.cos((distance * Math.PI) / warpRadius)) / 2;
              const shift = force * force * maxWarpShift;
              px -= (dx / distance) * shift;
              py -= (dy / distance) * shift;
            }

            ctx.fillStyle = `rgba(${accentRgb}, ${opacity})`;
            ctx.beginPath();
            ctx.arc(px, py, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [showGrid, showDots, glowStrength, accentColor, themeMode]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-1 h-full w-full opacity-70"
    />
  );
}
