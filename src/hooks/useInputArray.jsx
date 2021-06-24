import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
    }
    setText(e.target.value.trim());
  }, []);
  // prev 前のみたいなニュアンスで使われること多い
  // 破壊的メソッドを避けるためにつかうのがスプレッド構文
  // 破壊的メソッドとはオブジェクト自体を変更するもの、基本使わない
  // 破壊的メソッドがなぜだめなのか、ミュータブル 変更可能、イミュータブル 変更不可
  // ミュータブルは悪、イミュータブルがよい
  // some 合致するものがあればtrue,なければfalse
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.includes(text)) {
        alert("同じ要素がすでに存在します");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);
  return { text, array, handleChange, handleAdd };
};
