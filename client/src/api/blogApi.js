import axiosClient from "./axiosClient"

const blogApi = {
  create: (params) => axiosClient.post("blog", params),
  getAll: () => axiosClient.get("blog"),
  delete: (id) => axiosClient.delete(`blog/${id}`),
  update: (id, params) => axiosClient.put(`blog/${id}`, params)
}

export default blogApi
