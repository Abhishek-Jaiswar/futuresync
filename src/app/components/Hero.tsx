'use client'

import React, { useRef, useState, useEffect } from 'react'
import {  BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'

const Hero = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="inline-block">
          <h2 className="uppercase py-1.5 px-3 text-neutral-600 bg-gradient-to-r from-violet-100 to-blue-100/15 border-l-4 border-violet-500 text-sm font-semibold">
            Best of this week
          </h2>
        </div>
        <div className="py-6">
          <p className="text-sm font-semibold text-teal-400 flex items-center gap-2">
            Branding
            <span className="flex items-center text-neutral-600">
              <BsDot className="text-xl font-bold text-neutral-600" />
              1 min ago
            </span>
          </p>
        </div>
        <div className="max-w-2xl">
          <h1 className="text-4xl text-neutral-900 font-bold mb-4">
            Corporate identity design that ensures brand recognition
          </h1>
          <p className="text-neutral-600 text-sm font-semibold">
            Consistent visual elements (logos, color schemes etc).
          </p>
        </div>
        <div className="py-6">
          <button className="px-6 py-2 rounded-full bg-neutral-800 text-white font-semibold text-sm hover:bg-neutral-700 transition-colors">
            Read full article
          </button>
        </div>
      </div>
      <div className="w-full h-1 bg-neutral-300 mb-8"></div>
      <div className="relative">
        {showLeftArrow && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-9 h-9 flex items-center justify-center rounded-full shadow-md"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <BiLeftArrowAlt />
          </button>
        )}
        {showRightArrow && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-9 h-9 flex items-center justify-center rounded-full shadow-md"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <BiRightArrowAlt />
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {BestOfWeek.map((post) => (
            <div key={post.id} className="flex-shrink-0 w-72 h-48">
              <div className="p-6">
                <p className="text-sm font-semibold text-teal-400 flex items-center gap-2 mb-2">
                  {post.tag}
                  <span className="flex items-center text-neutral-600">
                    <BsDot className="text-xl font-bold text-neutral-600" />
                    {post.postedOn}
                  </span>
                </p>
                <h3 className="text-xl text-neutral-800 font-semibold">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const BestOfWeek = [
  {
    id: 1,
    tag: "Web Technologies",
    title: "Innovative Strategies for Building Brand Identity",
    postedOn: "2 days ago"
  },
  {
    id: 2,
    tag: "Web Development",
    title: "Mastering Responsive Design for All Devices",
    postedOn: "1 minute ago"
  },
  {
    id: 3,
    tag: "JavaScript",
    title: "Exploring the Power of Modern JavaScript Frameworks",
    postedOn: "3 hours ago"
  },
  {
    id: 4,
    tag: "UI/UX Design",
    title: "Creating User-Centered Experiences with Effective Design",
    postedOn: "5 days ago"
  },
  {
    id: 5,
    tag: "Backend Development",
    title: "Integrating APIs Seamlessly in Scalable Applications",
    postedOn: "10 minutes ago"
  },
  {
    id: 6,
    tag: "Database Management",
    title: "Understanding NoSQL vs SQL for Optimized Storage Solutions",
    postedOn: "7 hours ago"
  },
  {
    id: 7,
    tag: "Cloud Computing",
    title: "Leveraging Cloud Services for Enhanced Performance",
    postedOn: "1 day ago"
  },
  {
    id: 8,
    tag: "Artificial Intelligence",
    title: "Revolutionizing Industries with AI-Powered Solutions",
    postedOn: "4 days ago"
  },
  {
    id: 9,
    tag: "DevOps",
    title: "Streamlining Development with Continuous Integration and Deployment",
    postedOn: "8 hours ago"
  },
  {
    id: 10,
    tag: "Cybersecurity",
    title: "Protecting Digital Assets in an Increasingly Connected World",
    postedOn: "30 minutes ago"
  }
]

export default Hero

