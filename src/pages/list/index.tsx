import React from "react";
import useStore from "../../useStore";

const List = () => {
  const { list, update } = useStore();

  return (
    <div>
      <input
        type="radio"
        value="Male"
        name="gender"
        onChange={(e) => {
          update({ list: "Male" });
        }}
      />
      Male
      <input
        type="radio"
        value="Female"
        name="gender"
        onChange={(e) => {
          update({ list: "Female" });
        }}
      />
      Female
    </div>
  );
};

export default List;
