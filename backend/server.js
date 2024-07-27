import express from "express";

// Creating Server

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready ");
});

// get a list of 10 jokes

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "1 joke",
      content: "This is a first joke",
    },
    {
      id: 2,
      title: "2 joke",
      content: "This is a second joke",
    },
    {
      id: 3,
      title: "3 joke",
      content: "This is a third joke",
    },
    {
      id: 4,
      title: "4 joke",
      content: "This is a fourth joke",
    },
    {
      id: 5,
      title: "5 joke",
      content: "This is a fifth joke",
    },
    {
      id: 6,
      title: "6 joke",
      content: "This is a sixth joke",
    },
    {
      id: 7,
      title: "7 joke",
      content: "This is a seventh joke",
    },
    {
      id: 8,
      title: "8 joke",
      content: "This is a eight joke",
    },
    {
      id: 9,
      title: "9 joke",
      content: "This is a ninth joke",
    },
    {
      id: 10,
      title: "10 joke",
      content: "This is a tenth joke",
    },
  ];
  res.send(jokes);
});

// Creating Port

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
