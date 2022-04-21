import React, {useState} from "react";
import "./styles.css";

export default function dropdown({prompt,
  // value, 
  // onChange,
}) {

  const [open, setOpen] = useState(false)
    
  const data = [];
  const url = `https://api.ratings.food.gov.uk/Authorities/basic`;
  fetch(url, { headers: { "x-api-version": "2" } })
    .then((res) => res.json())
    .then((res) => data.push(res));

  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value">{prompt}</div>
        <div className={`arrow ${open ? "open" : null}`} />
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {data.map((option) => (
          <div className="option" key={option.LocalAuthorityId}>
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
}

{"authorities":[{"LocalAuthorityId":197,"LocalAuthorityIdCode":"760","Name":"Aberdeen City","EstablishmentCount":2138,"SchemeType":2,"links":[{"rel":"self","href":"http://api.ratings.food.gov.uk/authorities/197"}]},