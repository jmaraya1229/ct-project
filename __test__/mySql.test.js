const { createPool } = require("mysql2/promise");
const faker = require("faker");
require("dotenv").config();

describe("Database Tests", () => {
  let connection;

  beforeEach(async () => {
    let createTableSQL =
      "CREATE TABLE `comments` (`id` INT NOT NULL AUTO_INCREMENT, `comment_name` varchar(45) NOT NULL, `comment_rating` INT NOT NULL, `comment_message` VARCHAR(100) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB";

    connection = await createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: 3000,
      database: process.env.DB
    });
    console.log("Connected to database");

    await connection.query(createTableSQL);
  });

  it("Test CREATE and READ", async () => {
    try {
      const total_test_comments = 2;
      let insertQueries = [];

      for (let i = 0; i < total_test_comments; i++) {
        let insertSQL = `INSERT INTO comments (id, comment_name, comment_rating, comment_message) VALUES (NULL, '${faker.name.firstName()}', 5, '${faker.lorem.sentence(5)}');`;

        insertQueries.push(connection.query(insertSQL));
      }

      await Promise.all(insertQueries);

      const [rows, fields] = await connection.query("SELECT * FROM comments");

      expect(rows.length).toBe(total_test_comments);
    } catch (error) {
      console.log(error);
      let dropTableSQL = "DROP TABLE IF EXISTS `comments`";
      await connection.query(dropTableSQL);
      await connection.end();
    }
  }, 60000);

  afterEach(async () => {
    let dropTableSQL = "DROP TABLE IF EXISTS `comments`";
    await connection.query(dropTableSQL);
    await connection.end();
  });
});