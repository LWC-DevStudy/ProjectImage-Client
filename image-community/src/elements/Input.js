// library
import React from 'react';

// style
import styled from 'styled-components';
import { borderBox } from '../shared/style';

import Text from './Text';
import Grid from './Grid';

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiline, value, margin, width } = props;
  
  if (multiline) {
    return (
      <>
        {/* <Grid> */}
          {/* {label && <Text margin="0px">{label}</Text>} */}
          <>{label}</>
          <ElTextarea
            value={value}
            rows={10}
            placeholder={placeholder}
            onChange={_onChange}
            ></ElTextarea>
        {/* </Grid> */}
      </> 
    );
  }

  return (
    <>
      {/* <Grid> */}
        {/* {label && <Text margin="0px">{label}</Text>} */}
        <>{label}</>
        <ElInput 
          width={width} 
          margin={margin} 
          type={type} 
          placeholder={placeholder} 
          onChange={_onChange}/>
      {/* </Grid> */}
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