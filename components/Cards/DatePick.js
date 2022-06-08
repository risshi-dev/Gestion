import React from "react";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";

export default function DatePick({ setCard, card }) {
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (value) => {
    console.log("onOk: ", new Date(value._d));
    setCard({ ...card, deadline: new Date(value._d).toISOString() });
  };

  return (
    <Space direction="vertical" size={12}>
      <DatePicker
        showTime
        onChange={onChange}
        onOk={onOk}
        format={"DD-MM-YYYY HH:mm A"}
      />
    </Space>
  );
}
