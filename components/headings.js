export function H1Hero({ children }) {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-light tracking-wide leading-[2.5rem] md:leading-[2.5rem] lg:leading-[3rem]">
      {children}
    </h1>
  );
}

export function HeroHeading({ children }) {
  return (
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] tracking-wide">
      {children}
    </h1>
  );
}

export function HeroHeadingMono({ children }) {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] tracking-widest font-mono">
      {children}
    </h1>
  );
}

export function H1({ children, extraClasses }) {
  let classes = 'font-display font-light tracking-wide';
  if (extraClasses) {
    classes += ' ' + extraClasses;
  }
  return <h1 className={classes}>{children}</h1>;
}

export function H2({ children }) {
  return (
    <h2 className="text-2xl md:text-3xl lg:text-4xl leading-[2.5rem] md:leading-[2.5rem] lg:leading-[3rem] tracking-wide font-display">
      {children}
    </h2>
  );
}

export function H3({ children }) {
  return (
    <h3 className="text-lg md:text-xl lg:text-2xl md:leading-relaxed tracking-wide font-display">
      {children}
    </h3>
  );
}

function computeId(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-');
}

export function H3ForNavigation({ children }) {
  const id = computeId(children);
  return (
    <h3 id={id}>
      {children}
    </h3>
  );
}

export function H4({ children }) {
  return <h4 className="text-md md:text-l lg:text-xl font-bold text-black">{children}</h4>;
}

export function H5({ children }) {
  return <h5 className="uppercase text-md font-bold text-black tracking-wider pb-3">{children}</h5>;
}
