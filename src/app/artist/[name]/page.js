
 "use client"
import { artists } from "@/app/api/data";
import ArtistDetail from "@/components/Common/ArtistDetail";
import { useParams } from "next/navigation";

export default function Page() {
  const { name} = useParams();
//   alert(name)
  
const nameFromSlug = decodeURIComponent(name)
  .split("-")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

//   alert(nameFromSlug)
const artist = artists.find((a) => a.name === nameFromSlug);


  if (!artist) {
    return <p className="text-center text-red-500 mt-10">Artist not found</p>;
  }

  return <ArtistDetail artist={artist} />;
}