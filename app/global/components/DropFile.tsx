import { AxiosError } from "axios"
import { toast } from "react-toastify"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import AppSpinner from "./AppSpinner"
import useApiRequest from "../utils/apiRequest"
import { useAppDispatch, useAppSelector } from "../state/hooks"
import { selectAccessToken } from "../state/features/auth/authSlice"
import { BASE_URL } from "../utils/constants"
import { showToastMessage } from "../state/features/generalSlice"

type DropFileProps = {
    StorageFolder: string,
    SubText: string,
    currentUrl?: string | undefined,
    getFileUrl: (fileUrl: string) => void
}


export interface DropFileFunctions {
    removeFile: () => void;
}

const DropFile = forwardRef<DropFileFunctions, DropFileProps>(
    ({ StorageFolder, SubText, currentUrl, getFileUrl }: DropFileProps, ref) => {
        const apiRequest = useApiRequest()
        const dispatch = useAppDispatch()
        const accessToken = useAppSelector(selectAccessToken)
        const [imageUrl, setImageUrl] = useState("");
        const [isUploading, setIsUploading] = useState(false)
        const [imageRemoved, setImageRemoved] = useState(false)
        useEffect(() => {
            if (!imageRemoved) {
                if (currentUrl !== undefined && currentUrl !== "" && currentUrl !== null) {
                    setImageUrl("https://storage.googleapis.com/" + currentUrl);
                    getFileUrl(currentUrl);
                }
            }
        }, [])

        useImperativeHandle(ref, () => ({
            removeFile
        }));

        const removeFile = () => {
            setImageUrl("")
            setImageRemoved(true)
        }
        const getFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            const file = files?.[0]
            const formData = new FormData();
            if (file !== undefined) {
                formData.append('file', file);
                if (StorageFolder) {
                    formData.append("folder", StorageFolder);
                } else {
                    formData.append("folder", "uploads");
                }
                setIsUploading(true)
                await apiRequest({
                    method: 'post',
                    url: BASE_URL + "/api/files/upload",
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${accessToken}`,
                    },
                    data: formData
                }).then((response) => {
                    setImageUrl("https://storage.googleapis.com/" + response.data)
                    getFileUrl(response.data);
                    setIsUploading(false)
                    setImageRemoved(false)
                }).catch((error) => {
                    const errorResponse = error as AxiosError;
                    if (errorResponse.response) {
                        const data = errorResponse.response.data as { message: string, status: string };
                        dispatch(showToastMessage({
                            message: data.message,
                            type: "error",
                            position: toast.POSITION.TOP_RIGHT
                        }));

                    } else {
                        dispatch(showToastMessage({
                            message: "Something went wrong",
                            type: "error",
                            position: toast.POSITION.TOP_RIGHT
                        }));
                    }
                    setIsUploading(false)

                });

            }

        }
        return (
            <>
                <div className="w-full relative">

                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">

                        {
                            (imageUrl === "") ?
                                <div>
                                    {
                                        (!isUploading) ?
                                            <div>
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{SubText}</p>
                                                </div>
                                                <input onChange={(e) => getFile(e)} id="dropzone-file" type="file" className="hidden" />
                                            </div> :
                                            <div>
                                                <AppSpinner TopClass="w-full flex justify-center" />
                                                <span>Please wait....</span>
                                            </div>
                                    }
                                </div> :
                                <div
                                    style={{
                                        backgroundImage: `url(${imageUrl ? `${imageUrl}` : ""})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        height: "100%", // Adjust the height as needed
                                        width: "100%", // Adjust the width as needed
                                        borderRadius: "8px", // Adjust the border radius as needed
                                        // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adjust the box shadow as needed
                                    }}
                                >

                                </div>
                        }


                    </label>
                    <div className="mt-2 absolute top-0 right-1">
                        {
                            (imageUrl !== "") &&
                            <button onClick={() => removeFile()} type="button" className="danger-btn-1 text-xs px-2">Remove</button>
                        }
                    </div>
                </div>

            </>
        )
    }

)
DropFile.displayName ="DropFile"
export default DropFile