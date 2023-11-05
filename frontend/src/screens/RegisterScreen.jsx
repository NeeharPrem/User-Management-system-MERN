import { useState } from "react";
import { Link } from "react-router-dom";
import { Form,Button,Row,Col, FormLabel, FormControl } from "react-bootstrap";
import FormContainer from "../components/formContainer";

const RegisterScreen=()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setconfirmPassword]=useState('')
    
    const submitHandler= async(e)=>{
        e.priventDefault();
    }
    return (
       <FormContainer>
        <h1>Sign Up</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group className='my-2' controlId="email">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder='Enter Name' value={email} onChange={(e)=>setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId="password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder='Enter Password' value={password} onChange={(e)=>setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' variant="primary" className='mt-3'>Sign Up</Button>
        <Row className='py-3'>
        <Col>
        Already a User ? <Link to='/login'>Sign In</Link>
        </Col>
        </Row>
        </Form>
       </FormContainer>
    )
}

export default RegisterScreen