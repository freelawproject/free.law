export function H1Hero({ children }) {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-light tracking-wide">
      {children}
    </h1>
  );
}

export function HeroHeading({ children }) {
  return (
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light leading-relaxed tracking-wide">
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
    <h2 className="text-2xl md:text-3xl lg:text-4xl md:leading-relaxed tracking-wide font-display">
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

export function H4({ children }) {
  return <h4 className="text-md md:text-l lg:text-xl font-bold text-black">{children}</h4>;
}

export function H5({ children }) {
  return <h5 className="uppercase text-md font-bold text-black tracking-wider pb-3">{children}</h5>;
}
