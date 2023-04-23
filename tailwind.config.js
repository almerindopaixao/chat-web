/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    // ativar a sintaxe de modelo CSS para usar a diretiva @apply
    cssModules: true,
  },
  experimental: {
    // ativar a diretiva @apply
    applyComplexClasses: true,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
