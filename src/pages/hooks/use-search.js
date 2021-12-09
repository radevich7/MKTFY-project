import { useContext } from "react";
import AppContext from "../../store/app-context";
const useSearch = (category, city) => {
  const [store, dispatch] = useContext(AppContext);
  GET(`/api/listing/category/${category}?region=${city}`).then((res) => {
    if (!res.failed) {
      if (res.data.length > 0) {
        dispatch({ type: "SET_SEARCH_LISTINGS", searchListings: res.data });
      } else {
        dispatch({ type: "SET_SEARCH_LISTINGS", searchListings: null });
      }
      // Pushing to the content page and setting the state to search
      return history.push("/content/", { state: "search" });
    } else {
      return alert("Something went wrong, please try again later");
    }
  });
};
