import Directory from "../../components/Directory/Directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Directory />;
            <Outlet />
        </div>
    );
};

export default Home;
