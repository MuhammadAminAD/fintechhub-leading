import axios from "axios"

export const RequestCallServices = async (data: Record<string, unknown>) => {
      try {
            const response = await axios.post(
                  "https://form-api.fintechhub.uz/api/register/",
                  data
            )
            console.log(response.data)

            if (response.status < 300) {
                  return true
            }
            else {
                  return false
            }
      } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                  console.error("Xato:", error.response?.data || error.message)
            } else if (error instanceof Error) {
                  console.error("Xato:", error.message)
            } else {
                  console.error("Xato:", error)
            }
            return false
      }
}