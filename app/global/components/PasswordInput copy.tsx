"use client";
import { useState } from "react";

type propsType = { getPasswordValue: (value: string) => void, inputClass:string }
const PasswordInput = ({ getPasswordValue,inputClass }: propsType) => {
    const [ismasked, setIsMasked] = useState<boolean>(true);
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center  pl-[8px] pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="form-input-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm6-5q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2Z" /></svg>
            </div>
            <input onChange={(e) => getPasswordValue(e.target.value)}
                type={(ismasked) ? 'password' : 'text'} className={inputClass} />
            <div className="absolute inset-y-0 right-0 flex items-center  pr-[8px] ">
                {
                    (ismasked ?
                        <svg onClick={() => setIsMasked(false)} xmlns="http://www.w3.org/2000/svg" className="form-input-icon cursor-pointer" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z" /></svg>
                        : <svg onClick={() => setIsMasked(true)} xmlns="http://www.w3.org/2000/svg" className="form-input-icon cursor-pointer" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z" /></svg>
                    )
                }
            </div>
        </div>
    );
}

export default PasswordInput;