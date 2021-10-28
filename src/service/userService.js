import { api } from "./api";

export const loginUser = async (params) => {
	return await api.post("/users", params);
};
