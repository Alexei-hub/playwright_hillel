import { test, expect } from '@playwright/test'
import CarsController from '../../src/api.controllers/CarsController';

test.describe('HomeWork_22', () => {
    
    test('creating all avaible mark and models', async ({ request }) => {
        const carsController = new CarsController(request);
        const allAvaibleCars = await carsController.getAllAvaibleCars();
        const allBrandsAndModels = allAvaibleCars.json.data.map(({ id, carBrandId }) => ({
            carBrandId: carBrandId,
            carModelId: id,
            mileage: 222
        }));
        for (const car of allBrandsAndModels) {
            await test.step(`Car model ${car.carModelId}, brand ${car.carBrandId} could be created`, async () => {
                const createResp = await carsController.createCar(car);
                console.log(createResp)
                expect(createResp.status).toBe(201);
                expect(createResp.json.data).toEqual(expect.objectContaining(car));
                console.log(car)
            });
        }
    });

    test('creating car with incorrect mark', async ({ request }) => {
        const carsController = new CarsController(request);
        const carReqWithIncorectBrandId = {
			"carBrandId": 100,
			"carModelId": 1,
			"mileage": 122
		};
        const createResp = await carsController.createCar(carReqWithIncorectBrandId);
        expect(createResp.status).toBe(404);
    });

    test('creating car with incorrect model', async ({ request }) => {
        const carsController = new CarsController(request);
        const carReqWithIncorectModelId = {
			"carBrandId": 1,
			"carModelId": 100,
			"mileage": 122
		};
        const createResp = await carsController.createCar(carReqWithIncorectModelId);
        expect(createResp.status).toBe(404);
    });

    test('creating car with negative mileage', async ({ request }) => {
        const carsController = new CarsController(request);
        const carReqWithNegativeMillage = {
			"carBrandId": 1,
			"carModelId": 1,
			"mileage": -1
		};
        const createResp = await carsController.createCar(carReqWithNegativeMillage);
        expect(createResp.status).toBe(400);
    });

    test('creating car with greater than maximum value millage', async ({ request }) => {
        const carsController = new CarsController(request);
        const carReqWithMoreThanMaxiimumValueMillage = {
			"carBrandId": 1,
			"carModelId": 1,
			"mileage": 10000000
		};
        const createResp = await carsController.createCar(carReqWithMoreThanMaxiimumValueMillage);
        expect(createResp.status).toBe(400);
    });

    test('creating car without millage value', async ({ request }) => {
        const carsController = new CarsController(request);
        const carReqWithOutMillageValue = {
			"carBrandId": 1,
			"carModelId": 1,
		};
        const createResp = await carsController.createCar(carReqWithOutMillageValue);
        expect(createResp.status).toBe(400);
    });
});