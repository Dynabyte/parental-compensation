import React from "react";
import { SelectBox } from "../../common";

import { employeeStatus, hintMessages } from "../../fixtures/configData";

interface Props {}

const EmployeeStatus: React.FC<any> = props => {
  return (
    <SelectBox
      name="salary-type"
      options={employeeStatus}
      labelText="Jag är en sammanhängande anställning på Dynabyte i"
      hintText={hintMessages.employeeStatus}
      onChange={props.changeSalaryHandler}
      error={props.error}
    />
  );
};

export default EmployeeStatus;
