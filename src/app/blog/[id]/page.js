"use client";
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import Link from "next/link";

const CodeBlock = ({ inline, className, children }) => {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || '');
  const content = String(children).replace(/\n$/, '');

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return !inline && match ? (
    <div className="relative group my-8">
      <div className="absolute right-3 top-3 z-20">
        <button onClick={handleCopy} className="p-2 bg-white/10 rounded-md border border-white/10 backdrop-blur-sm transition-all">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-white/60" />}
        </button>
      </div>
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        className="!rounded-xl !m-0 !bg-[#0d0d0d] !p-6 shadow-2xl border border-white/5"
      >
        {content}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className="bg-black/10 px-1.5 py-0.5 rounded font-mono text-sm text-[#FF4D00] font-bold">
      {children}
    </code>
  );
};

export default function SingleBlogPage({ post }) {
  if (!post) return <div className="h-screen flex items-center justify-center retro-text">404: Node Not Found</div>;

  return (
    <article className="min-h-screen bg-[#e5e4e1] pt-40 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">west</span> Back to Logs
        </Link>

        <header className="my-16">
          <span className="bg-black text-white text-[9px] font-bold px-3 py-1 uppercase tracking-widest">{post.category}</span>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter retro-text mt-6 mb-4">{post.title}</h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 italic">Architect: {post.author} • {post.readTime} Read</p>
        </header>

        {/* Content Area Rendering Markdown */}
        <div className="prose prose-neutral max-w-none prose-headings:retro-text prose-p:normal-text">
          <ReactMarkdown components={{ code: CodeBlock }}>
            {post.description}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}