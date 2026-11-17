import { founders } from '@/content/members';

export function Founders() {
  return (
    <section className="founders" aria-labelledby="founders-title">
      <div className="founders-heading">
        <h2 id="founders-title">Fundadores</h2>
        <span>2018–2019</span>
      </div>
      <div className="founders-portraits">
        {founders.map((founder) => (
          <figure key={founder.name}>
            <img
              src={founder.photo}
              alt={`Retrato de ${founder.name}`}
              width={240}
              height={300}
              loading="lazy"
            />
            <figcaption>{founder.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
