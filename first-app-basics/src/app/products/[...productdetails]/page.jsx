const myprofile = ({ searchParams }) => {
  // console.log("URL data from product details page:",data.productdetails.map((e)=>console.log(e)))
  console.log("URL data from product details page:", searchParams);
  return (
    <div className="flex min-h-screen w-full border border-black justify-center items-center">
      <h1 className="text-5xl">products details page</h1>
    </div>
  );
};

export default myprofile;
