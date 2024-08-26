import Link from "next/link";

async function fetchdata() {
  try {
    const apiresponse = await fetch("https://dummyjson.com/users");
    const result = await apiresponse.json();
    return result.users;
  } catch (error) {
    throw new Error(error);
  }
}

async function serversidedata() {
  const listOfUsers = await fetchdata();
  return (
    <div className="flex flex-col min-h-screen items-center bg-purple-400">
      <h1 className="text-white font-semibold text-3xl">
        Welcome in server side Data Fetching--User List Page
      </h1>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        <tr>
          {listOfUsers &&
            listOfUsers.map((el) => {
              return (
                <tr key={el.id}>
                 <Link href={`/server-data-fetch/details/${el.id}`}> <td>{el.firstName}</td></Link>
                  <td>{el.lastName}</td>
                </tr>
              );
            })}
        </tr>
      </table>
    </div>
  );
}

export default serversidedata;
