import { members } from '@/content/members';

export function Members(){return <section className="members-section" aria-labelledby="members-title"><div className="members-heading"><span className="section-number">02</span><h2 id="members-title">Integrantes</h2><p>Os retratos poderão ser incluídos pela equipe conforme forem produzidos.</p></div><div className="members-grid">{members.map(member=><article className="member" key={member.name}><div className="member-photo" aria-hidden="true"/><h3>{member.name}</h3><p>{member.role}</p></article>)}</div></section>}
