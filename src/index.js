import { dhondtMethod } from "./dhondt"

const form = document.getElementById("data-form")
const resultOne = document.getElementById("result-1")
const resultTwo = document.getElementById("result-2")
const resultThree = document.getElementById("result-3")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formElements = form.elements 
    const votesOneString = formElements["votes1"].value
    const votesTwoString = formElements["votes2"].value
    const votesThreeString = formElements["votes3"].value 
    const votesOne = Number(votesOneString)
    const votesTwo = Number(votesTwoString)
    const votesThree = Number(votesThreeString)
    const ticketsString = formElements["tickets"].value
    const votes = [votesOne, votesTwo, votesThree]
    const tickets = Number(ticketsString)

    const dhondtResult = dhondtMethod(votes, tickets)

    resultOne.innerText = dhondtResult[0]
    resultTwo.innerText = dhondtResult[1]
    resultThree.innerText =  dhondtResult[2]
} )