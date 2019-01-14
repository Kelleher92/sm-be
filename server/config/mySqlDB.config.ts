import * as mysql from 'mysql';

const configureMySql = () => {
  const connectionData: mysql.ConnectionConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,

  };
  const mySqlCon: mysql.Connection = mysql.createConnection(connectionData);
  mySqlCon.connect((err: mysql.MysqlError) => {
    if (err) {
      console.log(`Problem connecting to mySql DB - ${err.message}`);
    }else  {
      console.log(`Successfully connected to MySql DB on port - ${process.env.DB_PORT}`);
    }
  });
};

export default configureMySql;
