import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';

import css from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = ev => {
    dispatch(setFilterValue(ev.target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
          className={css.input}
        />
      </label>
    </div>
  );
}
