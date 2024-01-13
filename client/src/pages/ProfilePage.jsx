import BaseTemplate from "../components/BaseTemplate";
import { useAuth } from "../contexts/AuthContext";

function ProfilePage() {
  const {user} = useAuth();
  return (
    <>
      <BaseTemplate content={
        <div>Bienvenido a tu perfil, usuario con DNI {user.dni}</div>
      }/>
    </>
  )
}

export default ProfilePage;