async function userDetails(currentUserId) {
  try {
    const userDetailAPI = await fetch(
      `https://dummyjson.com/users/${currentUserId}`
    );
    const result = await userDetailAPI.json();

    console.log("Current User Details:", result);

    return result;
  } catch (error) {
    throw new Error(error);
  }
}

// Page component rendering the user details
async function UserDetailsPage({ params }) {
  console.log("user details page:-->", params);
  const currnetUserDetails = await userDetails(params.details);
  return (
    <div className="flex flex-col min-h-screen items-center  bg-blue-400">
      <h1 className="text-white font-semibold text-3xl text-black underline mt-5">Details</h1>
      <div className="flex flex-col gap-5 text-2xl text-red-700 font-semibold">
    <img src={currnetUserDetails && currnetUserDetails.image} className="w-[60px] h-[60px] rounded-full"/>
      <p>First Name :{currnetUserDetails && currnetUserDetails.firstName}</p>
        <p>Last Name :{currnetUserDetails && currnetUserDetails.lastName}</p>
        <p>Age :{currnetUserDetails && currnetUserDetails.age}</p>
        <p>Email id :{currnetUserDetails && currnetUserDetails.email}</p>
        <p>Phone:{currnetUserDetails && currnetUserDetails.phone}</p>
      </div>
    </div>
  );
}

export default UserDetailsPage;
