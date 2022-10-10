import MockAdapter from "axios-mock-adapter";

import {axiosInstance, getPeople, getPeopleWithInterest} from "./connections-service";


describe("connections service", () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axiosInstance);
    });

    afterEach(() => {
        mock.reset();
    });

    describe("when API call is successful", () => {
        it("should return people list", async () => {
            // given
            const people = [
                {name: "Alan", role: 'Software Engineer', interests: 'football'},
                {name: "Gagan", role: 'Designer', interests: 'Books'}
            ];
            mock.onGet(`http://localhost:8080/people/`).reply(200, {people});

            // when
            const result = await getPeople();

            // then
            expect(result).toEqual(people);

        });

        it("passes filters to the API as query parameters", async () => {
            // given
            let url;
            mock.onGet(/http:\/\/localhost:8080\/people\/interests/).reply((config) => {
                url = config.url;
                return [200, { people: [] }];
            });

            // when
            await getPeopleWithInterest("golf");

            // then
            const [_, query] = url.split("?", 2);
            expect(query).toContain("interests=golf");
        });
    });

    //TODO: error case
});