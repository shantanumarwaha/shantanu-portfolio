"use client";

import { useEffect, useRef } from "react";

const NOISE_DATA_URI =
  "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22/></svg>";

/**
 * Ambient rotating globe (New Delhi -> New York flight arc) rendered on a
 * <canvas>. Ported from a static design-handoff prototype; the math below
 * (projection, contour marching-squares, route waypoints) is intentionally
 * kept close to that reference rather than restructured.
 */
export default function JourneyGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Below the lg breakpoint the hero text card takes the full width, leaving
    // no clear space for the globe to sit beside it without overlapping the
    // copy, so skip the (fairly heavy) animation setup entirely there.
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const getCtx = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      const cw = Math.max(1, Math.round(w * dpr));
      const ch = Math.max(1, Math.round(h * dpr));
      if (canvas.width !== cw || canvas.height !== ch) {
        canvas.width = cw;
        canvas.height = ch;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return ctx;
    };

    const TAU = Math.PI * 2;
    const rad = (d: number) => (d * Math.PI) / 180;
    const GOLD = "212,177,116";

    // ---- simplified continent outlines [lon,lat] ----
    const CONT: Record<string, number[][]> = {
      eurasia: [[-6,36],[-9,39],[-9,43],[-2,44],[-4,48],[0,49],[3,52],[8,54],[6,58],[5,62],[12,66],[20,70],[28,71],[45,68],[60,70],[75,73],[90,75],[110,74],[140,73],[160,70],[180,68],[170,63],[160,60],[150,59],[140,54],[135,48],[131,43],[128,40],[122,39],[121,37],[122,32],[121,28],[115,23],[110,21],[108,16],[109,11],[105,9],[100,8],[104,1],[99,4],[98,8],[97,16],[94,18],[91,22],[87,21],[81,16],[80,13],[77,8],[73,15],[73,20],[70,23],[67,25],[61,25],[57,25],[57,22],[52,17],[43,13],[43,20],[38,28],[35,31],[36,36],[30,37],[26,40],[24,40],[19,42],[13,45],[9,44],[3,43],[0,40],[-2,37],[-6,36]],
      africa: [[-6,35],[10,37],[20,32],[25,32],[32,31],[34,28],[37,22],[43,11],[51,12],[48,5],[42,-1],[40,-10],[35,-18],[33,-26],[26,-34],[18,-35],[13,-23],[12,-16],[9,-1],[9,4],[3,6],[-4,5],[-8,4],[-13,8],[-17,15],[-16,21],[-11,28],[-9,32],[-6,35]],
      namerica: [[-168,66],[-166,60],[-158,58],[-152,58],[-146,60],[-140,59],[-135,57],[-131,53],[-128,51],[-124,48],[-124,43],[-124,40],[-122,37],[-121,35],[-118,34],[-117,32.5],[-114,30],[-110,24],[-106,23],[-103,20],[-97,16],[-94,16],[-92,15],[-90,14],[-87,13],[-85,10],[-83,9],[-81,8],[-78,8],[-81,9],[-83,11],[-86,15],[-88,16],[-88,18],[-87,21],[-90,21],[-91,18],[-94,18],[-97,20],[-97,26],[-95,29],[-91,29],[-89,29],[-85,30],[-84,30],[-82,28],[-81,25],[-80,27],[-81,31],[-79,33],[-76,35],[-75,37],[-74,39],[-74,40.7],[-71,42],[-70,43],[-67,45],[-60,47],[-65,50],[-79,52],[-82,55],[-79,60],[-78,62],[-85,68],[-95,68],[-110,68],[-125,70],[-133,69],[-141,70],[-156,71],[-168,66]],
      samerica: [[-77,8],[-71,11],[-64,10],[-52,5],[-50,0],[-44,-2],[-35,-6],[-39,-14],[-41,-22],[-48,-28],[-53,-33],[-58,-39],[-62,-41],[-65,-45],[-68,-50],[-69,-54],[-66,-55],[-73,-52],[-75,-47],[-74,-42],[-73,-37],[-71,-30],[-70,-23],[-70,-18],[-76,-14],[-79,-8],[-81,-5],[-80,-2],[-78,1],[-77,4],[-77,8]],
      greenland: [[-45,60],[-38,65],[-25,70],[-20,74],[-22,78],[-32,82],[-45,83],[-58,80],[-53,72],[-50,66],[-45,60]],
      australia: [[113,-22],[122,-18],[130,-12],[137,-12],[142,-11],[146,-19],[150,-22],[153,-27],[153,-32],[150,-38],[146,-39],[140,-38],[137,-35],[132,-32],[125,-33],[118,-35],[115,-34],[114,-27],[113,-22]],
      britain: [[-5,50],[1,51],[0,53],[-3,55],[-5,57],[-8,57],[-6,54],[-5,50]],
      japan: [[130,31],[132,34],[136,35],[140,36],[142,40],[141,43],[144,44],[141,39],[137,37],[133,34],[130,31]],
      madagascar: [[44,-16],[50,-15],[50,-25],[45,-25],[43,-20],[44,-16]],
    };

    // ---- rasterize continents into an equirectangular land mask ----
    const MW = 1024;
    const MH = 512;
    const mc = document.createElement("canvas");
    mc.width = MW;
    mc.height = MH;
    const mxx = mc.getContext("2d")!;
    mxx.fillStyle = "#000";
    mxx.fillRect(0, 0, MW, MH);
    mxx.fillStyle = "#fff";
    const PX = (lon: number) => ((lon + 180) / 360) * MW;
    const PY = (lat: number) => ((90 - lat) / 180) * MH;
    for (const poly of Object.values(CONT)) {
      mxx.beginPath();
      poly.forEach((p, i) => {
        const sx = PX(p[0]);
        const sy = PY(p[1]);
        if (i) mxx.lineTo(sx, sy);
        else mxx.moveTo(sx, sy);
      });
      mxx.closePath();
      mxx.fill();
    }
    const md = mxx.getImageData(0, 0, MW, MH).data;
    const mask = new Uint8Array(MW * MH);
    for (let i = 0; i < MW * MH; i++) mask[i] = md[i * 4] > 128 ? 1 : 0;
    const isLand = (lon: number, lat: number) => {
      let px = (((lon + 180) / 360) * MW) | 0;
      const py = (((90 - lat) / 180) * MH) | 0;
      if (px < 0) px += MW;
      if (px >= MW) px -= MW;
      if (py < 0 || py >= MH) return 0;
      return mask[py * MW + px];
    };

    const llv = (latD: number, lonD: number) => {
      const la = rad(latD);
      const lo = rad(lonD);
      return {
        x: Math.cos(la) * Math.cos(lo),
        y: Math.sin(la),
        z: Math.cos(la) * Math.sin(lo),
      };
    };
    type Vec3 = { x: number; y: number; z: number };
    const rotY = (p: Vec3, a: number) => {
      const c = Math.cos(a);
      const s = Math.sin(a);
      return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
    };
    const rotX = (p: Vec3, a: number) => {
      const c = Math.cos(a);
      const s = Math.sin(a);
      return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
    };

    // densified coastlines for crisp borders
    const coasts: Vec3[][] = [];
    for (const poly of Object.values(CONT)) {
      const pts: Vec3[] = [];
      for (let i = 0; i < poly.length; i++) {
        const A = poly[i];
        const B = poly[(i + 1) % poly.length];
        const steps = Math.max(
          1,
          Math.ceil(Math.max(Math.abs(B[0] - A[0]), Math.abs(B[1] - A[1])) / 3),
        );
        for (let k = 0; k < steps; k++) {
          const f = k / steps;
          pts.push(llv(A[1] + (B[1] - A[1]) * f, A[0] + (B[0] - A[0]) * f));
        }
      }
      pts.push(llv(poly[0][1], poly[0][0]));
      coasts.push(pts);
    }

    // hand-drawn topographic contour lines: marching squares over a height field -> crisp vector strokes
    const HF = (lon: number, lat: number) =>
      Math.sin(lon * 0.34 + Math.cos(lat * 0.3) * 1.6) +
      Math.sin(lat * 0.4 + Math.cos(lon * 0.24) * 1.6) * 0.9 +
      Math.sin(lon * 0.19 + lat * 0.21) * 0.7;
    const contourSegs: { a: Vec3; b: Vec3 }[] = [];
    const gs = 2.5;
    const lerpE = (a: number, b: number, va: number, vb: number, L: number) =>
      a + ((b - a) * (L - va)) / (vb - va);
    for (let lon = -180; lon < 180; lon += gs)
      for (let lat = -84; lat < 84; lat += gs) {
        const lo2 = lon + gs;
        const la2 = lat + gs;
        const v00 = HF(lon, lat);
        const v10 = HF(lo2, lat);
        const v11 = HF(lo2, la2);
        const v01 = HF(lon, la2);
        for (let L = -2.3; L <= 2.3; L += 0.75) {
          const p: number[][] = [];
          if (v00 < L !== v10 < L) p.push([lerpE(lon, lo2, v00, v10, L), lat]);
          if (v10 < L !== v11 < L) p.push([lo2, lerpE(lat, la2, v10, v11, L)]);
          if (v01 < L !== v11 < L) p.push([lerpE(lon, lo2, v01, v11, L), la2]);
          if (v00 < L !== v01 < L) p.push([lon, lerpE(lat, la2, v00, v01, L)]);
          if (
            p.length === 2 &&
            isLand((p[0][0] + p[1][0]) / 2, (p[0][1] + p[1][1]) / 2)
          )
            contourSegs.push({
              a: llv(p[0][1], p[0][0]),
              b: llv(p[1][1], p[1][0]),
            });
        }
      }

    // cities + route the long way (Middle East & Europe)
    const CITIES = [
      { v: llv(28.6, 77.2), name: "NEW DELHI" },
      { v: llv(40.7, -74.0), name: "NEW YORK" },
    ];
    const wp = [
      [77.2, 28.6],
      [62, 30],
      [48, 36],
      [33, 42],
      [18, 47],
      [3, 50],
      [-18, 52],
      [-40, 49],
      [-60, 43],
      [-74, 40.7],
    ];
    const cr = (a: number, b: number, c: number, d: number, t: number) => {
      const t2 = t * t;
      const t3 = t2 * t;
      return (
        0.5 *
        (2 * b +
          (-a + c) * t +
          (2 * a - 5 * b + 4 * c - d) * t2 +
          (-a + 3 * b - 3 * c + d) * t3)
      );
    };
    const ext = [wp[0], ...wp, wp[wp.length - 1]];
    const SEG = 26;
    const route: Vec3[] = [];
    for (let s = 1; s < ext.length - 2; s++)
      for (let k = 0; k < SEG; k++) {
        const t = k / SEG;
        const lon = cr(ext[s - 1][0], ext[s][0], ext[s + 1][0], ext[s + 2][0], t);
        const lat = cr(ext[s - 1][1], ext[s][1], ext[s + 1][1], ext[s + 2][1], t);
        route.push(llv(lat, lon));
      }
    route.push(llv(40.7, -74.0));
    const RN = route.length - 1;
    for (let i = 0; i <= RN; i++) {
      const g = i / RN;
      const lift = 1 + 0.1 * Math.sin(Math.PI * g);
      route[i] = { x: route[i].x * lift, y: route[i].y * lift, z: route[i].z * lift };
    }

    // background flow lines (curvy)
    const LN = 13;
    const seed = Array.from({ length: LN }, () => ({
      f1: 1.0 + Math.random() * 1.1,
      f2: 2.2 + Math.random() * 1.4,
      f3: 4.0 + Math.random() * 2.0,
      p1: Math.random() * TAU,
      p2: Math.random() * TAU,
      p3: Math.random() * TAU,
      amp: 0.9 + Math.random() * 0.8,
      drift: 0.04 + Math.random() * 0.05,
    }));

    let Lx = -0.4;
    let Ly = -0.45;
    let Lz = 0.8;
    const Ln = Math.hypot(Lx, Ly, Lz);
    Lx /= Ln;
    Ly /= Ln;
    Lz /= Ln;

    const start = performance.now();
    const yawStart = rad(-48);
    const yawEnd = rad(-122);
    const pitch = rad(19);
    const ROT = 0.26; // slow rotation: India-front -> US-front
    // Frozen frame for prefers-reduced-motion: fully US-facing, cyc = 1.
    const frozenT = Math.PI / ROT;

    let raf = 0;
    let gc: HTMLCanvasElement | null = null;
    let gD = 0;
    let gimg: ImageData | null = null;

    const draw = (now: number) => {
      const ctx = getCtx();
      if (!ctx) {
        raf = requestAnimationFrame(draw);
        return;
      }
      const t = prefersReducedMotion
        ? frozenT
        : Math.max(0, (now - start) / 1000);
      // eased rotation that settles with the United States facing the viewer, then drifts back
      const cyc = 0.5 - 0.5 * Math.cos(t * ROT);
      const yaw = yawStart + (yawEnd - yawStart) * cyc;
      const R = Math.min(w, h) * 0.3;
      const cx = w * 0.66;
      const cy = h * 0.52;
      ctx.clearRect(0, 0, w, h);

      // ---- background flow lines ----
      for (let i = 0; i < LN; i++) {
        const s = seed[i];
        const baseY = (i / (LN - 1)) * (h * 1.1) - h * 0.05;
        ctx.beginPath();
        let stt = false;
        const step = Math.max(8, w / 120);
        for (let x = -20; x <= w + 20; x += step) {
          const nx = x / w;
          const amp = h * 0.085 * s.amp;
          const y =
            baseY +
            Math.sin(nx * TAU * s.f1 + s.p1 + t * s.drift) * amp +
            Math.sin(nx * TAU * s.f2 + s.p2 - t * s.drift * 1.2) * amp * 0.55 +
            Math.sin(nx * TAU * s.f3 + s.p3 + t * s.drift * 0.6) * amp * 0.3;
          if (!stt) {
            ctx.moveTo(x, y);
            stt = true;
          } else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(150,166,196,${0.05 + 0.035 * (0.5 + 0.5 * Math.sin(i + t * 0.2))})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      // ---- atmosphere hue halo ----
      const glow = ctx.createRadialGradient(cx, cy, R * 0.85, cx, cy, R * 1.65);
      glow.addColorStop(0, "rgba(96,146,182,0.20)");
      glow.addColorStop(0.55, "rgba(120,150,180,0.07)");
      glow.addColorStop(1, "rgba(96,146,182,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.65, 0, TAU);
      ctx.fill();

      // ---- shaded globe with topographic map-lines (per-pixel, offscreen) ----
      const D = Math.min(340, Math.max(2, Math.round(2 * R)));
      if (!gc || gD !== D) {
        gc = document.createElement("canvas");
        gc.width = D;
        gc.height = D;
        gD = D;
        gimg = gc.getContext("2d")!.createImageData(D, D);
      }
      const gctx = gc.getContext("2d")!;
      const img = gimg!;
      const data = img.data;
      const half = D / 2;
      for (let py = 0; py < D; py++) {
        for (let px = 0; px < D; px++) {
          const u = (px + 0.5) / half - 1;
          const v = (py + 0.5) / half - 1;
          const rr = u * u + v * v;
          const idx = (py * D + px) * 4;
          if (rr > 1) {
            data[idx + 3] = 0;
            continue;
          }
          const qz = Math.sqrt(1 - rr);
          const qx = -u;
          const qy = -v;
          let shade = qx * Lx + qy * Ly + qz * Lz;
          if (shade < 0) shade = 0;
          const limb = 0.52 + 0.48 * qz;
          const bsh = (0.5 + 0.55 * shade) * limb;
          data[idx] = 22 * bsh;
          data[idx + 1] = 34 * bsh;
          data[idx + 2] = 54 * bsh;
          data[idx + 3] = 255;
        }
      }
      gctx.putImageData(img, 0, 0);
      ctx.drawImage(gc, cx - R, cy - R, 2 * R, 2 * R);

      const proj = (p: Vec3) => {
        let q = rotY(p, yaw);
        q = rotX(q, pitch);
        return { sx: cx - q.x * R, sy: cy - q.y * R, z: q.z };
      };

      // ---- crisp coastline borders (clipped to globe) ----
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R - 0.5, 0, TAU);
      ctx.clip();
      // crisp hand-drawn topographic contour lines over the continents
      ctx.beginPath();
      for (const s of contourSegs) {
        const pa = proj(s.a);
        if (pa.z <= 0.03) continue;
        const pb = proj(s.b);
        if (pb.z <= 0.03) continue;
        ctx.moveTo(pa.sx, pa.sy);
        ctx.lineTo(pb.sx, pb.sy);
      }
      ctx.strokeStyle = "rgba(170,192,218,0.22)";
      ctx.lineWidth = 0.8;
      ctx.stroke();
      for (const line of coasts) {
        ctx.beginPath();
        let cs = false;
        for (const p of line) {
          const pr = proj(p);
          if (pr.z <= 0.02) {
            cs = false;
            continue;
          }
          if (!cs) {
            ctx.moveTo(pr.sx, pr.sy);
            cs = true;
          } else ctx.lineTo(pr.sx, pr.sy);
        }
        ctx.strokeStyle = "rgba(176,196,224,0.5)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

      // ---- gold rim ----
      const shimmer = 0.85 + 0.15 * Math.sin(t * 0.7);
      ctx.beginPath();
      ctx.arc(cx, cy, R + 0.5, 0, TAU);
      ctx.strokeStyle = `rgba(${GOLD},${0.55 * shimmer})`;
      ctx.lineWidth = 1.4;
      ctx.shadowColor = `rgba(${GOLD},0.5)`;
      ctx.shadowBlur = 15;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // ---- journey arc ----
      const prog = (t * 0.12) % 1.5;
      const head = Math.min(1, prog);
      ctx.lineCap = "round";
      ctx.beginPath();
      let started = false;
      for (let i = 0; i <= RN; i++) {
        const pr = proj(route[i]);
        if (pr.z <= -0.15) {
          started = false;
          continue;
        }
        if (!started) {
          ctx.moveTo(pr.sx, pr.sy);
          started = true;
        } else ctx.lineTo(pr.sx, pr.sy);
      }
      ctx.strokeStyle = `rgba(${GOLD},0.2)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      let prev: { sx: number; sy: number; z: number } | null = null;
      for (let i = 0; i <= RN; i++) {
        const seg = i / RN;
        if (seg > head) break;
        const pr = proj(route[i]);
        if (prev && pr.z > -0.15 && prev.z > -0.15) {
          const vis = (pr.z + prev.z) / 2;
          const a = Math.max(0.15, Math.min(1, vis + 0.5));
          ctx.beginPath();
          ctx.moveTo(prev.sx, prev.sy);
          ctx.lineTo(pr.sx, pr.sy);
          ctx.strokeStyle = `rgba(${GOLD},${0.9 * a})`;
          ctx.lineWidth = 1.7;
          ctx.shadowColor = `rgba(${GOLD},0.6)`;
          ctx.shadowBlur = 7;
          ctx.stroke();
        }
        prev = pr;
      }
      ctx.shadowBlur = 0;
      if (prog <= 1.001) {
        const idx = Math.min(RN, Math.floor(head * RN));
        const hp = proj(route[idx]);
        if (hp.z > -0.1) {
          const hg = ctx.createRadialGradient(hp.sx, hp.sy, 0, hp.sx, hp.sy, 10);
          hg.addColorStop(0, "rgba(255,236,196,0.95)");
          hg.addColorStop(1, `rgba(${GOLD},0)`);
          ctx.fillStyle = hg;
          ctx.beginPath();
          ctx.arc(hp.sx, hp.sy, 10, 0, TAU);
          ctx.fill();
        }
      }

      // ---- city markers + labels ----
      const pulse = 0.5 + 0.5 * Math.sin(t * 2);
      for (const c of CITIES) {
        const pr = proj(c.v);
        if (pr.z <= 0.02) continue;
        let dx = pr.sx - cx;
        let dy = pr.sy - cy;
        const dl = Math.hypot(dx, dy) || 1;
        dx /= dl;
        dy /= dl;
        const ex = pr.sx + dx * 30;
        const ey = pr.sy + dy * 30;
        const rightSide = dx >= 0;
        const tx = ex + (rightSide ? 9 : -9);
        ctx.beginPath();
        ctx.moveTo(pr.sx + dx * 8, pr.sy + dy * 8);
        ctx.lineTo(ex, ey);
        ctx.lineTo(tx, ey);
        ctx.strokeStyle = `rgba(${GOLD},0.5)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        const rr = 4.5 + pulse * 5.5;
        const g = ctx.createRadialGradient(pr.sx, pr.sy, 0, pr.sx, pr.sy, rr + 9);
        g.addColorStop(0, `rgba(${GOLD},0.6)`);
        g.addColorStop(1, `rgba(${GOLD},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(pr.sx, pr.sy, rr + 9, 0, TAU);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(pr.sx, pr.sy, rr, 0, TAU);
        ctx.strokeStyle = `rgba(${GOLD},${0.6 * (1 - pulse)})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(pr.sx, pr.sy, 3, 0, TAU);
        ctx.fillStyle = "rgba(255,242,210,0.98)";
        ctx.fill();
        ctx.textAlign = rightSide ? "left" : "right";
        ctx.textBaseline = "middle";
        try {
          (ctx as unknown as { letterSpacing: string }).letterSpacing = "2.5px";
        } catch {
          /* not supported in this browser */
        }
        ctx.font = '600 15px "Helvetica Neue", Arial, sans-serif';
        ctx.fillStyle = "rgba(238,240,244,0.95)";
        ctx.fillText(c.name, tx, ey);
        try {
          (ctx as unknown as { letterSpacing: string }).letterSpacing = "0px";
        } catch {
          /* not supported in this browser */
        }
      }

      if (!prefersReducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    };
    // paint the first frame synchronously so it renders even before the tab is focused
    draw(performance.now());

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(130%_120%_at_50%_32%,_#12161d_0%,_#0a0c11_44%,_#06070a_100%)]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 hidden h-full w-full lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(95% 95% at 50% 54%, rgba(0,0,0,0) 54%, rgba(4,5,7,0.6) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{ backgroundImage: `url('${NOISE_DATA_URI}')` }}
      />
    </div>
  );
}
