module.exports = {
    apps: [{
      name: "PEER-PULSE---REACT-APP",
      watch: true,  
      script: "./backend/server.js",
      // Delay between restart
      watch_delay: 5000,
      ignore_watch : ["node_modules", ".git"],
      watch_options: {
        "followSymlinks": false
      }
    }]
}