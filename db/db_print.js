const db = require("./db_connection");

const select_recipe_sql = "SELECT * FROM recipe";

db.execute(select_recipe_sql,
    (error, results) => {
        if (error)
            throw error
        
            console.log("Table 'recipe' contents:")
            console.log(results);
    }
);

db.end();