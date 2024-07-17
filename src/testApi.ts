
import { Http } from "../lib/main";

export class FreeShippingApi {
    public static async getAppFreeShippingList(): Promise<string> {
      const response = await Http.get<string>({
        url: '/',
      });

      console.log(response)
      return response.data;
    }

  }