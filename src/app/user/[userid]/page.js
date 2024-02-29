import { getAllUsersDetails } from "../../../utls/featureApi";
export default async function userID({ params }) {
  console.log("params", params);
  const singleuser = await getAllUsersDetails(params.userid);
  console.log("singleuser", singleuser);

  return (
    <ul
      role="list"
      className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
    >
      {[singleuser].length > 0 &&
        [singleuser].map((person) => (
          <li key={person.id}>
            <div className="flex items-center gap-x-6">
              <img
                className="h-16 w-16 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {person.username}
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {person.company.bs}
                </p>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}
