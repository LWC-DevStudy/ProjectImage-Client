// library
import React from 'react';
import styled from 'styled-components';

// style

const Image = ({ src, size, ...props }) => {
  return (
    <React.Fragment>
      <AspectOutter>
        <AspectInner {...props} src={src} size={size}></AspectInner>
      </AspectOutter>
    </React.Fragment>
  );
};

Image.defaultProps = {
  src: 'https://cdn.pixabay.com/photo/2021/08/02/20/35/architecture-6517841_960_720.jpg',
  size: 200,
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
