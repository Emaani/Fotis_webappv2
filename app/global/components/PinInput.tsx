
type propTyps={
  className:string,
  getValue: (otp:string)=>void
}
const  PinInput =({getValue,className}:propTyps)=>{

  const focusNext = (a: string, b: string) => {
      const ina = document.getElementById(a) as HTMLInputElement;
      if (ina.value.length === 1) {
        const el = document.getElementById(b) as HTMLInputElement;
        if (el) {
          el.focus();
        }
      }
      let otp = "";
      for (let index = 1; index <= 6; index++) {
      const element = document.getElementById(`auth-c-${index}`)  as HTMLInputElement
        const otpInput = element.value ?? "";
        otp = otp + "" + otpInput;
      }
      getValue(otp);
    };

    const lastInput = () => {
      let otp = "";
      for (let index = 1; index <= 6; index++) {
        const element = document.getElementById(`auth-c-${index}`)  as HTMLInputElement
        const otpInput = element.value ?? "";
        otp = otp + "" + otpInput;
      }
      getValue(otp);
    };
  

    
  return (
      <div className=" grid grid-cols-7 gap-2">
          <input onKeyUp={()=>focusNext('auth-c-1', 'auth-c-2')}    id="auth-c-1" className={className} type="text"  maxLength={1}/>
          <input onKeyUp={()=>focusNext('auth-c-2', 'auth-c-3')}    id="auth-c-2"  className={className}  type="text"  maxLength={1}/>
          <input onKeyUp={()=>focusNext('auth-c-3', 'auth-c-4')}    id="auth-c-3"  className={className}  type="text"  maxLength={1}/>
          <div className=""></div>
          <input onKeyUp={()=>focusNext('auth-c-4', 'auth-c-5')}    id="auth-c-4"  className={className}  type="text"  maxLength={1}/>
          <input onKeyUp={()=>focusNext('auth-c-5', 'auth-c-6')}    id="auth-c-5"  className={className}  type="text"  maxLength={1}/>
          <input onKeyUp={()=>lastInput()}   id="auth-c-6"  className={className}  type="text"  maxLength={1}/>
      </div>
  );
}

export default PinInput;