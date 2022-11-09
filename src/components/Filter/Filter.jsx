import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filterSlice.js';
import { getFilter } from '../redux/selectors';

export function Filter() {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className="contact-form__search"
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </>
  );
}
