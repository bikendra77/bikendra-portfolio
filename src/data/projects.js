// Central project data.
// Edit project details here. Every card reads from this file.

import movieBookingPreview from '../../images/Screenshot 2026-10-15 150047.png'

export const projects = [
  {
    id: 'student-management-system',
    number: '01',
    name: 'Online Student Management System',
    category: 'Academic Project · PHP',
    description:
      "A PHP and MySQL web application built around student-record administration — part of my coursework in web-based data management systems. I wasn't able to confirm the current contents of the linked repository, so treat the feature list as a work in progress rather than a finished spec.",
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    repo: 'https://github.com/bikendra77/student-management-system',
    repoReachable: false,
    demo: null,
    status: 'In development',
  },
  {
    id: 'movie-ticket-booking',
    number: '02',
    name: 'Online Movie Ticket Booking System',
    category: 'Full-Stack Project',
    description:
      'A movie ticket booking system for browsing movies and showtimes, selecting seats, and managing reservations, with an admin dashboard for cinema operations.',
    tags: ['React', 'Vite', 'Express', 'MongoDB'],
    repo: 'https://github.com/bikendra77/movie-booking-system',
    repoReachable: true,
    preview: movieBookingPreview,
    demo: null,
    repoLabel: 'GitHub',
  },
  {
    id: 'online-food-delivery',
    number: '03',
    name: 'Online Food Delivery System',
    category: 'Academic Project · PHP',
    description:
      'A PHP-based food ordering platform with customer-facing menus, an admin panel, order checkout, and Khalti payment integration for the Nepali market — built on top of a MySQL database.',
    tags: ['PHP', 'MySQL', 'SCSS', 'JavaScript'],
    repo: 'https://github.com/bikendra77/onlinefoodphp',
    repoReachable: true,
    demo: null,
    status: 'Built on a forked base project',
  },
  {
    id: 'spotify-website',
    number: '04',
    name: 'Spotify-Inspired Website',
    category: 'Front-End Project · JavaScript',
    description:
      'A Spotify-inspired music player interface built with plain HTML, CSS, and JavaScript — playable songs organized into playlists and albums, recreating the core listening experience in the browser.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/bikendra77/Spotify-website',
    repoReachable: true,
    demo: null,
    status: 'Front-end clone project',
  },
]

export const allRepositoriesUrl = 'https://github.com/bikendra77?tab=repositories'
