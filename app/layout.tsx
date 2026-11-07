import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'GRANTLY — Your next chapter, funded.', description:'Discover scholarships that fit your future.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
