// DOM Elements
const loadingScreen = document.getElementById("loading-screen")
const loadingBar = document.getElementById("loading-bar")
const loadingGlow = document.getElementById("loading-glow")
const loadingPercentage = document.getElementById("loading-percentage")
const navbar = document.getElementById("navbar")
const hamburger = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobile-menu")
const cursor = document.getElementById("cursor")
const cursorRing = document.getElementById("cursor-ring")
const interactiveShapes = document.getElementById("interactive-shapes")
const animatedBoxes = document.getElementById("animated-boxes")
const contactForm = document.getElementById("contact-form")
const currentYear = document.getElementById("current-year")

// Loading Screen
let progress = 0
const loadingDuration = 2000 // 2 seconds
const loadingInterval = 50 // Update every 50ms

function updateLoading() {
  const increment = 100 / (loadingDuration / loadingInterval)
  progress += increment

  if (progress >= 100) {
    progress = 100
    setTimeout(() => {
      loadingScreen.classList.add("hidden")
      document.body.style.overflow = "auto"
    }, 500)
  }

  loadingBar.style.width = `${progress}%`
  loadingGlow.style.width = `${progress}%`
  loadingPercentage.textContent = `${Math.round(progress)}%`

  if (progress < 100) {
    setTimeout(updateLoading, loadingInterval)
  }
}

// Start loading animation
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflow = "hidden"
  updateLoading()
})

// Custom Cursor
let mouseX = 0
let mouseY = 0
let cursorX = 0
let cursorY = 0
let cursorRingX = 0
let cursorRingY = 0

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})

function animateCursor() {
  // Smooth cursor movement
  cursorX += (mouseX - cursorX) * 0.5
  cursorY += (mouseY - cursorY) * 0.5
  cursorRingX += (mouseX - cursorRingX) * 0.3
  cursorRingY += (mouseY - cursorRingY) * 0.3

  cursor.style.transform = `translate(${cursorX - 12}px, ${cursorY - 12}px)`
  cursorRing.style.transform = `translate(${cursorRingX - 20}px, ${cursorRingY - 20}px)`

  requestAnimationFrame(animateCursor)
}

animateCursor()

// Cursor hover effects
document.addEventListener("mouseover", (e) => {
  if (
    e.target.tagName === "A" ||
    e.target.tagName === "BUTTON" ||
    e.target.closest("a") ||
    e.target.closest("button")
  ) {
    cursor.style.transform += " scale(1.5)"
    cursorRing.style.transform += " scale(1.5)"
  }
})

document.addEventListener("mouseout", (e) => {
  if (
    e.target.tagName === "A" ||
    e.target.tagName === "BUTTON" ||
    e.target.closest("a") ||
    e.target.closest("button")
  ) {
    cursor.style.transform = cursor.style.transform.replace(" scale(1.5)", "")
    cursorRing.style.transform = cursorRing.style.transform.replace(" scale(1.5)", "")
  }
})

// Navigation
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  mobileMenu.classList.toggle("active")
})

// Close mobile menu when clicking on links
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    mobileMenu.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Interactive Shapes
function createInteractiveShapes() {
  const shapes = [
    { type: "circle", size: 50 },
    { type: "square", size: 40 },
    { type: "triangle", size: 60 },
    { type: "circle", size: 30 },
    { type: "square", size: 50 },
    { type: "triangle", size: 40 },
  ]

  shapes.forEach((shape, index) => {
    const element = document.createElement("div")
    element.className = `shape ${shape.type}`
    element.style.width = `${shape.size}px`
    element.style.height = `${shape.size}px`
    element.style.left = `${Math.random() * 100}%`
    element.style.top = `${Math.random() * 100}%`
    interactiveShapes.appendChild(element)
  })
}

// Mouse movement effect for shapes
document.addEventListener("mousemove", (e) => {
  const shapes = interactiveShapes.children
  Array.from(shapes).forEach((shape, index) => {
    const speed = (index + 1) * 0.5
    const x = (window.innerWidth - e.clientX * speed) / 100
    const y = (window.innerHeight - e.clientY * speed) / 100
    shape.style.transform = `translate(${x}px, ${y}px)`
  })
})

// Animated Boxes
function createAnimatedBoxes() {
  const boxCount = Math.floor((window.innerWidth * window.innerHeight) / 80000) + 2

  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement("div")
    box.className = "animated-box"

    const size = Math.random() * 20 + 10
    const x = (Math.random() * 0.6 + 0.2) * window.innerWidth
    const y = (Math.random() * 0.6 + 0.2) * window.innerHeight
    const delay = Math.random() * 5

    box.style.width = `${size}px`
    box.style.height = `${size}px`
    box.style.left = `${x}px`
    box.style.top = `${y}px`
    box.style.animationDelay = `${delay}s`

    animatedBoxes.appendChild(box)
  }
}

// Regenerate boxes on resize
window.addEventListener("resize", () => {
  animatedBoxes.innerHTML = ""
  createAnimatedBoxes()
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")

      // Animate skill bars
      if (entry.target.classList.contains("skill-category")) {
        const skillFills = entry.target.querySelectorAll(".skill-fill")
        skillFills.forEach((fill) => {
          const width = fill.getAttribute("data-width")
          setTimeout(() => {
            fill.style.width = `${width}%`
          }, 200)
        })
      }
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  // Add animation classes to elements
  document.querySelectorAll(".service-card, .project-card, .skill-category").forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })

  // Initialize components
  createInteractiveShapes()
  createAnimatedBoxes()

  // Set current year
  currentYear.textContent = new Date().getFullYear()
})

// Contact Form
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Here you would typically send the data to a server
  // For now, we'll just show an alert
  alert("Thank you for your message! I'll get back to you soon.")

  // Reset form
  contactForm.reset()
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroContent = document.querySelector(".hero-content")

  if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Add stagger animation to service cards and project cards
function addStaggerAnimation() {
  const serviceCards = document.querySelectorAll(".service-card")
  const projectCards = document.querySelectorAll(".project-card")

  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })

  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })
}

// Initialize stagger animations
document.addEventListener("DOMContentLoaded", addStaggerAnimation)

// Smooth reveal animations
function revealOnScroll() {
  const reveals = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible")
    }
  })
}

window.addEventListener("scroll", revealOnScroll)

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply throttling to scroll events
window.addEventListener("scroll", throttle(revealOnScroll, 10))

// Add loading state to buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (this.type === "submit") {
      this.style.opacity = "0.7"
      this.style.pointerEvents = "none"

      setTimeout(() => {
        this.style.opacity = "1"
        this.style.pointerEvents = "auto"
      }, 2000)
    }
  })
})

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hamburger.classList.remove("active")
    mobileMenu.classList.remove("active")
  }
})

// Preload critical images
function preloadImages() {
  const images = ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-69dycok1tWUrjh0VA4bIB19grsFa5b.jpeg"]

  images.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

// Initialize preloading
document.addEventListener("DOMContentLoaded", preloadImages)
