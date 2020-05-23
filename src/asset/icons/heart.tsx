import styled from "styled-components";

export default function HeartIcon({ style, fillIn, fillOut }) {
  return (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 21">
      <G>
        <Path
          fill={fillOut}
          d="M11.9 1.9C13.1.7 14.7 0 16.4 0s3.4.7 4.6 1.9c1.3 1.2 2 2.9 2 4.6s-.7 3.4-1.9 4.6l-8.8 8.8c-.4.4-1 .4-1.4 0L2 11.1C-.5 8.6-.5 4.4 2 1.9s6.7-2.5 9.2 0l.4.4.3-.4zm-.4 15.9l7.1-7.1 1.1-1.1c.8-.8 1.3-2 1.3-3.2s-.5-2.3-1.3-3.2c-.8-.8-2-1.3-3.2-1.3s-2.3.5-3.2 1.3l-1.1 1.1c-.4.4-1 .4-1.4 0l-1.1-1C8 1.6 5.1 1.6 3.4 3.3s-1.8 4.6 0 6.4l8.1 8.1z"
        />
        <Path
          fill={fillIn}
          d="M3.3 9.8C1.4 8 1.4 5 3.3 3.2c.9-.9 2-1.3 3.3-1.3s2.4.4 3.2 1.3l1.1 1c.2.2.4.2.6.2.2 0 .4-.1.6-.2l1.1-1.1c1-.9 2.2-1.4 3.3-1.4 1.2 0 2.5.5 3.3 1.4.9 1 1.4 2.2 1.4 3.3 0 1.2-.5 2.5-1.4 3.3L11.5 18 3.3 9.8z"
        />
      </G>
    </svg>
  );
}

const G = styled.g``;

const Path = styled.path`
  transition: 0.3s;
`;
