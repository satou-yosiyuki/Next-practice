import classes from "./HeadLine.module.css";

export const HeadLine=(props)=> {
  return (
    <div>
      <h1 className={classes.title}>
        {props.page} <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={classes.description}>Get started by editing </p>
    </div>
  );
}
