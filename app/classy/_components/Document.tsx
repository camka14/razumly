type SectionLink = Readonly<{ id: string; label: string }>;

type DocumentProps = Readonly<{
  title: string;
  intro: string;
  sections?: readonly SectionLink[];
  children: React.ReactNode;
}>;

export default function Document({ title, intro, sections, children }: DocumentProps) {
  return (
    <article className="classy-document">
      <h1>{title}</h1>
      <p className="classy-intro">{intro}</p>
      {sections && (
        <nav className="classy-contents" aria-label="On this page">
          <h2>On this page</h2>
          <ul>
            {sections.map(({ id, label }) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
        </nav>
      )}
      {children}
    </article>
  );
}
