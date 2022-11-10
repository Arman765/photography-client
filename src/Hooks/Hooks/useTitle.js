import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Vision Maker`;
  }, [title]);
};

export default useTitle;
