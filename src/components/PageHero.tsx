import type { ReactNode } from "react";
import Reveal from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  image?: string;
  sectionClassName?: string;
};

export default function PageHero({ eyebrow, title, description, children, image, sectionClassName }: PageHeroProps) {
  return (
    <section className={`page-hero shell-section ${sectionClassName ?? ""}`}>
      <div className="page-hero__orb page-hero__orb--one" />
      <div className="page-hero__orb page-hero__orb--two" />
      <div className="container page-hero__grid">
        <Reveal className="page-hero__content">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {children && <div className="page-hero__actions">{children}</div>}
        </Reveal>
        {image && (
          <Reveal className="page-hero__visual" delay={0.12}>
            <div className="page-hero__image-frame glass-card">
              <img src={image} alt="HaraViba sustainable packaging" />
              <div className="page-hero__image-glow" />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
