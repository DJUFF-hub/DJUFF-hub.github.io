import { OrganizationList } from '@/components/site/organization-list';
import { MemberGrid } from '@/components/site/members';
import { partnerMembers } from '@/content/members';
import { siteContent } from '@/content/site';
export function Partners() {
  return (
    <section className="section partners-section">
      <div className="section-heading">
        <div>
          <span className="section-number">01</span>
          <h1>Parceiros</h1>
        </div>
        <p>
          Instituições e grupos que fortalecem a formação, a produção e o
          ecossistema de jogos no Rio de Janeiro.
        </p>
      </div>
      <OrganizationList groups={siteContent.partnerGroups} />
      <section
        className="member-group individual-partners"
        aria-labelledby="partner-members-title"
      >
        <h2 id="partner-members-title">Parceiros pessoa-física</h2>
        <MemberGrid people={partnerMembers} heading="h3" />
      </section>
    </section>
  );
}

export function Sponsors() {
  return (
    <section
      className="section sponsors-section"
      aria-labelledby="sponsors-title"
    >
      <div className="section-heading">
        <div>
          <span className="section-number">02</span>
          <h2 id="sponsors-title">Patrocinadores recorrentes</h2>
        </div>
        <p>
          Empresas e iniciativas que apoiam os eventos do DJUFF de forma
          recorrente.
        </p>
      </div>
      <OrganizationList
        groups={siteContent.sponsors.map((sponsor) => ({
          partners: [sponsor],
        }))}
      />
    </section>
  );
}
