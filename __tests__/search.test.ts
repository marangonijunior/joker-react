import { mocked } from 'ts-jest/utils';
import { getJoke, getJokeRandom } from '../src/service/search';

jest.mock("../src/service/search");

describe('Search fucntion', () => {
     
    it('server return joke with find', async () => {

      mocked(getJoke).mockImplementation(() => 
          Promise.resolve( {
            categories: [],
            id: 0,
            joke: "",
          } )
      );
      const joke:any = await getJoke('','');
      expect(joke.joke).toEqual("");

    });

    it('server return random', async () => {

      mocked(getJokeRandom).mockImplementation(() => 
        Promise.resolve( {
          categories: [],
          id: 0,
          joke: "",
        } )      
      );
      const joke:any = await getJokeRandom();
      expect(joke.joke).toEqual("");
    
    });    

});



