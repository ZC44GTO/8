class Utils {
    getRootElement = null;
    getRootObject = null;
    getRenderElement = null;
    getRandomArbitrary = null;
    isNotOpenChat = null;
    isParkourMode = null;
    isNotKillZone = null;
    isGameReady = null;
    errorLog = null
}
utilsObjects = {
    rootElement: null,
    rootObject: null
}, Utils.getRootElement = function () {
    return utilsObjects.rootElement ? utilsObjects.rootElement : utilsObjects.rootElement = document.getElementById("root")._reactRootContainer
}, Utils.getRootObject = function () {
    return utilsObjects.rootObject ? utilsObjects.rootObject : this.getRootElement().hasOwnProperty("_internalRoot") ? utilsObjects.rootObject = this.getRootElement()._internalRoot.current.memoizedState.element.type.prototype : null
}, Utils.getRenderElement = function () {
    return document.getElementsByClassName("sc-bwzfXH hjlOfi").item(0)
}, Utils.getRandomArbitrary = function (e, t) {
    return Math.random() * (t - e) + e
}, Utils.isNotOpenChat = function () {
    return null == document.getElementsByClassName("sc-bwzfXH iokmvL").item(0)
}, Utils.isParkourMode = function () {
    let e = this.getRootObject();
    return !!e && e.store.state.battleStatistics.isParkourMode
}, Utils.isNotKillZone = function (e, t) {
    if (!this.isParkourMode()) return !0;
    if (!e) return !1;
    let a = e.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds;
    return !!a && ((0 == t.x || !(t.x >= a.maxX || t.x <= a.minX)) && (0 == t.y || !(t.y >= a.maxY || t.y <= a.minY)))
}, Utils.isGameReady = function () {
    if (!this.getRenderElement()) return !1;
    let e = this.getRootObject();
    return !!e && e.store.state.battleStatistics.battleLoaded
}, Utils.errorLog = function (e) {
    console.log("[WolfaHack] " + e)
};
class GameObjects {
    getWorld = null;
    getGameActions = null;
    getMines = null;
    getLocalPlayer = null;
    getPhysicsComponent = null;
    getHealthComponent = null;
    getCamera = null;
    getStrikerComponent = null
}
gameObjects = {
    localPlayer: null,
    world: null,
    gameActions: null,
    mines: null,
    physicsComponent: null,
    healthComponent: null,
    camera: null,
    strikerComponent: null
}, GameObjects.getWorld = function () {
    if (gameObjects.world) return gameObjects.world;
    let e = this.getLocalPlayer();
    return e ? gameObjects.world = e.at(0).world : null
}, GameObjects.getGameActions = function () {
    if (gameObjects.gameActions) return gameObjects.gameActions;
    let e = this.getWorld();
    return e ? gameObjects.gameActions = Array.from(e.inputManager.input.gameActions_0.map) : null
}, GameObjects.getMines = function () {
    if (gameObjects.mines) return gameObjects.mines;
    let e = this.getWorld();
    return e ? gameObjects.mines = e.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(15) : null
}, GameObjects.getLocalPlayer = function () {
    if (gameObjects.localPlayer) return gameObjects.localPlayer;
    let e = Utils.getRootObject();
    if (!e) return console.log("!rootObject"), null;
    let t = e.store.subscribers.array_hd7ov6$_0;
    if (!t) return console.log("!subs"), null;
    for (let e = 0; e < t.length; e++)
        if (t.at(e).hasOwnProperty("tank")) return gameObjects.localPlayer = t.at(e).tank.components_0.array;
    return null
}, GameObjects.getPhysicsComponent = function () {
    if (gameObjects.physicsComponent) return gameObjects.physicsComponent;
    let e = this.getLocalPlayer();
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).hasOwnProperty("tankPhysicsComponent_tczrao$_0")) return gameObjects.physicsComponent = e.at(t).tankPhysicsComponent_tczrao$_0;
    return null
}, GameObjects.getHealthComponent = function () {
    if (gameObjects.healthComponent) return gameObjects.healthComponent;
    let e = this.getLocalPlayer();
    return e ? gameObjects.healthComponent = e.at(1) : null
}, GameObjects.getCamera = function () {
    if (gameObjects.camera) return gameObjects.camera;
    let e = this.getLocalPlayer();
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).hasOwnProperty("followCamera_w8ai3w$_0")) return gameObjects.camera = e.at(t).followCamera_0.currState_0;
    return null
}, GameObjects.getStrikerComponent = function () {
    if (gameObjects.strikerComponent) return gameObjects.strikerComponent;
    let e = this.getLocalPlayer();
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).hasOwnProperty("strikerWeapon_jjsiik$_0")) return gameObjects.strikerComponent = e.at(t).strikerWeapon_jjsiik$_0;
    return null
};
class AirBreak {
    process = null
}
const airBreak = {
    isShiftPressed: !1,
    antiAim: !1,
    state: !1,
    speed: 70,
    position: {
        x: 0,
        y: 0,
        z: 0
    },
    velocity: {
        x: 0,
        y: 0,
        z: 0
    }
};
document.addEventListener("keyup", (e => {
    16 == e.keyCode && 2 == e.location && Utils.isGameReady() && Utils.isNotOpenChat() && (airBreak.isShiftPressed = !0)
})), document.addEventListener("keyup", (e => {
    74 == e.keyCode && Utils.isGameReady() && Utils.isNotOpenChat() && (airBreak.antiAim = !airBreak.antiAim)
})), AirBreak.process = function (e) {
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = GameObjects.getPhysicsComponent();
    if (!a) return;
    let n = GameObjects.getCamera();
    if (!n) return;
    let i = t.physicsScene_0.bodies_0.array_hd7ov6$_0;
    if (!i) return;
    if (airBreak.isShiftPressed)
        if (airBreak.isShiftPressed = !1, airBreak.state = !airBreak.state, airBreak.state) airBreak.position.x = a.body.state.position.x, airBreak.position.y = a.body.state.position.y, airBreak.position.z = a.body.state.position.z, airBreak.velocity.x = 0, airBreak.velocity.y = 0, airBreak.velocity.z = 0;
        else {
            a.body.state.velocity.x = 0, a.body.state.velocity.y = 0, a.body.state.velocity.z = 0, a.body.state.angularVelocity.x = 0, a.body.state.angularVelocity.y = 0, a.body.state.angularVelocity.z = 0;
            for (let e = 0; e < i.length; e++) i.at(e).movable = !0
        } if (!airBreak.state) return;
    let o = n.direction;
    if (airBreak.velocity.x = 0, airBreak.velocity.y = 0, KeyPressing.isKeyPressed(87) && Utils.isNotOpenChat()) {
        let e = {
            x: airBreak.position.x + airBreak.speed * Math.sin(-o),
            y: airBreak.position.y + airBreak.speed * Math.cos(-o),
            z: 0
        };
        Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y, airBreak.velocity.x += a.body.maxSpeedXY * Math.sin(-o), airBreak.velocity.y += a.body.maxSpeedXY * Math.cos(-o))
    }
    if (KeyPressing.isKeyPressed(83) && Utils.isNotOpenChat()) {
        let e = {
            x: airBreak.position.x - airBreak.speed * Math.sin(-o),
            y: airBreak.position.y - airBreak.speed * Math.cos(-o),
            z: 0
        };
        Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y, airBreak.velocity.x -= a.body.maxSpeedXY * Math.sin(-o), airBreak.velocity.y -= a.body.maxSpeedXY * Math.cos(-o))
    }
    if (KeyPressing.isKeyPressed(65) && Utils.isNotOpenChat()) {
        let e = {
            x: airBreak.position.x - airBreak.speed * Math.sin(-(o - Math.PI / 2)),
            y: airBreak.position.y - airBreak.speed * Math.cos(-(o - Math.PI / 2)),
            z: 0
        };
        Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y, airBreak.velocity.x -= a.body.maxSpeedXY * Math.sin(-(o - Math.PI / 2)), airBreak.velocity.y -= a.body.maxSpeedXY * Math.cos(-(o - Math.PI / 2)))
    }
    if (KeyPressing.isKeyPressed(68) && Utils.isNotOpenChat()) {
        let e = {
            x: airBreak.position.x + airBreak.speed * Math.sin(-(o - Math.PI / 2)),
            y: airBreak.position.y + airBreak.speed * Math.cos(-(o - Math.PI / 2)),
            z: 0
        };
        Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y, airBreak.velocity.x += a.body.maxSpeedXY * Math.sin(-(o - Math.PI / 2)), airBreak.velocity.y += a.body.maxSpeedXY * Math.cos(-(o - Math.PI / 2)))
    }
    if (KeyPressing.isKeyPressed(81) && Utils.isNotOpenChat() && (airBreak.position.z += airBreak.speed), KeyPressing.isKeyPressed(69) && Utils.isNotOpenChat() && (airBreak.position.z -= airBreak.speed), KeyPressing.isKeyPressed(37) && Utils.isNotOpenChat() && airBreak.speed > 1 && (airBreak.speed -= 1), KeyPressing.isKeyPressed(39) && Utils.isNotOpenChat() && (airBreak.speed += 1), Utils.isParkourMode()) {
        for (let e = 0; e < i.length; e++) i.at(e).movable = !1;
        if (airBreak.antiAim) {
            let e = t.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds;
            a.interpolatedPosition.x = Utils.getRandomArbitrary(e.minX, e.maxX), a.interpolatedPosition.y = Utils.getRandomArbitrary(e.minY, e.maxY), a.interpolatedPosition.z = Utils.getRandomArbitrary(e.maxZ + 500, e.maxZ + 500)
        }
        a.body.state.position.x = airBreak.position.x, a.body.state.position.y = airBreak.position.y
    } else a.body.state.velocity.x = airBreak.velocity.x, a.body.state.velocity.y = airBreak.velocity.y;
    a.body.state.position.z = airBreak.position.z, a.body.state.velocity.z = airBreak.velocity.z, a.body.state.orientation.w = Math.sin(-(n.direction - Math.PI) / 2), a.body.state.orientation.z = Math.cos(-(n.direction - Math.PI) / 2), a.body.state.orientation.x = 0, a.body.state.orientation.y = 0, a.body.state.angularVelocity.x = 0, a.body.state.angularVelocity.y = 0, a.body.state.angularVelocity.z = 0
};
class Clicker {
    process = null
}
let autoMining = !1;
document.addEventListener("keyup", (e => {
    53 == e.keyCode && Utils.isGameReady() && Utils.isNotOpenChat() && (autoMining = !autoMining)
})), Clicker.process = function (e) {
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = GameObjects.getGameActions();
    if (!a) return;
    let n = GameObjects.getHealthComponent();
    n && (Utils.isParkourMode() && !n.isFullHealth() && n.alive && (a.at(5).at(1).wasPressed = !0, a.at(5).at(1).wasReleased = !0, a.at(9).at(1).wasPressed = !0, a.at(9).at(1).wasReleased = !0, t.frameStartTime_0 += 5e6, t.inputManager.input.processActions_0(), t.frameStartTime_0 -= 5e6), a.at(6).at(1).wasPressed = !0, a.at(6).at(1).wasReleased = !0, a.at(7).at(1).wasPressed = !0, a.at(7).at(1).wasReleased = !0, a.at(8).at(1).wasPressed = !0, a.at(8).at(1).wasReleased = !0, autoMining && (a.at(9).at(1).wasPressed = !0, a.at(9).at(1).wasReleased = !0))
};
class RemoveMines {
    process = null
}
RemoveMines.process = function (e) {
    if (!e) return;
    if (!GameObjects.getWorld()) return;
    let t = GameObjects.getMines();
    var a;
    if (t)
        for (a = t.minesByUser_0.keys.iterator(); a.hasNext();) {
            var n = a.next();
            t.removeAllMines_0(n)
        }
};
class Striker {
    init = null;
    process = null
}
let targetId, shellCache = null,
    state = !1,
    salvoRocketsCount = 8;
