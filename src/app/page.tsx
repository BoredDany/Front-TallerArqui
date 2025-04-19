import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

function page(){
  return(
    <div className="flex justify-between">
      <h1 
        className="text-3xl font-bold">
        Magic Store
      </h1>

      <Link 
        href="/products/new"
        className={buttonVariants()}>
        Create New Product
      </Link>
    </div>
  )
}
export default page