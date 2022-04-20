// import React from "react";

export const Filter = () => {
  
  const [data, setData] = useState;
  const url = `https://api.ratings.food.gov.uk/Authorities/basic`;
  fetch(url, { headers: { "x-api-version": "2" } })
    .then((res) => res.json())
    .then((json) => setData(json))


  const { options } = data || {};


  //   const { authorities } = filterData || {}; //what would console.log output for authorities? object or array of objects?

  //   const changeHandler = () => {
  //     const [filteredUrl, setFilteredUrl] = useState("");
  //     setFilteredUrl(Event.currentTarget.value);
  //     const url = `https://api.ratings.food.gov.uk/Establishments?localAuthorityId=${filteredUrl}/basic`;
  //     fetch(url, { headers: { "x-api-version": "2" } })
  //       .then((res) => res.json())
  //       .then((json) => setFilterData(json));
  //   };

  /* 
1. render the selection
2. use the api to pull the values -- what triggers this -- useEffect(pagenumber) or onchange(the select value)
3. render the values in the options
4. send a new api call when the new filter value is selected OR display only content with that value
*/

  return (
    <select onChange={changeHandler}>
      {authorities.map((authority, index) => (
        <option key={index}>{authority}</option>
      ))}
    </select>
  );
};
