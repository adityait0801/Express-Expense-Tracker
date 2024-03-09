const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const database = require("./util/database");
const Expense = require("./models/Expense");
const sequelize = require('./util/database');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Endpoint to add an expense
app.post("/addExpense", async (req, res) => {
    try {
        const { amount, description, category } = req.body;

        // Insert data into the database
        console.log(amount, description, category);
        
        await Expense.create({ amount, description, category });

        res.status(201).send({ message: "Expense added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// Endpoint to get all expenses
app.get("/getAllExpenses", async (req, res) => {
    try {
        // Retrieve all expenses from the database
        console.log("expenses");
        const expenses = await Expense.findAll();
        // const expenses = database.query("SELECT * FROM expenses");
        res.status(200).send(expenses);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// Endpoint to delete an expense by ID
app.delete("/deleteExpense/:id", async (req, res) => {
    try {
        const expenseId = req.params.id;

        // Delete the expense from the database by ID
        //  await database.query("DELETE FROM expenses WHERE id = ?", [expenseId]);
        const deletedExpense = await Expense.destroy({ where: { id: expenseId } });
        res.status(200).send({ message: "Expense deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

async function initiate(){
    try {
        await sequelize.sync();
        app.listen(7000,()=>{
            console.log("Server is running at 7000");
        });       
    } catch (error) {
        console.log(error);
    }
}
initiate();