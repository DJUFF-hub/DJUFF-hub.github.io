type Organization = {
  name: string;
  url: string;
  logo: string;
  darkLogoBackground?: boolean;
};

type OrganizationGroup = {
  label?: string;
  partners: readonly Organization[];
};

export function OrganizationList({
  groups,
}: {
  groups: readonly OrganizationGroup[];
}) {
  return (
    <div className="partner-groups">
      {groups.map((group) => (
        <div key={group.label ?? group.partners[0]?.name}>
          {group.label && <h2>{group.label}</h2>}
          <ul>
            {group.partners.map((organization) => (
              <li key={organization.name}>
                <a href={organization.url} target="_blank" rel="noreferrer">
                  <img
                    className={
                      organization.darkLogoBackground
                        ? 'partner-logo partner-logo-dark'
                        : 'partner-logo'
                    }
                    src={organization.logo}
                    alt=""
                    loading="lazy"
                    width={36}
                    height={36}
                  />
                  <span className="partner-name">{organization.name}</span>
                  <span className="partner-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
