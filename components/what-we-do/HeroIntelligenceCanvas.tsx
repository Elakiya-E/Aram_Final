"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
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
  "Digital Products",
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

    function getDimensions() {
      const parent = canvas?.parentElement;
      const w = parent?.clientWidth || window.innerWidth || 1200;
      const h = parent?.clientHeight || 650;
      return { w, h };
    }

    let { w: cssWidth, h: cssHeight } = getDimensions();
    const dpr = window.devicePixelRatio || 1;
    let width = (canvas.width = cssWidth * dpr);
    let height = (canvas.height = cssHeight * dpr);

    const nodes: Node[] = [];
    const signals: Signal[] = [];

    function initNodes() {
      nodes.length = 0;
      const hubAngles = [-100, -35, 30, 85, 145, 210];
      const centerX = width * 0.5;
      const centerY = height * 0.46;
      const rx = Math.min(width * 0.42, 480 * dpr);
      const ry = Math.min(height * 0.38, 220 * dpr);

      // 6 Primary Hubs positioned in an elliptical ring framing the content
      for (let i = 0; i < 6; i++) {
        const rad = (hubAngles[i] * Math.PI) / 180;
        const x = centerX + Math.cos(rad) * rx;
        const y = centerY + Math.sin(rad) * ry;
        nodes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.25 * dpr,
          vy: (Math.random() - 0.5) * 0.25 * dpr,
          radius: 9 * dpr,
          isHub: true,
          hubIndex: i,
          hubLabel: HUB_LABELS[i],
          pulsePhase: i * 1.05,
        });
      }

      // 26 Interstitial Synaptic Nodes
      const totalNodes = 32;
      for (let i = 6; i < totalNodes; i++) {
        nodes.push({
          x: (0.05 + Math.random() * 0.9) * width,
          y: (0.05 + Math.random() * 0.9) * height,
          vx: (Math.random() - 0.5) * 0.45 * dpr,
          vy: (Math.random() - 0.5) * 0.45 * dpr,
          radius: (3 + Math.random() * 2.5) * dpr,
          isHub: false,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    }

    initNodes();

    function handleResize() {
      if (!canvas) return;
      const dims = getDimensions();
      cssWidth = dims.w;
      cssHeight = dims.h;
      width = canvas.width = cssWidth * dpr;
      height = canvas.height = cssHeight * dpr;
      initNodes();
    }

    window.addEventListener("resize", handleResize);

    // Spawn traveling signal packets
    function spawnSignal() {
      if (signals.length > 10 || nodes.length < 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      let bestTo = -1;
      let bestDist = 220 * dpr;

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
          speed: 0.012 + Math.random() * 0.012,
          color,
        });
      }
    }

    let lastSpawn = 0;

    function render(timestamp: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Spawn periodic pulses
      if (!reducedMotion && timestamp - lastSpawn > 450) {
        spawnSignal();
        lastSpawn = timestamp;
      }

      const maxConnectDist = 180 * dpr;

      // Draw Network Lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const ratio = 1 - dist / maxConnectDist;
            const isConnectedToActiveHub =
              activeHub !== undefined &&
              ((nodes[i].isHub && nodes[i].hubIndex === activeHub) ||
                (nodes[j].isHub && nodes[j].hubIndex === activeHub));

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            if (isConnectedToActiveHub) {
              ctx.strokeStyle = `rgba(139, 92, 246, ${Math.min(0.85, ratio * 1.5)})`;
              ctx.lineWidth = 2 * dpr;
            } else {
              // Visible, elegant lavender-charcoal lines
              ctx.strokeStyle = `rgba(139, 92, 246, ${ratio * 0.32})`;
              ctx.lineWidth = 1 * dpr;
            }
            ctx.stroke();
          }
        }
      }

      // Draw Traveling Signals (Signal Pulses)
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

          // Glowing light packet
          ctx.beginPath();
          ctx.arc(cx, cy, 4.5 * dpr, 0, Math.PI * 2);
          ctx.fillStyle = sig.color;
          ctx.shadowColor = sig.color;
          ctx.shadowBlur = 12 * dpr;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Draw Mouse Connections
      if (mouseRef.current.active) {
        const mx = mouseRef.current.x * dpr;
        const my = mouseRef.current.y * dpr;
        const mouseRadius = 180 * dpr;

        for (let i = 0; i < nodes.length; i++) {
          const dx = nodes[i].x - mx;
          const dy = nodes[i].y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const alpha = (1 - dist / mouseRadius) * 0.55;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 1.4 * dpr;
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 25 * dpr) node.vx = Math.abs(node.vx);
          if (node.x > width - 25 * dpr) node.vx = -Math.abs(node.vx);
          if (node.y < 25 * dpr) node.vy = Math.abs(node.vy);
          if (node.y > height - 25 * dpr) node.vy = -Math.abs(node.vy);

          node.pulsePhase += 0.035;
        }

        const isHub = node.isHub;
        const isCurrentActive =
          isHub && activeHub !== undefined && node.hubIndex === activeHub;

        if (isHub) {
          const hubColor =
            node.hubIndex !== undefined ? HUB_COLORS[node.hubIndex] : "#8b5cf6";
          const pulseScale = 1 + Math.sin(node.pulsePhase) * 0.2;

          // Outer halo
          ctx.beginPath();
          ctx.arc(
            node.x,
            node.y,
            (isCurrentActive ? 22 : 15) * dpr * pulseScale,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = isCurrentActive
            ? `${hubColor}38`
            : `${hubColor}18`;
          ctx.fill();

          // Hub ring
          ctx.beginPath();
          ctx.arc(
            node.x,
            node.y,
            (isCurrentActive ? 10 : 8) * dpr,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = "#ffffff";
          ctx.strokeStyle = hubColor;
          ctx.lineWidth = 2.5 * dpr;
          ctx.shadowColor = hubColor;
          ctx.shadowBlur = isCurrentActive ? 14 * dpr : 6 * dpr;
          ctx.fill();
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Center solid pip
          ctx.beginPath();
          ctx.arc(node.x, node.y, 4 * dpr, 0, Math.PI * 2);
          ctx.fillStyle = hubColor;
          ctx.fill();

          // Text pill label
          if (node.hubLabel) {
            ctx.font = `650 ${11 * dpr}px Inter, sans-serif`;
            ctx.textAlign = "center";
            ctx.fillStyle = isCurrentActive ? "#14121a" : "#4b4657";
            ctx.fillText(node.hubLabel, node.x, node.y + 22 * dpr);
          }
        } else {
          // Regular connector node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(139, 92, 246, 0.75)";
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
      const clickX = (e.clientX - rect.left) * dpr;
      const clickY = (e.clientY - rect.top) * dpr;
      const hitRadius = 30 * dpr;

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
