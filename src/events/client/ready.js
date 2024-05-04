module.exports = {
    name: 'ready',
    once: true,
    async execute(client){
        console.log(`ready, ${client.user.tag} OK!`)
    }
}