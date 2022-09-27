module.exports = {
    DATABASE: "bulletin_board",
    USERNAME: "root", 
    PASSWORD: "",
    HOST: "localhost",
    DIALECT: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
}