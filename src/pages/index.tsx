import { Inter } from 'next/font/google'

import Hero from '../components/HeroCar';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  		<Hero /> 			
     )
}
