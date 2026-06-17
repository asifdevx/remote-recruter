import { Link } from 'react-router-dom';

const Footer = () => {
 return (
   <footer className="bg-brand-dark text-white/70 py-10 px-6 md:px-12">
     <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
       <span className="text-sm">&copy; {new Date().getFullYear()} RemoteRecruit. All rights reserved.</span>
       <div className="flex gap-6 text-sm">
         <Link to="/privacy" className="hover:text-white transition-colors">
           Privacy
         </Link>
         <Link to="/terms" className="hover:text-white transition-colors">
           Terms
         </Link>
         <Link to="/contact" className="hover:text-white transition-colors">
           Contact
         </Link>
       </div>
     </div>
   </footer>
 );
}

export default Footer