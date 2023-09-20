import { useEffect } from "react";

const useTittle = (title) => {
  useEffect(() => {
    document.title = `${title} - Toodle Toys`;
  }, [title]);
};

export default useTittle;
