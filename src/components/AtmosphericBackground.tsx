import { useEffect, useRef } from "react";

interface AtmosphericBackgroundProps {
  accentColor?: "white" | "amber" | "emerald" | "violet";
}

export default function AtmosphericBackground({ accentColor = "white" }: AtmosphericBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position
    const mouse = { x: -1000, y: -1000, radius: 160 };
    let lastMousePos = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Spawn trail micro-dust particles on cursor movement
      const dist = Math.hypot(e.clientX - lastMousePos.x, e.clientY - lastMousePos.y);
      if (dist > 8 && trailParticles.length < 180) {
        const spawnCount = Math.min(3, Math.floor(dist / 12));
        for (let i = 0; i < spawnCount; i++) {
          trailParticles.push({
            x: e.clientX + (Math.random() - 0.5) * 12,
            y: e.clientY + (Math.random() - 0.5) * 12,
            size: Math.random() * 0.8 + 0.3,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3 - 0.15, // slight upward float
            life: 75,
            maxLife: 75,
          });
        }
        lastMousePos.x = e.clientX;
        lastMousePos.y = e.clientY;
      }
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

    // Main background particles setup
    const particleCount = Math.min(65, Math.floor((width * height) / 28000));
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      baseOpacity: number;
      angle: number;
      angleSpeed: number;
      pulsePhase: number;
      pulseSpeed: number;
    }> = [];

    // Interactive mouse trail dust particles setup
    const trailParticles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      maxLife: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      const baseOpacity = Math.random() * 0.22 + 0.05;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.4,
        speedX: (Math.random() - 0.5) * 0.12,
        speedY: (Math.random() - 0.5) * 0.12,
        opacity: baseOpacity,
        baseOpacity,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: (Math.random() - 0.5) * 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.01,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      let accentRgb = "255, 255, 255";
      if (accentColor === "amber") accentRgb = "245, 158, 11";
      else if (accentColor === "emerald") accentRgb = "16, 185, 129";
      else if (accentColor === "violet") accentRgb = "139, 92, 246";

      // 1. Draw dynamic constellation network lines between close particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i];
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 95) {
            // Faint network connection lines
            const lineOpacity = (1 - dist / 95) * 0.055 * Math.min(pi.opacity, pj.opacity);
            ctx.strokeStyle = `rgba(${accentRgb}, ${lineOpacity})`;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.stroke();
          }
        }
      }

      // 2. Update and draw main background particles
      particles.forEach((p) => {
        // Apply sine wave wave wiggle (brownian noise) and depth speed parallax
        p.angle += p.angleSpeed;
        const driftParallaxMultiplier = p.size * 0.85; // larger particles float slightly faster
        
        p.x += (p.speedX + Math.sin(p.angle) * 0.05) * driftParallaxMultiplier;
        p.y += (p.speedY + Math.cos(p.angle) * 0.05) * driftParallaxMultiplier;

        // Loop canvas boundaries
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Mouse attraction/repulsion haptic force field
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.hypot(dx, dy);

        // Apply gentle pulsing breathing effect to opacity
        p.pulsePhase += p.pulseSpeed;
        const pulseOffset = Math.sin(p.pulsePhase) * 0.04;

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          // Soft magnetic push away from the cursor
          p.x -= (dx / distance) * force * 1.35;
          p.y -= (dy / distance) * force * 1.35;
          p.opacity = Math.min(0.65, p.baseOpacity + pulseOffset + force * 0.38);
        } else {
          // Return to base pulsing opacity
          const targetOpacity = p.baseOpacity + pulseOffset;
          if (p.opacity > targetOpacity) {
            p.opacity -= 0.008;
          } else if (p.opacity < targetOpacity) {
            p.opacity += 0.008;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentRgb}, ${p.opacity})`;
        ctx.shadowBlur = p.size * 3.5;
        ctx.shadowColor = `rgba(${accentRgb}, 0.35)`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      });

      // 3. Update and draw mouse trail dust particles
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const tp = trailParticles[i];
        tp.x += tp.speedX;
        tp.y += tp.speedY;
        tp.life--;

        if (tp.life <= 0) {
          trailParticles.splice(i, 1);
          continue;
        }

        const opacity = (tp.life / tp.maxLife) * 0.28;
        ctx.fillStyle = `rgba(${accentRgb}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(tp.x, tp.y, tp.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-2 h-full w-full opacity-60"
    />
  );
}
