require("./database/module")
global.imageurl = 'https://c.top4top.io/p_3201yn8f34.jpg'
global.owner = "6288901419668"
global.namabot = "yourmine"
global.nomorbot = "6288901419668"
global.namaCreator = "yourmine"
global.versisc = '9.0'
global.packname = "yourmine"
global.author = "delta x yoshii"
global.jumlah = "5"
global.codeInvite = ""
global.isLink = 'https://whatsapp.com/channel/0029Vaere9WCRs1pZAtKPx0y'
global.autoJoin = false
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})