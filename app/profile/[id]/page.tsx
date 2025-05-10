/* eslint-disable tailwindcss/migration-from-tailwind-2 */
export default function UserProfile({ params }: any) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 py-2">
        <div className="w-full max-w-md rounded-2xl bg-gray-900 bg-opacity-80 p-8 shadow-xl backdrop-blur-xl">
          <h1 className="text-gradient bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-center text-3xl font-bold text-transparent">
            User Profile
          </h1>
          <hr className="my-4 border-gray-600" />
          <p className="text-center text-4xl">
            Profile Page of{" "}
            <span className="rounded bg-orange-500 p-2 text-black">
              {params.id}
            </span>
          </p>
        </div>
      </div>
    );
}
