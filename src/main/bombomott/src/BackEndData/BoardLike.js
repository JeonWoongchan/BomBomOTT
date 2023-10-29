import axios from "axios";

export function boardlike(id) {
  return axios
    .post(`http://localhost:8080/board/like/${id}`, {
      id: id,
    })
    .then((response) => {
      if (response.status === 200) {
        console.log(">>>> data : " + response.data);
        return response.data; // 이 부분에서 서버에서 반환된 데이터를 사용
      } else {
        console.log("요청이 실패했습니다.");
        throw new Error("요청이 실패했습니다.");
      }
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}