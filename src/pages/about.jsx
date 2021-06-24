import Head from "next/head";
import classes from "../styles/Home.module.css";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";

// useCallback再レンダリングされた時に再生成されることがない
const About = (
  // useCallbackがの第２引数から配列だとと再生成されない
  // useCallbackの第２引数がcountだとcountに変化があった時に再生成される
  // ライフサイクル DOMが呼ばれた時マウント、アンマウント
  // 関数をリターンすることでアンマウント時の挙動
  // useEffectの第2引数になにか動きがある時にuseEffecyが実行される
  props
) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {/* nullを表示する事によって何も表示させないことが化膿 */}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      {props.isShow ? <h2>{props.doubleCount}</h2> : null}
      <hr />
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="about" />
      <Footer />
    </div>
  );
};

export default About;