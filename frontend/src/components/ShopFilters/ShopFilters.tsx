import s from './ShopFilters.module.css';

const RANGES = [
  { label: '⭐ 4.0 – 5.0', min: 4.0, max: 5.0 },
  { label: '⭐ 3.0 – 4.0', min: 3.0, max: 4.0 },
  { label: '⭐ 2.0 – 3.0', min: 2.0, max: 3.0 },
];

interface Props {
  minRating: number | undefined;
  onChange: (min?: number, max?: number) => void;
}

export default function ShopFilters({ minRating, onChange }: Props) {
  return (
    <div className={s.wrap}>
      <span className={s.label}>Filter by rating:</span>
      <button
        className={s.btn}         
        onClick={() => onChange(undefined, undefined)}
      >
        All
      </button>
      {RANGES.map(r => (
        <button
          key={r.label}
          className={s.btn} 
          onClick={() => onChange(r.min === minRating ? undefined : r.min, r.min === minRating ? undefined : r.max)}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}