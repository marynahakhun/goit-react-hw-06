import { Formik, Form } from "formik"
import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../../redux/filtersSlice'
export default function SearchBox() {
    const dispatch = useDispatch()
  const filterValue = useSelector((store)=>store.filter.name)
  console.log(filterValue);

  const handleSearch = (evt) => {
      const keyword = evt.currentTarget.value.trim();
      dispatch(search(keyword))
  }
    return <Formik>
        <Form className={css.form}>
            <p className={css.label}>Search by name</p>
            <input type="text"   value={filterValue}
      onChange={handleSearch} />
        </Form>
    </Formik>
}