/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-primary': 'var(--green-primary)',
        'green-mid': 'var(--green-mid)',
        'green-light': 'var(--green-light)',
        'green-pale': 'var(--green-pale)',
        'blue-primary': 'var(--blue-primary)',
        'blue-mid': 'var(--blue-mid)',
        'blue-light': 'var(--blue-light)',
        'blue-pale': 'var(--blue-pale)',
        danger: 'var(--danger)',
        'danger-bg': 'var(--danger-bg)',
        'danger-border': 'var(--danger-border)',
        'danger-text': 'var(--danger-text)',
        cream: 'var(--cream)',
        'surface-1': 'var(--surface-1)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'green-loading': 'var(--green-loading)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
      },
      borderRadius: {
        DEFAULT: '8px',
        card: '14px',
      },
      borderWidth: {
        hair: '0.5px',
      },
    },
  },
  plugins: [],
}
