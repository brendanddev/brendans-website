
/**
 * @file Footer.jsx
 * @author Brendan Dileo, September 2025
 * 
 * A footer component displaying social media links with interactive icons.
 */


import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText, Share2 } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import { footerIconsByName as iconByName } from '../data/footerIcons';
import { hoverGlow, containerVariants, itemVariants } from '../animations/footerVariants';


function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer
      role="contentinfo"
      className="w-full text-[#00ff00] font-mono bg-black"
      aria-label="Social links footer"
    >
      <div className="h-px w-full bg-[#00ff00]/30 shadow-[0_0_14px_#00ff00]" />
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? undefined : 'hidden'}
          animate={reduceMotion ? undefined : 'show'}
          className="
            flex flex-wrap items-center justify-center gap-4 sm:gap-6
            py-4 sm:py-5
          "
        >
          <div className="flex items-center gap-2 select-none">
            <motion.span
              aria-hidden
              whileHover={{ scale: 1.08 }}
              className="inline-flex items-center justify-center h-5 w-5 -ml-1 mr-1 text-[#00ff00]/80"
            >
              <Share2 size={16} strokeWidth={1.75} className="drop-shadow-[0_0_6px_rgba(0,255,0,0.25)]" />
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="tracking-tight overflow-hidden inline-block"
              style={{ width: reduceMotion ? 'auto' : '8ch', whiteSpace: 'nowrap' }}
              animate={reduceMotion ? undefined : { width: ['0ch', '8ch'] }}
              transition={reduceMotion ? undefined : { duration: 0.8, ease: 'easeOut' }}
            >
              socials:
            </motion.span>
            <motion.span
              aria-hidden
              className="ml-1 inline-block w-[0.6ch] text-[#00ff00]"
              animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
              transition={reduceMotion ? undefined : { duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              |
            </motion.span>
          </div>

          <nav aria-label="Social icons" className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {socialLinks.map((item) => {
              const Icon = iconByName[item.name] || FileText;
              return (
                <motion.a
                  variants={itemVariants}
                  key={item.name}
                  href={item.url}
                  target={item.url.startsWith('http') ? '_blank' : undefined}
                  rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={item.name}
                  className="
                    group relative inline-flex items-center justify-center
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
                  <span
                    aria-hidden
                    className="
                      pointer-events-none absolute -bottom-1 left-2 right-2 h-[2px]
                      scale-x-0 origin-left bg-[#00ff00]/80
                      shadow-[0_0_8px_#00ff00] group-hover:scale-x-100 group-hover:opacity-100
                      opacity-0 transition-all duration-200 ease-out
                    "
                  />
                </motion.a>
              );
            })}
          </nav>

          <div aria-hidden className="w-full text-center select-none">
            <span className="text-xs tracking-wider text-[#00ff00]/60 drop-shadow-[0_0_6px_rgba(0,255,0,0.25)]">
              ──────────────── $ end · socials ────────────────
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default memo(Footer);


