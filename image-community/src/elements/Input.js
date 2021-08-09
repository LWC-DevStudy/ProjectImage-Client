// library
import React from 'react';

// style
import styled from 'styled-components';
import { borderBox } from '../shared/style';

import Text from './Text';

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiline, value, margin, width, id, name } = props;
  
  if (multiline) {
    return (
      <>
          {label && <Text margin="0px">{label}</Text>}
          <ElTextarea
            value={value}
            rows={10}
            placeholder={placeholder}
            onChange={_onChange}
            ></ElTextarea>
      </> 
    );
  }

  return (
    <>
        {label && <Text margin="0px">{label}</Text>}
        <ElInput
          id={id}
          name={name} 
          width={width} 
          margin={margin} 
          type={type} 
          placeholder={placeholder} 
          onChange={_onChange}/>
    </>
  )
};

Input.defaultProps = {
  multiline: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  margin: 0,
  padding: 0,
  width: '100%',
  _onChange: () => {},
  
};

const ElTextarea = styled.textarea`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: 1px solid black;
  width: ${(props) => props.width};
  padding: 12px 4px;
  
`;

const ElInput = styled.input`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: 1px solid black;
  width: ${(props) => props.width};
  padding: 12px 4px;
  
`;

export default Input;