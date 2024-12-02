const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./schemas/baseSchemas/User');

const app = express();
app.use(express.json());
app.use(cors());

const mongoString = process.env.MONGO_URI || "Enter info here.";
mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000
});

const database = mongoose.connection;
database.on('error', (error) => console.log(error));
database.once('connected', () => console.log('Database Connected'));

app.listen(9000, () => {
    console.log(`Server Started at ${9000}`);
});

app.post('/createUser', async (req, res) => {
    try {
        const user = new User({
            email: req.body.email,
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        });
        await user.save();
        return res.status(201).send("User created successfully");
    } catch (error) {
        if (error.code === 11000) {
            console.log("Duplicate username");
            return res.status(400).send("Username already exists");
        }
        console.error("Error creating user:", error);
        return res.status(500).send("Internal Server Error");
    }
});

app.get('/getUser', async (req, res) => {
    console.log(`SERVER: GET USER REQ BODY: ${req.query}`);
    const username = req.query.username;
    const password = req.query.password;
    console.log(username);
    try {
        const user = await User.findOne({ username });
        return res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/getUserById', async (req, res) => {
    const { user_id } = req.query;
    try {
        const user = await User.findOne({ _id: user_id });
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/getUsers', async (req, res) => {
    try {
        const userList = await User.find({}, {firstName:1, lastName:1});
        res.send(userList)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

// // chat bot methods

// Create an endpoint to handle user input
// app.post('/sendMessage', async (req, res) => {
//     const userInput = req.body.input;
//     try {
//         const response = await handleUserInput(userInput);
//         res.json({ response });
//     } catch (error) {
//         res.status(500).json({ error: 'Error generating response' });
//     }
// });

// // Input methods?

app.get('/getSubscriptions', async (req, res) => {
    try {
        const SubscriptionList = await Subscription.find();
        res.send(SubscriptionList)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.get('/getKnowledgeLevels', async (req, res) => {
    try {
        const knowledgeLevelList = await KnowledgeLevel.find();
        res.send(knowledgeLevelList)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.get('/getLanguageStyles', async (req, res) => {
    try {
        const LanguageStyleList = await LanguageStyle.find();
        res.send(LanguageStyleList)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.get('/getPersonalityTraits', async (req, res) => {
    try {
        const PersonalityTraitList = await PersonalityTrait.find();
        res.send(PersonalityTraitList)
    }
    catch (error) {
        res.status(500).send(error)
    }
})
