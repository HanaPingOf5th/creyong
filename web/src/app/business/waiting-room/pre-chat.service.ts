import { APIResponseType, instance } from "@/app/utils/http";

// ToDo: 유저네임 전역으로 관리
export async function sendPrechat(content: string): Promise<APIResponseType>{
  const userName: string = "윤개똥이";

  const response = await instance.post(`/api/waiting-room/prechat`, {userName:userName, content:content})

  console.log(response);
  return {
    isSuccess: true,
    isFailure: false,
    data: response.data
  }
}

export async function getPrechat(): Promise<APIResponseType> {
  const userName: string = "윤개똥이";

  const response = await instance.get(`/api/waiting-room/prechat/${userName}`)
  
  console.log(response);
  return {
    isSuccess: true,
    isFailure: false,
    data: response.data
  }
    
}