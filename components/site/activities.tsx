import { siteContent } from '@/content/site';
export function Activities() {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <span className="section-number">01</span>
          <h1>Atividades</h1>
        </div>
        <p>
          As frentes mudam conforme as pessoas e os projetos. Estas são as
          quatro atividades permanentes.
        </p>
      </div>
      <ol className="activity-list">
        {siteContent.activities.map((a, i) => (
          <li key={a.title}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <h2>{a.title}</h2>
            <p>{a.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
