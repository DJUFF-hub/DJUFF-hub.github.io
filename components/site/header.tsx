import { navigation } from '@/content/navigation';
import { siteContent } from '@/content/site';
export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="DJUFF — página inicial">
        <img src={siteContent.brand.logo} alt="" />
        <span>{siteContent.brand.name}</span>
      </a>
      <nav aria-label="Navegação principal">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a
        className="header-cta"
        href={siteContent.links.instagram}
        aria-label="Participar pelo Instagram"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
        Participar
      </a>
    </header>
  );
}
