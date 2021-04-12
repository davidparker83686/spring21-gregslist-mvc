import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


//Private
function _draw() {
  let houses = ProxyState.houses
  let template = ''
  houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}




//Public
export default class HousesController {
  constructor() {
    ProxyState.on('houses', _draw);
    this.getHouses()
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let newHouse = {
        // @ts-ignore
        bedrooms: form.bedrooms.value,
        // @ts-ignore
        bathrooms: form.bathrooms.value,
        // @ts-ignore
        levels: form.levels.value,
        // @ts-ignore  this converts the string to a number
        year: form.year.value,
        // @ts-ignore  this converts the string to a number
        price: Number(form.price.value),
        // @ts-ignore
        description: form.description.value,
        // @ts-ignore
        imgUrl: form.imgUrl.value
      }
      await housesService.createHouse(newHouse)

      // @ts-ignore
      form.reset()

      $('#new-house-form').modal('hide')
    } catch (error) {
      console.error(error)
    }
  }

  deleteHouse(id) {
    try {
      housesService.deleteHouse(id)
    } catch (error) {
      console.error(error)
    }
  }

  bid(id) {
    housesService.bid(id)
  }



  // showHouses() {
  //   document.getElementById('showhouses').className = "d-bock"
  // }

  showHouses() {
    let houseElem = document.getElementById('showhouses')

    if (houseElem.classList.contains('d-none')) {
      houseElem.classList.add('d-block')
      houseElem.classList.remove('d-none')
    } else {
      houseElem.classList.add('d-none')
      houseElem.classList.remove('d-block')
    }
  }



}

// className == className ?
//   document.getElementById('showhouses').className = "d-bock"

// this.completed == true ? 'checked' : ""


    // houseElem.classList.contains()

    // classlist.contains 
    // if (classname == d - none) {
    //   document.getElementById('showhouses').className = "d-bock"
    // } else if (classname == d - block) {
    //   document.getElementById('showhouses').className = "d-none"
    // }