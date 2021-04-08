import React from 'react';

const CheckBoxes = (props) => {
  let lastKey = "";
  let topic = "";

  return props.checkbox.map((item, id) => {

    const boxChange = () => {
      props.checkBoxChecksCreator(id);
    }

    if (item.visible) {
      topic = (topic === item.key || lastKey === item.key) ? "" : item.key;
      lastKey = item.key;
      return (
        <div style={{color: item.color}}>
          {topic ? <h5>{topic}</h5> : ""}
          <div className="task-item" onClick={boxChange}>
            <input type="checkbox" key={id} checked={item.checked} /> {item.value}</div>
        </div>
      );
    }
  });
}

export default CheckBoxes;