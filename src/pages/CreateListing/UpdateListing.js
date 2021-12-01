import CreateListing from "./CreateListing";
import { GET } from "../../api/api";
import React, { useEffect, useState } from "react";

const UpdateListing = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    GET("/api/listing/6ce3f84a-2300-4865-a21c-23e61260104b").then((res) => {
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
        />
      )}
    </React.Fragment>
  );
};

export default UpdateListing;
