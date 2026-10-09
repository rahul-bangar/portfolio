/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a16',
        bg2: '#0e0f24',
        surface: 'rgba(255,255,255,0.04)',
        surface2: 'rgba(255,255,255,0.07)',
        line: 'rgba(255,255,255,0.10)',
        ink: '#e8e9f3',
        muted: '#9aa0c0',
        accent: '#7c5cff',
        accent2: '#22d3ee',
        accent3: '#ff6f91',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1140px',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '33%': { transform: 'translate3d(40px,-30px,0)' },
          '66%': { transform: 'translate3d(-30px,20px,0)' },
        },
        haloPulse: {
          '0%,100%': { transform: 'scale(1)', opacity: '0.35' },
          '50%': { transform: 'scale(1.12)', opacity: '0' },
        },
        spin: { to: { transform: 'rotate(360deg)' } },
        blink: { '50%': { opacity: '0' } },
        cue: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '40%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(16px)' },
        },
      },
      animation: {
        float: 'float 22s ease-in-out infinite',
        halo: 'haloPulse 4s ease-in-out infinite',
        'spin-slow': 'spin 28s linear infinite',
        blink: 'blink 1s step-end infinite',
        cue: 'cue 1.6s infinite',
      },
    },
  },
  plugins: [],
};
