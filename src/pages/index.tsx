import { Inter } from 'next/font/google'
import Hero from '../components/HeroCar';
import Navbar from '../components/Navbar';


export default function Home() {
  return (
  		<div> 
		<Navbar/>
  		<Hero />
		</div>

		
     )
}
