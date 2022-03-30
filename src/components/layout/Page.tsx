import Footer from "./Footer";
import Header from "./Header";

interface PageProps {
    children: React.ReactNode;
}
const Page = ({children} :PageProps) => {
    return (
        <div>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}

export default Page;