import React, {useState} from "react";
import "./Detail.css";
import Subject from "../Subject/Subject";

function Detail({
  detail: {
    FirstName,
    LastName,
    Gender,
    Latitude,
    Longitude,
    CreditCardNumber,
    CreditCardType,
    Email,
    DomainName,
    PhoneNumber,
    MacAddress,
    URL,
    UserName,
    LastLogin,
    PaymentMethod,
  },
})


{

  const [showMore, setShowMore] = useState(false)
  const shortText = (text, length) => {
    if (text.includes("https")) {
      return text.slice(8).length >= length
        ? text.slice(8, length + 2) + "..."
        : text.slice(8);
    } else if (text.includes("http")) {
      return text.slice(7).length >= length
        ? text.slice(7, length + 2) + "..."
        : text.slice(7);
    }
  };

  // console.log(shortText(URL, 20))

  return (
    <div className="detail">
      <div className={`overlay ${showMore ? 'slideout' : ''}`}>
          <Subject title="Mac-Address" value={MacAddress} />
          <Subject title="lat" value={Latitude} />
          <Subject title="last seen" value={LastLogin} />
          <Subject title="long" value={Longitude} />
          
      </div>
      <div className="header__section">
        <div className="left__part">
          <div className="name__circle">
            {FirstName[0]}
            {LastName[0]}
          </div>
          <div className="name__gender">
            <p className="full__name">
              {FirstName} {LastName} <span></span>
              {`(${UserName})`}
            </p>
            <p className="gender">
              {Gender.toLowerCase() === "male" ||
              Gender.toLowerCase() === "female"
                ? Gender
                : "Nill"}
            </p>
          </div>
        </div>
        <div className={`right__part ${showMore ? 'addbg': ''}`}  onClick={() => setShowMore(!showMore)}>
          <div className="firs dot"></div>
          <div className="second dot"></div>
          <div className="third dot"></div>
        </div>
      </div>

      <div className="payment__section">
        <p className="payment__header">payment info</p>
        <div className="payment__info">
          <Subject title="card number" value={CreditCardNumber} />
          <Subject title="card type" value={CreditCardType} />
          <Subject title="method" value={PaymentMethod} />
        </div>
      </div>
      <div className="contact__section">
        <p className="contact__header">contact</p>
        <div className="contact__lists">
          <Subject title="contact" value={PhoneNumber} />
          <Subject title="domain" value={DomainName} />
          <Subject title="email" value={Email} />
          <Subject title="website" value={shortText(URL, 20)} />
        </div>
      </div>
     
    </div>
  );
}

export default Detail;
