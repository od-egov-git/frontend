import React from "react";
import LabelContainer from "egov-ui-framework/ui-containers/LabelContainer";

const styles = {
  backgroundColor: "rgba(0, 0, 0, 0.6000000238418579)",
  color: "rgba(255, 255, 255, 0.8700000047683716)",
  marginLeft: "8px",
  paddingLeft: "19px",
  paddingRight: "19px",
  textAlign: "center",
  verticalAlign: "middle",
  lineHeight: "35px",
  fontSize: "16px"
};

function ocPermitNumber(props) {
  const { number } = props;
  return <div style={styles}><LabelContainer labelName="OC Permit No." labelKey ={"BPA_APPLICATION_OC_PERMIT_NO_CODE"} dynamicArray={[number]}/></div>;
}

export default ocPermitNumber;
