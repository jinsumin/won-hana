import Header from "./layout/header";
import Footer from "./layout/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
