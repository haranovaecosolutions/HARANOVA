const items = [
  "Plant based",
  "Compostable",
  "Biodegradable",
  "Plastic free",
  "Microwaveable",
  "Ovenable",
  "Freezer friendly",
  "Water & oil resistance",
];

export default function BrandMarquee() {
  return (
    <div className="marquee" aria-label="Product properties">
      <div className="marquee__track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}><i />{item}</span>
        ))}
      </div>
    </div>
  );
}
