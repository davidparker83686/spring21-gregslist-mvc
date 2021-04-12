import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";


class JobsService {
  async getJobs() {
    let res = await api.get('jobs')
    console.log(res.data)
    ProxyState.jobs = res.data.map(c => new Job(c))
  }

  async createJobs(newJobs) {
    console.log(newJobs)
    let res = await api.post('jobs', newJobs)
    console.log(res.data)
    this.getJobs()
  }
  async bid(id) {
    let job = ProxyState.jobs.find(job => job.id === id)
    job.price += 100
    await api.put('jobs/' + id, { price: job.price })
    ProxyState.jobs = ProxyState.jobs
  }
  async deleteJob(id) {
    await api.delete('jobs/' + id)
    ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
  }
}

export const jobsService = new JobsService();