import classNames from 'classnames';
import Link from 'next/link';

const BADGE_STYLES = {
  piloting: { classes: 'bg-indigo-50 text-indigo-800', dot: 'bg-indigo-500' },
  award: { classes: 'bg-yellow-100 text-yellow-900', dot: 'bg-yellow-500' },
  available: { classes: 'bg-green-100 text-green-800', dot: 'bg-green-600' },
  early: { classes: 'bg-gray-100 text-gray-700', dot: 'bg-gray-500' },
  onDark: { classes: 'bg-white/15 text-white', dot: 'bg-white' },
};

export function StatusBadge({ variant, children }) {
  const style = BADGE_STYLES[variant] ?? BADGE_STYLES.early;
  return (
    <span
      className={classNames(
        'inline-flex self-start items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold',
        style.classes
      )}
    >
      <span aria-hidden="true" className={classNames('h-2 w-2 rounded-full', style.dot)} />
      {children}
    </span>
  );
}

export function JIHero({ eyebrow, title, children, breadcrumb }) {
  return (
    <section className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-12 pb-16 md:pt-20 md:pb-20 flex flex-col gap-6">
        {breadcrumb}
        {eyebrow}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight max-w-4xl">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}

export function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="underline underline-offset-4 hover:text-green-100">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SectionIntro({ id, title, children }) {
  return (
    <div className="flex flex-col gap-4 max-w-3xl">
      <h2
        id={id}
        className="text-3xl md:text-4xl font-display font-semibold leading-tight text-gray-900"
      >
        {title}
      </h2>
      {children ? <div className="text-lg leading-relaxed text-gray-700">{children}</div> : ''}
    </div>
  );
}

export function Principle({ title, children, borderClass = 'border-t-2 border-green-600' }) {
  return (
    <div className={classNames('flex flex-col gap-2 pt-5', borderClass)}>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="leading-relaxed text-gray-700">{children}</p>
    </div>
  );
}

export function Card({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag
      {...props}
      className={classNames(
        'bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-4',
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function GreenButton({ href, children, outline, onDark }) {
  const classes = classNames(
    'inline-block text-center rounded-lg px-5 py-3 text-base font-semibold no-underline border-2',
    onDark
      ? outline
        ? 'border-white text-white hover:bg-white/10'
        : 'border-white bg-white text-green-800 hover:bg-green-50'
      : outline
        ? 'border-green-700 text-green-800 hover:bg-green-50'
        : 'border-green-700 bg-green-700 text-white hover:bg-green-800'
  );
  const external = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#');
  return external ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
