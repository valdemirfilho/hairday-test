import dayjs from "dayjs";

const periodMorning = document.getElementById('period-morning');
const periodAfternoon = document.getElementById('period-afternoon');
const periodNight = document.getElementById('period-night');

export function schedulesShow({dailySchedules}) {
  try {
    periodMorning.innerHTML = ''
    periodAfternoon.innerHTML = ''
    periodNight.innerHTML = ''

    dailySchedules.forEach((schedule) => {
      console.log(schedule.id, schedule.name, schedule.when)
      const item = document.createElement('li')
      const time = document.createElement('strong')
      const name = document.createElement('span')
      const cancelIcon = document.createElement('img')

      item.setAttribute("data-id", schedule.id)
      
      time.textContent = dayjs(schedule.when).format('HH:mm')
      name.textContent = schedule.name
      cancelIcon.classList.add('cancel-icon')
      cancelIcon.setAttribute('src', './src/assets/cancel.svg')
      cancelIcon.setAttribute('alt', 'Cancelar')

      const hour = dayjs(schedule.when).hour()
      item.append(time, name, cancelIcon)


      if(hour <= 12) {
        periodMorning.appendChild(item)
      }else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })
  } catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}