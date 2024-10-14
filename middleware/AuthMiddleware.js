import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function AuthMiddleware({ children }) {
  const router = useRouter();
  const { data, status } = useSession();
  if (status == "loading") {
    return "loading";
  }
  if (status == "unauthenticated") {
    router.push("/login");
  } else if (status == "authenticated") {
    if (
      data.user.email == "dimasnyoman1@gmail.com" ||
      data.user.email == "lspsertifikasi@gmail.com" ||
      data.user.email == "gatensikaryakonstruksi@gmail.com"
    ) {
      return <div id="admin">{children}</div>;
    }
    router.push("/login");
  }
}
