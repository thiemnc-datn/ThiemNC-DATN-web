import axios from "axios";
import { API_PATH, ROUTE_SUBJECTs } from "../Const";

export const getSubjects = () => {
  return new Promise((resolve, reject) => {
    const url = `${API_PATH}/${ROUTE_SUBJECTs}`;
    axios
      .get(url)
      .then((result) => resolve(result.data))
      .catch((error) => reject(error));
  });
};
