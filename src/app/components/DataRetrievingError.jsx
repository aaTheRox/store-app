
import { buttonVariants } from '../components/ui/button'
import { RefreshCwIcon, Ban } from 'lucide-react'
import { useRouter } from "next/navigation";

const DataRetrievingError = () => {

    const router = useRouter();

    return (
        <div className="col-span-full bg-slate-100/50 p-5">

            <div className='flex gap-2'>
            <Ban className='text-gray-500' />
            <p className='text-l font-mono'>Ha habido un error obteniendo los datos</p>
            </div>
            <button
              onClick={() => router.refresh()}
              className={buttonVariants({ size: "sm", variant: "linksecondary" })}
            >
              <RefreshCwIcon /> Recargar
            </button>
          </div>
    )
}

export default DataRetrievingError