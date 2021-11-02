import {
  Collapse,
  CardBody,
  Card,
  CardHeader,
  Container,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { FaCaretRight } from "react-icons/fa";
const Faq = () => {
  const [toggleQuestion, setToggequestion] = useState(1); //1 is the default id to be opened by default

  return (
    <Container fluid className="faq_container">
      <Card className="border_document_faq">
        <div className="page_path">
          <Link to="/home" className="link_home">
            <span>home</span>
          </Link>
          <span className="arrow_path"> {">"} </span>
          <span>FAQ</span>
        </div>
        <h1>Frequently Asked Questions</h1>
        <Row className="faq_row_container">
          <Col lg="4" className="faq_hints">
            <Row>
              <CardHeader
                onClick={() => setToggequestion(1)}
                className={toggleQuestion === 1 ? "active_item" : ""}
              >
                <span>How MKTFY works?</span>

                <span className="faq_caret">
                  <FaCaretRight />
                </span>
              </CardHeader>
            </Row>
            <Row>
              <CardHeader
                onClick={() => setToggequestion(2)}
                className={toggleQuestion === 2 ? "active_item" : ""}
              >
                <span>How I can sell things on MKTFY</span>
                <span className="faq_caret">
                  <FaCaretRight />
                </span>
              </CardHeader>
            </Row>
            <Row>
              <CardHeader
                onClick={() => setToggequestion(3)}
                className={toggleQuestion === 3 ? "active_item" : ""}
              >
                <span>Where the products come from?</span>
                <span className="faq_caret">
                  <FaCaretRight />
                </span>
              </CardHeader>
            </Row>
            <Row>
              <CardHeader
                onClick={() => setToggequestion(4)}
                className={toggleQuestion === 4 ? "active_item" : ""}
              >
                <span>Can I have a refund?</span>
                <span className="faq_caret">
                  <FaCaretRight />
                </span>
              </CardHeader>
            </Row>
            <Row>
              <CardHeader
                onClick={() => setToggequestion(5)}
                className={toggleQuestion === 5 ? "active_item" : ""}
              >
                <span>Where MKTFY is based?</span>
                <span className="faq_caret">
                  <FaCaretRight />
                </span>
              </CardHeader>
            </Row>
          </Col>

          <Col lg="8" className="text_container">
            <Collapse isOpen={toggleQuestion === 1 ? true : false}>
              <CardBody className="cardBody_text">
                <h2>How MKTFY works?</h2>
                <p>
                  These Terms of Service constitute a legally binding agreement
                  made between you, whether personally or on behalf of an entity
                  (“you”) and [business entity name] (“we,” “us” or “our”),
                  concerning your access to and use of the [website name.com]
                  website as well as any other media form, media channel, mobile
                  website or mobile application related, linked, or otherwise
                  connected thereto (collectively, the “Site”).
                </p>{" "}
                <p>
                  You agree that by accessing the Site, you have read,
                  understood, and agree to be bound by all of these Terms of
                  Service. If you do not agree with all of these Terms of
                  Service, then you are expressly prohibited from using the Site
                  and you must discontinue use immediately.
                </p>
                <p>
                  Supplemental Terms of Service or documents that may be posted
                  on the Site from time to time are hereby expressly
                  incorporated herein by reference. We reserve the right, in our
                  sole discretion, to make changes or modifications to these
                  Terms of Service at any time and for any reason.
                </p>
                <p>
                  We will alert you about any changes by updating the “Last
                  updated” date of these Terms of Service, and you waive any
                  right to receive specific notice of each such change.
                </p>
                <p>
                  It is your responsibility to periodically review these Terms
                  of Service to stay informed of updates. You will be subject
                  to, and will be deemed to have been made aware of and to have
                  accepted, the changes in any revised Terms of Service by your
                  continued use of the Site after the date such revised Terms of
                  Service are posted.
                </p>
                <p>
                  The information provided on the Site is not intended for
                  distribution to or use by any person or entity in any
                  jurisdiction or country where such distribution or use would
                  be contrary to law or regulation or which would subject us to
                  any registration requirement within such jurisdiction or
                  country.
                </p>
              </CardBody>
            </Collapse>
            <Collapse isOpen={toggleQuestion === 2 ? true : false}>
              <CardBody className="cardBody_text">
                <h2>How I can sell things on MKTFY</h2>
                <p>
                  To get the most money for your item, it is an absolute must
                  for you to take great pictures. If you have no pictures at
                  all, buyers will probably scroll right past your item. Here
                  are the steps I take to take great pictures: A decent
                  cellphone camera will do. Have good lighting. Take pictures of
                  the item from different angles. Snap at least three pictures.
                  Aim for five or more. To make it easy to access my pictures
                  are uploaded automatically onto my Google Photos. You can set
                  up something similar with iCloud or Dropbox.
                </p>
                <p>
                  Search on Kijiji for a similar item to yours. Try to find one
                  in a similar condition to yours as well. Come up with a range
                  of what you think your item will sell for. If you have time to
                  sell, start at the higher range and see what responses you
                  get. If you don’t get many responses, start dropping the
                  price. If you just want a quick sale, list the item at the
                  lower range. Depending on your item, it might be harder to
                  price. If it’s something like a cell phone, there will be lots
                  of comparable items. If it’s something like artwork that is
                  one of a kind, that would be harder to price. When in doubt,
                  start high in price and work your way down depending on your
                  responses.
                </p>
                <p>
                  Supplemental Terms of Service or documents that may be posted
                  on the Site from time to time are hereby expressly
                  incorporated herein by reference. We reserve the right, in our
                  sole discretion, to make changes or modifications to these
                  Terms of Service at any time and for any reason.
                </p>

                <p>
                  To save time, I like to borrow ideas from other similar
                  postings if possible. You can use an existing posted ad and
                  edit it to suit your item for sale. Use bullet points to
                  highlight the important selling points of your product.
                </p>
              </CardBody>
            </Collapse>
            <Collapse isOpen={toggleQuestion === 3 ? true : false}>
              <CardBody className="cardBody_text">
                <h2>Where the products come from?</h2>

                <p>
                  Unlike traditional marketplaces, we understand what else our
                  users are shopping for – from furniture, to rental properties,
                  services and jobs. We can start to build a better consumer
                  profile and can work with you to target high quality
                  impressions across your campaigns.
                </p>
                <p>
                  The products are coming from the avarega canadian family that
                  decided to sell their staff. It can be buying a gently used TV
                  or donating baby clothes to a new mom. It might be selling
                  your couch or trading camera equipment with a friend. Any time
                  you sell, swap, buy or donate a used item, you’re a part of
                  the second-hand economy.
                </p>
              </CardBody>
            </Collapse>

            <Collapse isOpen={toggleQuestion === 4 ? true : false}>
              <CardBody className="cardBody_text">
                <h2>Can I have a refund?</h2>
                <p>
                  Unless the item is final sale, most items purchased with
                  checkout on Facebook are returnable for at least 30 days after
                  delivery. Items purchased with checkout from individual
                  sellers on Marketplace may be returned depending on the
                  seller's return policy.
                </p>
              </CardBody>
            </Collapse>
            <Collapse isOpen={toggleQuestion === 5 ? true : false}>
              <CardBody className="cardBody_text">
                <h2>Where MKTFY is based?</h2>
                <p>
                  MKTFY is a Canadian online classified advertising website and
                  part of eBay Classifieds Group, which was acquired by Adevinta
                  in 2021. It operates sections for cities and urban regions,
                  for posting local advertisements. Kijiji was launched in
                  February 2005 as an eBay subsidiary[2] and become part of the
                  eBay Classifieds Group in 2007
                </p>
              </CardBody>
            </Collapse>
          </Col>
        </Row>
      </Card>
      {/* <Card>
        <CardHeader onClick={() => setToggequestion(2)}>
          <span className="font-weight-bold">title 2</span>
        </CardHeader>
        <Collapse isOpen={toggleQuestion === 2 ? true : false}>
          <CardBody>example text 2</CardBody>
        </Collapse>
      </Card>{" "} */}
    </Container>
  );
};

export default Faq;
