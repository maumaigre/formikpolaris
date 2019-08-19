import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().required("Es requerido"),
    age: yup.number().required("Es requerido").min(10, "Minimo 10").max(30, "maximo 30"),
    email: yup.string().email("Ingresa con un formato valido de correo").required("El correo es requerido")
});