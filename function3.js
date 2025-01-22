createStringConnection('db_products', 'Junior', '96586')

function createStringConnection(databaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass${pass};initial_database=${databaseName}`)}