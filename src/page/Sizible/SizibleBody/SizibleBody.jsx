import React, { useState } from "react";
import "./SizibleBody.css";
import photo1 from "../../../assets/img/photo_1.jpg";
import sizibleRefBody from "../../../assets/img/sizible_reference_body.jpg";
import CustomerInput from "../../../components/CustomerInput/CustomerInput";

const SizibleBody = () => {
  const bodyArr = [
    { className: "neck" },
    { className: "shoulder" },
    { className: "chest" },
    { className: "arms" },
    { className: "waist" },
    { className: "hips" },
    { className: "leg" },
    { className: "shoe" },
    { className: "height" },
  ];
  const inputListObj = {
    leftInputs: [
      { name: "Neck", active: false },
      { name: "Shoulder", active: false },
      { name: "Arms", active: false },
      { name: "Leg", active: false },
    ],
    rightInputs: [
      { name: "Height", active: false },
      { name: "Chest", active: false },
      { name: "Waist", active: false },
      { name: "Hips", active: false },
      { name: "Shoe", active: false },
    ],
  };

  const [inputList, setInputList] = useState(inputListObj);

  const handleFocus = (el, side) => {
    setInputList((prev) => {
      if (side === "left") {
        prev.leftInputs = prev.leftInputs.map((leftEl) =>
          leftEl.name === el.name
            ? { ...leftEl, active: true }
            : { ...leftEl, active: false }
        );
        prev.rightInputs = prev.rightInputs.map((el) => ({
          ...el,
          active: false,
        }));
      } else {
        prev.leftInputs = prev.leftInputs.map((el) => ({
          ...el,
          active: false,
        }));
        prev.rightInputs = prev.rightInputs.map((rightEl) =>
          rightEl.name === el.name
            ? { ...rightEl, active: true }
            : { ...rightEl, active: false }
        );
      }
      return { ...prev };
    });
  };

  return (
    <main className="sizible_body">
      <div className="stylists_cont">
        <p>Stylists</p>
        <div className="stylists_img_list">
          <img src={photo1} alt="_photo1" />
          <img src={photo1} alt="_photo1" />
          <img src={photo1} alt="_photo1" />
          <img src={photo1} alt="_photo1" />
          <div>see all</div>
        </div>
      </div>
      <div className="style_descrption">
        <div>
          {inputList.leftInputs.map((el, ind) => {
            return (
              <div key={el + ind} onMouseEnter={(e) => handleFocus(el, "left")}>
                <CustomerInput name={el.name} active={el.active} />
              </div>
            );
          })}
        </div>
        <div>
          <h4>Set your perfect fit</h4>
          <section className="img_container">
            <img src={sizibleRefBody} alt="_sizible_body" />
            {[
              ...inputList.leftInputs.map((el) => ({
                ...el,
                className: el.name.toLowerCase(),
                active: el.active,
              })),
              ...inputList.rightInputs.map((el) => ({
                ...el,
                className: el.name.toLowerCase(),
                active: el.active,
              })),
            ].map((el, ind) => {
              return (
                <div
                  key={el.className.toString() + ind}
                  className={
                    el.active ? el.className + " active" : el.className
                  }
                >
                  <hr />
                </div>
              );
            })}
          </section>
        </div>
        <div>
          {inputList.rightInputs.map((el, ind) => {
            return (
              <div
                key={el + ind}
                onMouseEnter={(e) => handleFocus(el, "right")}
              >
                <CustomerInput name={el.name} active={el.active} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default SizibleBody;
