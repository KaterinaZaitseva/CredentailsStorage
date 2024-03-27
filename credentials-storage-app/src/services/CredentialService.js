import axios from 'axios';

const API_URL = 'https://localhost:7230/api/CredentialAPI';

const CredentialService = {
  getCredentials: async () => {
    const response = await axios.get(API_URL)
    return response;
  },

  deleteCrebential: async (item) => {
    const response = await axios.delete(`${API_URL}/${item.id}`)
    return response;
  },

};

export default CredentialService;