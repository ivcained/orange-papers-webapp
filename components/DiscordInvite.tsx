import type { CSSProperties } from "react";

const DISCORD_URL = "https://discord.gg/Xr8hNYtY3w";

const DiscordIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
  </svg>
);

interface DiscordInviteProps {
  variant?: "sidebar" | "footer" | "hero";
  style?: CSSProperties;
}

export function DiscordInvite({ variant = "sidebar", style }: DiscordInviteProps) {
  if (variant === "hero") {
    return (
      <a
        href={DISCORD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary btn-discord-hero"
        style={style}
        aria-label="Join the Orange Papers Discord channel"
      >
        <DiscordIcon size={15} />
        <span className="btn-discord-hero__text">
          <span className="btn-discord-hero__main">Join the discussion</span>
          <span className="btn-discord-hero__sub">Orange Papers · Recovery Without AA</span>
        </span>
      </a>
    );
  }

  if (variant === "sidebar") {
    return (
      <a
        href={DISCORD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="discord-invite-sidebar"
        style={style}
        aria-label="Join the Orange Papers Discord channel"
      >
        <span className="discord-invite-sidebar__icon">
          <DiscordIcon size={16} />
        </span>
        <span className="discord-invite-sidebar__text">
          <span className="discord-invite-sidebar__label">Join the discussion</span>
          <span className="discord-invite-sidebar__sub">Orange Papers · Discord</span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={DISCORD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="discord-invite-footer"
      style={style}
      aria-label="Join the Orange Papers Discord channel"
    >
      <span className="discord-invite-footer__icon">
        <DiscordIcon size={20} />
      </span>
      <span className="discord-invite-footer__text">
        <span className="discord-invite-footer__label">Join the discussion</span>
        <span className="discord-invite-footer__sub">
          Orange Papers channel · Recovery Without AA Discord Server
        </span>
      </span>
    </a>
  );
}
