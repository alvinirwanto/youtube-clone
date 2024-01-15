/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-grey' : '#0F0F0F',
                'bg-grey-2' : '#222222',
                'br-grey' : '#303030',
                'link-blue' : '#3EA6FF'
            }
        },
    },
    plugins: [],
}