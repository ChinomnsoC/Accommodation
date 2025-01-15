import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col">
      {/* Header/Navigation */}
      <header className="flex justify-between items-center px-8 py-4 bg-[#2E1A47] text-white">
        <h1 className="text-xl font-bold">Meetings Accommodation</h1>
        <nav className="flex gap-6">
          <button className="hover:text-purple-200 transition-colors">About</button>
          <button className="hover:text-purple-200 transition-colors">Search</button>
          <button className="hover:text-purple-200 transition-colors">Contact</button>
        </nav>
      </header>

      <main className="flex flex-col items-center flex-grow">
        {/* Banner */}
        <div className="w-full h-[300px] relative">
          <Image
            src="/april-meeting.jpeg"
            alt="April Meeting"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-[#2E1A47]/30 flex items-center justify-center">
          </div>
        </div>

        {/* Private Accommodation Button */}
        <button className="group relative w-full max-w-2xl h-[400px] my-16 transition-transform hover:scale-[1.02]">
          <Image
            src="/private-accom.jpg"
            alt="Private Accommodation"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-xl shadow-xl"
          />
          <div className="absolute inset-0 bg-[#2E1A47]/40 group-hover:bg-[#2E1A47]/50 transition-colors rounded-xl flex items-center justify-center">
            <span className="text-3xl font-bold text-white bg-[#2E1A47]/80 px-8 py-4 rounded-full">
              Private Accommodation
            </span>
          </div>
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-[#2E1A47] text-white py-8 px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            <button className="hover:text-purple-200 transition-colors">Locations</button>
            <button className="hover:text-purple-200 transition-colors">Contact Us</button>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Follow us on social media</span>
            <div className="flex gap-6">
              {/* Social Media Icons */}
              <a href="#" className="hover:text-purple-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-purple-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-purple-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
