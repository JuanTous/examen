import React, { useEffect, useState } from "react";

export const FormComponent = () => {
  const [texts, setTexts] = useState([]);
  const [txt, setTxt] = useState({});

  useEffect(() => {
  }, [texts]);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    txt[name] = value
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/data", {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(txt)
    })
      .then((res) => res.json())
      .then(data => {
        console.log("submitted data")
        fetch("http://localhost:4000/data")
        .then((res) => res.json())
        .then((data) => setTexts(data))
        .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };
  return (
    <div style={{padding:"2rem"}}>
      <div>
          <input type="text" name="text" id="text" onChange={HandleChange}/>
          <input type="submit" onClick={HandleSubmit}/>
      </div>
      <hr />
      <div>
        <h4>Texts</h4>
        {texts.map((e, k) => {
          return <li key={k}>{e}</li>;
        })}
      </div>
    </div>
  );
};

export default FormComponent;
