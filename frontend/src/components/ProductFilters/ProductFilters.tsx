import s from './ProductFilters.module.css';

const CATEGORIES = ['Burgers', 'Pizza', 'Drinks', 'Desserts', 'Salads'];

interface Props {
  category: string;
  sort: string;
  onCategoryChange: (c: string) => void;
  onSortChange: (s: string) => void;
}

export default function ProductFilters({ category, sort, onCategoryChange, onSortChange }: Props) {
  return (
    <div className={s.wrap}>
      <div className={s.categories}>
        <button
          className={s.btn}     
          onClick={() => onCategoryChange('')}>
          All
        </button>
        {CATEGORIES.map(c => (
          <button
            key={c}
            className={s.btn}
            onClick={() => onCategoryChange(category === c ? '' : c)}
          >
            {c}
          </button>
        ))}
      </div>
      <select
        value={sort}
        onChange={e => onSortChange(e.target.value)}
      >
        <option value="">Default sort</option>
        <option value="price_asc">Price: Low → High</option>
        <option value="price_desc">Price: High → Low</option>
        <option value="name_asc">Name: A → Z</option>
      </select>
    </div>
  );
}