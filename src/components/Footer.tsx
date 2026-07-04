import * as Icons from "lucide-react";
import { socialLinks, personal } from "../resources/content";
import MagneticEffect from "./MagneticEffect";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Helper to dynamically render Lucide icons
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="h-4 w-4 transition-transform duration-300 group-hover:scale-105" />;
    }
    return <Icons.Link className="h-4 w-4" />;
  };

  return (
    <footer id="app-footer" className="relative border-t border-white/5 bg-black py-12 text-gray-500">
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.005] to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright Info */}
          <div className="text-center md:text-left">
            <p className="font-sans text-[11px] tracking-widest text-gray-400 font-semibold">
              &copy; {currentYear} {personal.name.toUpperCase()}
            </p>
            <p className="mt-1.5 font-sans text-[10px] text-gray-600 font-light tracking-wide">
              CC BY-NC 4.0 Attribution. Powered by React, Tailwind CSS, and Motion.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <MagneticEffect key={social.platform}>
                <a
                  id={`footer-social-${social.platform.toLowerCase()}`}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex h-8.5 w-8.5 items-center justify-center rounded-lg border border-white/5 bg-white/[0.01] text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white shadow-sm"
                  title={social.platform}
                >
                  {renderIcon(social.icon)}
                </a>
              </MagneticEffect>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
