const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

const savePassword = (password) => {
 fs.open(path.join(__dirname, '../','passwordsofcrepass.txt'),'a',666, (e, id) => {
    fs.write(id, password + os.EQL, null,'utf-8',() => {
        fs.close(id,() => {
            console.log(chalk.green('Password saved to passwordsofcrepass.txt'))
        })
    })
 })
}
module.exports = savePassword