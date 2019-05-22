import styled from "styled-components";

const SignupForm = styled.div`
  /* .form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    overflow: hidden;
    width: 80%;
    max-width: 500px;
    background: #fff;
    box-shadow: 1px 1px 1px 1px silver;
  }

  .form-input,
  .form-button {
    font-family: linlibertine-bold;
    font-size: 1.6rem;
    letter-spacing: 1px;
    border: 0;
  }
  .form-input {
    padding: 1.5rem;
    ::placeholder {
      opacity: 0.5;
    }
    :focus::placeholder {
      color: ${props => props.theme.green};
      opacity: 0.85;
    }
  }

  .form-item:first-of-type {
    position: relative;
  }
  .form-item:first-of-type::after {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }
  .form-button {
    background: ${props => props.theme.green};
    color: #fff;
    padding: 1.25rem 2.5rem;
  }

  @media only screen and (min-width: 768px) {
    .form {
      flex-direction: row;
      max-width: 768px;
      border: 10px solid #fff;
      border-radius: 4rem;
    }
    .form-button {
      border-radius: 4rem;
      margin-left: auto;
    }
  } */

  .form {
    margin: 4rem auto 8rem;
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    width: 80%;
    max-width: 50rem;
    border: 5px solid green;
  }

  .form-input,
  .form-button {
    font-family: linlibertine-bold;
    font-size: 1.6rem;
    letter-spacing: 1px;
    border: 0;
  }
  .form-input {
    padding: 1.5rem;
    outline: none;
    ::placeholder {
      opacity: 0.5;
    }
    :focus::placeholder {
      color: ${props => props.theme.green};
      opacity: 0.85;
    }
  }

  .form-button {
    cursor: pointer;
    border-radius: 4rem;
    margin-left: auto;
    background: ${props => props.theme.green};
    color: #fff;
    padding: 1.25rem 2.5rem;
  }
`;

export default SignupForm;
