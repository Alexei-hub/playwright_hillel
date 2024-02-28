import BaseController from './BaseController';
import { test } from '@playwright/test'

export default class CarsController extends BaseController {
	constructor(request) {
		super(request);
		this.API_CARS_MODELS = '/cars/models';
		this.API_CARS = '/cars';
	}

	async getAllAvaibleCars() {
		return test.step(`HTTP GET ${this.API_CARS_MODELS}`, async () => {
			return this.get(`${process.env.BASE_API_URL.concat(this.API_CARS_MODELS)}`);
		});
	}

	async createCar(car) {
		return test.step(`HTTP POST ${this.API_CARS}`, async () => {
			return this.post(`${process.env.BASE_API_URL.concat(this.API_CARS)}`, car);
		});
	}
}
