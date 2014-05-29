//////////////////////////////////////////////
// Attributes of all player types           //
//////////////////////////////////////////////
var playerAttr = {
	nudeGuy: {
		type: 'melee',
		health: 75,
		healthGeneration: 5,
		damage: 10, // 10
		spriteOffset: 0,
	    spriteHeight: 46,
	    hitbox: [61, 27],
	    walkAnimationSpeed: 5.5,
	    fightAnimationSpeed: 6.5
	},

	zombie: {
		type: 'melee',
		health: 100,
		healthGeneration: 5,
		damage: 10,
		spriteOffset: 604,
	    spriteHeight: 46,
	    hitbox: [61, 27],
	    walkAnimationSpeed: 5.5,
	    fightAnimationSpeed: 6.5
	}
};