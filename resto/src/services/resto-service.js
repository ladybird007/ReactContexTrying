export default class RestoService {
  _apiBase = 'http://localhost:3000';

  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could net fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  }

  async getMenuItems () {
    return await this.getResourse(`/menu/`);
  }
}