import React from 'react';
import axios from 'axios';
import { Box, Typography, Paper, Grid2, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";


const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #e3f2fd; /* Light blue background */
  min-height: 100vh;
`;

const UserCard = styled(Paper)`
  padding: 20px;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 8px;
`;

const UserDetailsRow = styled(Grid2)`
  margin-bottom: 10px;
`;

const UserButton = styled(Button)`
  background-color: #1976d2;
  color: white;
  &:hover {
    background-color: #1565c0;
  }
`;

const User = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const hasPurchased = localStorage.getItem('hasPurchased');

    return (
        <Container>
            <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: 'bold', color: '#1976d2' }}>
                My Account
            </Typography>
            <UserCard elevation={3}>
                <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                    Account Details
                </Typography>
                <Grid2 container spacing={2}>
                    <UserDetailsRow container>
                        <Grid2 item xs={4}>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                Username:
                            </Typography>
                        </Grid2>
                        <Grid2 item xs={8}>
                            <Typography variant="body1">{loggedInUser}</Typography>
                        </Grid2>
                    </UserDetailsRow>
                    <UserDetailsRow container>
                        <Grid2 item xs={4}>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                Subscription Status:
                            </Typography>
                        </Grid2>
                        <Grid2 item xs={8}>
                            <Typography variant="body1">
                                {hasPurchased ? 'Active Subscriber' : 'Not Subscribed'}
                            </Typography>
                        </Grid2>
                    </UserDetailsRow>
                </Grid2>
                <UserButton variant="contained" style={{ marginTop: '20px' }}>
                    Edit Profile
                </UserButton>
            </UserCard>
        </Container>
    );
};

export default User;
