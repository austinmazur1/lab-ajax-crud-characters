

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  getFullList = async () => {
    // const response = await this.api.get('"/characters"')
     const results = await this.api.get("/characters");
     return results;
  };

   getOneRegister = async (characterId) => {
    const results = await this.api.get(`/characters/${characterId}`);
    return results
  };

  createOneRegister(characterInfo) {
    return this.api.post("/characters", characterInfo);
  }

  updateOneRegister(characterId, characterInfo) {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister(characterId) {
    return this.api.delete(`characters/${characterId}`);
  }
}


