import { useState } from "react";
import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";

export default AutoCompleteTextField = () => {
  const [value, setValue] = useState();
  return (
    <TextInput
      trigger={["@", "@@"]}
      options={["apple", "apricot", "banana", "carrot"]}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};
