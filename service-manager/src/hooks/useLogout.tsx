import { useLogoutMutate } from "./react-query/useUser";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../functions/jwt";
import { UserToken } from "../apis/dtos/user.dtos";

export const useLogout = () => {
    const { postLogout } = useLogoutMutate();
    const navigate = useNavigate();

    const onLogout = () => {
        postLogout(UserToken, {
            onError: (error) => {
                alert(error.message);
            },
            onSuccess: () => {
                removeToken();
                navigate('/');
            }
        })
    }
    return { onLogout };
}