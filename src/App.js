import React, { useState } from "react";
import Icon from "./components/Icons";
//  geting toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//  getting bootstrap
import { Card, CardBody, Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
const itemArray = new Array(9).fill("empty");

const App = () => {
  const [winMessage, setWinMessage] = useState("");
  const [isCross, setisCross] = useState(false);

  const checkWinner = () => {
    if(itemArray[0] !== "empty" && itemArray[0]===itemArray[1] && itemArray[1]===itemArray[2]){
      setWinMessage(`${itemArray[0]} won`);
    } else  if(itemArray[0] !== "empty" && itemArray[0]===itemArray[3] && itemArray[3]===itemArray[6]){
      setWinMessage(`${itemArray[0]} won`);
    } else  if(itemArray[0] !== "empty" && itemArray[0]===itemArray[4] && itemArray[4]===itemArray[8]){
      setWinMessage(`${itemArray[0]} won`);
    } else  if(itemArray[8] !== "empty" && itemArray[8]===itemArray[5] && itemArray[2]===itemArray[8]){
      setWinMessage(`${itemArray[8]} won`);
    } else  if(itemArray[8] !== "empty" && itemArray[7]===itemArray[6] && itemArray[7]===itemArray[8]){
      setWinMessage(`${itemArray[8]} won`);
    } else   if(itemArray[6] !== "empty" && itemArray[4]===itemArray[6] && itemArray[2]===itemArray[4]){
      setWinMessage(`${itemArray[6]} won`);  
    } else   if(itemArray[3] !== "empty" && itemArray[4]===itemArray[3] && itemArray[5]===itemArray[4]){
      setWinMessage(`${itemArray[3]} won`); 
    } else   if(itemArray[1] !== "empty" && itemArray[4]===itemArray[1] && itemArray[7]===itemArray[4]){
      setWinMessage(`${itemArray[1]} won`);  
    } else   if(!itemArray.includes("empty")){
      setWinMessage(`It is a Draw`);
    }
  }  

  const reloadGame = () => {
    setisCross(false);
    setWinMessage("");
    itemArray.fill("empty",0,9);
  };

  const changeItem = (itemNo) => {
    if(winMessage){
      return toast(winMessage, {type: "success"});
    }

    if(itemArray[itemNo] === "empty"){
      itemArray[itemNo] = isCross ? "cross" : "circle";  
      
      setisCross(!isCross);
    } else {
      return toast("Already Filled" ,{typr: "error"});
    }

    checkWinner();
  };

  return (
    <Container classNmae="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div>
              <h1 className="text-success text-center text-uppercase">
                {winMessage}
              </h1>
              <Button color="success" block onClick={() => reloadGame()}>
                Reload the Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"}'s turn
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="warning" onClick={() => {changeItem(index)}}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
