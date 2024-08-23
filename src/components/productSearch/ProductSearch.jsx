import { useEffect, useState } from "react";
import "./ProductSearch.css";
import { useDispatch } from "react-redux";
import { productListActions } from "../../redux/slices/productListSlice";
import useDebaunce from "../../hooks/useDebaunce";

export default function ProductSearch() {
  const [search, setSearch] = useState("");
  const debauncedValue = useDebaunce(search, 2000)
  const dispatch = useDispatch();
  function onChangeSearch(event) {
    setSearch(event.target.value);
  }
  useEffect(() => {
    dispatch(productListActions.addSearchProducts(debauncedValue));
  }, [debauncedValue, dispatch]);
  return (
    <input
      className="search_input"
      type="text"
      value={search}
      onChange={onChangeSearch}
    />
  );
}
