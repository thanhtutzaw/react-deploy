import React from "react";
import Maplistrender2 from "./Maplistrender2";

const Maplistrender = () => {
  const list = ["mg mg", "aye aye"];
  const objects = [
    {
      id: "id",
      name: "name",
    },
    {
      id: 1,
      name: "mg mg",
    },
    {
      id: 2,
      name: "aye aye",
    },
    {
      id: 3,
      name: "may",
    },
  ];

  return (
    <div>
      <h1>11. hey map list render 1</h1>
      <h4>
        Normal array
        <hr />
        {list.map((a) => (
          <h3>{a}</h3>
        ))}
      </h4>
      <br />
      <h3>Object array</h3>
      <hr />
      <h4>
        {objects.map((object) => 
        <Maplistrender2 object={object} />
        // (
        //   <h4>
        //     {object.id} is my id and my name is {object.name}
        //   </h4>
        // )
        )}
      </h4>

      <hr />
    </div>
  );
};

export default Maplistrender;
