const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://roysamson:jV90N1Tpw6CRWgYb@flash.4ap2hxr.mongodb.net/flash?retryWrites=true&w=majority"; 

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('flash'); 
    const quizzes = database.collection('quizzes');

    const quizData = [
      {
        "title": "JavaScript Basics",
        "description": "A quiz to test your knowledge of basic JavaScript concepts.",
        "questions": [
          {
            "question": "What is the correct syntax for referring to an external script called 'script.js'?",
            "options": [
              "<script src='script.js'>",
              "<script href='script.js'>",
              "<script name='script.js'>"
            ],
            "answer": "<script src='script.js'>"
          },
          {
            "question": "How do you declare a variable in JavaScript?",
            "options": [
              "var variableName",
              "variable variableName",
              "declare variableName"
            ],
            "answer": "var variableName"
          },
          {
            "question": "Which method is used to parse a string into an integer?",
            "options": [
              "parseInt()",
              "toInt()",
              "parseString()"
            ],
            "answer": "parseInt()"
          }
        ]
      },
      {
        "title": "React Basics",
        "description": "A quiz to assess your understanding of fundamental React concepts.",
        "questions": [
          {
            "question": "What is the function of 'useState' in React?",
            "options": [
              "To manage state within a component",
              "To fetch data from an API",
              "To handle form submission"
            ],
            "answer": "To manage state within a component"
          },
          {
            "question": "How do you create a functional component in React?",
            "options": [
              "function ComponentName() {}",
              "const ComponentName = () => {}",
              "Both of the above"
            ],
            "answer": "Both of the above"
          },
          {
            "question": "What is JSX in React?",
            "options": [
              "JavaScript XML",
              "A JavaScript framework",
              "A CSS preprocessor"
            ],
            "answer": "JavaScript XML"
          }
        ]
      },
      {
        "title": "Node.js Basics",
        "description": "Test your knowledge of core Node.js concepts and functionalities.",
        "questions": [
          {
            "question": "How do you import the 'fs' module in Node.js?",
            "options": [
              "const fs = require('fs');",
              "import fs from 'fs';",
              "include fs;"
            ],
            "answer": "const fs = require('fs');"
          },
          {
            "question": "What is the purpose of 'npm'?",
            "options": [
              "To manage packages and dependencies",
              "To compile code",
              "To deploy applications"
            ],
            "answer": "To manage packages and dependencies"
          },
          {
            "question": "How do you create a simple HTTP server in Node.js?",
            "options": [
              "const http = require('http'); http.createServer().listen(3000);",
              "http.createServer();",
              "server.listen(3000);"
            ],
            "answer": "const http = require('http'); http.createServer().listen(3000);"
          }
        ]
      }
    ];

    const result = await quizzes.insertMany(quizData);

    console.log(`${result.insertedCount} quizzes were inserted`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
