import React from 'react';
import { HuePicker } from 'react-color';

function ColorPicker(props) {
  
  return (
    <div className="color-picker">
      <HuePicker
        color={props.color}
        onChangeComplete={(color) => { props.setColor(color.hex) }} 
        />
    </div>
  );
}
export default ColorPicker;