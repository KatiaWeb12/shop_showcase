import { useEffect, useState } from "react";
import classNames from "classnames";
import "./ProductsFiltres.css";
import { api } from "../../api/api";

export default function ProductsFiltres({activeFilter, setActiveFilter}) {
  const [categories, setCategories] = useState([]);
  function onClickHandle(filter) {
    setActiveFilter(filter);
  }
  useEffect(() => {
    api
      .getCategories()
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.slice(0, 5).map((el) => ({
          name: el.name,
          id: el.id
        })));
      });
  }, []);

  return (
    <div className="filters_box">
      {categories.map(({name, id}) => (
        <div
          className={classNames("filters_item", {
            active_filter: id === activeFilter,
          })}
          key={id}
          onClick={() => onClickHandle(id)}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
