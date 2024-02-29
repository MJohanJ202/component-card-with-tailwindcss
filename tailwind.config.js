/** @type {import('tailwindcss').Config} */
export default {
  content:  ['./**/*.html'],
  theme: {
    extend: {
      boxShadow: {
        borderCard: 'inset 0 -1.5rem #26235C'
      },
      fontFamily: {
        lato: 'Lato, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'
      },
      backgroundColor: {
        'body': '#D5C6FF',
      },
      backgroundImage: {
        'logo-patter': "url('/backgroundLogo.svg')",
        'ellipse-profile': "url('/icons/ellipseProfile.svg')"
      },
      backgroundSize: {
        '50%': '50%',
        'w-full': '100%'
      },
    },
  },
  plugins: [],
}

