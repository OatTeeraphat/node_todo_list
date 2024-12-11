const express = require('express');
const app = express();
const port = 3000;

const { Pool } = require('pg');
const pool = new Pool({
    user: 'ubnqc6rprc0c7v',
    password: 'p2a0e62eb6ce59cbbc78ed9c3442f9c3e65a37aaf669502a98580ae0564b1365f',
    host: 'c3gtj1dt5vh48j.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
    port: 5432, // default Postgres port
    database: 'd3me0rd12s6r07',
    ssl: {
        rejectUnauthorized: false
    }
});

// create TODO LIST

//-- id|task|emp_id|

const createTaskTable = () => {
    pool.query('CREATE TABLE task (id INT, task VARCHAR(255), emp_id VARCHAR(255))')
}

const insertTaskTodoList = (id, task, emp_id) => {
    pool.query('INSERT INTO task (id, task, emp_id) VALUES ($1, $2, $3)', [id, task, emp_id]);
}

app.get('/createTable', (req, res) => {
    createTaskTable()
    res.send({ 'status': 'success' })
})

//http://localhost:3000/insertTaskTodoList?id=1&task=ทดสอบ&emp_id=001

app.get('/insertTaskTodoList', (req, res) => {
    console.log(req.query)

    const id = Number(req.query.id)
    const task = req.query.task
    const emp_id = req.query.emp_id

    insertTaskTodoList(id, task, emp_id)
    res.send({ 'status': 'success' })
});



app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});