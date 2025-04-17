import mongoose from 'mongoose';
import express from 'express';
import Todo from './todo'; 

const app = express();
const port = 3000;

app.use(express.json());

async function main() {
    await mongoose.connect('mongodb://localhost:27017/todoDB')
    .then(() => console.log(" Connected to MongoDB"))
    .catch(err => console.error(" MongoDB connection error:", err));
}

main();
`
`
app.get('/', async (req, res) => {
    try {
        const newTodo = new Todo({ title: 'hey todo', desc: 'first todo', isDone: false });
        await newTodo.save();
        console.log(" Todo added:", newTodo);
        res.send("Hello World! Todo has been saved.");
    } catch (error) {
        console.error("Error saving todo:", error);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
