import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import useIsMobile from "~/hooks/useIsMobile";

function Index() {
  const isMobile = useIsMobile();
  const [isMobileVersion, setIsMobileVersion] = useState(false);

  useEffect(() => {
    setIsMobileVersion(isMobile);
  }, [isMobile]);
  
  return(
    <div
      className={`${
        isMobileVersion ? "p-5 justify-center" : "px-60 py-20"
      } bg-primary-background min-h-screen w-screen flex flex-col gap-10`}
    >
      <div
        className={`flex flex-col min-h-screen gap-2 justify-center items-center`}
      >
        <h1 className="text-3xl font-bold">Oops página errada</h1>
        <Link className="underline text-base" to={'/explore'}>Me leve para /Explore</Link>
      </div>
    </div>
  )
}

export default Index;