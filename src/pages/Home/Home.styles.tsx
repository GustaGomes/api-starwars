import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  height: 100%;
  max-height: 402px;
  border-radius: 0.625rem; /* 10px */

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: none;
  }
`;

export const WrapperContent = styled.div`
  flex: 1;
  height: 100%;
  background-size: cover;
  border-radius: 0.625rem; /* 10px */

  @media (max-width: 768px) {
    /* width: 95%;
    max-width: none; */
    img {
      width: 300px;
      height: 188px;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 25rem; /* 400px */
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.625rem; /* 10px */
  font-size: 1.25rem; /* 20px */

  div {
    padding: 3rem;
    height: 100%;
  }

  p {
    text-align: center;
    line-height: 1.5237rem; /* 24.38px */
  }

  input {
    width: 100%;
    text-align: center;
    height: 2.5rem; /* 40px */
    border-radius: 0.3125rem; /* 5px */
    border: none;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    min-height: auto;
    max-width: 300px;
    font-size: 1.125rem; /* 18px */
    div {
      padding: 1rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5rem; /* 40px */
  border-radius: 0.3125rem; /* 5px */
  margin-top: 7px;
  background-color: #de1212;
  color: #fff;
  border: none;
  gap: 0.625rem; /* 10px */
`;

// export const DivNav = styled.div`
//   background-color: transparent;
//   position: absolute;
//   top: 60%;
//   left: 12%;
// `;

export const DivNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35% 50% 0 0;

  img {
    width: 100%;
    height: auto;
    max-width: 300px;
    object-fit: contain;
  }
`;
