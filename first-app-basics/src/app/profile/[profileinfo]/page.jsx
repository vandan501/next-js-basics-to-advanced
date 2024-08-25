import { redirect } from "next/navigation";

const profileinfo = ()=>{
    const userValidation=null;
        if(userValidation === null || "") redirect('/cart?search=vandan&age=22')       
    return(
         <div className="flex min-h-screen w-full border border-black justify-center items-center">
        <h1 className="text-5xl">This is profile info  page</h1>
        </div>
    )
}

export default profileinfo