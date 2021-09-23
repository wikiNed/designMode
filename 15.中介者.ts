/**
 * 中介者模式采用一个中介与各对象交互，使各对象之间耦合松散
 */
interface PlayerMsg{
    name:string,
    color:string,
    alive:boolean
}
class Player implements PlayerMsg{
    name:string
    color:string
    alive:boolean
    playerDirector:PlayerDirector
    constructor(player:PlayerMsg,playerDirector:PlayerDirector) {
        this.color = player.color;
        this.name = player.name;
        this.alive = player.alive;
        this.playerDirector = playerDirector;
    }

    win(){
        console.log(this.name+'win')
    }

    lose(){
        console.log(this.name+'lose')
    }

    die(){
        console.log(this.name+'dead');
        this.playerDirector.receive('playerDead',this)
    }

    remove(){
        console.log(this.name+'remove');
        this.playerDirector.receive('removePlayer',this)
    }

    changeTeam(color){
        console.log(this.name+'changeTeam');
        this.playerDirector.receive('changeTeam', this, color)
    }
}

class PlayerDirector{
    players:any
    constructor() {
        this.players = [];
    }
    receive(msg:string, player:Player, color?:string){
        const teamColor = player.color;
        const teamPlayers = this.players[teamColor] = (this.players[teamColor] || []) as Array<Player>;
        switch (msg){
            case 'addPlayer':
                teamPlayers.push(player);
                break
            case 'remove':
                for (let i = 0; i < teamPlayers.length; i++) {
                    if (teamPlayers[i] === player){
                        teamPlayers.splice(i,1);
                    }
                }
                break
            case 'changeTeam':

                break
        }
    }
}
