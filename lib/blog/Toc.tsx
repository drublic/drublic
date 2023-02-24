import Link from "next/link";

const parse = (values = [], carriage = true) => {
  if (!values.length) {
    return [];
  }

  const [
    { depth, title, link } = {
      depth: undefined,
      title: undefined,
      link: undefined,
    },
    next = {},
    ...rest
  ] = values;

  if (depth !== undefined && carriage) {
    return [
      {
        depth,
        headings: next.depth > depth ? parse([next, ...rest]) : [],
        title,
        link,
        ...rest,
      },
      ...(next.depth < depth
        ? []
        : parse([next, ...rest], next.depth === depth)),
    ];
  }

  if (depth !== undefined) {
    return parse([next, ...rest], next.depth < depth);
  }

  return [];
};

const Toc = ({ entry }) => {
  const outline = [
    ...entry.matchAll(/<h([\d])([^>]+)>([^<]+)<\/h([\d])>/gi),
  ].map((match) => ({
    depth: parseInt(match[1], 10),
    link: match[2].match(/"([^"]+)"/gi)[0].replace(/"/g, ""),
    title: match[3],
  }));

  return (
    <aside className="toc">
      <p className="typography--h4">Table of Contents</p>
      <ol>
        {parse(outline).map(({ title, link, headings }, index) => (
          <li key={index}>
            <Link href={`#${link}`}>{title}</Link>

            {headings.length > 0 && (
              <ol>
                {headings.map(({ title, link, headings }, index) => (
                  <li key={index}>
                    <Link href={`#${link}`}>{title}</Link>

                    {headings.length > 0 && (
                      <ol>
                        {headings.map(({ title, link }, index) => (
                          <li key={index}>
                            <Link href={`#${link}`}>{title}</Link>
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </aside>
  );
};

export default Toc;
