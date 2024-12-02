import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Typography, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const CreateSimpleComponents = () => {
    const [subscription, setSubscription] = useState('');
    const [price, setPrice] = useState('');
    const [LanguageStyle, setLanguageStyle] = useState('');
    const [PersonalityTrait, setPersonalityTrait] = useState('');
    const [knowledgeLevel, setKnowledgeLevel] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleCreateSimpleComponents = async (event) => {
        event.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post('http://localhost:9000/postComponents', {
                KnowledgeLevel: knowledgeLevel,
                LanguageStyle: LanguageStyle,
                PersonalityTrait: PersonalityTrait,
                Subscription: subscription,
                price: price
            });
            setSuccess("Data posted successfully!");
            setSubscription('');
            setPrice('');
            setLanguageStyle('')
            setPersonalityTrait('')
            setKnowledgeLevel('')
        } catch (err) {
            setError(`Error posting data: ${err.response ? err.response.data : err.message}`);
        }    
    };

    return (
        <Box sx={{ maxWidth: '600px', margin: 'auto', mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Create simple components
            </Typography>
            <form onSubmit={handleCreateSimpleComponents}>
                <TextField
                    label="Subscription"
                    fullWidth
                    margin="normal"
                    value={subscription}
                    onChange={(e) => setSubscription(e.target.value)}
                    required
                />
                <TextField
                    label="Price (For Subscription)"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={3}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <TextField
                    label="Language Style"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={3}
                    value={LanguageStyle}
                    onChange={(e) => setLanguageStyle(e.target.value)}
                    required
                />
                <TextField
                    label="Personality Trait"
                    fullWidth
                    margin="normal"
                    value={PersonalityTrait}
                    onChange={(e) => setPersonalityTrait(e.target.value)}
                    required
                />

                <TextField
                    label="Knowledge Level"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={3}
                    value={knowledgeLevel}
                    onChange={(e) => setKnowledgeLevel(e.target.value)}
                    required
                />
                
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
                    Create Components
                </Button>
            </form>
        </Box>
    );
};

export default CreateSimpleComponents;

