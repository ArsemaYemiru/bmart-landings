import { useNavigate } from "react-router-dom";

export const scrollToHash = (navigate: ReturnType<typeof useNavigate>, pathWithHash: string) => {
    navigate(pathWithHash);
  
    const [, hash] = pathWithHash.split("#");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView();
        }
      }, 200);
    }
  };
  