'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`
    }

    const animate = () => {
      followerX += (mouseX - followerX - 18) * 0.12
      followerY += (mouseY - followerY - 18) * 0.12
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()

    // Scale on hover over interactive elements
    const onEnter = () => {
      cursor.style.transform += ' scale(2)'
      follower.style.width = '60px'
      follower.style.height = '60px'
      follower.style.opacity = '0.2'
    }
    const onLeave = () => {
      follower.style.width = '36px'
      follower.style.height = '36px'
      follower.style.opacity = '0.4'
    }

    document.querySelectorAll('a, button, [style*="cursor"]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
