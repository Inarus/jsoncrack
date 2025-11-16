import { useEffect } from "react";
import { useRouter } from "next/router";

export const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/editor");
  }, [router]);

  return null;
};

export default HomePage;
