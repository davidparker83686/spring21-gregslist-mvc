import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";


class HousesService {
  async getHouses() {
    let res = await api.get('houses')
    console.log(res.data)
    ProxyState.houses = res.data.map(c => new House(c))
  }

  async createHouse(newHouse) {
    let res = await api.post('houses', newHouse)
    console.log(res.data)
    this.getHouses()
  }
  async bid(id) {
    let house = ProxyState.houses.find(house => house.id === id)
    house.price += 100
    await api.put('houses/' + id, { price: house.price })
    ProxyState.houses = ProxyState.houses
  }
  async deleteHouse(id) {
    await api.delete('houses/' + id)
    ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
  }
}
export const housesService = new HousesService();

