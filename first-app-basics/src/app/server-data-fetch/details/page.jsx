// Function to fetch user details
async function getuserdetails(currentuserid) {
  try {
      const getuserapi = await fetch(`https://dummyjson.com/users/${currentuserid}`);
      const result = await getuserapi.json();
      return result;
  } catch (error) {
      throw new Error(error);
  }
}


// Page component rendering the user details
async function UserDetailsPage({ params ,result }) {
  const userdetails = await getuserdetails(params);
  console.log("userdetails-->",userdetails)
  return (
      <div className="flex flex-col min-h-screen items-center bg-purple-400">
          <h1 className="text-white font-semibold text-3xl">
              Welcome "{userdetails?.firstName}" to the Server Side Data Fetching - User Details Page
          </h1>
      </div>
  );
}

export default UserDetailsPage;
