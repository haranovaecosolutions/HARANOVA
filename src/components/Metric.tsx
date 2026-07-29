import Reveal from "./Reveal";

type MetricProps = { value: string; label: string; detail?: string; delay?: number };

export default function Metric({ value, label, detail, delay = 0 }: MetricProps) {
  return (
    <Reveal className="metric glass-card" delay={delay}>
      <strong>{value}</strong>
      <span>{label}</span>
      {detail && <p>{detail}</p>}
    </Reveal>
  );
}
