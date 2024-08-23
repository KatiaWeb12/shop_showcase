import { useEffect, useState } from "react";

export default function useDebaunce(value, delay) {
  //кастомный хук
  const [debauncedValue, setDebauncedValue] = useState(value); //нужное пользователю значение
  useEffect(() => {
    console.log(value);
    const timerId = setTimeout(() => {
      //действия после наступления временного промежутка
      console.log("setValue");
      setDebauncedValue(value); //время прошло, значит, значение нужное
    }, delay);
    return () => {
      console.log("reset");
      clearTimeout(timerId); //значение изменилось до окончания таймера, значит, значение не нужное, отменяем таймер
    };
  }, [value, delay]);
  return debauncedValue;
}
