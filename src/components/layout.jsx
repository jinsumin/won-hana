import Header from "./layout/header";
import Footer from "./layout/footer";

export default function Layout({ children, theme}) {
  return (
    <>
      <Header theme={theme}/>
      <div>{children}</div>
      <Footer theme={theme}/>
    </>
  );
}
