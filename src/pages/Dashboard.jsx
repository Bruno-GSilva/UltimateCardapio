import Header from "../components/Header";
import Login from "../components/Login";

function Dashboard() {
    return (
        <>
            <Header />
            <section className="w-full h-screen flex justify-center items-center bg-black">
            <Login/>
            </section>
        </>
    );
}

export default Dashboard;