import { Navigate } from "react-router-dom";
import { selectCurrentToken, signOut } from "../../../redux/feature/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
import { IProtectedRoute } from "../../../types/index.type";
import { isTokenExpired, verifyToken } from "../../../utils/verifyToken";

export default function ProtectedRoute({ allowedRole, children }: IProtectedRoute) {
  const token = useAppSelector(selectCurrentToken);
  const dispatch = useAppDispatch();

  let role;
  if (token) {
    role = verifyToken(token).role;
  }

  // isTokenExpired is used intentionally, will change to refresh token from base query later
  if (!token || isTokenExpired(token)) {
    dispatch(signOut());
    return <Navigate to="/login" replace={true} />;
  }

  if (!allowedRole || allowedRole !== role) {
    return <Navigate to="/" replace={true} />;
  }

  return <>{children}</>;
}
