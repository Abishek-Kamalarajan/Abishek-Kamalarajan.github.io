import { useEffect, useRef } from 'react'

// Animated node-network — points connected like a geospatial mesh / triangulation.
export default function GeoCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf
    let w, h
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const LINK_DIST = 150
    let nodes = []
    const mouse = { x: -999, y: -999 }

    function resize() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio
      h = canvas.height = canvas.offsetHeight * devicePixelRatio
    }

    function nodeCount() {
      const area = (w / devicePixelRatio) * (h / devicePixelRatio)
      return Math.max(50, Math.min(150, Math.round(area / 13000)))
    }

    function seed() {
      nodes = Array.from({ length: nodeCount() }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, w, h)
      const max = LINK_DIST * devicePixelRatio

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < max) {
            const alpha = (1 - d / max) * 0.35
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`
            ctx.lineWidth = devicePixelRatio
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        const mdx = n.x - mouse.x * devicePixelRatio
        const mdy = n.y - mouse.y * devicePixelRatio
        const near = Math.hypot(mdx, mdy) < 130 * devicePixelRatio
        ctx.beginPath()
        ctx.arc(n.x, n.y, (near ? 3 : 1.6) * devicePixelRatio, 0, Math.PI * 2)
        ctx.fillStyle = near ? 'rgba(103, 232, 249, 0.95)' : 'rgba(34, 211, 238, 0.6)'
        if (near) {
          ctx.shadowColor = 'rgba(34, 211, 238, 0.9)'
          ctx.shadowBlur = 12 * devicePixelRatio
        }
        ctx.fill()
        ctx.shadowBlur = 0
      }

      raf = requestAnimationFrame(step)
    }

    function onMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    function onResize() {
      resize()
      seed()
    }

    resize()
    seed()
    if (reduce) {
      step()
      cancelAnimationFrame(raf)
    } else {
      step()
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas id="bg-canvas" ref={ref} aria-hidden="true" />
}
