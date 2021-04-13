export default class Job {
  constructor({ _id, company, description, jobTitle, hours, rate, __v, id }) {

    this._id = _id
    this.company = company
    this.jobTitle = jobTitle
    this.hours = hours
    this.rate = rate
    this.description = description
    this.__v = __v
    this.id = id
  }



  get Template() {
    return `
    <div class="col-md-4 mb-3">
      <div class="card shadow">
          <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.companyTitle()} | ${this.jobTitle} </h4>
              <p class="card-text">${this.hours} - $${this.rate} per hr </p>
              <p class="card-text">'${this.description}'</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
          </div>
      </div>
    </div>
    `
  }

  companyTitle() {
    let companyTitle = this.company
    return companyTitle.toUpperCase()
  }



}