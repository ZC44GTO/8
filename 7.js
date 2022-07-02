class Clicker
{
    process = null; // args: 1 - localPlayer
}

// clicker.c.js

let autoMining = false

document.addEventListener('keyup', (e) =>
{
    if (e.keyCode == 35 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        autoMining = !autoMining;
    }
})


class commons{
getRoot = null
getReactRoot = null
getChatState = null
searchObject = null
}


class game{
getTankPhysics = null
getTank = null
getWorld = null
getLaser = null
getMines = null
getFlags = null
getPlayers = null
getMapBoundary = null
getBattleState = null
getSupplies = null
getHealth = null
getStriker = null
getCamera = null
}

game.getSupplies = function(supply){
try {
for(key in game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0){
if(game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[key].key_5xhq3d$_0.name$ == supply){
return key
}


}
} catch (error) {

}


}

function getSupplyArrays(){
try {
window.mines = game.getSupplies("MINE")
window.repairs = game.getSupplies("FIRST_AID")
window.DA = game.getSupplies("DOUBLE_ARMOR")
window.DD = game.getSupplies("DOUBLE_DAMAGE")
window.NITRO = game.getSupplies("NITRO")

} catch (error) {

}
}

supps = setInterval(getSupplyArrays,500)


Clicker.process = function (localPlayer)
{
    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let gameActions = GameObjects.getGameActions();

    if (!gameActions)
    {
        return;
    }

    let healthComponent = GameObjects.getHealthComponent();

    if (!healthComponent)
    {
        return;
    }

    if (Utils.isParkourMode() && !healthComponent.isFullHealth() && healthComponent.alive)
    {
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply()
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply()

        world.frameStartTime_0 += 5000000;

        world.inputManager.input.processActions_0();

        world.frameStartTime_0 -= 5000000;
    }

    gameActions.at(6).at(1).wasPressed = true;
    gameActions.at(6).at(1).wasReleased = true;

    gameActions.at(7).at(1).wasPressed = true;
    gameActions.at(7).at(1).wasReleased = true;

    gameActions.at(8).at(1).wasPressed = true;
    gameActions.at(8).at(1).wasReleased = true;

    if (autoMining)
    {
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply()
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply()
    }
}
