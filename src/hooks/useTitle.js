import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Express Hotel`;
  }, [title]);
};
export default useTitle;
