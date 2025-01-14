import React from "react";
import ServicePhones from "./othercomponent/ServicePhones";
import PhoneRepairLanding from "./othercomponent/PhoneRepairLanding";
import SellingPhone from "./othercomponent/SellingPhone";
import Companylogo from "./othercomponent/Companylogo";
const Service = () => {
  return (
    <div>
      <SellingPhone />

      <ServicePhones />
      <PhoneRepairLanding />

      <Companylogo />
    </div>
  );
};

export default Service;
