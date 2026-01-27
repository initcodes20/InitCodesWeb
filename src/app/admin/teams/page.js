"use client";
import { toast } from "react-toastify";


import React, { useState, useEffect } from "react";
import Sidebar from "@/app/components/Sidebar";

const AddTeamPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [teamList, setTeamList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFormData((prev) => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  };

  const fetchTeams = async () => {
    try {
      const res = await fetch("/api/admin/teams");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setTeamList(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("designation", formData.designation);
      form.append("image", formData.image);

      const res = await fetch("/api/admin/teams", {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      await fetchTeams();
      setFormData({ name: "", designation: "", image: null });
      setPreview(null);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteTeamMember = async (id) => {
    try {
      const res = await fetch(`/api/admin/teams/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      toast.success("Member deleted");
      fetchTeams();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const editTeamMember = async (id, member) => {
    const form = new FormData();
    form.append("name", member.name);
    form.append("designation", member.designation);
    if (member.image) form.append("image", member.image);

    const res = await fetch(`/api/admin/teams/${id}`, {
      method: "PUT",
      body: form,
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    fetchTeams();
  };

  return (
    <div className="flex min-h-screen !bg-[#e5e4e1] selection:bg-black selection:text-white">
      <Sidebar />

      <main className="flex-1 p-8 md:p-12 mt-20 relative overflow-hidden">
        {/* Background Scanlines */}
        <div className="line-bg opacity-5"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* HEADER */}
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
              <span className="text-[9px] font-bold uppercase tracking-widest opacity-60 text-black">
                Live Node
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* FORM CARD */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-white">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black opacity-30">
                  Add New Entry
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a1a1a1] ml-1">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Harshit Dubey"
                      required
                      className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 text-black font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a1a1a1] ml-1">
                      designation
                    </label>
                    <input
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="e.g. Lead Architect"
                      required
                      className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 text-black font-medium"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a1a1a1] ml-1">
                      Portrait
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl border border-black/5 bg-[#f8f9fa] flex items-center justify-center overflow-hidden grayscale">
                        {preview ? (
                          <img
                            src={preview}
                            className="w-full h-full object-cover"
                            alt="Preview"
                          />
                        ) : (
                          <span className="material-symbols-outlined opacity-20">
                            add_a_photo
                          </span>
                        )}
                      </div>
                      <label className="flex-1 cursor-pointer group">
                        <div className="bg-[#f8f9fa] border border-dashed border-black/20 rounded-xl py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-center opacity-60 group-hover:opacity-100 transition-opacity">
                          {formData.image
                            ? formData.image.name
                            : "Select Image"}
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <button
                    disabled={loading}
                    className="w-full bg-black hover:bg-[#FF4D00] text-white rounded-xl py-4 flex items-center justify-center gap-3 transition-all active:scale-[0.98] mt-4 group shadow-lg shadow-black/10 disabled:opacity-50 disabled:hover:bg-black"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.3em]">
                      {loading ? "Deploying..." : "Deploy Member"}
                    </span>
                    {!loading && (
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        send
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* LIST SECTION */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-white min-h-[400px]">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black opacity-30">
                  Active Brain Trust
                </h2>

                <div className="space-y-4">
                  {teamList.length > 0 ? (
                    teamList.map((member) => (
                      <div
                        key={member._id}
                        className="flex items-center justify-between p-4 border border-black/5 rounded-2xl hover:bg-[#f8f9fa] transition-colors group"
                      >
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 bg-black/5 rounded-xl overflow-hidden grayscale border border-black/5 group-hover:grayscale-0 transition-all">
                            {member.imageUrl ? (
                              <img
                                src={member.imageUrl}
                                className="w-full h-full object-cover"
                                alt={member.name}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center opacity-10">
                                <span className="material-symbols-outlined">
                                  person
                                </span>
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-bold text-black text-sm">
                              {member.name}
                            </p>
                            <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">
                              {member.designation}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                          <button
                            onClick={() =>
                              editTeamMember(member._id, {
                                name: member.name,
                                designation: member.designation,
                                imageUrl: member.imageUrl,
                              })
                            }
                            className="p-2 hover:bg-black hover:text-white rounded-lg transition-colors"
                          >
                            <span className="material-symbols-outlined text-lg">
                              edit
                            </span>
                          </button>
                          <button
                            onClick={() => deleteTeamMember(member._id)}
                            className="p-2 hover:bg-red-500 hover:text-white rounded-lg transition-colors"
                          >
                            <span className="material-symbols-outlined text-lg">
                              delete
                            </span>
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="h-64 flex flex-col items-center justify-center opacity-20">
                      <span className="material-symbols-outlined text-4xl mb-2">
                        database_off
                      </span>
                      <p className="text-[10px] font-bold uppercase tracking-widest">
                        No Records Found
                      </p>
                    </div>
                  )}
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
};

export default AddTeamPage;
