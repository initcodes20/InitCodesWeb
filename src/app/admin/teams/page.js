import React from 'react';
import Sidebar from '@/app/components/Sidebar'; 

const Page = () => {
  return (
    <div className="flex min-h-screen bg-[#e5e4e1]">
      {/* Sidebar - Remains full height */}
      <Sidebar />

      {/* Main Content with Top Margin */}
      <main className="flex-1 p-8 md:p-12 mt-20"> 
        <div className="max-w-7xl mx-auto">
          <header className="border-b-2 border-black pb-6 mb-12">
            <h1 className="text-3xl font-bold uppercase tracking-tighter">
              ADD TEAMS
            </h1>
          </header>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-white">
            <p className="text-sm font-medium">Your new content goes here.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;