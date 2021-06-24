import { useMemo } from "react";
import { useCallback, useState } from "react";
// Reactのコンポーネント内でなにか定義するときは全てに対してuseMemo,関数だったらuseCallback
export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsshow] = useState(true);
  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevcount) => prevcount + 1);
      //  count=count+1
      //  console.log(count);
    }
  }, [count]);
  const handleDisplay = useCallback(() => {
    setIsshow((previsShow) => !previsShow);
  }, []);

  return { count, doubleCount, isShow, handleClick, handleDisplay };
};
