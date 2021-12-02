import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateListing from "./CreateListing";
import { GET } from "../../api/api";

const UpdateListing = () => {
  const [data, setData] = useState(null);
  const id = useParams();
  const listingId = Object.values(id).toString();
  console.log(listingId);

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
        />
      )}
    </React.Fragment>
  );
};

export default UpdateListing;
