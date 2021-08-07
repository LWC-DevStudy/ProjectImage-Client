// library
import React from 'react';
import styled from 'styled-components';

// style
import styled from 'styled-components';

const Image = (props) => {
  const { src, size } = props;
  const styles = {
    src: src,
    size: size,
  };

  return (
    <React.Fragment>
      <AspectOutter>
        <AspectInner addstyle={addstyle} {...styles}></AspectInner>
      </AspectOutter>
    </React.Fragment>
  );
};

Image.defaultProps = {
  src: 'https://cdn.pixabay.com/photo/2021/08/02/20/35/architecture-6517841_960_720.jpg',
  size: 36,
  addstyle: () => {},
};

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  ${(props) => props.addstyle()};
`;
export default Image;