Striker.init = function (e) {
    if (!e) return;
    if (!GameObjects.getWorld()) return;
    let t = GameObjects.getStrikerComponent();
    if (!t) return;
    let a = t.targetingSystem_0.targetingSystem_vutpoz$_0;
    a || (a = t.targetingSystem_0.targetingSystem_0);
    let n = a.directionCalculator_0.targetingSectorsCalculator_0;
    n.maxElevationAngle_0 = 1e5, n.minElevationAngle_0 = -1e5, salvoRocketsCount = t.salvoRocketsCount, t.__proto__.lockTarget_gcez93$ = function (e, a, n) {
        return t.stopAiming(), this.lockTarget_gcez93$$default(e, a), targetId = e.targetId, !0
    };
    for (let t = 0; t < e.length; t++)
        if (e.at(t).hasOwnProperty("shellCache_0")) {
            shellCache = e.at(t).shellCache_0.itemsInUse_123ot1$_0.array_hd7ov6$_0;
            break
        }
}, Striker.process = function (e) {
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = GameObjects.getStrikerComponent();
    if (a && (KeyPressing.isKeyPressed(82) && Utils.isNotOpenChat() && a.explodeRockets(), shellCache)) {
        shellCache.length == salvoRocketsCount && setTimeout((() => {
            state = !0
        }), 777);
        let e = {
            x: 0,
            y: 0,
            z: 0
        };
        if (targetId) {
            let a = t.physicsScene_0.bodies_0.array_hd7ov6$_0;
            for (let t = 0; t < a.length; t++)
                if (a.at(t).data.components_0.array.at(4).userId == targetId && a.at(t).state.position) {
                    e = a.at(t).state.position;
                    break
                }
        }
        if (state) {
            for (let t = 0; t < shellCache.length; t++) shellCache.at(t).components_0.array.at(1).direction.x = 0, shellCache.at(t).components_0.array.at(1).direction.y = 0, shellCache.at(t).components_0.array.at(1).direction.z = 0, e && (shellCache.at(t).components_0.array.at(1).position.x = e.x, shellCache.at(t).components_0.array.at(1).position.y = e.y, shellCache.at(t).components_0.array.at(1).position.z = e.z);
            0 == shellCache.length && (state = !1)
        } else
            for (let e = 0; e < shellCache.length; e++) shellCache.at(e).components_0.array.at(1).direction.x = 0, shellCache.at(e).components_0.array.at(1).direction.y = 0, shellCache.at(e).components_0.array.at(1).direction.z = 0
    }
};
class WallHack {
    process = null
}

