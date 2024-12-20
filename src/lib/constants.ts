import Link from 'next/link'

export const colors = {
    primary: '#20B2AA',
    background: '#E0F2F1',
    accent: '#FF6B6B',
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
    }
  } as const
  
  export const sidebarItems = [
    { name: 'Dashboard', href: '', icon: 'Home' },
    // { name: 'Explore', icon: 'Compass' },
    { name: 'Book session', href: '/book-session/tutorId', icon: 'PlusSquare' },
    { name: 'Manage', href: '', icon: 'Settings' },
    { name: 'Notifications', href: '',  icon: 'Bell' }
  ] as const
  
  