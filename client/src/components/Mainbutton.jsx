import styled from "styled-components";

const StyledDiv = styled.div`
  button {
    height: 50px;
    width: 150px;
    background: black;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: solid orange 1px;
    color: white;
    -webkit-transition: 1000ms;
    transition: 1000ms;
    border-radius: 5px;
  }

  button:hover {
    -webkit-box-shadow: 1px 1px 13px #20232e, -1px -1px 13px #545b78;
    color: orange;
    -webkit-transition: 1000ms;
    transition: 1000ms;
  }

  button:active {
    -webkit-box-shadow: 1px 1px 13px #20232e, -1px -1px 33px #545b78;
    color: orange;
    -webkit-transition: 1000ms;
    transition: 1000ms;
  }
`;

function Mainbutton() {
  return (
    <StyledDiv>
      <button>Order Now</button>
    </StyledDiv>
  );
}

export default Mainbutton;
