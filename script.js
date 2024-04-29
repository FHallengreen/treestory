
window.addEventListener('load', start);

function start() {
    console.log('Script started');
    showScene(scene1);
    currentScene = scene1;
    registerButtonClicks();

}

let currentScene;

const scene4 = {
    title: "Orbital Analysis",
    text: "The crew opts to stay in orbit, using advanced sensors to analyze the signal more thoroughly.",
    choices: [
        {
            name: `Enhance our sensors to better understand the signals origin.`,
            node: undefined,
        },
        {
            name: `Prepare the ships defenses, just in case this signal is a trap.`,
            node: undefined,
        },
    ]
}
const scene3 = {
    title: "Drone Scouting",
    text: "A drone is dispatched to provide a preliminary survey of the area around the signal.",
    choices: [
        {
            name: `Focus the drones sensors on detecting any biological entities`,
            node: undefined,
        },
        {
            name: `Analyze the geological features of the area`,
            node: undefined,
        },
    ]
}
const scene2 = {
    title: "Planetary Landing",
    text: "The landing team prepares to explore the surface near the signal source, with the ship in standby mode overhead",
    choices: [
        {
            name: `Equip the team with heavy weaponry, just in case`,
            node: undefined,
        },
        {
            name: `Pack light to avoid seeming hostile and to move quickly`,
            node: undefined,
        },
    ]
}

const scene1 = {
    title: `Aboard the starship "Voyager III," orbiting a mysterious newly discovered planet in the Andromeda
    system. Captain Rynn and the crew are deciding whether to land on the planet to investigate a strange
    signal that was detected.`,
    text: `Captain Alex Rynn and the crew of the starship "Voyager III" detect an unidentified signal emanating
    from a nearby uncharted planet.`,
    choices: [
        {
            name: `Let's land near the source of the signal and investigate firsthand`,
            node: scene2,
        },
        {
            name: `Send a drone to scout the area before we make any moves`,
            node: scene3,
        },
        {
            name: `Keep monitoring the signal from orbit to ensure our safety`,
            node: scene4,
        }
    ]
}



function registerButtonClicks() {
    document.querySelector("main").addEventListener("click", userClicked);

    function userClicked(event) {
        const target = event.target;
        if (target.tagName === "BUTTON") {
            buttonClicked(target);
        }
    }
}

function buttonClicked(button) {
    console.log(button);

    button.parentElement.remove();

    const index = Number(button.id.substring(10));
    const choice = currentScene.choices[index];

    currentScene = choice.node;
    showScene(currentScene);
}


function showScene(scene) {
    const html = /*html*/ `
    <div class="scene bg-gray-800 p-2 rounded-lg shadow-lg">
        <h2 class="text-lg md:text-xl py-3 text-center font-bold text-purple-300">${scene.title}</h2>
        <div class="text py-3 text-center text-gray-200">
            ${scene.text}
        </div>
        <div class="choices grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            ${scene.choices.map((choice, i) => `<button id="choice${i}" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">${i + 1}. ${choice.name}</button>`).join(" ")}
        </div>
    </div>`;
    document.querySelector("main")
        .insertAdjacentHTML("beforeend", html);
}
