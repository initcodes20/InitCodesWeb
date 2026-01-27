"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from '@/app/components/Sidebar';

const AddTeamPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    image: null
  });
  const [preview, setPreview] = useState(null);
  const [teamList, setTeamList] = useState([
    { id: 1, name: 'Harshit Dubey', designation: 'Founder & Lead Architect', image: null },
    { id: 2, name: 'Sarah Chen', designation: 'Head of Engineering', image: null }
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic for FormData submission to match Mongoose Schema
    const submissionData = new FormData();
    submissionData.append('name', formData.name);
    submissionData.append('designation', formData.designation);
    submissionData.append('image', formData.image);
    
    console.log("Deploying to Infrastructure...");
  };

  return (
    <div className="flex min-h-screen !bg-[#e5e4e1] selection:bg-black selection:text-white font-sans">
      <Sidebar />

      <main className="flex-1 p-8 md:p-12 mt-20 relative overflow-hidden">
        <div className="line-bg opacity-5"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header Section */}
          <header className="border-b-2 border-black pb-6 mb-12 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-medium uppercase tracking-tighter retro-text text-black">
                Team Management
              </h1>
              <p className="normal-text text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mt-1">
                Registry: Teams_Schema_v2.0.1
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse"></span>
              <span className="text-[9px] font-bold uppercase tracking-widest opacity-60 text-black">Live Node</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-white">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-black opacity-30">Add New Entry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a1a1a1] ml-1">Full Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="e.g. Elena Rose" className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 text-black" required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a1a1a1] ml-1">Designation</label>
                    <input name="designation" value={formData.designation} onChange={handleChange} type="text" placeholder="Fullstack Developer" className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 text-black" required />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a1a1a1] ml-1">Portrait Selector</label>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl border border-black/5 bg-[#f8f9fa] flex items-center justify-center overflow-hidden grayscale">
                        {preview ? <img src={preview} className="w-full h-full object-cover" /> : <span className="material-symbols-outlined opacity-20">add_a_photo</span>}
                      </div>
                      <label className="flex-1 cursor-pointer">
                        <div className="bg-[#f8f9fa] border border-dashed border-black/20 rounded-xl py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-center opacity-60 hover:opacity-100 transition-opacity">
                          {formData.image ? formData.image.name : "Upload File"}
                        </div>
                        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-black hover:bg-[#FF4D00] text-white rounded-xl py-4 flex items-center justify-center gap-3 transition-all active:scale-[0.98] mt-4 group shadow-lg shadow-black/10">
                    <span className="text-xs font-bold uppercase tracking-[0.3em]">Deploy Member</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">send</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Team List Table */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-white min-h-[500px]">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-black opacity-30">Active Brain Trust</h2>
                
                <div className="space-y-4">
                  {teamList.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 border border-black/5 rounded-2xl hover:bg-[#f8f9fa] transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-black/10 grayscale overflow-hidden">
                          {member.image && <img src={member.image} className="w-full h-full object-cover" />}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-black">{member.name}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">{member.designation}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-black hover:text-white rounded-lg transition-colors"><span className="material-symbols-outlined text-lg">edit</span></button>
                        <button className="p-2 hover:bg-red-500 hover:text-white rounded-lg transition-colors"><span className="material-symbols-outlined text-lg">delete</span></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <footer className="mt-20 text-center border-t border-black/5 pt-8">
            <p className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-30 text-black">
              Initcodes Admin Infrastructure v2.0
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default AddTeamPage;