import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {getPeople} from "./connections-service";


describe("connections service", () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    describe("when API call is successful", () => {
        it("should return people list", async () => {
            // given
            const response = {people: [{name: "Alan", role: 'Software Engineer', interests: 'football'}, {name: "Gagan", role: 'Designer', interests: 'Books'}] };
            mock.onGet(`http://localhost:8080/person`).reply(200, response);

            // when
            const result = await getPeople();

            // then
            // expect(mock.history.get[0].url).toEqual(`http://localhost:8080/person`);
            expect(result).toEqual(response.people);

        });
    });

    //TODO: error case
});