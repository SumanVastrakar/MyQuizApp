import { useNavigate, Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { loginStatus } from "../../Redux/AdminPage/action";
export const PrivateRoutes = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector(store => store.adminLogin.loginStatus)
    const isAuth = JSON.parse(localStorage.getItem("profile"))
    console.log("loginStatus:", isAuth)
    if (isAuth !== null) {

        dispatch(loginStatus(true))
    } else {
        dispatch(loginStatus(false))
    }
    console.log("isAuth of private Route", isAuth)
    if (!status) {
        return <Navigate to="/userlogin" replace={true} />
    }
    else {
        return children;
    }
}