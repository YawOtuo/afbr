// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { AddDog } from "../api/dogs";

// const queryClient = useQueryClient();

// const addDogMutation = useMutation(
//     async (dogData) => {
//       try {
//         const response = await AddDog(dogData);
//         console.log(response);
//         return response;
//       } catch (error) {
//         console.error(error);
//         throw error;
//       }
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries("dogs");
//       },
//     }
//   );
  