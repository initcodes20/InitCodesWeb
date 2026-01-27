"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Sidebar from "@/app/components/Sidebar";

const AddProjectPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    developer: "InitCodes", 
    link: "",
    isFeatured: false,
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [editingId, setEditingId] = useState(null);

  /* ---------------- API HANDLERS ---------------- */

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/admin/projects");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setProjectList(data.data);
    } catch (error) {
      toast.error("Failed to sync with registry.");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("developer", formData.developer);
      form.append("redirectLink", formData.link);
      form.append("isFeatured", formData.isFeatured);
      
      // Handle tags as an array
      const tagsArray = formData.tags.split(",").map(t => t.trim()).filter(t => t !== "");
      form.append("tags", JSON.stringify(tagsArray));

      if (formData.image) form.append("image", formData.image);

      const res = await fetch(
        editingId ? `/api/admin/projects/${editingId}` : "/api/admin/projects",
        {
          method: editingId ? "PUT" : "POST",
          body: form,
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      toast.success(editingId ? "Project updated" : "Project deployed");
      resetForm();
      fetchProjects();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleFeatured = async (id, currentStatus) => {
    try {
      const res = await fetch(`/api/admin/projects/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isFeatured: !currentStatus }),
      });
      if (!res.ok) throw new Error("Status update failed");
      toast.success("Visibility updated");
      fetchProjects();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const deleteProject = async (id) => {
    if(!confirm("Terminate this project record?")) return;
    try {
      const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      toast.success("Project removed");
      fetchProjects();
    } catch (err) {
      toast.error(err.message);
    }
  };

  /* ---------------- HELPERS ---------------- */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: "",
      description: "",
      tags: "",
      developer: "InitCodes",
      link: "",
      isFeatured: false,
      image: null,
    });
    setPreview(null);
  };

  return (
    <div className="flex min-h-screen !bg-[#e5e4e1] selection:bg-black selection:text-white">
      <Sidebar />

      <main className="flex-1 p-8 md:p-12 mt-20 relative overflow-hidden">
        <div className="line-bg opacity-5"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <header className="border-b-2 border-black pb-6 mb-12 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-medium uppercase tracking-tighter retro-text text-black">
                Project Deployment
              </h1>
              <p className="normal-text text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mt-1">
                Registry: Projects_v2.1.0
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse"></span>
              <span className="text-[9px] font-bold uppercase tracking-widest opacity-60 text-black">
                Uplink Active
              </span>
            </div>
          </header>

          {/* DEPLOYMENT FORM */}
          <div className="bg-white rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-white mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black opacity-30">
              {editingId ? "Update Asset" : "New Deployment"}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1a1] ml-1">Project Title</label>
                  <input name="title" value={formData.title} onChange={handleChange} placeholder="Neural Nexus" className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 text-black" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1a1] ml-1">Redirect Link</label>
                  <input name="link" value={formData.link} onChange={handleChange} className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 text-black" placeholder="https://initcodes.in/project" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1a1] ml-1">Developer</label>
                  <input name="developer" value={formData.developer} onChange={handleChange} className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 text-black" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1a1] ml-1">Brief Description</label>
                  <textarea name="description" value={formData.description} onChange={handleChange} rows="3" className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 text-black resize-none" placeholder="Technical breakdown..." required></textarea>
                </div>
                
                <div className="flex gap-6 items-end">
                  <div className="space-y-2 flex-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1a1] ml-1">Tags (Comma Sep)</label>
                    <input name="tags" value={formData.tags} onChange={handleChange} placeholder="React, AWS, Node" className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 text-black" />
                  </div>
                  <div className="flex items-center gap-3 pb-3">
                    <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} className="w-4 h-4 accent-black" />
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Featured</label>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl border border-black/5 bg-[#f8f9fa] flex items-center justify-center overflow-hidden grayscale">
                      {preview ? <img src={preview} className="w-full h-full object-cover" /> : <span className="material-symbols-outlined opacity-20 text-3xl">inventory_2</span>}
                    </div>
                    <label className="flex-1 cursor-pointer group">
                      <div className="bg-[#f8f9fa] border border-dashed border-black/20 rounded-xl py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-center opacity-60 group-hover:opacity-100 transition-opacity">
                        {formData.image ? formData.image.name : "Select Asset"}
                      </div>
                      <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 pt-4 flex gap-4">
                <button type="submit" disabled={loading} className="flex-1 bg-black hover:bg-[#FF4D00] text-white rounded-xl py-4 flex items-center justify-center gap-3 transition-all active:scale-[0.98] group shadow-lg shadow-black/10 disabled:opacity-50">
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">{loading ? "Processing..." : editingId ? "Save Changes" : "Commit to Registry"}</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">terminal</span>
                </button>
                {editingId && (
                  <button type="button" onClick={resetForm} className="px-8 border border-black/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">Cancel</button>
                )}
              </div>
            </form>
          </div>

          {/* REGISTRY TABLE */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-white min-h-[400px]">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-black opacity-30">Active Registry</h2>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-20">Count: {projectList.length}</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-black/5">
                    <th className="pb-4 text-[10px] font-bold uppercase tracking-widest opacity-40">Project / Developer</th>
                    <th className="pb-4 text-[10px] font-bold uppercase tracking-widest opacity-40">Tags</th>
                    <th className="pb-4 text-[10px] font-bold uppercase tracking-widest opacity-40 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {projectList.map((project) => (
                    <tr key={project._id} className="group">
                      <td className="py-6">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-black">{project.title}</span>
                          <span className="text-[9px] font-mono opacity-40 uppercase tracking-tighter">{project.developer}</span>
                        </div>
                      </td>
                      <td className="py-6">
                        <div className="flex gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[9px] font-bold uppercase px-2 py-0.5 bg-black/5 border border-black/5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-6 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => toggleFeatured(project._id, project.isFeatured)}
                            className={`p-2 rounded-lg transition-colors ${project.isFeatured ? "bg-black text-white" : "hover:bg-black hover:text-white"}`}
                            title="Feature on Home Page"
                          >
                            <span className="material-symbols-outlined text-lg">star</span>
                          </button>
                          <button className="p-2 hover:bg-black hover:text-white rounded-lg"><span className="material-symbols-outlined text-lg">edit</span></button>
                          <button onClick={() => deleteProject(project._id)} className="p-2 hover:bg-red-500 hover:text-white rounded-lg text-red-500/50"><span className="material-symbols-outlined text-lg">delete_forever</span></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProjectPage;