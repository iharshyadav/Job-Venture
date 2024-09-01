"use server"

import axios from "axios";
import { routes } from "../libs/api";

export default async function login(preState: any, formData: FormData) {
  const credentials = {
    id: formData.get("ID") as string,
    password: formData.get("password") as string,
  };

  try {
    const { data, status } = await axios.post(routes.login, credentials);

    if (status === 200) {
      return { success: true, data };
    } else {
      return {
        success: false,
        error: {
          message: data.message || "Login failed",
          description: data.error || "An unknown error occurred.",
          status,
        },
      };
    }
  } catch (error) {
    let errorMessage = "An error occurred during login";
    let errorDescription = error instanceof Error ? error.message : String(error);
    let errorStatus = 500;

    if (axios.isAxiosError(error) && error.response) {
      errorMessage = error.response.data.message || errorMessage;
      errorDescription = error.response.data.error || errorDescription;
      errorStatus = error.response.status;
    }

    return {
      success: false,
      error: {
        message: errorMessage,
        description: errorDescription,
        status: errorStatus,
      },
    };
  }
}