function drawEsp(e, t) {
    let a = e.at(7).weaponSkin_3qscef$_0.root_s4vp75$_0,
        n = a.children_ich852$_0.array,
        i = e.at(7).weaponSkin_3qscef$_0.hullSkinComponent_p2c7jk$_0.hull_tmiccz$_0,
        o = i.children_ich852$_0.array;
    a.outlined = !0, a.outlineBold = !1, a.outlineColor = t, i.outlined = !0, i.outlineBold = !1, i.outlineColor = t;
    for (let e = 0; e < n.length; e++) n.at(e).outlined = !0, n.at(e).outlineBold = !1, n.at(e).outlineColor = t;
    for (let e = 0; e < o.length; e++) o.at(e).outlined = !0, o.at(e).outlineBold = !1, o.at(e).outlineColor = t
}
colorEnemy = 10027085, colorTarget = 6750054, WallHack.process = function (e) {
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = t.physicsScene_0.bodies_0.array_hd7ov6$_0;
    for (let t = 0; t < a.length; t++)
        if (a.at(t).data.components_0.array.at(0).hasOwnProperty("team_1h5i78$_0") && a.at(t).data.components_0.array.at(0).team_1h5i78$_0.hasOwnProperty("name$") && (e.at(0).team_1h5i78$_0.name$ != a.at(t).data.components_0.array.at(0).team_1h5i78$_0.name$ || "NONE" == e.at(0).team_1h5i78$_0.name$)) {
            let e = colorEnemy;
            a.at(t).data.components_0.array.at(4).userId == targetId && (e = colorTarget), drawEsp(a.at(t).data.components_0.array, e)
        }
};
let airBreakObj, clickerObj, cheatMenuCode = '\n<div class="wolf" id="wolf_window">\n\n\t<style>\n        .wolf {\n            left: 91%;\n            top: 82%;\n            position: fixed;\n            z-index: 1000;\n            display: flex;\n        }\n\n        .wolf__content {\n            padding: 15px;\n            background: #000000;\n            box-shadow: 0 5px 15px black;\n            font-family: \'Roboto\', sans-serif;\n            color: white;\n            font-size: 0.8rem;\n            font-weight: 500;\n            border-radius: 15px;\n        }\n\t</style>\n\n\t<div class="wolf__content">\n\t\t<font color="#007FFF"><center>WolfaHack</center><hr>\n\n\t\t<div id="gameStates" style="display: none;">\n\t\t\t<p>Парение: <font id="airBreakStateColor" color="red"><label id="airBreakState">Выкл</label></font></p>\n\t\t\t<p>Скорость: <font color="#FFA500"><label id="airBreakSpeed">100</label></font></p>\n\t\t\t<p>Анти-Аим: <font id="antiAimStateColor" color="red"><label id="antiAimState">Выкл</label></font></p>\n\t\t\t<p>Кликер: <font id="autoMiningStateColor" color="red"><label id="autoMiningState">Выкл</label></font></p>\n\t\t</div>\n\n\t\t<div id="infoWindow">\n\t\t\t<p></p>\n\t\t\t<p>для вовк мемберов</p>\n\t\t\t<p><a href="https://vk.com/wlf.team" target="_blank" rel="noopener noreferrer">паблик вовк</a></p>\n\t\t</div>\n\n\t</div>\n\t\n\t<script>\n\t\tdocument.addEventListener(\'keyup\', function (evt)\n\t\t{\n\t\t\tif (evt.keyCode === 45)\n\t\t\t{\n\t\t\t\tif (document.getElementById("wolf_window").style.display == "none")\n\t\t\t\t{\n\t\t\t\t\tdocument.getElementById("wolf_window").style.display = "";\n\t\t\t\t}\n\t\t\t\telse\n\t\t\t\t{\n\t\t\t\t\tdocument.getElementById("wolf_window").style.display = "none";\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t<\/script>\n\t\n</div>\n';
class CheatMenu {
    init = null;
    setStates = null
}
CheatMenu.init = function () {
    $("body").append(cheatMenuCode), airBreakObj = {
        airBreakState: {
            color: document.getElementById("airBreakStateColor"),
            label: document.getElementById("airBreakState")
        },
        airBreakSpeed: {
            label: document.getElementById("airBreakSpeed")
        },
        antiAimState: {
            color: document.getElementById("antiAimStateColor"),
            label: document.getElementById("antiAimState")
        }
    }, clickerObj = {
        autoMining: {
            color: document.getElementById("autoMiningStateColor"),
            label: document.getElementById("autoMiningState")
        }
    }
}, CheatMenu.setStates = function () {
    "Выкл" == airBreakObj.airBreakState.label.textContent && 1 == airBreak.state && (airBreakObj.airBreakState.label.textContent = "Вкл", airBreakObj.airBreakState.color.color = "green"), "Вкл" == airBreakObj.airBreakState.label.textContent && 0 == airBreak.state && (airBreakObj.airBreakState.label.textContent = "Выкл", airBreakObj.airBreakState.color.color = "red"), airBreakObj.airBreakSpeed.label.textContent != airBreak.speed && (airBreakObj.airBreakSpeed.label.textContent = airBreak.speed), "Выкл" == airBreakObj.antiAimState.label.textContent && 1 == airBreak.antiAim && (airBreakObj.antiAimState.label.textContent = "Вкл", airBreakObj.antiAimState.color.color = "green"), "Вкл" == airBreakObj.antiAimState.label.textContent && 0 == airBreak.antiAim && (airBreakObj.antiAimState.label.textContent = "Выкл", airBreakObj.antiAimState.color.color = "red"), "Выкл" == clickerObj.autoMining.label.textContent && 1 == autoMining && (clickerObj.autoMining.label.textContent = "Вкл", clickerObj.autoMining.color.color = "green"), "Вкл" == clickerObj.autoMining.label.textContent && 0 == autoMining && (clickerObj.autoMining.label.textContent = "Выкл", clickerObj.autoMining.color.color = "red")
};
let init = !1;

