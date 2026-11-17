import { formerMembers, members, type Member } from '@/content/members';

export function MemberGrid({
  people,
  heading: NameHeading = 'h4',
}: {
  people: readonly Member[];
  heading?: 'h3' | 'h4';
}) {
  return (
    <div className="members-grid">
      {people.map((member) => (
        <article className="member" key={member.name}>
          <div className="member-photo">
            {member.photo ? (
              <img
                src={member.photo}
                alt={`Retrato de ${member.name}`}
                loading="lazy"
                width={800}
                height={1000}
              />
            ) : (
              <span className="member-photo-placeholder" aria-hidden="true" />
            )}
          </div>
          <NameHeading className="member-name">
            {member.profileUrl ? (
              <a href={member.profileUrl} target="_blank" rel="noreferrer">
                {member.name}
              </a>
            ) : (
              member.name
            )}
          </NameHeading>
          <p>{member.role}</p>
        </article>
      ))}
    </div>
  );
}

export function Members() {
  return (
    <section className="members-section" aria-labelledby="members-title">
      <div className="members-heading">
        <span className="section-number">02</span>
        <h2 id="members-title">Integrantes</h2>
      </div>
      <section className="member-group" aria-labelledby="current-members-title">
        <h3 id="current-members-title">Membros atuais</h3>
        <MemberGrid people={members} />
      </section>
      <section className="member-group" aria-labelledby="former-members-title">
        <h3 id="former-members-title">Ex-integrantes</h3>
        <MemberGrid people={formerMembers} />
      </section>
    </section>
  );
}
