const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/dbConfig'); 

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await pool.query(`
      INSERT INTO users (username, hashed_password)
      VALUES ($1, $2)
      RETURNING *
    `, [username, hashedPassword]);

  
    const userDataWithRent = await pool.query(`
      SELECT users.*, renting.rent_amount
      FROM users
      LEFT JOIN renting ON users.id = renting.user_id
      WHERE users.id = $1
    `, [newUser.rows[0].id]);

    const token = jwt.sign({ userId: newUser.rows[0].id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    res.json({ token, user: userDataWithRent.rows[0] });
  } catch (error) {
    console.error('Error occurred during registration:', error);
    res.status(500).json({ error: 'An error occurred during registration.' });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userResult = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

    if (userResult.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, userResult.rows[0].hashed_password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const userDataWithRent = await pool.query(`
      SELECT users.*, renting.rent_amount
      FROM users
      LEFT JOIN renting ON users.id = renting.user_id
      WHERE users.id = $1
    `, [userResult.rows[0].id]);

    const token = jwt.sign({ userId: userResult.rows[0].id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    res.json({ token, userData: userDataWithRent.rows[0] });
  } catch (error) {
    console.error('Error occurred during login:', error);
    res.status(500).json({ error: 'An error occurred during login.' });
  }
};

