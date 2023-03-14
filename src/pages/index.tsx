import { Inter } from 'next/font/google'
import Hero from '../components/HeroCar';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  		<div> 
		<Navbar/>
  		<Hero />
		</div>

		
     )
}
