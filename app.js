const express = require('express');
const app = express();
const port = 3000;

const { Pool } = require('pg');
const pool = new Pool({
    user: 'ubnqc6rprc0c7v',
    password: 'p2a0e62eb6ce59cbbc78ed9c3442f9c3e65a37aaf669502a98580ae0564b1365f',
    host: 'c3gtj1dt5vh48j.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
    port: 5432, // default Postgres port
    database: 'd3me0rd12s6r07'
});

// create TODO LIST

//-- id|task|employee_id|

const createTableTask = () => {
    pool.query('CREATE TABLE task ( id INT, task VARCHAR(255), employee_id INT );')
}

const insertTaskTodoList = (id, task, employee_id) => {
    pool.query('INSERT INTO task (id, task, employee_id) VALUES (?, ?, ?)', [id, task, employee_id]);
}

app.get('/createTable', (req, res) => {
    createTableTask()
    res.send({ 'status': 'success' })
})

//http://localhost:3000/insertTaskTodoList?id=1&task=ทดสอบ&emp_id=001

app.get('/insertTaskTodoList', (req, res) => {
    console.log(req.query)
    insertTaskTodoList(req.query)
    res.send({ 'status': 'success' })
});


app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});

