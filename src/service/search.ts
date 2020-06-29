import Service from './service';

export const getJoke = (name:string, surname:string) => {

    return Service.search(name,surname).then(
        (item:any) => {
            return item
        }
    ).catch( (error) => {
      return error;
    });

};

export const getJokeRandom = () => {

  return Service.searchRandom().then(
      (item:any) => {
          return item
      }
  ).catch( (error) => {
    return error;
  });

};

const Search = {
  getJoke,
  getJokeRandom
}

export default Search;