import { useEffect, useState } from "react";
import axios from "axios";

const GetDef = (props) => {
  const [def, setDef] = useState("");
  let currWord = props.defWord;
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.dictionaryapi.dev/api/v2/entries/en/" + currWord,
    };

    axios
      .request(options)
      .then(function (response) {
        setDef(response.data[0].meanings[0].definitions[0].definition);
      })
      .catch(function (error) {
        console.error(error);
        setDef("No hints available");
      });
  }, [currWord]);

  return (
    <div className="def">
      <p>Hint: {def === "" ? "Loading..." : def}</p>
    </div>
  );
};

export default GetDef;
