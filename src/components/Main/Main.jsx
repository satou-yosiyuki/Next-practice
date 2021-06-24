import { Links } from "../Links/Links";
import classes from "./Main.module.css";
import { HeadLine } from "../HeadLine/HeadLine";
import { useState } from "react";
import { useCallback } from "react/cjs/react.development";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation &rarr;",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn &rarr;",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples &rarr;",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy &rarr;",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export const Main=(props)=> {
  // useEffect(() => {
  //   document.body.style.backgroundColor = "lightblue";
  //   return () => {
  //     document.body.style.backgroundColor = "";
  //   };
  // }, []);
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);
  return (
    <main className={classes.main}>
      <HeadLine page={props.page} handleReduce={handleReduce}>
        <code className={classes.code}>{items.length}</code>
      </HeadLine>
      <Links items={items} handleReduce={handleReduce}/>
    </main>
  );
}
