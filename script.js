var wizzard = {
	id: "Carobnjak",
	health: 150,
	weapons: [{id: "spell", damage: 20}],
	backpack: [],
	pickWeapon(w) {backpack.push(w)}
};
var swordsman = {
	id: "Macevalac",
	health: 100,
	weapons: [{id: "sword", damage: 10}, {id: "spear", damage: 15}],
};
Object.setPrototypeOf(swordsman, wizzard);
var dragon = {
	id: "Zmaj",
	weapons: [{id: "hit", damage: 5}, {id: "fire", damage: 20}],
	health: 100, // assumed
	pickWeapon() {
		return Math.random() <= 0.5 ? weapons[0] : weapons[1];
	}
};
var spider = {
	id: "Pauk",
	weapons: [{id: "hit", damage: 5}, {id: "bite", damage: 8}],
};
Object.setPrototypeOf(spider, dragon);

function fight(hero, monster) {
	while (hero.health > 0 && monster.health > 0)
	{
		Math.random() * 100 <= 50 ? attack(hero, monster) : attack(monster, hero);
	}
	let winner = hero.health > 0 ? hero : monster;
	let loser = hero.health == 0 ? hero : monster;
	console.log(`${winner.id} je pobedio u duelu sa ${loser.id}`);
}

function attack(attacker, defender) {
	let selectedWeapon = attacker.weapons[Math.floor(Math.random() * attacker.weapons.length)];
	/*if (attacker.backpack)
	{
		try {
			selectedWeapon = backpack[0];
		}
		catch(err)
		{
			throw "NoWeapon!";
		}
	}*/
	defender.health -= selectedWeapon.damage;
	console.log(`${attacker.id} je napao ${defender.id} pomocu ${selectedWeapon.id}`);
}

fight(wizzard, dragon);