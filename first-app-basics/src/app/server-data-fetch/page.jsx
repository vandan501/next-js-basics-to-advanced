import Link from "next/link";

async function fetchListOfUsers() {
  try {
    const apiresponse = await fetch("https://dummyjson.com/users");
    const result = await apiresponse.json();
    console.log("serverSideUserList---->", result?.users?.length);
    return result.users;
  } catch (error) {
    throw new Error(error);
  }
}

async function serversidedata() {
  const listOfUsers = await fetchListOfUsers();
  return (
    <div className="flex flex-col h-[100vh] overflow-hidden items-center bg-purple-400">
      <h1 className="text-white font-semibold text-3xl">
        Welcome in server side Data Fetching--User List Page
      </h1>
          <ul className="w-[60%] h-auto bg-white rounded-md overflow-auto flex  flex-wrap scrollwidth-thin align-center text-center">
          {
            listOfUsers && listOfUsers.length > 0 ?
            listOfUsers.map(user=>
              <Link href={`/server-data-fetch/${user.id}`}>
              <li key={user.id} className="text-1xl m-5 text-red-500 grow w-[150px]">
              {user.firstName} {user.lastName}</li></Link>)
              :null
            }
          </ul>
     </div>
  );
}

export default serversidedata;
