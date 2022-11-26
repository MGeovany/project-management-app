import axiosClient from "./axiosClient";

const participantsApi = {
  getAll: () => axiosClient.get("boards/users"),
  delete: (id) => axiosClient.delete(`boards/${id}`),
  update: (id, params) => axiosClient.put(`boards/${id}`, params),
};

export default participantsApi;
