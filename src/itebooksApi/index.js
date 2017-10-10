import ajax from './service';

export function SearchBookApi(searchTearm){
  let url = `http://it-ebooks-api.info/v1/search/${searchTearm}`;
  return ajax(url, 'GET');
}
