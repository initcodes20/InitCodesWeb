
export default function Login() {
  return (
    <div className="min-h-screen my-8 md:my-18 !bg-[#e5e4e1] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Scanlines */}
      <div className="line-bg "></div>

      {/* Header Logo */}
      <div className="mb-10 text-center animate-fade-in">
        <div className="retro-text text-4xl flex items-center justify-center gap-4 text-black">
          <span className="opacity-30">{"<"}</span>
          <span className="font-medium tracking-tighter">INIT</span>
          <span className="opacity-30">{">"}</span>
        </div>
        <p className="normal-text text-[10px] tracking-[0.5em] uppercase font-bold opacity-60 mt-2">
          Codes
        </p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-10 md:p-14 z-10 border border-white">
        <header className="mb-10">
          <h1 className="text-2xl font-bold text-[#1a1f2e] mb-2">
            Admin Secure Login
          </h1>
          <p className="text-sm text-[#7a7a7a] font-medium">
            Authorized access only.
          </p>
        </header>

        <form className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a1a1a1] ml-1">
              Admin Email
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-lg opacity-40">
                alternate_email
              </span>
              <input 
                type="email" 
                placeholder="admin@initcodes.com"
                className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-[#1a1f2e] font-medium"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a1a1a1] ml-1">
              Password
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-lg opacity-40">
                lock
              </span>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
              />
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full bg-[#0d0d0d] hover:bg-black text-white rounded-xl py-4 flex items-center justify-center gap-3 transition-all active:scale-[0.98] mt-8 shadow-xl shadow-black/10 group">
            <span className="text-xs font-bold uppercase tracking-[0.3em] ml-4">Login</span>
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
              logout
            </span>
          </button>
        </form>

        <div className="mt-10 text-center">
          <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a1a1a1] hover:text-black transition-colors">
            Forgot Password?
          </button>
        </div>
      </div>

      {/* Infrastructure Footer */}
      <footer className="mt-16 text-center space-y-2">
        <p className="text-[12px] font-bold tracking-[0.3em] uppercase opacity-30 text-black">
          Powered by Initcodes Infrastructure
        </p>
        <p className="text-[10px] font-bold tracking-[0.1em] uppercase opacity-20 text-black">
          Harshit Dubey — System Architect
        </p>
      </footer>
    </div>
  );
}