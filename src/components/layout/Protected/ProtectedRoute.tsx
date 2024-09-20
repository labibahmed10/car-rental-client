import { Navigate } from "react-router-dom";
import { selectCurrentToken, selectCurrentUser } from "../../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../../redux/store/hooks";
import { IProtectedRoute } from "../../../types/index.type";

export default function ProtectedRoute({ allowedRole, children }: IProtectedRoute) {
  const token = useAppSelector(selectCurrentToken);
  const role = useAppSelector(selectCurrentUser)?.role;

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  if (!role || !(allowedRole === role)) {
    return <Navigate to="/" replace={true} />;
  }

  return <>{children}</>;
}
