import Footer from "./Footer";
import Header from "./Header";

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "50%",
        margin: "auto",
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
