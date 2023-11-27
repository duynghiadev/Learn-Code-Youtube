import Image from 'next/image';
import Link from 'next/link';

export default function CustomNotFound() {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div>
            <h1 className="font-bold text-[64px] text-gray-800 dark:text-white">
              404
            </h1>
          </div>
          <div className="">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl dark:text-white">
                Looks like you have found the doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800 dark:text-white">
                Sorry about that! Please visit our homepage to get where you
                need to go.
              </p>
              <Link
                href="/"
                className="block sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image src="/Group.png" alt="" width={460} height={350} />
      </div>
    </div>
  );
}
