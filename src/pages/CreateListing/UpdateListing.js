import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GET } from "../../api/api";
import CreateListing from "./CreateListing";

const UpdateListing = () => {
  const [data, setData] = useState(null);
  const location = useLocation();
  // GETTING LISTING ID AND THE STATUS FROM PATH
  const listingId = location.state.listingId;
  const pending = location.state.pending;
  const listed = location.state.listed;

  //GETTING DATAF ROM THE BACKEND
  useEffect(() => {
    GET(`/api/listing/${listingId}`).then((res) => {
      if (!res.failed) {
        setData(res.data);
      }
    });
  }, []);

  return (
    <React.Fragment>
      {data && (
        <CreateListing
          updateButtons={true}
          data={data}
          images={data.images.map(({ url }) => url)}
          imagesId={data.images.map(({ id }) => id)}
          listingId={listingId}
          pending={pending}
          listed={listed}
        />
      )}
    </React.Fragment>
  );
};

export default UpdateListing;
