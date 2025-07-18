const menu= document.getElementById('menu')
const closeBar= document.getElementById('closeBar')
const openMenu= document.getElementById('openMenu')
const values= document.getElementById('values')
const mission= document.getElementById('mission')
const problem= document.getElementById('problem')
const dash= document.getElementById('dash')
const title= document.getElementById('title')

openMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

closeBar.addEventListener('click', ()=>{
    menu.classList.add('hidden')
})

values.addEventListener('click', () => {
    values.classList.add('bg-lightBlue')
    mission.classList.remove('bg-lightBlue')
    problem.classList.remove('bg-lightBlue')
    values.classList.add('rounded-full')
    mission.classList.remove('rounded-full')
    problem.classList.remove('rounded-full')
    title.textContent= 'Our Values'

    dash.innerHTML= `<div class="w-full space-y-3 lg:space-y-0 flex justify-center flex-wrap space-x-3 mt-2 mb-20">
          <div class="w-full lg:w-[32%] rounded-lg border-mainGreen border-2 space-y-7 p-10 flex flex-col items-center justify-center shadow-md">
            <img src="./assets/accountability.png" alt="accountability" width="100">
            <h2 class="text-[20px] lg:text-[25px] font-bold">Accountability</h2>
            <p class="text-[12px] lg:text-[14px] text-center">At EduEthics, we hold ourselves responsible for every action we take as a team. From following up on reported cases to documenting our processes with transparency, accountability is the foundation of how we build trust, both within our team and with every user we serve.</p>
          </div>
          <div class="w-full lg:w-[32%] rounded-lg border-mainGreen border-2 space-y-7 p-10 flex flex-col items-center justify-center shadow-md">
            <img src="./assets/womens-power.png" alt="collaboration" width="100">
            <h2 class="text-[20px] lg:text-[25px] font-bold">Collaboration</h2>
            <p class="text-[12px] lg:text-[14px] text-center">We believe in creating systems that give people a voice. Whether it's designing user-friendly reporting tools or providing helpful resources, we focus on empowering students and institutions to take bold steps toward justice, healing, and long-lasting cultural change.</p>
          </div>
          <div class="w-full lg:w-[32%] rounded-lg border-mainGreen border-2 space-y-7 p-10 flex flex-col items-center justify-center shadow-md">
            <img src="./assets/collaboration.png" alt="empowerment" width="100">
            <h2 class="text-[20px] lg:text-[25px] font-bold">Empowerment</h2>
            <p class="text-[12px] lg:text-[14px] text-center">Collaboration fuels every milestone we achieve. We actively listen to diverse perspectives, delegate tasks based on strengths, and work together to refine EduEthics into a solution that serves real people. Every line of code, idea, or feature is shaped by shared vision</p>
          </div>
        </div>`
})
problem.addEventListener('click', () => {
    values.classList.remove('bg-lightBlue')
    mission.classList.remove('bg-lightBlue')
    problem.classList.add('bg-lightBlue')
    values.classList.remove('rounded-full')
    mission.classList.remove('rounded-full')
    problem.classList.add('rounded-full')
    title.textContent= 'Problem Statement'

    dash.innerHTML= `<section class="w-full flex lg:space-y-0 space-y-4 justify-center items-center p-5 flex-col lg:flex-row font-[Montserrat] space-x-4 mb-20">
        <div class="w-full flex flex-col text-start justify-center lg:pl-20 pl-5">
          <h2 class="text-[20px] lg:text-[25px] font-bold pb-5">Problems</h2>
          <p class="text-[12px] lg:text-[14px]">In many schools and universities, students silently suffer from sexual harassment and abuse, often with no safe way to report or get help. Fear, shame, and lack of support systems keep victims quiet, while offenders go unpunished. This creates a harmful culture of silence, mistrust, and injustice.</p>
        </div>
        <div class="w-full rounded-lg lg:flex lg:justify-center"> 
          <img src="./assets/Premium Vector _ Sexual harassment banner.jpg" alt="problem" width="420" class="rounded-lg m-auto py-4 lg:m-0 lg:py-0">
        </div>
       </section>`
})
mission.addEventListener('click', () => {
    values.classList.remove('bg-lightBlue')
    mission.classList.add('bg-lightBlue')
    problem.classList.remove('bg-lightBlue')
    values.classList.remove('rounded-full')
    mission.classList.add('rounded-full')
    problem.classList.remove('rounded-full')
    title.textContent= 'Our Mission'

    dash.innerHTML= `<section class="w-full flex lg:space-y-0 space-y-4 justify-center items-center p-5 flex-col lg:flex-row font-[Montserrat] space-x-4 mb-20">
        <div class="w-full flex flex-col text-start justify-center lg:pl-20 pl-5">
          <h2 class="text-[20px] lg:text-[25px] font-bold pb-5">Mission</h2>
          <p class="text-[12px] lg:text-[14px]">EduEthics is on a mission to create a safe and supportive reporting system for students facing sexual harassment and abuse. We aim to break the silence, empower voices, and help schools take real action toward justice and accountability.</p>
        </div>
        <div class="w-full rounded-lg lg:flex lg:justify-center"> 
          <img src="./assets/group.jpg" alt="mission" width="420" class="rounded-lg m-auto py-4 lg:m-0 lg:py-0">
        </div>
       </section>`
})