function reset() {
    init = !1, airBreak.state = !1, document.getElementById("infoWindow").style.display = "", document.getElementById("gameStates").style.display = "none", gameObjects = {
        localPlayer: null,
        world: null,
        gameActions: null,
        mines: null,
        physicsComponent: null,
        healthComponent: null,
        camera: null,
        strikerComponent: null
    }, utilsObjects = {
        rootElement: null,
        rootObject: null
    }
}

function mainEvent() {
    try {
        if (!init && Utils.isGameReady()) {
            init = !0, document.getElementById("infoWindow").style.display = "none", document.getElementById("gameStates").style.display = "";
            let e = GameObjects.getLocalPlayer();
            Striker.init(e), e.at(0).entity.unpossess = function () {
                this.isPossessed = !1, reset()
            }
        } else init && !Utils.isGameReady() && reset();
        if (init) {
            let e = GameObjects.getLocalPlayer();
            e && (e.at(37).needImmediateUpdate_0 = !0), AirBreak.process(e), Striker.process(e), RemoveMines.process(e), WallHack.process(e), CheatMenu.setStates()
        }
    } catch (e) {
        Utils.errorLog(e), reset()
    }
    requestAnimationFrame(mainEvent)
}
CheatMenu.init(), requestAnimationFrame(mainEvent), console.clear(), console.log("[WolfaHack] Хак успешно заинжекчен");
