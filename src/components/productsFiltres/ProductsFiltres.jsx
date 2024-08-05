import { useEffect, useState } from "react";
import classNames from "classnames";
import "./ProductsFiltres.css";
import { api } from "../../api/api";

export default function ProductsFiltres() {
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  function onClickHandle(filter) {
    setActiveFilter(filter);
  }
  useEffect(() => {
    api
      .getCategories()
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.slice(0, 5).map((el) => el.name));
      });
  }, []);

  return (
    <div className="filters_box">
      {categories.map((el) => (
        <div
          className={classNames("filters_item", {
            active_filter: el === activeFilter,
          })}
          key={el}
          onClick={() => onClickHandle(el)}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
