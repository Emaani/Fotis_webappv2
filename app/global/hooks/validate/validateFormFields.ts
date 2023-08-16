import { toast } from "react-toastify";
import { showToastMessage } from "../../state/features/generalSlice";
import { useAppDispatch } from "../../state/hooks";
import useApiRequest from "../../utils/apiRequest";
import { isValueEmpty } from "../../utils/commons";

export interface IFormData {
    [key: string]: any;
}
const useValidateFormFields = () => {
    const dispatch = useAppDispatch()
    const isFormFieldEmpty = <T extends IFormData>(field: keyof T, formData: T, customName:any =null) => {
        if (isValueEmpty(formData[field])) {
            const label = customName??field.toString()
            dispatch(
                showToastMessage({
                    message: `Field ${label} is required`,
                    type: "error",
                    position: toast.POSITION.TOP_RIGHT,
                })
            );
            return true; 
        }
        return false; 
    };
    return {
        isFormFieldEmpty
    }
}

export default useValidateFormFields