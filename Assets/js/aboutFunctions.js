const goals = document.getElementById('goals')
const team = document.getElementById('team')
const igor = document.getElementById('igor')
const nicholas = document.getElementById('nicholas')
const jussara = document.getElementById('jussara')
const missions = document.getElementById('missions')
const goalsN = document.getElementById('goalsName')
const teamN = document.getElementById('teamName')
const igorN = document.getElementById('igorName')
const nicholasN = document.getElementById('nicholasName')
const jussaraN = document.getElementById('jussaraName')
const missionsN = document.getElementById('missionsName')

function openGoals() {
    goals.className = 'sectionActive'
    goalsN.className = 'h2Active'
    team.removeAttribute('class')
    teamN.removeAttribute('class')
    igor.removeAttribute('class')
    igorN.classList.remove('intNamesActive')
    nicholas.removeAttribute('class')
    nicholasN.classList.remove('intNamesActive')
    jussara.removeAttribute('class')
    jussaraN.classList.remove('intNamesActive')
    missions.removeAttribute('class')
    missionsN.removeAttribute('class')
}

function openTeam() {
    team.className = 'sectionActive'
    teamN.className = 'h2Active'
    goals.removeAttribute('class')
    goalsN.removeAttribute('class')
    igor.removeAttribute('class')
    igorN.classList.remove('intNamesActive')
    nicholas.removeAttribute('class')
    nicholasN.classList.remove('intNamesActive')
    jussara.removeAttribute('class')
    jussaraN.classList.remove('intNamesActive')
    missions.removeAttribute('class')
    missionsN.removeAttribute('class')
}

function openIgor() {
    igor.className = 'sectionActive'
    igorN.classList.add('intNamesActive')
    team.removeAttribute('class')
    teamN.removeAttribute('class')
    goals.removeAttribute('class')
    goalsN.removeAttribute('class')
    nicholas.removeAttribute('class')
    nicholasN.classList.remove('intNamesActive')
    jussara.removeAttribute('class')
    jussaraN.classList.remove('intNamesActive')
    missions.removeAttribute('class')
    missionsN.removeAttribute('class')
}

function openNicholas() {
    nicholas.className = 'sectionActive'
    nicholasN.classList.add('intNamesActive')
    team.removeAttribute('class')
    teamN.removeAttribute('class')
    goals.removeAttribute('class')
    goalsN.removeAttribute('class')
    igor.removeAttribute('class')
    igorN.classList.remove('intNamesActive')
    jussara.removeAttribute('class')
    jussaraN.classList.remove('intNamesActive')
    missions.removeAttribute('class')
    missionsN.removeAttribute('class')
}

function openJussara() {
    jussara.className = 'sectionActive'
    jussaraN.classList.add('intNamesActive')
    team.removeAttribute('class')
    teamN.removeAttribute('class')
    goals.removeAttribute('class')
    goalsN.removeAttribute('class')
    igor.removeAttribute('class')
    igorN.classList.remove('intNamesActive')
    nicholas.removeAttribute('class')
    nicholasN.classList.remove('intNamesActive')
    missions.removeAttribute('class')
    missionsN.removeAttribute('class')
}

function openMissions() {
    missions.className = 'sectionActive'
    missionsN.className = 'h2Active'
    team.removeAttribute('class')
    teamN.removeAttribute('class')
    igor.removeAttribute('class')
    igorN.classList.remove('intNamesActive')
    nicholas.removeAttribute('class')
    nicholasN.classList.remove('intNamesActive')
    jussara.removeAttribute('class')
    jussaraN.classList.remove('intNamesActive')
    goals.removeAttribute('class')
    goalsN.removeAttribute('class')
}