import ResponseController from "./ResponseController";


export default class BaseController {
	constructor(request) {
		this.request = request;
	}

	async get(url) {
		const res = await this.request.get(url);
		return new ResponseController(res).init();
	}

	async post(url, data) {
		const res = await this.request.post(url, { data });
		return new ResponseController(res).init();
	}
}