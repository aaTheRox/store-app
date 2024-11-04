import Link from 'next/link'
 
export default async function NotFound() {
  return (
    <div className='max-w-7xl mx-auto p-2 text-xl text-center h-screen flex items-center justify-center flex-col space-y-2'>
      <h2 className='text-4xl font-bold '>Página no encontrada</h2>
      <p>Vaya... No se ha podido encontrar esta página</p>
      
      <Link className='hover:bg-primary mt-4 py-2 px-10 shadow bg-primary/90 text-white' href="/">Volver al inicio</Link>
    </div>
  )
}