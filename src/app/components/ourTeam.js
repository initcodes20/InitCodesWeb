"use client";
import { useState, useEffect } from "react";

export default function TeamSection() {

  const [teamList ,setTeamList] = useState([]);

    const fetchTeams = async () => {
    try {
      const res = await fetch("/api/admin/teams");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setTeamList(data.data.reverse());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    fetchTeams();
  },[]);
  return (
    <section
      id="team"
      className="py-24 px-6 !bg-[#e5e4e1] relative overflow-hidden "
    >
      {/* Background Scanlines */}
      <div className="line-bg opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <div className="mb-20 inline-block">
          <h2 className="retro-text text-3xl md:text-4xl italic uppercase tracking-[0.3em] mb-4">
            The Brain Trust
          </h2>
          {/* The orange accent line */}
          <div className="h-1.5 w-20 bg-[#FF4D00] mx-auto"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 m-5">
          {teamList.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Double-Border Image Frame */}
              <div className="relative p-2 border border-black/20 mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="border-2 border-black overflow-hidden aspect-square w-48 md:w-56">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Member Info */}
              <h3 className="retro-text text-lg uppercase tracking-wider mb-1">
                {member.name}
              </h3>
              <p className="normal-text text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
                {member.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
