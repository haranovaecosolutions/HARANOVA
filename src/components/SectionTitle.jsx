function SectionTitle({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#8a6f3d]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-[#1f2f24] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-[#5f6b61] md:text-lg">
          {description}
        </p>
      )}

      <div className={center ? "gold-line mx-auto mt-6" : "gold-line mt-6"} />
    </div>
  );
}

export default SectionTitle;