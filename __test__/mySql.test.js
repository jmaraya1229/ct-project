const { createPool } = require("mysql2/promise");
import { faker } from "@faker-js/faker";
require("dotenv").config();

describe("Database Tests", () => {
let connection;

    beforeEach(async () => {
        // creates a fake table that uses my connection information from .env
        let createTableSQL =
        "CREATE TABLE `comments` (`id` INT NOT NULL AUTO_INCREMENT, `comment_name` varchar(45) NOT NULL, `comment_rating` INT NOT NULL, `comment_message` VARCHAR(100) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB";

        connection = await createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB
        });
        console.log("Connected to database");

        await connection.query(createTableSQL);
    });

    it("Test CREATE and READ", async () => {
        try {
        const total_test_comments = 2;
        let insertQueries = [];

        // creates 2 fake comments with a name, rating, and message
        for (let i = 0; i < total_test_comments; i++) {
            let fakeName = faker.name.firstName();
            let fakeSentence = faker.lorem.sentence(5);
            let insertSQL = `INSERT INTO comments (id, comment_name, comment_rating, comment_message) VALUES (NULL, '${fakeName}', 5, '${fakeSentence}');`;
            
            insertQueries.push(connection.query(insertSQL));
        }

        await Promise.all(insertQueries);
            
        const [rows, fields] = await connection.query("SELECT * FROM comments");

        console.log(rows)
        
        expect(rows.length).toBe(total_test_comments);
        } catch (error) {
        console.log(error);
        let dropTableSQL = "DROP TABLE IF EXISTS `comments`";
        await connection.query(dropTableSQL);
        await connection.end();
        }
    }, 40000);

    // deletes fake table to prevent duplicate when retesting
    afterEach(async () => {
        let dropTableSQL = "DROP TABLE IF EXISTS `comments`";
        await connection.query(dropTableSQL);
        await connection.end();
    });

});