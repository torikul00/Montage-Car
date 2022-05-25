import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import auth from "./firebase.init";
import Loading from "./Loading/Loading";

const RequireAdmin = ({ children }) => {
    let [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    let location = useLocation();

    if (loading || adminLoading) {
        return <Loading />
    }
    console.log(admin)


    if (!user || !admin ) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    console.log('return')
    return children;
}
export default RequireAdmin;