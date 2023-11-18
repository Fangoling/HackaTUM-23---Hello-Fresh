import Image from "next/image";

const Placeholder = () => {
  return (
    <div className="h-[40vh] flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-semibold">Ende erreicht!</h1>
      <p className="text-gray-700 text-center">Kaum zu glauben, aber wir haben keine weiteren Ergebnisse mehr</p>
      <Image src="/HFA.png" width={200} height={100}/>
    </div>
  )
}

export default Placeholder;
