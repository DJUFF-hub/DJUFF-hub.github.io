import { navigation } from '@/content/navigation';

export function HomeNavigation() {
  return (
    <section
      className="section home-navigation"
      aria-labelledby="home-navigation-title"
    >
      <h2 id="home-navigation-title">Explore o DJUFF</h2>
      <ul>
        {navigation.map((page) => (
          <li key={page.href}>
            <a href={page.href}>
              <h3>
                {page.label}
                <span aria-hidden="true">→</span>
              </h3>
              <p>{page.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
