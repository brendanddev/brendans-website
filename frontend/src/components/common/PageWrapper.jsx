
/**
 * @file PageWrapper.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A reusable wrapper component for the websites pages
 */

import Sidebar from "../Sidebar/Sidebar";


const PageWrapper = ({ children }) => (
  <div className="relative w-full min-h-screen bg-slate-900 text-white flex flex-col items-center p-4 overflow-hidden">
    
    {/* main gradient */}
    <div
      className="absolute top-0 left-0 w-full h-full"
      style={{
        background: `
          radial-gradient(ellipse 100% 100% at 50% 0%, rgba(99, 102, 241, 0.15), transparent 50%),
          radial-gradient(ellipse 80% 80% at 20% 20%, rgba(168, 85, 247, 0.1), transparent 40%),
          radial-gradient(ellipse 60% 60% at 80% 80%, rgba(34, 197, 94, 0.08), transparent 30%),
          radial-gradient(ellipse 120% 120% at 50% 50%, rgba(59, 130, 246, 0.05), transparent 60%)
        `,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
    
    {/* Orb effect */}
    <div
      className="absolute top-0 left-0 w-full h-full overflow-hidden"
      style={{
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <div
        className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent)",
          top: "10%",
          left: "10%",
          animation: "float1 20s ease-in-out infinite",
        }}
      />

      <div
        className="absolute w-64 h-64 rounded-full opacity-15 animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent)",
          top: "60%",
          right: "15%",
          animation: "float2 25s ease-in-out infinite",
        }}
      />

      <div
        className="absolute w-80 h-80 rounded-full opacity-10 animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.15), transparent)",
          bottom: "20%",
          left: "20%",
          animation: "float3 30s ease-in-out infinite",
        }}
      />

    </div>

    {/* Texture overlauy */}
    <div
      className="absolute top-0 left-0 w-full h-full opacity-5"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        pointerEvents: "none",
        zIndex: 2,
      }}
    />

    {/* Actual content / */}
    <div className="relative z-10 w-full max-w-7xl">
      {children}
    </div>
    
    <Sidebar />
    
    {/* Inline styles for animation effects */}
    <style dangerouslySetInnerHTML={{
      __html: `
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-20px) translateX(10px) rotate(120deg); }
          66% { transform: translateY(10px) translateX(-5px) rotate(240deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(15px) translateX(-15px) rotate(-120deg); }
          66% { transform: translateY(-10px) translateX(10px) rotate(-240deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(-10px) rotate(90deg); }
          66% { transform: translateY(20px) translateX(15px) rotate(180deg); }
        }
      `
    }} />
  </div>
);

export default PageWrapper;
