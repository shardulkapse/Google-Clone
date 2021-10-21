import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex max-w-lg justify-between my-10">
      {startIndex >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`} >
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline text-gray-400 hover:text-blue-500">
            <ChevronLeftIcon className="h-5 w-5 rounded-full "/>
            <p >Previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline text-gray-400 hover:text-blue-500">
            <ChevronRightIcon className="h-5 w-5 rounded-full "/>
            <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
