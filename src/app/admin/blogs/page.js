"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Sidebar from "@/app/components/Sidebar";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

/* --- CUSTOM CODE BLOCK COMPONENT --- */
const CodeBlock = ({ inline, className, children, ...props }) => {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || '');
  const content = String(children).replace(/\n$/, '');

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return !inline && match ? (
    <div className="relative group my-6">
      <div className="absolute right-3 top-3 z-20 flex items-center gap-2">
        {copied && (
          <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">
            Copied
          </span>
        )}
        <button 
          type="button"
          onClick={handleCopy}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-md backdrop-blur-md transition-all border border-white/10 active:scale-90"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-white/60" />}
        </button>
      </div>

      <div className="absolute left-4 -top-3 px-2 py-0.5 bg-[#FF4D00] text-white text-[9px] font-bold uppercase tracking-widest z-20">
        {match[1]}
      </div>

      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        className="!rounded-xl !m-0 !bg-[#0d0d0d] border border-white/5 !p-6 pt-8 shadow-2xl font-mono text-sm leading-relaxed"
        {...props}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className="bg-black/5 px-1.5 py-0.5 rounded font-mono text-sm text-[#FF4D00] font-bold" {...props}>
      {children}
    </code>
  );
};

/* --- MAIN ADMIN PAGE --- */
const AddBlogPage = () => {
  const [formData, setFormData] = useState({
    slug: "", title: "", author: "InitCodes", category: "", readTime: "", description: "",
  });

  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/admin/blogs");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setBlogList(data.data);
    } catch (error) {
      toast.error("Failed to sync blog registry.");
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "title") {
      const slug = value.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
      setFormData((prev) => ({ ...prev, slug, title: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        editingId ? `/api/admin/blogs/${editingId}` : "/api/admin/blogs",
        {
          method: editingId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) throw new Error("Submission failed");
      toast.success(editingId ? "Log updated" : "Blog deployed");
      resetForm();
      fetchBlogs();
    } catch (err) { toast.error(err.message); } finally { setLoading(false); }
  };

  const deleteBlog = async (id) => {
    if (!confirm("Terminate this log entry?")) return;
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      toast.success("Entry removed");
      fetchBlogs();
    } catch (err) { toast.error(err.message); }
  };

  const startEdit = (blog) => {
    setEditingId(blog._id);
    setFormData({ ...blog });
    setShowPreview(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ slug: "", title: "", author: "InitCodes", category: "", readTime: "", description: "" });
    setShowPreview(false);
  };

  return (
    <div className="flex min-h-screen !bg-[#e5e4e1] selection:bg-black selection:text-white font-sans">
      <Sidebar />

      <main className="flex-1 p-4 md:p-12 mt-20 relative overflow-hidden">
        <div className="line-bg opacity-5"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* RESPONSIVE HEADER */}
          <header className="border-b-2 border-black pb-6 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl font-medium uppercase tracking-tighter retro-text text-black">
                Insight Management
              </h1>
              <p className="normal-text text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mt-1">
                Registry: Blogs_v2.1.0
              </p>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
              <button 
                onClick={() => setShowPreview(!showPreview)}
                className="text-[10px] font-black uppercase tracking-[0.2em] border-2 border-black px-6 py-2 bg-white sm:bg-transparent hover:bg-black hover:text-white transition-all flex-1 sm:flex-none"
              >
                {showPreview ? "Editor" : "Preview"}
              </button>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full animate-pulse ${editingId ? 'bg-blue-500' : 'bg-[#FF4D00]'}`}></span>
                <span className="text-[9px] font-black uppercase tracking-widest opacity-60 text-black whitespace-nowrap">
                  {editingId ? "Edit Node" : "Live Node"}
                </span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* EDITOR/PREVIEW CARD */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-white">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-black opacity-30">
                  {showPreview ? "Visual Verification" : editingId ? "Modify Entry" : "New Deployment"}
                </h2>

                {showPreview ? (
                  <div className="prose prose-neutral max-w-none min-h-[400px]">
                    <h1 className="retro-text text-2xl tracking-tighter mb-4">{formData.title || "Untitled"}</h1>
                    <ReactMarkdown components={{ code: CodeBlock }}>{formData.description}</ReactMarkdown>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1a1] ml-1">Title</label>
                      <input name="title" value={formData.title} onChange={handleChange} required className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-3 px-4 text-sm text-black" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1a1] ml-1">Category</label>
                        <input name="category" value={formData.category} onChange={handleChange} required className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-3 px-4 text-sm text-black" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1a1] ml-1">Read Time</label>
                        <input name="readTime" value={formData.readTime} onChange={handleChange} required className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-3 px-4 text-sm text-black" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#a1a1a1] ml-1">Content (Markdown)</label>
                      <textarea name="description" value={formData.description} onChange={handleChange} rows="10" required className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-4 px-4 text-sm text-black resize-none font-mono" />
                    </div>

                    <button disabled={loading} className="w-full bg-black hover:bg-[#FF4D00] text-white rounded-xl py-4 text-xs font-bold uppercase tracking-[0.3em] transition-all">
                      {loading ? "Processing..." : editingId ? "Update Log" : "Deploy Insight"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* REGISTRY LIST */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-white">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-black opacity-30">Active Insight Logs</h2>
                <div className="space-y-4">
                  {blogList.map((blog) => (
                    <div key={blog._id} className="group p-5 border border-black/5 rounded-2xl bg-[#fcfcfc] transition-all relative overflow-hidden">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[9px] font-black uppercase px-2 py-1 bg-black text-white rounded">{blog.category}</span>
                        
                        {/* VISIBILITY LOGIC: Always visible on mobile, Hover-reveal on Desktop */}
                        <div className="flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                          <button onClick={() => startEdit(blog)} className="p-2 bg-black/5 md:bg-transparent hover:bg-black hover:text-white rounded-lg transition-colors">
                            <span className="material-symbols-outlined text-lg">edit_note</span>
                          </button>
                          <button onClick={() => deleteBlog(blog._id)} className="p-2 bg-red-500/10 md:bg-transparent hover:bg-red-500 hover:text-white rounded-lg transition-colors text-red-500">
                            <span className="material-symbols-outlined text-lg">delete_forever</span>
                          </button>
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-black mb-1 group-hover:text-[#FF4D00] transition-colors">{blog.title}</h3>
                      <p className="text-[10px] font-black uppercase opacity-30 tracking-widest">{blog.author} • {blog.readTime}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddBlogPage;