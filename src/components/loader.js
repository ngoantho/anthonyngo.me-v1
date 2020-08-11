import NProgress from "nprogress";
import { styled } from "goober";
import { useEffect } from "react";

const LoaderOverlay = styled("div")`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: var(--glob-bg);
`;

export default function Loader({ onFinishLoading }) {
  let id = 0;
  useEffect(() => {
    NProgress.configure({ trickleSpeed: 100 });
    NProgress.start();

    id = setTimeout(() => {
      NProgress.done();
      onFinishLoading();
    }, 500);

    return () => clearTimeout(id);
  }, []);

  return <LoaderOverlay />;
}
