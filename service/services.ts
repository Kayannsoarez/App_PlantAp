import { Result } from "../types/Result";
import api from "./api";

export const getPlantData = async () : 
Promise<Result<Plant.Entity[]>> => {
    try {
      const response = await api.get<
        ApiTypes.ResponseObject<Plant.Entity[]>
      >(`?variable=temp&variable=humi&variable=feel&variable=lumi&query=last_item`, 
      { 
        headers: { 
            'device-token': '634c9b71-674c-4998-a191-b59d61300ff2',
      }});

      return Result.success<Plant.Entity[]>(
        response.data.result,
      );

    } catch (err: any) {
      console.log(err.message);
      return Result.failure('Erro ao requisitar dados da planta');
    }
};