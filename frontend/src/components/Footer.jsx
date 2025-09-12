
/**
 * @file Footer.jsx
 * @author Brendan Dileo, September 2025
 * 
 * A footer component displaying social media links with interactive icons.
 */


import { memo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, FileText } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const iconByName = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  Twitter: Twitter,
  Resume: FileText,
};

const hoverGlow = {
  whileHover: { scale: 1.12, y: -1 },
  whileTap: { scale: 0.96, y: 0 },
  transition: { type: 'spring', stiffness: 500, damping: 28 },
};


function Footer() {
  return (
    <footer
      role="contentinfo"
      className="w-full text-[#00ff00] font-mono"
      aria-label="Social links footer"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div
          className="
            flex flex-wrap items-center justify-center gap-4 sm:gap-6
            border-t border-[#00ff00]/30 bg-black/70 backdrop-blur-[2px]
            py-3 sm:py-4
          "
        >
          <div className="flex items-center gap-2 select-none">
            <span className="text-[#00ff00] opacity-80">$</span>
            <span className="tracking-tight">socials:</span>
            <motion.span
              aria-hidden
              className="ml-1 inline-block w-[0.6ch] text-[#00ff00]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              |
            </motion.span>
          </div>

          <nav aria-label="Social icons" className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {socialLinks.map((item) => {
              const Icon = iconByName[item.name] || FileText;
              return (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target={item.url.startsWith('http') ? '_blank' : undefined}
                  rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={item.name}
                  className="
                    group inline-flex items-center justify-center
                    h-11 w-11 sm:h-10 sm:w-10 rounded-md
                    text-[#00ff00] hover:text-[#b3ffb3]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff00]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                    transition-colors
                  "
                  {...hoverGlow}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.75}
                    className="drop-shadow-[0_0_6px_rgba(0,255,0,0.35)] group-hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.65)] transition-[filter]"
                  />
                </motion.a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);


