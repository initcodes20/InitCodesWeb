"use client";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check, Linkedin, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";

/* --- CUSTOM CODE BLOCK --- */
const CodeBlock = ({ inline, className, children, ...props }) => {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || "");
  const content = String(children).replace(/\n$/, "");

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return !inline && match ? (
    <div className="relative group my-6 shadow-xl">
      <div className="absolute right-3 top-3 z-20 flex items-center gap-2">
        {copied && <span className="text-[9px] font-bold text-green-400 uppercase tracking-widest">Copied</span>}
        <button
          type="button"
          onClick={handleCopy}
          className="p-1.5 bg-white/5 hover:bg-white/10 rounded border border-white/10 transition-all"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-white/40" />}
        </button>
      </div>
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        className="!rounded-xl !m-0 !bg-[#0a0a0a] border border-white/5 !p-6 pt-8 font-mono text-xs leading-relaxed"
        {...props}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className="bg-white border border-black/5 px-1 py-0.5 rounded font-mono text-xs text-[#FF4D00] font-bold" {...props}>
      {children}
    </code>
  );
};

export default function SingleBlog({ post }) {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress((currentScroll / scrollHeight) * 100);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  if (!post) return <div className="min-h-screen flex items-center justify-center retro-text">Node_Not_Found</div>;

  const shareToLinkedIn = () => {
    const blogUrl = window.location.href; // Captures the exact URL of this blog post
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`;
    window.open(linkedinUrl, "_blank", "width=600,height=600");
  };

  return (
    <article className="min-h-screen bg-[#e5e4e1] selection:bg-[#FF4D00] selection:text-white pb-20">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-black/5">
        <div className="h-full bg-[#FF4D00] transition-all duration-150" style={{ width: `${readingProgress}%` }} />
      </div>

      {/* Hero Section - Reduced Spacing */}
      <div className="pt-32 pb-12 px-6 border-b border-black/5 bg-white/40 backdrop-blur-sm relative overflow-hidden">
        <div className="line-bg opacity-5" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 hover:text-[#FF4D00] transition-colors">
            <ArrowLeft size={12} /> Back to Registry
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 bg-black text-white text-[9px] font-bold uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-40">
              {post.readTime}
            </span>
          </div>

          {/* Smaller Heading */}
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight retro-text leading-tight text-black mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-between pt-6 border-t border-black/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-[10px]">IC</div>
              <div>
                <p className="text-[9px] font-bold uppercase opacity-30">Architect</p>
                <p className="text-xs font-bold uppercase">{post.author}</p>
              </div>
            </div>
            
            <button onClick={shareToLinkedIn} className="flex items-center gap-2 text-black hover:text-[#FF4D00] transition-colors">
              <Linkedin size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Share Insight</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Area - Tightened Margins */}
      <div className="max-w-3xl mx-auto px-6 mt-12 relative">
        <div className="prose prose-neutral max-w-none 
          prose-p:text-black/80 prose-p:leading-relaxed prose-p:text-base prose-p:mb-6
          prose-headings:retro-text prose-headings:text-black prose-headings:font-normal
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-blockquote:border-l-2 prose-blockquote:border-[#FF4D00] prose-blockquote:bg-white/50 prose-blockquote:py-1 prose-blockquote:px-6
          prose-strong:text-black prose-strong:font-bold">
          <ReactMarkdown components={{ code: CodeBlock }}>
            {post.description}
          </ReactMarkdown>
        </div>

        {/* System Footer */}
        <footer className="mt-20 py-10 border-t border-black/10 flex flex-col items-center gap-6">
          <button onClick={shareToLinkedIn} className="bg-black text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#FF4D00] transition-all">
            Share on LinkedIn
          </button>
          <p className="text-[9px] font-bold tracking-[0.4em] uppercase opacity-20 text-black">
            Initcodes Core // v2.1.0
          </p>
        </footer>
      </div>
    </article>
  );
}