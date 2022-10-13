import '../styles/globals.css'
import 'tailwindcss/tailwind.css' // Necessario para roda o TailwindCSS

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
