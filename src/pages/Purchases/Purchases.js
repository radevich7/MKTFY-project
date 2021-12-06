import { useEffect, useState, Fragment } from "react";
import { Container, CardGroup } from "reactstrap";
import { GET } from "../../api/api";
import { LoadingSpinner } from "../../reusableComponent/Spinner";
import MyListingCard from "../../reusableComponent/MyListingCard";
import "./Purchases.css";

const Purchases = () => {
  const [loading, setLoading] = useState(true);
  const [purchased, setPurchased] = useState(null);
  const [pending, setPending] = useState(null);
  console.log(pending);
  useEffect(() => {
    GET("/api/mypurchases").then((res) => {
      if (!res.failed) {
        let pending = res.data.filter(
          (listing) => listing.transactionStatus === "pending"
        );
        setPending(pending);
        let purchased = res.data.filter(
          (listing) => listing.transactionStatus === "sold"
        );
        setPurchased(purchased);
        setLoading(false);
      }
    });
  }, []);

  return (
    <Container fluid className="purchases_container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="border_document_purchases">
          <CardGroup
            className="d-flex flex-column"
            style={{ maxWidth: "808px" }}
          >
            {purchased &&
              purchased.map((listing) => {
                return (
                  <MyListingCard
                    key={listing.id}
                    imageUrl={listing.imageUrl}
                    product={listing.product}
                    price={listing.price}
                    id={listing.id}
                    dateSold={listing.dateSold}
                    getContactInfo={true}
                    purchased={true}
                    pending={false}
                  />
                );
              })}
            {pending &&
              pending.map((listing) => {
                return (
                  <MyListingCard
                    key={listing.id}
                    imageUrl={listing.imageUrl}
                    product={listing.product}
                    price={listing.price}
                    id={listing.id}
                    dateSold={listing.dateSold}
                    getContactInfo={true}
                    pending={true}
                    purchased={false}
                  />
                );
              })}
          </CardGroup>
        </div>
      )}
    </Container>
  );
};

export default Purchases;
