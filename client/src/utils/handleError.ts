import { toast } from "sonner";

export const handleError = (error: any) => {
  // console.log(error);
  
  console.log(error.data.message);
  toast("Error: " + error.data.message);
};