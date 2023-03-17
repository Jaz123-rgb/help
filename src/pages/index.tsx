import Hero from '../components/HeroCar';
import Navbar from '../components/Navbar';
import SecOne from '../components/SecOne';
import SecTwo from '@/components/SecTwo';
import SecPrj from '@/components/SecPrj';


export default function Home() {
  return (
  		<div> 
		<Navbar/>
  		<Hero />
		<SecOne />
		<SecTwo/>
		<SecPrj/>
		</div>

		
     )
}
