import { Download, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import PageHero from "../../components/PageHero";
import { asset } from "../../lib";

const catalogueImages = Array.from({ length: 8 }, (_, index) => `assets/catalogue/page-${index + 1}.webp`);

export default function CataloguePage() {
  const pdf = asset("HaraViba-Catalogue.pdf");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % catalogueImages.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  const activeImage = asset(catalogueImages[activeImageIndex]);

  return (
    <main>
      <PageHero
        eyebrow="Company catalogue"
        title="The complete HaraViba story in eight visual pages."
        description="Review the original catalogue inside the website, browse page previews or download the PDF for procurement and internal discussion."
        image={asset("assets/cata.png")}
      >
        <a href={pdf} download className="button button--forest">Download PDF <Download size={18} /></a>
        <a href={pdf} target="_blank" rel="noreferrer" className="button button--ghost">Open full screen <ExternalLink size={18} /></a>
      </PageHero>
    </main>
  );
}
