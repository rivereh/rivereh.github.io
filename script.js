// Projects data
const projects = [
  {
    id: 1,
    title: 'CourseExpo',
    desc: 'A collaborative VR/desktop learning environment built in Unity for the University of Washington.',
    coverImage: './public/expo_cover.png',
  },
  {
    id: 2,
    title: 'Game Tracker',
    desc: 'A full-stack social network to track your completed games.',
    coverImage: './public/gametracker_cover.png',
    sliderImages: [
      './public/gametracker_cover.png',
      './public/gametracker_1.png',
      './public/gametracker_2.png',
    ],
    techIcons: [
      'devicon:typescript',
      'vscode-icons:file-type-mongo',
      'skill-icons:expressjs-dark',
      'skill-icons:react-dark',
      'vscode-icons:file-type-node',
      'vscode-icons:file-type-tailwind',
    ],
  },
  {
    id: 4,
    title: 'CV Builder',
    desc: 'Built with React and Material UI. Create a resume with instant results. Utilized a CI/CD approach while developing.',
    coverImage: './public/cvbuilder_cover.png',
  },
  {
    id: 5,
    title: 'Overflow',
    desc: 'An FPS free for all game made in Unity. Uses the UNET muliplayer solution. Players fight against eachother to earn the most points.',
    coverImage: './public/fps_cover.gif',
  },
  {
    id: 7,
    title: 'Top Down Shooter Game',
    desc: 'A wave based zombie survival game built in Unity. Features a point collection system that enables players to purchase new weapons and upgrades, scaling difficulty, and leaderboards.',
    coverImage: './public/zombies_cover_2.png',
    techIcons: ['skill-icons:unity-dark', 'devicon:csharp'],
  },
  {
    id: 8,
    title: 'Co-op Puzzle Game',
    desc: 'A cooperative multiplayer puzzle game built in Unity with Photon networking and Dissonance voice chat',
    coverImage: './public/multi_cover.png',
  },
]

// DOM content loaded event
document.addEventListener('DOMContentLoaded', function () {
  // Load projects
  loadProjects()

  // Initialize back to top button
  initBackToTop()
})

// Load projects function
function loadProjects() {
  const projectsContainer = document.getElementById('projects-container')

  projects.forEach((project) => {
    const projectCard = createProjectCard(project)
    projectsContainer.appendChild(projectCard)
  })

  // Initialize card animations after projects are loaded
  initCardAnimations()
}

// Create project card function
function createProjectCard(project) {
  const card = document.createElement('div')
  card.className = 'card'

  const cardImg = document.createElement('div')
  cardImg.className = 'card-img'
  cardImg.style.backgroundImage = `url(${project.coverImage})`

  const cardText = document.createElement('div')
  cardText.className = 'card-text'

  const title = document.createElement('h2')
  title.textContent = project.title

  const description = document.createElement('p')
  description.textContent = project.desc

  cardText.appendChild(title)
  cardText.appendChild(description)

  // Add tech icons if available
  if (project.techIcons) {
    const techContainer = document.createElement('div')
    techContainer.className = 'tech-icons'
    techContainer.style.cssText =
      'display: flex; justify-content: center; gap: 0.5rem; margin-top: 1rem; font-size: 1.5rem;'

    project.techIcons.forEach((iconName) => {
      const icon = document.createElement('iconify-icon')
      icon.setAttribute('icon', iconName)
      techContainer.appendChild(icon)
    })

    cardText.appendChild(techContainer)
  }

  card.appendChild(cardImg)
  card.appendChild(cardText)

  return card
}

// Back to top button functionality
function initBackToTop() {
  const backToTopButton = document.getElementById('back-to-top')

  function scrollDownFunction() {
    if (window.scrollY > 1000) {
      backToTopButton.classList.remove('hide')
    } else {
      backToTopButton.classList.add('hide')
    }
  }

  function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', scrollDownFunction)
  backToTopButton.addEventListener('click', backToTop)
}

// Smooth scrolling for navigation links
document.addEventListener('click', function (e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault()

    const targetId = e.target.getAttribute('href')
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
})

// Add some interactive animations
function initCardAnimations() {
  // This will be called after projects are loaded
  const cards = document.querySelectorAll('.card')

  cards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-5px)'
    })

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)'
    })
  })
}
