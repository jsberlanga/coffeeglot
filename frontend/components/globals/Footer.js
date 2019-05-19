import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 7rem;
  background: ${props => props.theme.green};
  color: ${props => props.theme.offWhite};
  letter-spacing: 2px;
  .title {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 2rem;
    font-size: 1.4rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="title">
      © {new Date().getFullYear()}, juliosoto.dev. All rights reserved.
    </div>
  </StyledFooter>
);

export default Footer;
