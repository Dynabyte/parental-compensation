import React, { useState } from "react";
import TextBox from "../../../common/ui/textbox";

import { hintMessages } from "../../../utilities/config/messages.config";

interface Props {
  year?: string;
  value: string;
  error: string;
  onChange: any;
}

const BasicAmount: React.FC<Props> = props => {
  const [toggleState, setToggleState] = useState(false);
  const { year, value, onChange, error } = props;
  return (
    <TextBox
      disabled={!toggleState}
      labelText={`Basbelopp för ${year}`}
      name={`basic-amount-${year}`}
      value={value}
      onChange={e => onChange(e.target.value)}
      hintText={hintMessages.changePBB}
      toggleName={`basic-amount-${year}`}
      toggleState={toggleState}
      handleToggle={() => setToggleState(!toggleState)}
      error={error && `${error} ${year}`}
    />
  );
};

export default BasicAmount;
