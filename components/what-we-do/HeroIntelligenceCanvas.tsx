"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  isHub: boolean;
  hubIndex?: number;
  hubLabel?: string;
  pulsePhase: number;
}

interface Signal {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

const HUB_LABELS = [
  "AI Solutions",
  "Automation",
  "Software",
  "Data & Analytics",
  "Zoho Systems",
  "Cloud & Managed",
];

const HUB_COLORS = [
  "#8b5cf6", // AI
  "#6366f1", // Automation
  "#3b82f6", // Software
  "#10b981", // Data
  "#f59e0b", // Zoho
  "#ec4899", // Cloud
];

export function HeroIntelligenceCanvas({
  activeHub,
  onHubClick,
}: {
  activeHub?: number;
  onHubClick?: (index: number) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    }

    window.addEventListener("resize", handleResize);

    // Initialize network nodes
    const nodeCount = 32;
    const nodes: Node[] = [];
    const signals: Signal[] = [];

    // Position the 6 Hub nodes in a balanced organic constellation
    const hubAngles = [-90, -30, 30, 90, 150, 210];
    const hubDistance = Math.min(width, height) * 0.32;
    const centerX = width * 0.55;
    const centerY = height * 0.48;

    for (let i = 0; i < 6; i++) {
      const rad = (hubAngles[i] * Math.PI) / 180;
      const x = centerX + Math.cos(rad) * hubDistance;
      const y = centerY + Math.sin(rad) * hubDistance;
      nodes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: 7 * window.devicePixelRatio,
        baseRadius: 7 * window.devicePixelRatio,
        isHub: true,
        hubIndex: i,
        hubLabel: HUB_LABELS[i],
        pulsePhase: i * 1.1,
      });
    }

    // Fill with synaptic connector nodes
    for (let i = 6; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: (2 + Math.random() * 2) * window.devicePixelRatio,
        baseRadius: (2 + Math.random() * 2) * window.devicePixelRatio,
        isHub: false,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Function to spawn traveling signals
    function spawnSignal() {
      if (signals.length > 8) return;
      const from = Math.floor(Math.random() * nodes.length);
      // Find a close neighbor
      let bestTo = -1;
      let bestDist = 180 * window.devicePixelRatio;
      for (let j = 0; j < nodes.length; j++) {
        if (j === from) continue;
        const dx = nodes[j].x - nodes[from].x;
        const dy = nodes[j].y - nodes[from].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < bestDist) {
          bestDist = dist;
          bestTo = j;
        }
      }
      if (bestTo !== -1) {
        const isFromHub = nodes[from].isHub && nodes[from].hubIndex !== undefined;
        const color = isFromHub
          ? HUB_COLORS[nodes[from].hubIndex!]
          : "#8b5cf6";
        signals.push({
          fromNode: from,
          toNode: bestTo,
          progress: 0,
          speed: 0.008 + Math.random() * 0.008,
          color,
        });
      }
    }

    let lastSpawn = 0;

    function render(timestamp: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Spawn periodic signal pulses
      if (!reducedMotion && timestamp - lastSpawn > 600) {
        spawnSignal();
        lastSpawn = timestamp;
      }

      // Update and draw connections
      const maxConnectDist = 140 * window.devicePixelRatio;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.32;
            const isConnectedToActiveHub =
              activeHub !== undefined &&
              ((nodes[i].isHub && nodes[i].hubIndex === activeHub) ||
                (nodes[j].isHub && nodes[j].hubIndex === activeHub));

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            if (isConnectedToActiveHub) {
              ctx.strokeStyle = `rgba(139, 92, 246, ${Math.min(1, alpha * 2.5)})`;
              ctx.lineWidth = 1.6 * window.devicePixelRatio;
            } else {
              ctx.strokeStyle = `rgba(100, 90, 130, ${alpha * 0.6})`;
              ctx.lineWidth = 0.8 * window.devicePixelRatio;
            }
            ctx.stroke();
          }
        }
      }

      // Update and draw traveling signals
      if (!reducedMotion) {
        for (let s = signals.length - 1; s >= 0; s--) {
          const sig = signals[s];
          sig.progress += sig.speed;
          if (sig.progress >= 1) {
            signals.splice(s, 1);
            continue;
          }

          const from = nodes[sig.fromNode];
          const to = nodes[sig.toNode];
          if (!from || !to) continue;

          const cx = from.x + (to.x - from.x) * sig.progress;
          const cy = from.y + (to.y - from.y) * sig.progress;

          // Draw packet glow
          ctx.beginPath();
          ctx.arc(cx, cy, 3.5 * window.devicePixelRatio, 0, Math.PI * 2);
          ctx.fillStyle = sig.color;
          ctx.shadowColor = sig.color;
          ctx.shadowBlur = 10 * window.devicePixelRatio;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      }

      // Draw mouse interaction connections
      if (mouseRef.current.active) {
        const mx = mouseRef.current.x * window.devicePixelRatio;
        const my = mouseRef.current.y * window.devicePixelRatio;
        const mouseRadius = 160 * window.devicePixelRatio;

        for (let i = 0; i < nodes.length; i++) {
          const dx = nodes[i].x - mx;
          const dy = nodes[i].y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const alpha = (1 - dist / mouseRadius) * 0.45;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
            ctx.lineWidth = 1 * window.devicePixelRatio;
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Soft bounce off boundaries
          if (node.x < 20) node.vx = Math.abs(node.vx);
          if (node.x > width - 20) node.vx = -Math.abs(node.vx);
          if (node.y < 20) node.vy = Math.abs(node.vy);
          if (node.y > height - 20) node.vy = -Math.abs(node.vy);

          node.pulsePhase += 0.03;
        }

        const isHub = node.isHub;
        const isCurrentActive =
          isHub && activeHub !== undefined && node.hubIndex === activeHub;

        if (isHub) {
          const hubColor =
            node.hubIndex !== undefined ? HUB_COLORS[node.hubIndex] : "#8b5cf6";
          const pulseScale = 1 + Math.sin(node.pulsePhase) * 0.15;

          // Outer halo
          ctx.beginPath();
          ctx.arc(
            node.x,
            node.y,
            (isCurrentActive ? 18 : 12) * window.devicePixelRatio * pulseScale,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = isCurrentActive
            ? `${hubColor}33`
            : "rgba(139, 92, 246, 0.12)";
          ctx.fill();

          // Hub border ring
          ctx.beginPath();
          ctx.arc(
            node.x,
            node.y,
            (isCurrentActive ? 9 : 6.5) * window.devicePixelRatio,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = "#ffffff";
          ctx.strokeStyle = hubColor;
          ctx.lineWidth = 2 * window.devicePixelRatio;
          ctx.fill();
          ctx.stroke();

          // Center dot
          ctx.beginPath();
          ctx.arc(
            node.x,
            node.y,
            3 * window.devicePixelRatio,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = hubColor;
          ctx.fill();

          // Hub Label tag
          if (node.hubLabel) {
            ctx.font = `600 ${10.5 * window.devicePixelRatio}px Inter, sans-serif`;
            ctx.fillStyle = isCurrentActive ? "#14121a" : "#615e68";
            ctx.textAlign = "center";
            ctx.fillText(
              node.hubLabel,
              node.x,
              node.y + 19 * window.devicePixelRatio
            );
          }
        } else {
          // Regular connector node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(139, 92, 246, 0.65)";
          ctx.fill();
        }
      }

      if (!reducedMotion) {
        animId = requestAnimationFrame(render);
      }
    }

    animId = requestAnimationFrame(render);

    function onMouseMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    }

    function onMouseLeave() {
      mouseRef.current.active = false;
    }

    function onClick(e: MouseEvent) {
      if (!canvas || !onHubClick) return;
      const rect = canvas.getBoundingClientRect();
      const clickX = (e.clientX - rect.left) * window.devicePixelRatio;
      const clickY = (e.clientY - rect.top) * window.devicePixelRatio;
      const hitRadius = 24 * window.devicePixelRatio;

      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].isHub && nodes[i].hubIndex !== undefined) {
          const dx = nodes[i].x - clickX;
          const dy = nodes[i].y - clickY;
          if (Math.sqrt(dx * dx + dy * dy) < hitRadius) {
            onHubClick(nodes[i].hubIndex!);
            break;
          }
        }
      }
    }

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", onMouseMove);
        canvas.removeEventListener("mouseleave", onMouseLeave);
        canvas.removeEventListener("click", onClick);
      }
    };
  }, [reducedMotion, activeHub, onHubClick]);

  return (
    <div className="intelligence-canvas-container" aria-hidden="true">
      <canvas ref={canvasRef} className="intelligence-canvas" />
    </div>
  );
}
