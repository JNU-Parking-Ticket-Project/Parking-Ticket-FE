import { useLogoutMutate } from "./react-query/useUser";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const { postLogout } = useLogoutMutate();
    const navigate = useNavigate();

    const onLogout = () => {
        postLogout(
            {
                refreshToken: "",
            },
            {
                onError: (error) => {
                    alert(error.message);
                },
                onSuccess: () => {
                    navigate("/");
                },
            }
        );
    }
    return { onLogout };
}