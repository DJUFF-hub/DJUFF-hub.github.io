import Link from 'next/link';
import { navigation } from '@/content/navigation';
import { siteContent } from '@/content/site';
export function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="DJUFF — página inicial">
        <img src={siteContent.brand.logo} alt="" />
        <span>{siteContent.brand.name}</span>
      </Link>
      <nav aria-label="Navegação principal">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <a
        className="header-cta"
        href={siteContent.links.instagram}
        target="_blank"
        rel="noreferrer"
      >
        Participar <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
