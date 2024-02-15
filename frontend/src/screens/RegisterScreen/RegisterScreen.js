import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import { set } from "mongoose";
import axios from "axios";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(false);
  const [picMessage, setPicMessage] = useState(false);
  const [picUrl, setPicUrl] = useState("");
  const navigater = useNavigate()


  const dispatch = useDispatch()
  const userRegister = useSelector((state)=> state.userRegister)
  const {loading, error, userInfo} = userRegister

  useEffect(()=>{
    console.log(userInfo)
    if(userInfo){
      navigater('/mynotes')
    }
  },[userInfo])

  const submitHandler = async (e) => {
    e.preventDefault();

    if(password!==confirmPassword){
      setMessage("Password do not match")
    }else{
      dispatch(register(name, email,password,pic))
    }

    console.log(picUrl);
  };

  // const postDetails = (pics) => {
  //   if (!pics) {
  //     return setPicMessage("Please select an Image");
  //   }

  //   setPicMessage(null);

  //   if (pics.type === "image/ijeg" || pics.type === "image/png") {
  //     const data = new FormData();

  //     data.append("file", pics);
  //     data.append("upload_preset", "anything ");
  //     data.append("cloud_name", "Your cloud username ");
  //     fetch(
  //       "https://api.cloudinary.com/v1_1/your-cloud-username/image/upload",
  //       {
  //         method: "post",
  //         body: data,
  //       }
  //     ).then((res) => {
  //       res.json().then((data) => {
  //         console.log(data)
  //         setPic(data.url.toString());
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       });
  //     });
  //   }else{
  //       return setPicMessage("Please select an Image");
  //   }
  // };

  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>ConfirmPassword</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </Form.Group>

          {picMessage && (<ErrorMessage variant="danger">{picMessage}</ErrorMessage>)}

          <Form.Group className="mb-3" controlId="formBasicPic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              type="file"
              placeholder="Profile Picture"
              onChange={(e) => {
                setPicUrl(e.target.files[0]);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Have an account ? <Link to="/register">Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterScreen;
