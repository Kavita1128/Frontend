import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const StyledForm = styled.form`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(2, 2, 2, 0.1);
  width: 300px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 80px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

const ToggleButton = styled.button`
  margin-top: 1rem;
  background: transparent;
  border: none;
  color: #007bff;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleToggle = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <Container>
      <h1>Employee Management System</h1>

      <FormWrapper>
        <StyledForm>
          {isAdmin ? (
            <>
              <Label>
                Admin ID:
                <Input type="text" name="adminId" required />
              </Label>
              <Label>
                Password:
                <Input type="password" name="password" required />
              </Label>
              <Label>
                Name:
                <Input type="text" name="adminName" required />
              </Label>
              <SubmitButton type="submit">Login as Admin</SubmitButton>
            </>
          ) : (
            <>
              <Label>
                Name:
                <Input type="text" name="name" required />
              </Label>

              <Label>
                Department:
                <Input type="text" name="department" required />
              </Label>

              <Label>
                Phone:
                <Input type="tel" name="phone" required />
              </Label>

              <Label>
                Email:
                <Input type="email" name="email" required />
              </Label>

              <Label>
                Date of Joining:
                <Input type="date" name="joiningDate" required />
              </Label>

              <SubmitButton type="submit">Submit Employee Data</SubmitButton>
            </>
          )}

          <ToggleButton onClick={handleToggle}>
            Switch to {isAdmin ? 'Employee' : 'Admin'} Form
          </ToggleButton>
        </StyledForm>
      </FormWrapper>
    </Container>
  );
};

export default Login;
