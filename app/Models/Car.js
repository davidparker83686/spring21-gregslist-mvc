export default class Car {
  constructor({ make, model, year, price, imgUrl, description, id }) {
    // NOTE it is no longer our job to generate Id's
    this.id = id
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.imgUrl = imgUrl
    this.description = description

  }

  get Template() {
    return `
    <div class="col-md-4 mb-3">
      <div class="card shadow">
          <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.makeTitle()} | ${this.modelTitle()} | ${this.year}</h4>
              <p class="card-text">$${this.price.toFixed(2)} - '${this.description}'</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
              <button type="button" class="btn btn-info" onclick="app.carsController.bid('${this.id}')">Bid</button>
          </div>
      </div>
    </div>
    `
  }

  makeTitle() {
    let makeTitle = this.make
    return makeTitle.toUpperCase()
  }
  modelTitle() {
    let modelTitle = this.model
    return modelTitle.toUpperCase()
  }


}