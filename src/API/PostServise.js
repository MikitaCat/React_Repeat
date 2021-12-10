import axios from 'axios';

export class PostServise {
  static async getAll() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
