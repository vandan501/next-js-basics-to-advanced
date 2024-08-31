'use client';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function FetchDetails() {
  const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher);

  if (error) {
    return (
      <h3 className="text-center w-full text-red-600 font-bold text-4xl m-12">
        Something went wrong... try again later
      </h3>
    );
  }

  if (isLoading) {
    return (
      <h3 className="text-center w-full font-bold text-4xl m-12">
        Loading Users! Please Wait...
      </h3>
    );
  }

  return (
    <ul className="w-[60%] h-auto bg-white rounded-md overflow-auto flex flex-wrap scrollwidth-thin align-center text-center">
      {data?.users?.length > 0 ? (
        data.users.map((user) => (
          <Link key={user.id} href={`/client-data-fetch/${user.id}`}>
            <li className="text-1xl m-5 text-red-500 grow w-[150px]">
              {user.firstName} {user.lastName}
            </li>
          </Link>
        ))
      ) : (
        <li className="text-1xl m-5 text-red-500">No Users Found</li>
      )}
    </ul>
  );
}

export default FetchDetails;
